namespace ccxt.pro;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code


public partial class wazirx { public wazirx(object args = null) : base(args) { } }
public partial class wazirx : ccxt.wazirx
{
    public override object describe()
    {
        return this.deepExtend(base.describe(), new Dictionary<string, object>() {
            { "has", new Dictionary<string, object>() {
                { "ws", true },
                { "watchBalance", true },
                { "watchTicker", true },
                { "watchTickers", true },
                { "watchTrades", true },
                { "watchMyTrades", true },
                { "watchOrders", true },
                { "watchOrderBook", true },
                { "watchOHLCV", true },
            } },
            { "urls", new Dictionary<string, object>() {
                { "api", new Dictionary<string, object>() {
                    { "ws", "wss://stream.wazirx.com/stream" },
                } },
            } },
            { "options", new Dictionary<string, object>() {} },
            { "streaming", new Dictionary<string, object>() {} },
            { "exceptions", new Dictionary<string, object>() {} },
            { "api", new Dictionary<string, object>() {
                { "private", new Dictionary<string, object>() {
                    { "post", new Dictionary<string, object>() {
                        { "create_auth_token", 1 },
                    } },
                } },
            } },
        });
    }

    public async override Task<object> watchBalance(object parameters = null)
    {
        /**
        * @method
        * @name wazirx#watchBalance
        * @description watch balance and get the amount of funds available for trading or funds locked in orders
        * @see https://docs.wazirx.com/#account-update
        * @param {object} [params] extra parameters specific to the exchange API endpoint
        * @returns {object} a [balance structure]{@link https://docs.ccxt.com/#/?id=balance-structure}
        */
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object token = await this.authenticate(parameters);
        object messageHash = "balance";
        object url = getValue(getValue(this.urls, "api"), "ws");
        object subscribe = new Dictionary<string, object>() {
            { "event", "subscribe" },
            { "streams", new List<object>() {"outboundAccountPosition"} },
            { "auth_key", token },
        };
        object request = this.deepExtend(subscribe, parameters);
        return await this.watch(url, messageHash, request, messageHash);
    }

    public virtual void handleBalance(WebSocketClient client, object message)
    {
        //
        //     {
        //         "data":
        //         {
        //           "B": [
        //             {
        //               "a":"wrx",
        //               "b":"2043856.426455209",
        //               "l":"3001318.98"
        //             }
        //           ],
        //           "E":1631683058909
        //         },
        //         "stream":"outboundAccountPosition"
        //     }
        //
        object data = this.safeValue(message, "data", new Dictionary<string, object>() {});
        object balances = this.safeValue(data, "B", new List<object>() {});
        object timestamp = this.safeInteger(data, "E");
        ((IDictionary<string,object>)this.balance)["info"] = balances;
        ((IDictionary<string,object>)this.balance)["timestamp"] = timestamp;
        ((IDictionary<string,object>)this.balance)["datetime"] = this.iso8601(timestamp);
        for (object i = 0; isLessThan(i, getArrayLength(balances)); postFixIncrement(ref i))
        {
            object balance = getValue(balances, i);
            object currencyId = this.safeString(balance, "a");
            object code = this.safeCurrencyCode(currencyId);
            object available = this.safeString(balance, "b");
            object locked = this.safeString(balance, "l");
            object account = this.account();
            ((IDictionary<string,object>)account)["free"] = available;
            ((IDictionary<string,object>)account)["used"] = locked;
            ((IDictionary<string,object>)this.balance)[(string)code] = account;
        }
        this.balance = this.safeBalance(this.balance);
        object messageHash = "balance";
        callDynamically(client as WebSocketClient, "resolve", new object[] {this.balance, messageHash});
    }

    public override object parseWsTrade(object trade, object market = null)
    {
        //
        // trade
        //     {
        //         "E": 1631681323000,  Event time
        //         "S": "buy",          Side
        //         "a": 26946138,       Buyer order ID
        //         "b": 26946169,       Seller order ID
        //         "m": true,           Is buyer maker?
        //         "p": "7.0",          Price
        //         "q": "15.0",         Quantity
        //         "s": "btcinr",       Symbol
        //         "t": 17376030        Trade ID
        //     }
        // ownTrade
        //     {
        //         "E": 1631683058000,
        //         "S": "ask",
        //         "U": "inr",
        //         "a": 114144050,
        //         "b": 114144121,
        //         "f": "0.2",
        //         "m": true,
        //         "o": 26946170,
        //         "p": "5.0",
        //         "q": "20.0",
        //         "s": "btcinr",
        //         "t": 17376032,
        //         "w": "100.0"
        //     }
        //
        object timestamp = this.safeInteger(trade, "E");
        object marketId = this.safeString(trade, "s");
        market = this.safeMarket(marketId, market);
        object feeCost = this.safeString(trade, "f");
        object feeCurrencyId = this.safeString(trade, "U");
        object isMaker = isEqual(this.safeValue(trade, "m"), true);
        object fee = null;
        if (isTrue(!isEqual(feeCost, null)))
        {
            fee = new Dictionary<string, object>() {
                { "cost", feeCost },
                { "currency", this.safeCurrencyCode(feeCurrencyId) },
                { "rate", null },
            };
        }
        return this.safeTrade(new Dictionary<string, object>() {
            { "id", this.safeString(trade, "t") },
            { "info", trade },
            { "timestamp", timestamp },
            { "datetime", this.iso8601(timestamp) },
            { "symbol", getValue(market, "symbol") },
            { "order", this.safeStringN(trade, new List<object>() {"o"}) },
            { "type", null },
            { "side", this.safeString(trade, "S") },
            { "takerOrMaker", ((bool) isTrue(isMaker)) ? "maker" : "taker" },
            { "price", this.safeString(trade, "p") },
            { "amount", this.safeString(trade, "q") },
            { "cost", null },
            { "fee", fee },
        }, market);
    }

    public async override Task<object> watchTicker(object symbol, object parameters = null)
    {
        /**
        * @method
        * @name wazirx#watchTicker
        * @description watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for a specific market
        * @see https://docs.wazirx.com/#all-market-tickers-stream
        * @param {string} symbol unified symbol of the market to fetch the ticker for
        * @param {object} [params] extra parameters specific to the exchange API endpoint
        * @returns {object} a [ticker structure]{@link https://docs.ccxt.com/#/?id=ticker-structure}
        */
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object market = this.market(symbol);
        object url = getValue(getValue(this.urls, "api"), "ws");
        object messageHash = add("ticker:", getValue(market, "symbol"));
        object subscribeHash = "tickers";
        object stream = add("!", "ticker@arr");
        object subscribe = new Dictionary<string, object>() {
            { "event", "subscribe" },
            { "streams", new List<object>() {stream} },
        };
        object request = this.deepExtend(subscribe, parameters);
        return await this.watch(url, messageHash, request, subscribeHash);
    }

    public async override Task<object> watchTickers(object symbols = null, object parameters = null)
    {
        /**
        * @method
        * @name wazirx#watchTickers
        * @description watches a price ticker, a statistical calculation with the information calculated over the past 24 hours for all markets of a specific list
        * @see https://docs.wazirx.com/#all-market-tickers-stream
        * @param {string[]} symbols unified symbol of the market to fetch the ticker for
        * @param {object} [params] extra parameters specific to the exchange API endpoint
        * @returns {object} a [ticker structure]{@link https://docs.ccxt.com/#/?id=ticker-structure}
        */
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        symbols = this.marketSymbols(symbols);
        object url = getValue(getValue(this.urls, "api"), "ws");
        object messageHash = "tickers";
        object stream = add("!", "ticker@arr");
        object subscribe = new Dictionary<string, object>() {
            { "event", "subscribe" },
            { "streams", new List<object>() {stream} },
        };
        object request = this.deepExtend(subscribe, parameters);
        object tickers = await this.watch(url, messageHash, request, messageHash);
        return this.filterByArray(tickers, "symbol", symbols, false);
    }

    public virtual void handleTicker(WebSocketClient client, object message)
    {
        //
        //     {
        //         "data":
        //         [
        //           {
        //             "E":1631625534000,    // Event time
        //             "T":"SPOT",           // Type
        //             "U":"wrx",            // Quote unit
        //             "a":"0.0",            // Best sell price
        //             "b":"0.0",            // Best buy price
        //             "c":"5.0",            // Last price
        //             "h":"5.0",            // High price
        //             "l":"5.0",            // Low price
        //             "o":"5.0",            // Open price
        //             "q":"0.0",            // Quantity
        //             "s":"btcwrx",         // Symbol
        //             "u":"btc"             // Base unit
        //           }
        //         ],
        //         "stream":"!ticker@arr"
        //     }
        //
        object data = this.safeValue(message, "data", new List<object>() {});
        for (object i = 0; isLessThan(i, getArrayLength(data)); postFixIncrement(ref i))
        {
            object ticker = getValue(data, i);
            object parsedTicker = this.parseWSTicker(ticker);
            object symbol = getValue(parsedTicker, "symbol");
            ((IDictionary<string,object>)this.tickers)[(string)symbol] = parsedTicker;
            object messageHash = add("ticker:", symbol);
            callDynamically(client as WebSocketClient, "resolve", new object[] {parsedTicker, messageHash});
        }
        callDynamically(client as WebSocketClient, "resolve", new object[] {this.tickers, "tickers"});
    }

    public virtual object parseWSTicker(object ticker, object market = null)
    {
        //
        //     {
        //         "E":1631625534000,    // Event time
        //         "T":"SPOT",           // Type
        //         "U":"wrx",            // Quote unit
        //         "a":"0.0",            // Best sell price
        //         "b":"0.0",            // Best buy price
        //         "c":"5.0",            // Last price
        //         "h":"5.0",            // High price
        //         "l":"5.0",            // Low price
        //         "o":"5.0",            // Open price
        //         "q":"0.0",            // Quantity
        //         "s":"btcwrx",         // Symbol
        //         "u":"btc"             // Base unit
        //     }
        //
        object marketId = this.safeString(ticker, "s");
        object timestamp = this.safeInteger(ticker, "E");
        return this.safeTicker(new Dictionary<string, object>() {
            { "symbol", this.safeSymbol(marketId, market) },
            { "timestamp", timestamp },
            { "datetime", this.iso8601(timestamp) },
            { "high", this.safeString(ticker, "h") },
            { "low", this.safeString(ticker, "l") },
            { "bid", this.safeNumber(ticker, "b") },
            { "bidVolume", null },
            { "ask", this.safeNumber(ticker, "a") },
            { "askVolume", null },
            { "vwap", null },
            { "open", this.safeString(ticker, "o") },
            { "close", null },
            { "last", this.safeString(ticker, "l") },
            { "previousClose", null },
            { "change", null },
            { "percentage", null },
            { "average", null },
            { "baseVolume", null },
            { "quoteVolume", this.safeString(ticker, "q") },
            { "info", ticker },
        }, market);
    }

    public async override Task<object> watchTrades(object symbol, object since = null, object limit = null, object parameters = null)
    {
        /**
        * @method
        * @name wazirx#watchTrades
        * @description get the list of most recent trades for a particular symbol
        * @param {string} symbol unified symbol of the market to fetch trades for
        * @param {int} [since] timestamp in ms of the earliest trade to fetch
        * @param {int} [limit] the maximum amount of trades to fetch
        * @param {object} [params] extra parameters specific to the exchange API endpoint
        * @returns {object[]} a list of [trade structures]{@link https://docs.ccxt.com/#/?id=public-trades}
        */
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object market = this.market(symbol);
        symbol = getValue(market, "symbol");
        object messageHash = add(getValue(market, "id"), "@trades");
        object url = getValue(getValue(this.urls, "api"), "ws");
        object message = new Dictionary<string, object>() {
            { "event", "subscribe" },
            { "streams", new List<object>() {messageHash} },
        };
        object request = this.extend(message, parameters);
        object trades = await this.watch(url, messageHash, request, messageHash);
        if (isTrue(this.newUpdates))
        {
            limit = callDynamically(trades, "getLimit", new object[] {symbol, limit});
        }
        return this.filterBySinceLimit(trades, since, limit, "timestamp", true);
    }

    public virtual void handleTrades(WebSocketClient client, object message)
    {
        //
        //     {
        //         "data": {
        //             "trades": [{
        //                 "E": 1631681323000,  Event time
        //                 "S": "buy",          Side
        //                 "a": 26946138,       Buyer order ID
        //                 "b": 26946169,       Seller order ID
        //                 "m": true,           Is buyer maker?
        //                 "p": "7.0",          Price
        //                 "q": "15.0",         Quantity
        //                 "s": "btcinr",       Symbol
        //                 "t": 17376030        Trade ID
        //             }]
        //         },
        //         "stream": "btcinr@trades"
        //     }
        //
        object data = this.safeValue(message, "data", new Dictionary<string, object>() {});
        object rawTrades = this.safeValue(data, "trades", new List<object>() {});
        object messageHash = this.safeString(message, "stream");
        object split = ((string)messageHash).Split(new [] {((string)"@")}, StringSplitOptions.None).ToList<object>();
        object marketId = this.safeString(split, 0);
        object market = this.safeMarket(marketId);
        object symbol = this.safeSymbol(marketId, market);
        object trades = this.safeValue(this.trades, symbol);
        if (isTrue(isEqual(trades, null)))
        {
            object limit = this.safeInteger(this.options, "tradesLimit", 1000);
            trades = new ArrayCache(limit);
            ((IDictionary<string,object>)this.trades)[(string)symbol] = trades;
        }
        for (object i = 0; isLessThan(i, getArrayLength(rawTrades)); postFixIncrement(ref i))
        {
            object parsedTrade = this.parseWsTrade(getValue(rawTrades, i), market);
            callDynamically(trades, "append", new object[] {parsedTrade});
        }
        callDynamically(client as WebSocketClient, "resolve", new object[] {trades, messageHash});
    }

    public async override Task<object> watchMyTrades(object symbol = null, object since = null, object limit = null, object parameters = null)
    {
        /**
        * @method
        * @name wazirx#watchMyTrades
        * @description watch trades by user
        * @see https://docs.wazirx.com/#trade-update
        * @param {string} symbol unified symbol of the market to fetch trades for
        * @param {int} [since] timestamp in ms of the earliest trade to fetch
        * @param {int} [limit] the maximum amount of trades to fetch
        * @param {object} [params] extra parameters specific to the exchange API endpoint
        * @returns {object[]} a list of [trade structures]{@link https://docs.ccxt.com/#/?id=public-trades}
        */
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object token = await this.authenticate(parameters);
        if (isTrue(!isEqual(symbol, null)))
        {
            object market = this.market(symbol);
            symbol = getValue(market, "symbol");
        }
        object url = getValue(getValue(this.urls, "api"), "ws");
        object messageHash = "myTrades";
        object message = new Dictionary<string, object>() {
            { "event", "subscribe" },
            { "streams", new List<object>() {"ownTrade"} },
            { "auth_key", token },
        };
        object request = this.deepExtend(message, parameters);
        object trades = await this.watch(url, messageHash, request, messageHash);
        if (isTrue(this.newUpdates))
        {
            limit = callDynamically(trades, "getLimit", new object[] {symbol, limit});
        }
        return this.filterBySymbolSinceLimit(trades, symbol, since, limit, true);
    }

