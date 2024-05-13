using ccxt;
using ccxt.pro;
namespace Tests;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code


public partial class testMainClass : BaseTest
{
    async static public Task testWatchTradesForSymbols(Exchange exchange, object skippedProperties, object symbols)
    {
        object method = "watchTradesForSymbols";
        object now = exchange.milliseconds();
        object ends = add(now, 15000);
        while (isLessThan(now, ends))
        {
            object response = null;
            try
            {
                response = await exchange.watchTradesForSymbols(symbols);
            } catch(Exception e)
            {
                if (!isTrue(testSharedMethods.isTemporaryFailure(e)))
                {
                    throw e;
                }
                now = exchange.milliseconds();
                continue;
            }
            assert(((response is IList<object>) || (response.GetType().IsGenericType && response.GetType().GetGenericTypeDefinition().IsAssignableFrom(typeof(List<>)))), add(add(add(add(add(add(exchange.id, " "), method), " "), exchange.json(symbols)), " must return an array. "), exchange.json(response)));
            now = exchange.milliseconds();
            object symbol = null;
            for (object i = 0; isLessThan(i, getArrayLength(response)); postFixIncrement(ref i))
            {
                object trade = getValue(response, i);
                symbol = getValue(trade, "symbol");
                testTrade(exchange, skippedProperties, method, trade, symbol, now);
                testSharedMethods.assertInArray(exchange, skippedProperties, method, trade, "symbol", symbols);
            }
            if (!isTrue((inOp(skippedProperties, "timestamp"))))
            {
                testSharedMethods.assertTimestampOrder(exchange, method, symbol, response);
            }
        }
    }

}