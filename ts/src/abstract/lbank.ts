// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
     publicGetCurrencyPairs (params?: {}): Promise<implicitReturnType>;
     publicGetTicker (params?: {}): Promise<implicitReturnType>;
     publicGetDepth (params?: {}): Promise<implicitReturnType>;
     publicGetTrades (params?: {}): Promise<implicitReturnType>;
     publicGetKline (params?: {}): Promise<implicitReturnType>;
     publicGetAccuracy (params?: {}): Promise<implicitReturnType>;
     privatePostUserInfo (params?: {}): Promise<implicitReturnType>;
     privatePostCreateOrder (params?: {}): Promise<implicitReturnType>;
     privatePostCancelOrder (params?: {}): Promise<implicitReturnType>;
     privatePostOrdersInfo (params?: {}): Promise<implicitReturnType>;
     privatePostOrdersInfoHistory (params?: {}): Promise<implicitReturnType>;
     privatePostWithdraw (params?: {}): Promise<implicitReturnType>;
     privatePostWithdrawCancel (params?: {}): Promise<implicitReturnType>;
     privatePostWithdraws (params?: {}): Promise<implicitReturnType>;
     privatePostWithdrawConfigs (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange