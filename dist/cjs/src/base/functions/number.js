'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// ------------------------------------------------------------------------
//
//  NB: initially, I used objects for options passing:
//
//          decimalToPrecision ('123.456', { digits: 2, round: true, afterPoint: true })
//
//  ...but it turns out it's hard to port that across different languages and it is also
//     probably has a performance penalty -- while it's a performance critical code! So
//     I switched to using named constants instead, as it is actually more readable and
//     succinct, and surely doesn't come with any inherent performance downside:
//
//          decimalToPrecision ('123.456', ROUND, 2, DECIMAL_PLACES)
const TRUNCATE = 0; // rounding mode
const ROUND = 1;
const ROUND_UP = 2;
const ROUND_DOWN = 3;
const DECIMAL_PLACES = 2; // digits counting mode
const SIGNIFICANT_DIGITS = 3;
const TICK_SIZE = 4;
const NO_PADDING = 5; // zero-padding mode
const PAD_WITH_ZERO = 6;
const precisionConstants = {
    ROUND,
    TRUNCATE,
    ROUND_UP,
    ROUND_DOWN,
    DECIMAL_PLACES,
    SIGNIFICANT_DIGITS,
    TICK_SIZE,
    NO_PADDING,
    PAD_WITH_ZERO,
};
/*  ------------------------------------------------------------------------ */
// See https://stackoverflow.com/questions/1685680/how-to-avoid-scientific-notation-for-large-numbers-in-javascript for discussion
function numberToString(x) {
    if (x === undefined)
        return undefined;
    if (typeof x !== 'number')
        return x.toString();
    const s = x.toString();
    if (Math.abs(x) < 1.0) {
        const n_e = s.split('e-');
        const n = n_e[0].replace('.', '');
        const e = parseInt(n_e[1]);
        const neg = (s[0] === '-');
        if (e) {
            x = (neg ? '-' : '') + '0.' + (new Array(e)).join('0') + n.substring(neg);
            return x;
        }
    }
    else {
        const parts = s.split('e');
        if (parts[1]) {
            let e = parseInt(parts[1]);
            const m = parts[0].split('.');
            let part = '';
            if (m[1]) {
                e -= m[1].length;
                part = m[1];
            }
            return m[0] + part + (new Array(e + 1)).join('0');
        }
    }
    return s;
}
//-----------------------------------------------------------------------------
// expects non-scientific notation
const truncate_regExpCache = [];
const truncate_to_string = (num, precision = 0) => {
    num = numberToString(num);
    if (precision > 0) {
        const re = truncate_regExpCache[precision] || (truncate_regExpCache[precision] = new RegExp('([-]*\\d+\\.\\d{' + precision + '})(\\d)'));
        const [, result] = num.toString().match(re) || [null, num];
        return result.toString();
    }
    return parseInt(num).toString();
};
const truncate = (num, precision = 0) => parseFloat(truncate_to_string(num, precision));
function precisionFromString(str) {
    // support string formats like '1e-4'
    if (str.indexOf('e') > -1) {
        const numStr = str.replace(/\de/, '');
        return parseInt(numStr) * -1;
    }
    // support integer formats (without dot) like '1', '10' etc [Note: bug in decimalToPrecision, so this should not be used atm]
    // if (str.indexOf ('.') === -1) {
    //     return str.length * -1
    // }
    // default strings like '0.0001'
    const split = str.replace(/0+$/g, '').split('.');
    return (split.length > 1) ? (split[1].length) : 0;
}
/*  ------------------------------------------------------------------------ */
const decimalToPrecision = (x, roundingMode, numPrecisionDigits, countingMode = DECIMAL_PLACES, paddingMode = NO_PADDING) => {
    return _decimalToPrecision(x, roundingMode, numPrecisionDigits, countingMode, paddingMode);
};
const _decimalToPrecision = (x, roundingMode, numPrecisionDigits, countingMode = DECIMAL_PLACES, paddingMode = NO_PADDING) => {
    if (countingMode === TICK_SIZE) {
        if (typeof numPrecisionDigits === 'string') {
            numPrecisionDigits = parseFloat(numPrecisionDigits);
        }
        if (numPrecisionDigits <= 0) {
            throw new Error('TICK_SIZE cant be used with negative or zero numPrecisionDigits');
        }
    }
    if (numPrecisionDigits < 0) {
        const toNearest = Math.pow(10, -numPrecisionDigits);
        if (roundingMode === ROUND) {
            return (toNearest * _decimalToPrecision(x / toNearest, roundingMode, 0, countingMode, paddingMode)).toString();
        }
        if (roundingMode === TRUNCATE) {
            return (x - (x % toNearest)).toString();
        }
    }
    /*  handle tick size */
    if (countingMode === TICK_SIZE) {
        const precisionDigitsString = _decimalToPrecision(numPrecisionDigits, ROUND, 22, DECIMAL_PLACES, NO_PADDING);
        const newNumPrecisionDigits = precisionFromString(precisionDigitsString);
        let missing = x % numPrecisionDigits;
        // See: https://github.com/ccxt/ccxt/pull/6486
        missing = Number(_decimalToPrecision(missing, ROUND, 8, DECIMAL_PLACES, NO_PADDING));
        const fpError = _decimalToPrecision(missing / numPrecisionDigits, ROUND, Math.max(newNumPrecisionDigits, 8), DECIMAL_PLACES, NO_PADDING);
        if (precisionFromString(fpError) !== 0) {
            if (roundingMode === ROUND) {
                if (x > 0) {
                    if (missing >= numPrecisionDigits / 2) {
                        x = x - missing + numPrecisionDigits;
                    }
                    else {
                        x = x - missing;
                    }
                }
                else {
                    if (missing >= numPrecisionDigits / 2) {
                        x = Number(x) - missing;
                    }
                    else {
                        x = Number(x) - missing - numPrecisionDigits;
                    }
                }
            }
            else if (roundingMode === TRUNCATE) {
                x = x - missing;
            }
        }
        return _decimalToPrecision(x, ROUND, newNumPrecisionDigits, DECIMAL_PLACES, paddingMode);
    }
    /*  Convert to a string (if needed), skip leading minus sign (if any)   */
    const str = numberToString(x);
    const isNegative = str[0] === '-';
    const strStart = isNegative ? 1 : 0;
    const strEnd = str.length;
    /*  Find the dot position in the source buffer   */
    for (var strDot = 0; strDot < strEnd; strDot++) {
        if (str[strDot] === '.')
            break;
    }
    const hasDot = strDot < str.length;
    /*  Char code constants         */
    const MINUS = 45;
    const DOT = 46;
    const ZERO = 48;
    const ONE = (ZERO + 1);
    const FIVE = (ZERO + 5);
    const NINE = (ZERO + 9);
    /*  For -123.4567 the `chars` array will hold 01234567 (leading zero is reserved for rounding cases when 099 → 100)    */
    const chars = new Uint8Array((strEnd - strStart) + (hasDot ? 0 : 1));
    chars[0] = ZERO;
    /*  Validate & copy digits, determine certain locations in the resulting buffer  */
    let afterDot = chars.length;
    let digitsStart = -1; // significant digits
    let digitsEnd = -1;
    for (var i = 1, j = strStart; j < strEnd; j++, i++) {
        const c = str.charCodeAt(j);
        if (c === DOT) {
            afterDot = i--;
        }
        else if ((c < ZERO) || (c > NINE)) {
            throw new Error(`${str}: invalid number (contains an illegal character '${str[i - 1]}')`);
        }
        else {
            chars[i] = c;
            if ((c !== ZERO) && (digitsStart < 0))
                digitsStart = i;
        }
    }
    if (digitsStart < 0)
        digitsStart = 1;
    /*  Determine the range to cut  */
    let precisionStart = (countingMode === DECIMAL_PLACES) ? afterDot // 0.(0)001234567
        : digitsStart; // 0.00(1)234567
    let precisionEnd = precisionStart
        + numPrecisionDigits;
    /*  Reset the last significant digit index, as it will change during the rounding/truncation.   */
    digitsEnd = -1;
    // Perform rounding/truncation per digit, from digitsEnd to digitsStart, by using the following
    //  algorithm (rounding 999 → 1000, as an example):
    //
    //      step  =          i=3      i=2      i=1      i=0
    //
    //      chars =         0999     0999     0900     1000
    //      memo  =         ---0     --1-     -1--     0---
    let allZeros = true;
    let signNeeded = isNegative;
    for (let i = chars.length - 1, memo = 0; i >= 0; i--) {
        let c = chars[i];
        if (i !== 0) {
            c += memo;
            if (i >= (precisionStart + numPrecisionDigits)) {
                const ceil = (roundingMode === ROUND)
                    && (c >= FIVE)
                    && !((c === FIVE) && memo); // prevents rounding of 1.45 to 2
                c = ceil ? (NINE + 1) : ZERO;
            }
            if (c > NINE) {
                c = ZERO;
                memo = 1;
            }
            else
                memo = 0;
        }
        else if (memo)
            c = ONE; // leading extra digit (0900 → 1000)
        chars[i] = c;
        if (c !== ZERO) {
            allZeros = false;
            digitsStart = i;
            digitsEnd = (digitsEnd < 0) ? (i + 1) : digitsEnd;
        }
    }
    /*  Update the precision range, as `digitsStart` may have changed... & the need for a negative sign if it is only 0    */
    if (countingMode === SIGNIFICANT_DIGITS) {
        precisionStart = digitsStart;
        precisionEnd = precisionStart + numPrecisionDigits;
    }
    if (allZeros) {
        signNeeded = false;
    }
    /*  Determine the input character range     */
    const readStart = ((digitsStart >= afterDot) || allZeros) ? (afterDot - 1) : digitsStart; // 0.000(1)234  ----> (0).0001234
    const readEnd = (digitsEnd < afterDot) ? (afterDot) : digitsEnd; // 12(3)000     ----> 123000( )
    /*  Compute various sub-ranges       */
    const nSign = (signNeeded ? 1 : 0); // (-)123.456
    const nBeforeDot = (nSign + (afterDot - readStart)); // (-123).456
    const nAfterDot = Math.max(readEnd - afterDot, 0); // -123.(456)
    const actualLength = (readEnd - readStart); // -(123.456)
    const desiredLength = (paddingMode === NO_PADDING)
        ? (actualLength) // -(123.456)
        : (precisionEnd - readStart); // -(123.456    )
    const pad = Math.max(desiredLength - actualLength, 0); //  -123.456(    )
    const padStart = (nBeforeDot + 1 + nAfterDot); //  -123.456( )
    const padEnd = (padStart + pad); //  -123.456     ( )
    const isInteger = (nAfterDot + pad) === 0; //  -123
    /*  Fill the output buffer with characters    */
    const out = new Uint8Array(nBeforeDot + (isInteger ? 0 : 1) + nAfterDot + pad);
    // ------------------------------------------------------------------------------------------ // ---------------------
    if (signNeeded)
        out[0] = MINUS; // -     minus sign
    for (i = nSign, j = readStart; i < nBeforeDot; i++, j++)
        out[i] = chars[j]; // 123   before dot
    if (!isInteger)
        out[nBeforeDot] = DOT; // .     dot
    for (i = nBeforeDot + 1, j = afterDot; i < padStart; i++, j++)
        out[i] = chars[j]; // 456   after dot
    for (i = padStart; i < padEnd; i++)
        out[i] = ZERO; // 000   padding
    /*  Build a string from the output buffer     */
    return String.fromCharCode(...out);
};
function omitZero(stringNumber) {
    if (stringNumber === undefined || stringNumber === '') {
        return undefined;
    }
    if (parseFloat(stringNumber) === 0) {
        return undefined;
    }
    return stringNumber;
}
/*  ------------------------------------------------------------------------ */

exports.DECIMAL_PLACES = DECIMAL_PLACES;
exports.NO_PADDING = NO_PADDING;
exports.PAD_WITH_ZERO = PAD_WITH_ZERO;
exports.ROUND = ROUND;
exports.ROUND_DOWN = ROUND_DOWN;
exports.ROUND_UP = ROUND_UP;
exports.SIGNIFICANT_DIGITS = SIGNIFICANT_DIGITS;
exports.TICK_SIZE = TICK_SIZE;
exports.TRUNCATE = TRUNCATE;
exports.decimalToPrecision = decimalToPrecision;
exports.numberToString = numberToString;
exports.omitZero = omitZero;
exports.precisionConstants = precisionConstants;
exports.precisionFromString = precisionFromString;
exports.truncate = truncate;
exports.truncate_to_string = truncate_to_string;
