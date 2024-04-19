import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    restIridiumPublicGetMarkets(params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersCheck(params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersInfo(params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersPositions(params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersTransfers(params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersDeposits(params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersWithdrawals(params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersSubaccountSubaccountIdOrders(params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersFills(params?: {}): Promise<implicitReturnType>;
    restIridiumPrivateGetUsersFeeEstimateMarketId(params?: {}): Promise<implicitReturnType>;
    restIridiumPrivatePostUsersSubaccounts(params?: {}): Promise<implicitReturnType>;
    restIridiumPrivatePostUsersSubaccountsSubaccountId(params?: {}): Promise<implicitReturnType>;
    restMendelevPublicGetBookMarketIdSnapshot(params?: {}): Promise<implicitReturnType>;
    restMendelevPublicGetParsedBookMarketSymbolSnapshot(params?: {}): Promise<implicitReturnType>;
    restMendelevPublicGetBookMarketIdRecentTrades(params?: {}): Promise<implicitReturnType>;
    restMendelevPublicGetParsedBookMarketSymbolRecentTrades(params?: {}): Promise<implicitReturnType>;
    restMendelevPublicGetTickersSnapshot(params?: {}): Promise<implicitReturnType>;
    restMendelevPublicGetParsedTickers(params?: {}): Promise<implicitReturnType>;
    restOsmiumPrivateGetOrders(params?: {}): Promise<implicitReturnType>;
    restOsmiumPrivateDeleteOrders(params?: {}): Promise<implicitReturnType>;
    restOsmiumPrivateDeleteOrder(params?: {}): Promise<implicitReturnType>;
    restOsmiumPrivatePostOrder(params?: {}): Promise<implicitReturnType>;
    restOsmiumPrivatePatchOrder(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
