using ccxt;
namespace Tests;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code


public partial class testMainClass : BaseTest
{
    public static void testLiquidation(Exchange exchange, object skippedProperties, object method, object entry, object symbol)
    {
        object format = new Dictionary<string, object>() {
            { "info", new Dictionary<string, object>() {} },
            { "symbol", "ETH/BTC" },
            { "contracts", exchange.parseNumber("1.234") },
            { "contractSize", exchange.parseNumber("1.234") },
            { "price", exchange.parseNumber("1.234") },
            { "baseValue", exchange.parseNumber("1.234") },
            { "quoteValue", exchange.parseNumber("1.234") },
            { "timestamp", 1502962946216 },
            { "datetime", "2017-09-01T00:00:00" },
        };
        // todo: atm, many exchanges fail, so temporarily decrease stict mode
        object emptyAllowedFor = new List<object>() {"timestamp", "datetime", "quoteValue", "baseValue", "previousClose", "price", "contractSize", "contracts"};
        testSharedMethods.assertStructure(exchange, skippedProperties, method, entry, format, emptyAllowedFor);
        testSharedMethods.assertTimestampAndDatetime(exchange, skippedProperties, method, entry);
        object logText = testSharedMethods.logTemplate(exchange, method, entry);
        testSharedMethods.assertGreater(exchange, skippedProperties, method, entry, "contracts", "0");
        testSharedMethods.assertGreater(exchange, skippedProperties, method, entry, "contractSize", "0");
        testSharedMethods.assertGreater(exchange, skippedProperties, method, entry, "price", "0");
        testSharedMethods.assertGreater(exchange, skippedProperties, method, entry, "baseValue", "0");
        testSharedMethods.assertGreater(exchange, skippedProperties, method, entry, "quoteValue", "0");
        object contracts = exchange.safeString(entry, "contracts");
        object contractSize = exchange.safeString(entry, "contractSize");
        object price = exchange.safeString(entry, "price");
        object baseValue = exchange.safeString(entry, "baseValue");
        if (isTrue(isTrue(contracts) && isTrue(contractSize)))
        {
            assert(Precise.stringEq(baseValue, Precise.stringMul(contracts, contractSize)), add("baseValue == contracts * contractSize", logText));
            if (isTrue(price))
            {
                assert(Precise.stringEq(baseValue, Precise.stringMul(Precise.stringMul(contracts, contractSize), price)), add("quoteValue == contracts * contractSize * price", logText));
            }
        }
        // if singular was called, then symbol needs to be asserted
        if (isTrue(isTrue(isEqual(method, "watchLiquidations")) || isTrue(isEqual(method, "fetchLiquidations"))))
        {
            testSharedMethods.assertSymbol(exchange, skippedProperties, method, entry, "symbol", symbol);
        }
    }

}