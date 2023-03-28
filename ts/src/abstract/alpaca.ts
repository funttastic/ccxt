// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
     marketsGetAssetsPublicBeta (params?: {}): Promise<implicitReturnType>;
     privateGetAccount (params?: {}): Promise<implicitReturnType>;
     privateGetOrders (params?: {}): Promise<implicitReturnType>;
     privateGetOrdersOrderId (params?: {}): Promise<implicitReturnType>;
     privateGetPositions (params?: {}): Promise<implicitReturnType>;
     privateGetPositionsSymbol (params?: {}): Promise<implicitReturnType>;
     privateGetAccountActivitiesActivityType (params?: {}): Promise<implicitReturnType>;
     privatePostOrders (params?: {}): Promise<implicitReturnType>;
     privateDeleteOrders (params?: {}): Promise<implicitReturnType>;
     privateDeleteOrdersOrderId (params?: {}): Promise<implicitReturnType>;
     cryptoPublicGetCryptoLatestOrderbooks (params?: {}): Promise<implicitReturnType>;
     cryptoPublicGetCryptoTrades (params?: {}): Promise<implicitReturnType>;
     cryptoPublicGetCryptoQuotes (params?: {}): Promise<implicitReturnType>;
     cryptoPublicGetCryptoLatestQuotes (params?: {}): Promise<implicitReturnType>;
     cryptoPublicGetCryptoBars (params?: {}): Promise<implicitReturnType>;
     cryptoPublicGetCryptoSnapshots (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange