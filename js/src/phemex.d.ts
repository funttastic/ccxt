import Exchange from './abstract/phemex.js';
import type { TransferEntry, Balances, Currency, FundingHistory, FundingRateHistory, Int, Market, Num, OHLCV, Order, OrderBook, OrderSide, OrderType, Str, Strings, Ticker, Tickers, Trade, Transaction, MarginModification, Currencies, Dict, TransferEntries, LeverageTier, LeverageTiers } from './base/types.js';
/**
 * @class phemex
 * @augments Exchange
 */
export default class phemex extends Exchange {
    describe(): any;
    parseSafeNumber(value?: any): any;
    parseSwapMarket(market: any): import("./base/types.js").MarketInterface;
    parseSpotMarket(market: any): import("./base/types.js").MarketInterface;
    fetchMarkets(params?: {}): Promise<Market[]>;
    fetchCurrencies(params?: {}): Promise<Currencies>;
    customParseBidAsk(bidask: any, priceKey?: number, amountKey?: number, market?: Market): number[];
    customParseOrderBook(orderbook: any, symbol: any, timestamp?: any, bidsKey?: string, asksKey?: string, priceKey?: number, amountKey?: number, market?: Market): any;
    fetchOrderBook(symbol: string, limit?: Int, params?: {}): Promise<OrderBook>;
    toEn(n: any, scale: any): number;
    toEv(amount: any, market?: Market): any;
    toEp(price: any, market?: Market): any;
    fromEn(en: any, scale: any): string;
    fromEp(ep: any, market?: Market): any;
    fromEv(ev: any, market?: Market): any;
    fromEr(er: any, market?: Market): any;
    parseOHLCV(ohlcv: any, market?: Market): OHLCV;
    fetchOHLCV(symbol: string, timeframe?: string, since?: Int, limit?: Int, params?: {}): Promise<OHLCV[]>;
    parseTicker(ticker: Dict, market?: Market): Ticker;
    fetchTicker(symbol: string, params?: {}): Promise<Ticker>;
    fetchTickers(symbols?: Strings, params?: {}): Promise<Tickers>;
    fetchTrades(symbol: string, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    parseTrade(trade: Dict, market?: Market): Trade;
    parseSpotBalance(response: any): Balances;
    parseSwapBalance(response: any): Balances;
    fetchBalance(params?: {}): Promise<Balances>;
    parseOrderStatus(status: Str): string;
    parseOrderType(type: Str): string;
    parseTimeInForce(timeInForce: Str): string;
    parseSpotOrder(order: Dict, market?: Market): Order;
    parseOrderSide(side: any): string;
    parseSwapOrder(order: any, market?: Market): Order;
    parseOrder(order: Dict, market?: Market): Order;
    createOrder(symbol: string, type: OrderType, side: OrderSide, amount: number, price?: Num, params?: {}): Promise<Order>;
    editOrder(id: string, symbol: string, type?: OrderType, side?: OrderSide, amount?: Num, price?: Num, params?: {}): Promise<Order>;
    cancelOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    cancelAllOrders(symbol?: Str, params?: {}): Promise<any>;
    fetchOrder(id: string, symbol?: Str, params?: {}): Promise<Order>;
    fetchOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchOpenOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchClosedOrders(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Order[]>;
    fetchMyTrades(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<Trade[]>;
    fetchDepositAddress(code: string, params?: {}): Promise<{
        currency: string;
        address: string;
        tag: string;
        network: any;
        info: any;
    }>;
    fetchDeposits(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    fetchWithdrawals(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<Transaction[]>;
    parseTransactionStatus(status: any): string;
    parseTransaction(transaction: Dict, currency?: Currency): Transaction;
    fetchPositions(symbols?: Strings, params?: {}): Promise<import("./base/types.js").Position[]>;
    parsePosition(position: Dict, market?: Market): import("./base/types.js").Position;
    fetchFundingHistory(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<FundingHistory[]>;
    parseFundingFeeToPrecision(value: any, market?: Market, currencyCode?: Str): any;
    fetchFundingRate(symbol: string, params?: {}): Promise<{
        info: any;
        symbol: string;
        markPrice: any;
        indexPrice: any;
        interestRate: any;
        estimatedSettlePrice: any;
        timestamp: number;
        datetime: string;
        fundingRate: any;
        fundingTimestamp: any;
        fundingDatetime: any;
        nextFundingRate: any;
        nextFundingTimestamp: any;
        nextFundingDatetime: any;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    }>;
    parseFundingRate(contract: any, market?: Market): {
        info: any;
        symbol: string;
        markPrice: any;
        indexPrice: any;
        interestRate: any;
        estimatedSettlePrice: any;
        timestamp: number;
        datetime: string;
        fundingRate: any;
        fundingTimestamp: any;
        fundingDatetime: any;
        nextFundingRate: any;
        nextFundingTimestamp: any;
        nextFundingDatetime: any;
        previousFundingRate: any;
        previousFundingTimestamp: any;
        previousFundingDatetime: any;
    };
    setMargin(symbol: string, amount: number, params?: {}): Promise<MarginModification>;
    parseMarginStatus(status: any): string;
    parseMarginModification(data: Dict, market?: Market): MarginModification;
    setMarginMode(marginMode: string, symbol?: Str, params?: {}): Promise<any>;
    setPositionMode(hedged: boolean, symbol?: Str, params?: {}): Promise<any>;
    fetchLeverageTiers(symbols?: Strings, params?: {}): Promise<LeverageTiers>;
    parseMarketLeverageTiers(info: any, market?: Market): LeverageTier[];
    sign(path: any, api?: string, method?: string, params?: {}, headers?: any, body?: any): {
        url: string;
        method: string;
        body: any;
        headers: any;
    };
    setLeverage(leverage: Int, symbol?: Str, params?: {}): Promise<any>;
    transfer(code: string, amount: number, fromAccount: string, toAccount: string, params?: {}): Promise<TransferEntry>;
    fetchTransfers(code?: Str, since?: Int, limit?: Int, params?: {}): Promise<TransferEntries>;
    parseTransfer(transfer: Dict, currency?: Currency): TransferEntry;
    parseTransferStatus(status: Str): Str;
    fetchFundingRateHistory(symbol?: Str, since?: Int, limit?: Int, params?: {}): Promise<FundingRateHistory[]>;
    withdraw(code: string, amount: number, address: string, tag?: any, params?: {}): Promise<Transaction>;
    handleErrors(httpCode: any, reason: any, url: any, method: any, headers: any, body: any, response: any, requestHeaders: any, requestBody: any): any;
}
