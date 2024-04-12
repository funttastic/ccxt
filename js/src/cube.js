// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code
// EDIT THE CORRESPONDENT .ts FILE INSTEAD

// ---------------------------------------------------------------------------
import Exchange from './abstract/cube.js';
import { 
// ArgumentsRequired,
// OperationFailed,
// OperationRejected,
InsufficientFunds, OrderNotFound, 
// InvalidOrder,
// DDoSProtection,
// InvalidNonce,
AuthenticationError, 
// RateLimitExceeded,
// PermissionDenied,
// NotSupported,
BadRequest,
// BadSymbol,
// AccountSuspended,
// OrderImmediatelyFillable,
// OnMaintenance,
// BadResponse,
// RequestTimeout,
// OrderNotFillable,
// MarginModeAlreadySet
 } from './base/errors.js';
import { TICK_SIZE } from './base/functions/number.js';
import { sha256 } from './static_dependencies/noble-hashes/sha256.js';
// ---------------------------------------------------------------------------
/**
 * @class cube
 * @augments Exchange
 */
export default class cube extends Exchange {
    describe() {
        // TODO verify all!!!
        return this.deepExtend(super.describe(), {
            'id': 'cube',
            'name': 'cube',
            'countries': [],
            'rateLimit': 100,
            'version': 'v0',
            'pro': false,
            'has': {
                'CORS': undefined,
                'spot': true,
                'margin': false,
                'swap': true,
                'future': false,
                'option': false,
                'addMargin': false,
                'cancelAllOrders': true,
                'cancelOrder': true,
                'cancelOrders': false,
                'closeAllPositions': false,
                'closePosition': false,
                'createDepositAddress': false,
                'createMarketOrder': false,
                'createOrder': true,
                'createOrders': false,
                'createPostOnlyOrder': false,
                'createReduceOnlyOrder': false,
                'createStopLimitOrder': false,
                'createStopMarketOrder': false,
                'createStopOrder': false,
                'fetchAccounts': true,
                'fetchBalance': true,
                'fetchBorrowInterest': false,
                'fetchBorrowRateHistory': false,
                'fetchClosedOrders': false,
                'fetchCrossBorrowRate': false,
                'fetchCrossBorrowRates': false,
                'fetchCurrencies': true,
                'fetchDeposit': false,
                'fetchDepositAddress': false,
                'fetchDepositAddresses': false,
                'fetchDepositAddressesByNetwork': false,
                'fetchDeposits': false,
                'fetchDepositsWithdrawals': false,
                'fetchFundingHistory': false,
                'fetchFundingRate': false,
                'fetchFundingRateHistory': false,
                'fetchFundingRates': false,
                'fetchIndexOHLCV': false,
                'fetchIsolatedBorrowRate': false,
                'fetchIsolatedBorrowRates': false,
                'fetchLedger': false,
                'fetchLedgerEntry': false,
                'fetchLeverageTiers': false,
                'fetchMarketLeverageTiers': false,
                'fetchMarkets': true,
                'fetchMarkOHLCV': false,
                'fetchMyTrades': false,
                'fetchOHLCV': false,
                'fetchOpenInterest': false,
                'fetchOpenInterestHistory': false,
                'fetchOpenOrders': true,
                'fetchOrder': true,
                'fetchOrderBook': true,
                'fetchOrderBooks': false,
                'fetchOrders': false,
                'fetchOrderTrades': false,
                'fetchPermissions': false,
                'fetchPosition': false,
                'fetchPositions': false,
                'fetchPositionsForSymbol': false,
                'fetchPositionsRisk': false,
                'fetchPremiumIndexOHLCV': false,
                'fetchTicker': true,
                'fetchTickers': false,
                'fetchTrades': true,
                'fetchTradingLimits': false,
                'fetchTransactionFee': false,
                'fetchTransactionFees': false,
                'fetchTransactions': false,
                'fetchTransfers': false,
                'fetchWithdrawAddresses': false,
                'fetchWithdrawal': false,
                'fetchWithdrawals': false,
                'reduceMargin': false,
                'setLeverage': false,
                'setMargin': false,
                'setMarginMode': false,
                'setPositionMode': false,
                'signIn': false,
                'transfer': false,
                'withdraw': false,
            },
            'urls': {
                'referral': '',
                'logo': 'https://github.com/ccxt/ccxt/assets/43336371/3aa748b7-ea44-45e9-a9e7-b1d207a2578a',
                'api': {
                    'rest': {
                        'production': {
                            'iridium': 'https://api.cube.exchange/ir/v0',
                            'mendelev': 'https://api.cube.exchange/md/v0',
                            'osmium': 'https://api.cube.exchange/os/v0',
                        },
                        'staging': {
                            'iridium': 'https://staging.cube.exchange/ir/v0',
                            'mendelev': 'https://staging.cube.exchange/md/v0',
                            'osmium': 'https://staging.cube.exchange/os/v0',
                        },
                    },
                    'ws': {
                        'production': {
                            'iridium': 'wss://api.cube.exchange/ir',
                            'mendelev': 'wss://api.cube.exchange/md',
                            'osmium': 'wss://api.cube.exchange/os',
                        },
                        'staging': {
                            'iridium': 'wss://staging.cube.exchange/ir',
                            'mendelev': 'wss://staging.cube.exchange/md',
                            'osmium': 'wss://staging.cube.exchange/os',
                        },
                    },
                },
                'www': 'https://www.cube.exchange/',
                'doc': 'https://cubexch.gitbook.io/cube-api',
                'fees': 'hhttps://www.cube.exchange/fees',
            },
            'fees': {
                'trading': {
                    'maker': this.parseNumber('0.004'),
                    'taker': this.parseNumber('0.008'),
                },
            },
            'api': {
                'rest': {
                    'iridium': {
                        'public': {
                            'get': {
                                '/markets': 1,
                            },
                        },
                        'private': {
                            'get': {
                                '/users/check': 1,
                                '/users/info': 1,
                                '/users/positions': 1,
                                '/users/transfers': 1,
                                '/users/deposits': 1,
                                '/users/withdrawals': 1,
                                '/users/orders': 1,
                                '/users/fills': 1,
                            },
                            'post': {
                                '/users/subaccounts': 1,
                                '/users/subaccounts/{subaccount_id}': 1,
                            },
                        },
                    },
                    'mendelev': {
                        'public': {
                            'get': {
                                '/book/{market_id}/snapshot': 1,
                                '/parsed/book/{market_symbol}/snapshot': 1,
                                '/book/{market_id}/recent-trades': 1,
                                '/parsed/book/{market_symbol}/recent-trades': 1,
                                '/tickers/snapshot': 1,
                                '/parsed/tickers': 1,
                            },
                        },
                    },
                    'osmium': {
                        'private': {
                            'get': {
                                '/orders': 1,
                            },
                            'delete': {
                                '/orders': 1,
                                '/order': 1,
                            },
                            'post': {
                                '/order': 1,
                            },
                            'patch': {
                                '/order': 1,
                            },
                        },
                    },
                },
            },
            'commonCurrencies': {},
            'precisionMode': TICK_SIZE,
            'exceptions': {
                'exact': {
                    'Must be authorized': AuthenticationError,
                    'Market not found': BadRequest,
                    'Insufficient funds': InsufficientFunds,
                    'Order not found': BadRequest,
                },
            },
            'options': {
                'environment': 'production',
                'subaccountId': undefined,
            },
        });
    }
    generateSignature() {
        const timestamp = Math.floor(Date.now() / 1000);
        const timestampBuffer = Buffer.alloc(8);
        timestampBuffer.writeUInt32LE(timestamp, 0);
        const fixedString = 'cube.xyz';
        const payload = Buffer.concat([Buffer.from(fixedString, 'utf-8'), timestampBuffer]);
        const secretKeyBytes = Buffer.from(this.secret, 'hex');
        const hmac = this.hmac(payload, secretKeyBytes, sha256, 'binary');
        const signatureB64 = Buffer.from(hmac).toString('base64');
        return [signatureB64, timestamp];
    }
    generateAuthenticationHeaders() {
        const [signature, timestamp] = this.generateSignature();
        return {
            'x-api-key': this.apiKey,
            'x-api-signature': signature,
            'x-api-timestamp': timestamp.toString(),
        };
    }
    authenticateRequest(request) {
        const headers = request.headers ?? {};
        Object.assign(headers, this.generateAuthenticationHeaders());
        request.headers = headers;
        return request;
    }
    sign(path, api = 'public', method = 'GET', params = {}, headers = undefined, body = undefined) {
        const environment = this.options['environment'];
        let baseUrl = undefined;
        if (api.indexOf('iridium') >= 0) {
            baseUrl = this.urls['api']['rest'][environment]['iridium'];
        }
        else if (api.indexOf('mendelev') >= 0) {
            baseUrl = this.urls['api']['rest'][environment]['mendelev'];
        }
        else if (api.indexOf('osmium') >= 0) {
            baseUrl = this.urls['api']['rest'][environment]['osmium'];
        }
        let url = baseUrl + this.implodeParams(path, params);
        params = this.omit(params, this.extractParams(path));
        if (method === 'GET') {
            if (Object.keys(params).length) {
                url += '?' + this.urlencode(params);
            }
        }
        if (api.indexOf('private') >= 0) {
            let request = {
                'body': body,
                'headers': {
                    'Content-Type': 'application/json',
                    'Referer': 'CCXT',
                },
            };
            request = this.authenticateRequest(request);
            headers = request.headers;
            if (method !== 'GET') {
                body = this.urlencode(params);
            }
        }
        return { 'url': url, 'method': method, 'body': body, 'headers': headers };
    }
    async fetchCurrencies(params = {}) {
        /**
         * @method
         * @name cube#fetchCurrencies
         * @description fetches all available currencies on an exchange
         * @see https://cubexch.gitbook.io/cube-api/rest-iridium-api#markets
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} an associative dictionary of currencies
         */
        const response = await this.restIridiumPublicGetMarkets(params);
        // {
        //     "result": {
        //         "assets": [
        //             {
        //                 "assetId": 1,
        //                 "symbol": "BTC",
        //                 "decimals": 8,
        //                 "displayDecimals": 5,
        //                 "settles": true,
        //                 "assetType": "Crypto",
        //                 "sourceId": 1,
        //                 "metadata": {
        //                     "dustAmount": 3000
        //                 },
        //                 "status": 1
        //             },
        //             ...
        //         ],
        //         "sources": [
        //             {
        //                 "sourceId": 0,
        //                 "name": "fiat",
        //                 "metadata": {}
        //             },
        //             ...
        //         ],
        //         "markets": [
        //             {
        //                 "marketId": 100004,
        //                 "symbol": "BTCUSDC",
        //                 "baseAssetId": 1,
        //                 "baseLotSize": "1000",
        //                 "quoteAssetId": 7,
        //                 "quoteLotSize": "1",
        //                 "priceDisplayDecimals": 2,
        //                 "protectionPriceLevels": 3000,
        //                 "priceBandBidPct": 25,
        //                 "priceBandAskPct": 400,
        //                 "priceTickSize": "0.1",
        //                 "quantityTickSize": "0.00001",
        //                 "status": 1,
        //                 "feeTableId": 2
        //             },
        //             ...
        //         ],
        //         "feeTables": [
        //             {
        //                 "feeTableId": 1,
        //                 "feeTiers": [
        //                     {
        //                         "priority": 0,
        //                         "makerFeeRatio": 0.0,
        //                         "takerFeeRatio": 0.0
        //                     }
        //                 ]
        //             },
        //             {
        //                 "feeTableId": 2,
        //                 "feeTiers": [
        //                     {
        //                         "priority": 0,
        //                         "makerFeeRatio": 0.0004,
        //                         "takerFeeRatio": 0.0008
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // }
        const result = {};
        const rawCurrencies = this.safeDict(this.safeDict(response, 'result'), 'assets');
        for (let i = 0; i < rawCurrencies.length; i++) {
            const rawCurrency = rawCurrencies[i];
            const id = this.safeStringUpper(rawCurrency, 'symbol');
            const code = this.safeCurrencyCode(id);
            // TODO verify!!!
            const currency = this.safeCurrencyStructure({
                'id': id,
                'numericId': this.safeInteger(rawCurrency, 'assetId'),
                'code': this.safeStringUpper(rawCurrency, 'symbol'),
                'precision': this.safeInteger(rawCurrency, 'decimals'),
                'type': this.safeStringLower(rawCurrency, 'assetType'),
                'name': this.safeString(rawCurrency, 'symbol'),
                'active': this.safeInteger(rawCurrency, 'status') === 1,
                'deposit': undefined,
                'withdraw': undefined,
                'fee': undefined,
                'fees': {},
                'networks': {},
                'limits': {
                    'deposit': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'withdraw': {
                        'min': undefined,
                        'max': undefined,
                    },
                },
                'info': rawCurrency,
            });
            result[code] = currency;
        }
        return result;
    }
    async fetchMarkets(params = {}) {
        /**
         * @method
         * @name cube#fetchMarkets
         * @description retrieves data on all markets for cube
         * @see https://cubexch.gitbook.io/cube-api/rest-iridium-api#markets
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object[]} an array of objects representing market data
         */
        const response = await this.restIridiumPublicGetMarkets(params);
        // {
        //     "result": {
        //         "assets": [
        //             {
        //                 "assetId": 1,
        //                 "symbol": "BTC",
        //                 "decimals": 8,
        //                 "displayDecimals": 5,
        //                 "settles": true,
        //                 "assetType": "Crypto",
        //                 "sourceId": 1,
        //                 "metadata": {
        //                     "dustAmount": 3000
        //                 },
        //                 "status": 1
        //             },
        //             ...
        //         ],
        //         "sources": [
        //             {
        //                 "sourceId": 0,
        //                 "name": "fiat",
        //                 "metadata": {}
        //             },
        //             ...
        //         ],
        //         "markets": [
        //             {
        //                 "marketId": 100004,
        //                 "symbol": "BTCUSDC",
        //                 "baseAssetId": 1,
        //                 "baseLotSize": "1000",
        //                 "quoteAssetId": 7,
        //                 "quoteLotSize": "1",
        //                 "priceDisplayDecimals": 2,
        //                 "protectionPriceLevels": 3000,
        //                 "priceBandBidPct": 25,
        //                 "priceBandAskPct": 400,
        //                 "priceTickSize": "0.1",
        //                 "quantityTickSize": "0.00001",
        //                 "status": 1,
        //                 "feeTableId": 2
        //             },
        //             ...
        //         ],
        //         "feeTables": [
        //             {
        //                 "feeTableId": 1,
        //                 "feeTiers": [
        //                     {
        //                         "priority": 0,
        //                         "makerFeeRatio": 0.0,
        //                         "takerFeeRatio": 0.0
        //                     }
        //                 ]
        //             },
        //             {
        //                 "feeTableId": 2,
        //                 "feeTiers": [
        //                     {
        //                         "priority": 0,
        //                         "makerFeeRatio": 0.0004,
        //                         "takerFeeRatio": 0.0008
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // }
        const result = [];
        const rawMarkets = this.safeDict(this.safeDict(response, 'result'), 'markets');
        const rawAssets = this.safeDict(this.safeDict(response, 'result'), 'assets');
        for (let i = 0; i < rawMarkets.length; i++) {
            const rawMarket = this.safeDict(rawMarkets, i);
            const id = this.safeStringLower(rawMarket, 'symbol');
            let rawBaseAsset = undefined;
            for (let j = 0; j < rawAssets.length; j++) {
                if (this.safeString(this.safeDict(rawAssets, j), 'assetId')
                    === this.safeString(rawMarket, 'baseAssetId')) {
                    rawBaseAsset = this.safeDict(rawAssets, j);
                    break;
                }
            }
            let rawQuoteAsset = undefined;
            for (let j = 0; j < rawAssets.length; j++) {
                if (this.safeString(this.safeDict(rawAssets, j), 'assetId')
                    === this.safeString(rawMarket, 'quoteAssetId')) {
                    rawQuoteAsset = this.safeDict(rawAssets, j);
                    break;
                }
            }
            const baseId = this.safeStringUpper(rawBaseAsset, 'symbol');
            const quoteId = this.safeStringUpper(rawQuoteAsset, 'symbol');
            const base = this.safeCurrencyCode(baseId);
            const quote = this.safeCurrencyCode(quoteId);
            const market = this.safeMarketStructure({
                'id': id,
                'lowercaseId': id,
                'symbol': base + '/' + quote,
                'base': base,
                'quote': quote,
                'settle': undefined,
                'baseId': baseId,
                'quoteId': quoteId,
                'settleId': undefined,
                'type': 'spot',
                'spot': true,
                'margin': false,
                'swap': false,
                'future': false,
                'option': false,
                'active': this.safeInteger(rawMarket, 'status') === 1,
                'contract': false,
                'linear': undefined,
                'inverse': undefined,
                'contractSize': undefined,
                'taker': this.safeNumber(this.safeDict(this.fees, 'trading'), 'taker'),
                'maker': this.safeNumber(this.safeDict(this.fees, 'trading'), 'maker'),
                'expiry': undefined,
                'expiryDatetime': undefined,
                'strike': undefined,
                'optionType': undefined,
                'precision': {
                    'amount': this.parseNumber(this.parsePrecision(this.safeString(rawMarket, 'quantityTickSize'))),
                    'price': this.parseNumber(this.parsePrecision(this.safeString(rawMarket, 'priceTickSize'))),
                },
                'limits': {
                    'leverage': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'amount': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'price': {
                        'min': undefined,
                        'max': undefined,
                    },
                    'cost': {
                        'min': undefined,
                        'max': undefined,
                    },
                },
                'created': undefined,
                'info': rawMarket,
            });
            result.push(market);
        }
        return result;
    }
    async fetchOrderBook(symbol, limit = undefined, params = {}) {
        /**
         * @method
         * @name cube#fetchOrderBook
         * @description fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
         * @see https://cubexch.gitbook.io/cube-api/rest-mendelev-api#book-market_id-snapshot
         * @see https://cubexch.gitbook.io/cube-api/rest-mendelev-api#parsed-book-market_symbol-snapshot
         * @param {string} symbol unified symbol of the market to fetch the order book for
         * @param {int} [limit] the maximum amount of order book entries to return
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} A dictionary of [order book structures]{@link https://docs.ccxt.com/#/?id=order-book-structure} indexed by market symbols
         */
        await this.loadMarkets();
        const marketId = symbol.toLowerCase();
        const market = this.market(marketId);
        const marketInfo = this.safeDict(market, 'info');
        const symbolFromInfo = this.safeString(marketInfo, 'symbol');
        const request = { 'market_symbol': symbolFromInfo };
        const response = await this.restMendelevPublicGetParsedBookMarketSymbolSnapshot(this.extend(request, params));
        //
        // {
        //   "result":{
        //       "ticker_id":"BTCUSDC",
        //       "timestamp":1711544655331,
        //       "bids":[
        //           [
        //               70635.6,
        //               0.01
        //           ]
        //       ],
        //       "asks":[
        //           [
        //               70661.8,
        //               0.1421
        //           ]
        //       ]
        //   }
        // }
        //
        const rawBids = this.safeList(this.safeDict(response, 'result'), 'bids', []);
        const rawAsks = this.safeList(this.safeDict(response, 'result'), 'asks', []);
        const rawOrderbook = {
            'bids': rawBids,
            'asks': rawAsks,
        };
        const timestamp = this.safeTimestamp(this.safeDict(response, 'result'), 'timestamp');
        return this.parseOrderBook(rawOrderbook, symbol, timestamp, 'bids', 'asks');
    }
    parseBidsAsks(bidasks, priceKey = 0, amountKey = 1, countOrIdKey = 2) {
        return bidasks;
    }
    async fetchTrades(symbol, since = undefined, limit = undefined, params = {}) {
        /**
         * @method
         * @name cube#fetchTrades
         * @description get the list of most recent trades for a particular symbol
         * @see https://cubexch.gitbook.io/cube-api/rest-mendelev-api#book-market_id-recent-trades
         * @see https://cubexch.gitbook.io/cube-api/rest-mendelev-api#parsed-book-market_symbol-recent-trades
         * @param {string} symbol unified symbol of the market to fetch trades for
         * @param {int} [since] timestamp in ms of the earliest trade to fetch
         * @param {int} [limit] the maximum number of trades to fetch
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @param {int} params.lastId order id
         * @returns {Trade[]} a list of [trade structures]{@link https://docs.ccxt.com/#/?id=public-trades}
         */
        await this.loadMarkets();
        const market = this.market(symbol);
        const request = {};
        // const response = await this.restMendelevPublicGetParsedBookMarketIdRecentTrades(this.extend(request, params));
        //
        // {
        //     "result":{
        //         "trades":[
        //             {
        //                 "tradeId":1192726,
        //                 "price":25730,
        //                 "aggressingSide":1,
        //                 "restingExchangeOrderId":775000423,
        //                 "fillQuantity":2048,
        //                 "transactTime":1710261845127064300,
        //                 "aggressingExchangeOrderId":775000298
        //             },
        //             {
        //                 "tradeId":1192723,
        //                 "price":25730,
        //                 "aggressingSide":0,
        //                 "restingExchangeOrderId":775000298,
        //                 "fillQuantity":5000,
        //                 "transactTime":1710261844303742500,
        //                 "aggressingExchangeOrderId":774996895
        //             }
        //         ]
        //     }
        // }
        //
        const response = await this.restMendelevPublicGetParsedBookMarketSymbolRecentTrades(this.extend(request, params));
        //
        // {
        //     "result":{
        //         "ticker_id":"BTCUSDC",
        //         "trades":[
        //             {
        //                 "id":1106939,
        //                 "p":63565.6,
        //                 "q":0.01,
        //                 "side":"Ask",
        //                 "ts":1711153560907
        //             },
        //             {
        //                 "id":1107084,
        //                 "p":63852.9,
        //                 "q":0.01,
        //                 "side":"Bid",
        //                 "ts":1711156552440
        //             }
        //         ]
        //     }
        // }
        //
        return this.parseTrades(response, market, since, limit);
    }
    parseTrade(trade, market = undefined) {
        throw Error('Not implemented!'); // TODO fix!!!
    }
    async fetchBalance (params = {}) {
        /**
         * @method
         * @name cube#fetchBalance
         * @description query for balance and get the amount of funds available for trading or funds locked in orders
         * @see https://cubexch.gitbook.io/cube-api/rest-iridium-api#users-positions
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} a [balance structure]{@link https://docs.ccxt.com/#/?id=balance-structure}
         */
        await this.loadMarkets ();
        const response = await this.restIridiumPrivateGetUsersPositions (params);
        const result = this.safeDict (response, 'balances', {});
        return this.parseBalances (result);
    }

    parseBalances (response) {
        // TODO fill and fix!!!
        return this.safeBalance ({
            'info': response,
            'timestamp': undefined,
            'datetime': undefined,
            'free': {},
            'used': {},
            'total': {},
        });
    }
    async createOrder(symbol, type, side, amount, price = undefined, params = {}) {
        /**
         * @method
         * @name cube#createOrder
         * @description create a trade order
         * @param {string} symbol unified symbol of the market to create an order in
         * @param {string} type not used by tradeogre
         * @param {string} side 'buy' or 'sell'
         * @param {float} amount how much of currency you want to trade in units of base currency
         * @param {float} price the price at which the order is to be fullfilled, in units of the quote currency
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} an [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        await this.loadMarkets();
        const marketId = symbol.toLowerCase();
        const market = this.market(marketId);
        const rawMarketId = this.safeInteger(this.safeDict(market, 'info'), 'marketId');
        const exchangePrice = price * 100;
        const exchangeAmount = amount * 100;
        const exchangeSide = side;
        const exchangeOrderType = type;
        const timestamp = Date.now();
        const clientOrderIdFromParams = this.safeInteger(params, 'clientOrderId')
        const clientOrderId = (clientOrderIdFromParams === null || clientOrderIdFromParams === undefined) ? timestamp : clientOrderIdFromParams;
        const request = {
            'clientOrderId': clientOrderId,
            'requestId': this.safeInteger(params, 'requestId'),
            'marketId': rawMarketId,
            'price': exchangePrice,
            'quantity': exchangeAmount,
            'side': exchangeSide,
            'timeInForce': this.safeInteger(params, 'timeInForce'),
            'orderType': exchangeOrderType,
            'selfTradePrevention': this.safeInteger(params, 'selfTradePrevention'),
            'postOnly': this.safeInteger(params, 'postOnly'),
            'cancelOnDisconnect': this.safeBool(params, 'cancelOnDisconnect'),
        };
        this.injectSubAccountId (request, params);
        const response = await this.restOsmiumPrivatePostOrder(request);
        return this.parseOrder(response);
    }
    async cancelOrder(id, symbol = undefined, params = {}) {
        /**
         * @method
         * @name cube#cancelOrder
         * @description cancels an open order
         * @see https://cubexch.gitbook.io/cube-api/rest-osmium-api#order-1
         * @param {string} id order id
         * @param {string} symbol unified symbol of the market the order was made in
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        // IMPLEMENTAR A LÓGICA!!!
        await this.loadMarkets();
        const request = {
            'uuid': id,
        };
        const response = await this.restOsmiumPrivateDeleteOrder(this.extend(request, params));
        return this.parseOrder(response);
    }
    async cancelAllOrders(symbol = undefined, params = {}) {
        /**
         * @method
         * @name cube#cancelAllOrders
         * @description cancel all open orders
         * @see https://cubexch.gitbook.io/cube-api/rest-osmium-api#orders-1
         * @param {string} symbol cube cancelAllOrders cannot setting symbol, it will cancel all open orders
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        await this.loadMarkets();
        const marketId = symbol.toLowerCase ();
        const market = this.market (marketId );
        symbol = this.safeSymbol (marketId, market);
        const rawMarkeId = this.safeInteger (this.safeDict (market, 'info'), 'marketId');
        const request = {
            marketId: rawMarkeId,
            requestId: this.safeInteger (params, 'requestId'),
            side: this.safeInteger (params, 'side'),
        };
        this.injectSubAccountId (request, params);
        return await this.restOsmiumPrivateDeleteOrders (this.extend (request, params));
    }
    async fetchOpenOrders(symbol = undefined, since = undefined, limit = undefined, params = {}) {
        /**
         * @method
         * @name cube#fetchOpenOrders
         * @description fetch all unfilled currently open orders
         * @param {string} symbol unified market symbol of the market orders were made in
         * @param {int} [since] the earliest time in ms to fetch orders for
         * @param {int} [limit] the maximum number of order structures to retrieve
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {Order[]} a list of [order structures]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        await this.loadMarkets ();
        let market = undefined;
        if (symbol !== undefined) {
            const marketId = symbol.toLowerCase ();
            market = this.market (marketId);
            symbol = this.safeSymbol (marketId, market);
        }
        const request = {};
        this.injectSubAccountId (request, params);
        const response = await this.restOsmiumPrivateGetOrders (this.extend (request, params));
        const rawOrders = this.safeList (this.safeDict (response, 'result'), 'orders');
        return this.parseOrders (rawOrders, market, since, limit);
    }

    parseOrders(orders, market = undefined, since = undefined, limit = undefined, params = {}) {
        for (let i = 0; i < orders.length; i++) {
            const order = this.safeDict (orders, i);
            order['id'] = this.safeString (order, 'exchangeOrderId');
        }
        return super.parseOrders (orders, market, since, limit, params);
    }

    async fetchOrder(id, symbol = undefined, params = {}) {
        /**
         * @method
         * @name cube#fetchOrder
         * @description fetches information on an order made by the user
         * @see https://cubexch.gitbook.io/cube-api/rest-osmium-api#orders
         * @param {string} symbol unified symbol of the market the order was made in
         * @param {object} [params] extra parameters specific to the exchange API endpoint
         * @returns {object} An [order structure]{@link https://docs.ccxt.com/#/?id=order-structure}
         */
        await this.loadMarkets ();
        let market = undefined;
        if (symbol !== undefined) {
            const marketId = symbol.toLowerCase ();
            market = this.market (marketId);
            symbol = this.safeSymbol (marketId, market);
        }
        const request = {};
        this.injectSubAccountId (request, params);
        const response = await this.restOsmiumPrivateGetOrders (this.extend (request, params));
        const rawOrders = this.safeList (this.safeDict (response, 'result'), 'orders');
        let rawOrder = undefined;
        for (let i = 0; i < rawOrders.length; i++) {
            const currentRawOrder = this.safeDict (rawOrders, i);
            if (id == currentRawOrder['id']) {
                rawOrder = currentRawOrder['']
            }
        }
        const order = this.parseOrder (rawOrder, market);
        if (order !== undefined) {
            return order;
        }
        throw new OrderNotFound('Order "' + id + '" not found.');
    }
    parseOrder(order, market = undefined) {
        // TODO implement!!!
        return this.safeOrder ();
    }

    injectSubAccountId(request, params) {
        if (this.safeInteger (params, 'subaccountId') !== undefined) {
            request['subaccountId'] = this.safeInteger (params, 'subaccountId');
        } else if (this.safeInteger (params, 'subAccountId') !== undefined) {
            request['subaccountId'] = this.safeInteger (params, 'subAccountId');
        } else if (this.safeInteger (this.options, 'subaccountId') !== undefined) {
            request['subaccountId'] = this.safeInteger(this.options, 'subaccountId');
        } else if (this.safeInteger (this.options, 'subAccountId') !== undefined) {
            request['subaccountId'] = this.safeInteger (this.options, 'subAccountId');
        }
    }
}