    public async override Task<object> watchOHLCV(object symbol, object timeframe = null, object since = null, object limit = null, object parameters = null)
    {
        /**
        * @method
        * @name wazirx#watchOHLCV
        * @description watches historical candlestick data containing the open, high, low, and close price, and the volume of a market
        * @param {string} symbol unified symbol of the market to fetch OHLCV data for
        * @param {string} timeframe the length of time each candle represents
        * @param {int} [since] timestamp in ms of the earliest candle to fetch
        * @param {int} [limit] the maximum amount of candles to fetch
        * @param {object} [params] extra parameters specific to the exchange API endpoint
        * @returns {int[][]} A list of candles ordered as timestamp, open, high, low, close, volume
        */
        timeframe ??= "1m";
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object market = this.market(symbol);
        symbol = getValue(market, "symbol");
        object url = getValue(getValue(this.urls, "api"), "ws");
        object messageHash = add(add(add("ohlcv:", symbol), ":"), timeframe);
        object stream = add(add(getValue(market, "id"), "@kline_"), timeframe);
        object message = new Dictionary<string, object>() {
            { "event", "subscribe" },
            { "streams", new List<object>() {stream} },
        };
        object request = this.deepExtend(message, parameters);
        object ohlcv = await this.watch(url, messageHash, request, messageHash);
        if (isTrue(this.newUpdates))
        {
            limit = callDynamically(ohlcv, "getLimit", new object[] {symbol, limit});
        }
        return this.filterBySinceLimit(ohlcv, since, limit, 0, true);
    }

    public virtual void handleOHLCV(WebSocketClient client, object message)
    {
        //
        //     {
        //         "data": {
        //           "E":1631683058904,      Event time
        //           "s": "btcinr",          Symbol
        //           "t": 1638747660000,     Kline start time
        //           "T": 1638747719999,     Kline close time
        //           "i": "1m",              Interval
        //           "o": "0.0010",          Open price
        //           "c": "0.0020",          Close price
        //           "h": "0.0025",          High price
        //           "l": "0.0015",          Low price
        //           "v": "1000",            Base asset volume
        //         },
        //         "stream": "btcinr@kline_1m"
        //     }
        //
        object data = this.safeValue(message, "data", new Dictionary<string, object>() {});
        object marketId = this.safeString(data, "s");
        object market = this.safeMarket(marketId);
        object symbol = this.safeSymbol(marketId, market);
        object timeframe = this.safeString(data, "i");
        ((IDictionary<string,object>)this.ohlcvs)[(string)symbol] = this.safeValue(this.ohlcvs, symbol, new Dictionary<string, object>() {});
        object stored = this.safeValue(getValue(this.ohlcvs, symbol), timeframe);
        if (isTrue(isEqual(stored, null)))
        {
            object limit = this.safeInteger(this.options, "OHLCVLimit", 1000);
            stored = new ArrayCacheByTimestamp(limit);
            ((IDictionary<string,object>)getValue(this.ohlcvs, symbol))[(string)timeframe] = stored;
        }
        object parsed = this.parseWsOHLCV(data, market);
        callDynamically(stored, "append", new object[] {parsed});
        object messageHash = add(add(add("ohlcv:", symbol), ":"), timeframe);
        callDynamically(client as WebSocketClient, "resolve", new object[] {stored, messageHash});
    }

    public override object parseWsOHLCV(object ohlcv, object market = null)
    {
        //
        //    {
        //        "E":1631683058904,      Event time
        //        "s": "btcinr",          Symbol
        //        "t": 1638747660000,     Kline start time
        //        "T": 1638747719999,     Kline close time
        //        "i": "1m",              Interval
        //        "o": "0.0010",          Open price
        //        "c": "0.0020",          Close price
        //        "h": "0.0025",          High price
        //        "l": "0.0015",          Low price
        //        "v": "1000",            Base asset volume
        //    }
        //
        return new List<object> {this.safeInteger(ohlcv, "t"), this.safeNumber(ohlcv, "o"), this.safeNumber(ohlcv, "c"), this.safeNumber(ohlcv, "h"), this.safeNumber(ohlcv, "l"), this.safeNumber(ohlcv, "v")};
    }

    public async override Task<object> watchOrderBook(object symbol, object limit = null, object parameters = null)
    {
        /**
        * @method
        * @name wazirx#watchOrderBook
        * @description watches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
        * @see https://docs.wazirx.com/#depth-stream
        * @param {string} symbol unified symbol of the market to fetch the order book for
        * @param {int} [limit] the maximum amount of order book entries to return
        * @param {object} [params] extra parameters specific to the exchange API endpoint
        * @returns {object} A dictionary of [order book structures]{@link https://docs.ccxt.com/#/?id=order-book-structure} indexed by market symbols
        */
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        object market = this.market(symbol);
        symbol = getValue(market, "symbol");
        object url = getValue(getValue(this.urls, "api"), "ws");
        object messageHash = add("orderbook:", symbol);
        object stream = add(getValue(market, "id"), "@depth");
        object subscribe = new Dictionary<string, object>() {
            { "event", "subscribe" },
            { "streams", new List<object>() {stream} },
        };
        object request = this.deepExtend(subscribe, parameters);
        object orderbook = await this.watch(url, messageHash, request, messageHash);
        return (orderbook as IOrderBook).limit();
    }

    public override void handleDelta(object bookside, object delta)
    {
        object bidAsk = this.parseBidAsk(delta, 0, 1);
        (bookside as IOrderBookSide).storeArray(bidAsk);
    }

    public override void handleDeltas(object bookside, object deltas)
    {
        for (object i = 0; isLessThan(i, getArrayLength(deltas)); postFixIncrement(ref i))
        {
            this.handleDelta(bookside, getValue(deltas, i));
        }
    }

    public virtual void handleOrderBook(WebSocketClient client, object message)
    {
        //
        //     {
        //         "data": {
        //             "E": 1659475095000,
        //             "a": [
        //                 ["23051.0", "1.30141"],
        //             ],
        //             "b": [
        //                 ["22910.0", "1.30944"],
        //             ],
        //             "s": "btcusdt"
        //         },
        //         "stream": "btcusdt@depth"
        //     }
        //
        object data = this.safeValue(message, "data", new Dictionary<string, object>() {});
        object timestamp = this.safeInteger(data, "E");
        object marketId = this.safeString(data, "s");
        object market = this.safeMarket(marketId);
        object symbol = getValue(market, "symbol");
        object messageHash = add("orderbook:", symbol);
        object currentOrderBook = this.safeValue(this.orderbooks, symbol);
        if (isTrue(isEqual(currentOrderBook, null)))
        {
            object snapshot = this.parseOrderBook(data, symbol, timestamp, "b", "a");
            object orderBook = this.orderBook(snapshot);
            ((IDictionary<string,object>)this.orderbooks)[(string)symbol] = orderBook;
        } else
        {
            object asks = this.safeValue(data, "a", new List<object>() {});
            object bids = this.safeValue(data, "b", new List<object>() {});
            this.handleDeltas(getValue(currentOrderBook, "asks"), asks);
            this.handleDeltas(getValue(currentOrderBook, "bids"), bids);
            ((IDictionary<string,object>)currentOrderBook)["nonce"] = timestamp;
            ((IDictionary<string,object>)currentOrderBook)["timestamp"] = timestamp;
            ((IDictionary<string,object>)currentOrderBook)["datetime"] = this.iso8601(timestamp);
            ((IDictionary<string,object>)this.orderbooks)[(string)symbol] = currentOrderBook;
        }
        callDynamically(client as WebSocketClient, "resolve", new object[] {getValue(this.orderbooks, symbol), messageHash});
    }

    public async override Task<object> watchOrders(object symbol = null, object since = null, object limit = null, object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        await this.loadMarkets();
        if (isTrue(!isEqual(symbol, null)))
        {
            object market = this.market(symbol);
            symbol = getValue(market, "symbol");
        }
        object token = await this.authenticate(parameters);
        object messageHash = "orders";
        object message = new Dictionary<string, object>() {
            { "event", "subscribe" },
            { "streams", new List<object>() {"orderUpdate"} },
            { "auth_key", token },
        };
        object url = getValue(getValue(this.urls, "api"), "ws");
        object request = this.deepExtend(message, parameters);
        object orders = await this.watch(url, messageHash, request, messageHash, request);
        if (isTrue(this.newUpdates))
        {
            limit = callDynamically(orders, "getLimit", new object[] {symbol, limit});
        }
        return this.filterBySymbolSinceLimit(orders, symbol, since, limit, true);
    }

    public virtual void handleOrder(WebSocketClient client, object message)
    {
        //
        //     {
        //         "data": {
        //             "E": 1631683058904,
        //             "O": 1631683058000,
        //             "S": "ask",
        //             "V": "70.0",
        //             "X": "wait",
        //             "i": 26946170,
        //             "m": true,
        //             "o": "sell",
        //             "p": "5.0",
        //             "q": "70.0",
        //             "s": "wrxinr",
        //             "v": "0.0"
        //         },
        //         "stream": "orderUpdate"
        //     }
        //
        object order = this.safeValue(message, "data", new Dictionary<string, object>() {});
        object parsedOrder = this.parseWsOrder(order);
        if (isTrue(isEqual(this.orders, null)))
        {
            object limit = this.safeInteger(this.options, "ordersLimit", 1000);
            this.orders = new ArrayCacheBySymbolById(limit);
        }
        object orders = this.orders;
        callDynamically(orders, "append", new object[] {parsedOrder});
        object messageHash = "orders";
        callDynamically(client as WebSocketClient, "resolve", new object[] {this.orders, messageHash});
        messageHash = add(messageHash, add(":", getValue(parsedOrder, "symbol")));
        callDynamically(client as WebSocketClient, "resolve", new object[] {this.orders, messageHash});
    }

    public override object parseWsOrder(object order, object market = null)
    {
        //
        //     {
        //         "E": 1631683058904,
        //         "O": 1631683058000,
        //         "S": "ask",
        //         "V": "70.0",
        //         "X": "wait",
        //         "i": 26946170,
        //         "m": true,
        //         "o": "sell",
        //         "p": "5.0",
        //         "q": "70.0",
        //         "s": "wrxinr",
        //         "v": "0.0"
        //     }
        //
        object timestamp = this.safeInteger(order, "O");
        object marketId = this.safeString(order, "s");
        object status = this.safeString(order, "X");
        market = this.safeMarket(marketId);
        return this.safeOrder(new Dictionary<string, object>() {
            { "info", order },
            { "id", this.safeString(order, "i") },
            { "clientOrderId", this.safeString(order, "c") },
            { "datetime", this.iso8601(timestamp) },
            { "timestamp", timestamp },
            { "lastTradeTimestamp", null },
            { "symbol", getValue(market, "symbol") },
            { "type", ((bool) isTrue(this.safeValue(order, "m"))) ? "limit" : "market" },
            { "timeInForce", null },
            { "postOnly", null },
            { "side", this.safeString(order, "o") },
            { "price", this.safeString(order, "p") },
            { "stopPrice", null },
            { "triggerPrice", null },
            { "amount", this.safeString(order, "V") },
            { "filled", null },
            { "remaining", this.safeString(order, "q") },
            { "cost", null },
            { "average", this.safeString(order, "v") },
            { "status", this.parseOrderStatus(status) },
            { "fee", null },
            { "trades", null },
        }, market);
    }

    public virtual void handleMyTrades(WebSocketClient client, object message)
    {
        //
        //     {
        //         "data": {
        //             "E": 1631683058000,
        //             "S": "ask",
        //             "U": "usdt",
        //             "a": 114144050,
        //             "b": 114144121,
        //             "f": "0.2",
        //             "ga": "0.0",
        //             "gc": "usdt",
        //             "m": true,
        //             "o": 26946170,
        //             "p": "5.0",
        //             "q": "20.0",
        //             "s": "btcusdt",
        //             "t": 17376032,
        //             "w": "100.0"
        //         },
        //         "stream": "ownTrade"
        //     }
        //
        object trade = this.safeValue(message, "data", new Dictionary<string, object>() {});
        object messageHash = "myTrades";
        object myTrades = null;
        if (isTrue(isEqual(this.myTrades, null)))
        {
            object limit = this.safeInteger(this.options, "tradesLimit", 1000);
            myTrades = new ArrayCacheBySymbolById(limit);
            this.myTrades = myTrades;
        } else
        {
            myTrades = this.myTrades;
        }
        object parsedTrade = this.parseWsTrade(trade);
        callDynamically(myTrades, "append", new object[] {parsedTrade});
        callDynamically(client as WebSocketClient, "resolve", new object[] {myTrades, messageHash});
    }

    public virtual object handleConnected(WebSocketClient client, object message)
    {
        //
        //     {
        //         "data": {
        //             "timeout_duration": 1800
        //         },
        //         "event": "connected"
        //     }
        //
        return message;
    }

    public virtual object handleSubscribed(WebSocketClient client, object message)
    {
        //
        //     {
        //         "data": {
        //             "streams": ["!ticker@arr"]
        //         },
        //         "event": "subscribed",
        //         "id": 0
        //     }
        //
        return message;
    }

    public virtual void handleError(WebSocketClient client, object message)
    {
        throw new ExchangeError ((string)add(add(this.id, " "), this.json(message))) ;
    }

    public override void handleMessage(WebSocketClient client, object message)
    {
        object status = this.safeString(message, "status");
        if (isTrue(isEqual(status, "error")))
        {
            this.handleError(client as WebSocketClient, message);
            return;
        }
        object eventVar = this.safeString(message, "event");
        object eventHandlers = new Dictionary<string, object>() {
            { "error", this.handleError },
            { "connected", this.handleConnected },
            { "subscribed", this.handleSubscribed },
        };
        object eventHandler = this.safeValue(eventHandlers, eventVar);
        if (isTrue(!isEqual(eventHandler, null)))
        {
            DynamicInvoker.InvokeMethod(eventHandler, new object[] { client, message});
            return;
        }
        object stream = this.safeString(message, "stream", "");
        object streamHandlers = new Dictionary<string, object>() {
            { "ticker@arr", this.handleTicker },
            { "@depth", this.handleOrderBook },
            { "@kline", this.handleOHLCV },
            { "@trades", this.handleTrades },
            { "outboundAccountPosition", this.handleBalance },
            { "orderUpdate", this.handleOrder },
            { "ownTrade", this.handleMyTrades },
        };
        object streams = new List<object>(((IDictionary<string,object>)streamHandlers).Keys);
        for (object i = 0; isLessThan(i, getArrayLength(streams)); postFixIncrement(ref i))
        {
            object streamContains = isGreaterThan(getIndexOf(stream, getValue(streams, i)), -1);
            if (isTrue(streamContains))
            {
                object handler = getValue(streamHandlers, getValue(streams, i));
                DynamicInvoker.InvokeMethod(handler, new object[] { client, message});
                return;
            }
        }
        throw new NotSupported ((string)add(add(this.id, " this message type is not supported yet. Message: "), this.json(message))) ;
    }

    public async virtual Task<object> authenticate(object parameters = null)
    {
        parameters ??= new Dictionary<string, object>();
        object url = getValue(getValue(this.urls, "api"), "ws");
        var client = this.client(url);
        object messageHash = "authenticated";
        object now = this.milliseconds();
        object subscription = this.safeValue(((WebSocketClient)client).subscriptions, messageHash);
        object expires = this.safeInteger(subscription, "expires");
        if (isTrue(isTrue(isEqual(subscription, null)) || isTrue(isGreaterThan(now, expires))))
        {
            subscription = await this.privatePostCreateAuthToken();
            ((IDictionary<string,object>)subscription)["expires"] = add(now, multiply(this.safeInteger(subscription, "timeout_duration"), 1000));
            //
            //     {
            //         "auth_key": "Xx***dM",
            //         "timeout_duration": 900
            //     }
            //
            ((IDictionary<string,object>)((WebSocketClient)client).subscriptions)[(string)messageHash] = subscription;
        }
        return this.safeString(subscription, "auth_key");
    }
}
