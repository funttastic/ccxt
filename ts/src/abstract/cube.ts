// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
    restIridiumPublicGetMarkets (params?: {}): Promise<implicitReturnType>;
    restIridiumPublicGetHistoryKlines (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersCheck (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersInfo (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersSubaccountSubaccountIdPositions (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersSubaccountSubaccountIdTransfers (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersSubaccountSubaccountIdDeposits (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersSubaccountSubaccountIdWithdrawals (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersSubaccountSubaccountIdOrders (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersSubaccountSubaccountIdFills (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersFeeEstimateMarketId (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersAddress (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersAddressSettings (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivatePostUsersSubaccounts (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivatePostUsersWithdraw (params?: {}): Promise<implicitReturnType>;
    restIridiumPrivatePatchUsersSubaccountSubaccountId (params?: {}): Promise<implicitReturnType>;
    restMendelevPublicGetBookMarketIdSnapshot (params?: {}): Promise<implicitReturnType>;
    restMendelevPublicGetParsedBookMarketSymbolSnapshot (params?: {}): Promise<implicitReturnType>;
    restMendelevPublicGetBookMarketIdRecentTrades (params?: {}): Promise<implicitReturnType>;
    restMendelevPublicGetParsedBookMarketSymbolRecentTrades (params?: {}): Promise<implicitReturnType>;
    restMendelevPublicGetTickersSnapshot (params?: {}): Promise<implicitReturnType>;
    restMendelevPublicGetParsedTickers (params?: {}): Promise<implicitReturnType>;
    restOsmiumPrivateGetOrders (params?: {}): Promise<implicitReturnType>;
    restOsmiumPrivateGetPositions (params?: {}): Promise<implicitReturnType>;
    restOsmiumPrivateDeleteOrders (params?: {}): Promise<implicitReturnType>;
    restOsmiumPrivateDeleteOrder (params?: {}): Promise<implicitReturnType>;
    restOsmiumPrivatePostOrder (params?: {}): Promise<implicitReturnType>;
    restOsmiumPrivatePatchOrder (params?: {}): Promise<implicitReturnType>;
}

abstract class Exchange extends _Exchange {}

export default Exchange
