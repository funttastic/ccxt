// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
     publicGetDealsSymbol (params?: {}): Promise<implicitReturnType>;
     publicGetTradesSellSymbol (params?: {}): Promise<implicitReturnType>;
     publicGetTradesBuySymbol (params?: {}): Promise<implicitReturnType>;
     publicGetJapanStatHighSymbol (params?: {}): Promise<implicitReturnType>;
     privatePostAuth (params?: {}): Promise<implicitReturnType>;
     privatePostAskSymbol (params?: {}): Promise<implicitReturnType>;
     privatePostBalance (params?: {}): Promise<implicitReturnType>;
     privatePostBidSymbol (params?: {}): Promise<implicitReturnType>;
     privatePostBuySymbol (params?: {}): Promise<implicitReturnType>;
     privatePostMyOrdersSymbol (params?: {}): Promise<implicitReturnType>;
     privatePostOrderStatusId (params?: {}): Promise<implicitReturnType>;
     privatePostRemoveOrderId (params?: {}): Promise<implicitReturnType>;
     privatePostSellSymbol (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange