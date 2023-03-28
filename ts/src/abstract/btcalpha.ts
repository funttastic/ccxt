// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
     publicGetCurrencies (params?: {}): Promise<implicitReturnType>;
     publicGetPairs (params?: {}): Promise<implicitReturnType>;
     publicGetOrderbookPairName (params?: {}): Promise<implicitReturnType>;
     publicGetExchanges (params?: {}): Promise<implicitReturnType>;
     publicGetChartsPairTypeChart (params?: {}): Promise<implicitReturnType>;
     publicGetTicker (params?: {}): Promise<implicitReturnType>;
     privateGetWallets (params?: {}): Promise<implicitReturnType>;
     privateGetOrdersOwn (params?: {}): Promise<implicitReturnType>;
     privateGetOrderId (params?: {}): Promise<implicitReturnType>;
     privateGetExchangesOwn (params?: {}): Promise<implicitReturnType>;
     privateGetDeposits (params?: {}): Promise<implicitReturnType>;
     privateGetWithdraws (params?: {}): Promise<implicitReturnType>;
     privatePostOrder (params?: {}): Promise<implicitReturnType>;
     privatePostOrderCancel (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange