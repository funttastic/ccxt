import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';
interface Exchange {
    v1PublicGetAmmMarket(params?: {}): Promise<implicitReturnType>;
    v1PublicGetCommonCurrencyRate(params?: {}): Promise<implicitReturnType>;
    v1PublicGetCommonAssetConfig(params?: {}): Promise<implicitReturnType>;
    v1PublicGetCommonMaintainInfo(params?: {}): Promise<implicitReturnType>;
    v1PublicGetCommonTempMaintainInfo(params?: {}): Promise<implicitReturnType>;
    v1PublicGetMarginMarket(params?: {}): Promise<implicitReturnType>;
    v1PublicGetMarketInfo(params?: {}): Promise<implicitReturnType>;
    v1PublicGetMarketList(params?: {}): Promise<implicitReturnType>;
    v1PublicGetMarketTicker(params?: {}): Promise<implicitReturnType>;
    v1PublicGetMarketTickerAll(params?: {}): Promise<implicitReturnType>;
    v1PublicGetMarketDepth(params?: {}): Promise<implicitReturnType>;
    v1PublicGetMarketDeals(params?: {}): Promise<implicitReturnType>;
    v1PublicGetMarketKline(params?: {}): Promise<implicitReturnType>;
    v1PublicGetMarketDetail(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetAccountAmmBalance(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetAccountInvestmentBalance(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetAccountBalanceHistory(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetAccountMarketFee(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetBalanceCoinDeposit(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetBalanceCoinWithdraw(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetBalanceInfo(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetBalanceDepositAddressCoinType(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetContractTransferHistory(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetCreditInfo(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetCreditBalance(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetInvestmentTransferHistory(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetMarginAccount(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetMarginConfig(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetMarginLoanHistory(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetMarginTransferHistory(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrderDeals(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrderFinished(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrderPending(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrderStatus(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrderStatusBatch(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrderUserDeals(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrderStopFinished(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrderStopPending(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrderUserTradeFee(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetOrderMarketTradeInfo(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetSubAccountBalance(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetSubAccountTransferHistory(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetSubAccountAuthApi(params?: {}): Promise<implicitReturnType>;
    v1PrivateGetSubAccountAuthApiUserAuthId(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostBalanceCoinWithdraw(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostContractBalanceTransfer(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostMarginFlat(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostMarginLoan(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostMarginTransfer(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostOrderLimitBatch(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostOrderIoc(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostOrderLimit(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostOrderMarket(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostOrderModify(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostOrderStopLimit(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostOrderStopMarket(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostOrderStopModify(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostSubAccountTransfer(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostSubAccountRegister(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostSubAccountUnfrozen(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostSubAccountFrozen(params?: {}): Promise<implicitReturnType>;
    v1PrivatePostSubAccountAuthApi(params?: {}): Promise<implicitReturnType>;
    v1PrivatePutBalanceDepositAddressCoinType(params?: {}): Promise<implicitReturnType>;
    v1PrivatePutSubAccountUnfrozen(params?: {}): Promise<implicitReturnType>;
    v1PrivatePutSubAccountFrozen(params?: {}): Promise<implicitReturnType>;
    v1PrivatePutSubAccountAuthApiUserAuthId(params?: {}): Promise<implicitReturnType>;
    v1PrivatePutV1AccountSettings(params?: {}): Promise<implicitReturnType>;
    v1PrivateDeleteBalanceCoinWithdraw(params?: {}): Promise<implicitReturnType>;
    v1PrivateDeleteOrderPendingBatch(params?: {}): Promise<implicitReturnType>;
    v1PrivateDeleteOrderPending(params?: {}): Promise<implicitReturnType>;
    v1PrivateDeleteOrderStopPending(params?: {}): Promise<implicitReturnType>;
    v1PrivateDeleteOrderStopPendingId(params?: {}): Promise<implicitReturnType>;
    v1PrivateDeleteOrderPendingByClientId(params?: {}): Promise<implicitReturnType>;
    v1PrivateDeleteOrderStopPendingByClientId(params?: {}): Promise<implicitReturnType>;
    v1PrivateDeleteSubAccountAuthApiUserAuthId(params?: {}): Promise<implicitReturnType>;
    v1PrivateDeleteSubAccountAuthorizeId(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPublicGetPing(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPublicGetTime(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPublicGetMarketList(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPublicGetMarketLimitConfig(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPublicGetMarketTicker(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPublicGetMarketTickerAll(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPublicGetMarketDepth(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPublicGetMarketDeals(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPublicGetMarketFundingHistory(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPublicGetMarketKline(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetMarketUserDeals(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetAssetQuery(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetOrderPending(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetOrderFinished(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetOrderStopFinished(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetOrderStopPending(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetOrderStatus(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetOrderStopStatus(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetPositionFinished(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetPositionPending(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetPositionFunding(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetPositionAdlHistory(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetMarketPreference(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetPositionMarginHistory(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivateGetPositionSettleHistory(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostMarketAdjustLeverage(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostMarketPositionExpect(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderPutLimit(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderPutMarket(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderPutStopLimit(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderPutStopMarket(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderModify(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderModifyStop(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderCancel(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderCancelAll(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderCancelBatch(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderCancelStop(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderCancelStopAll(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderCloseLimit(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderCloseMarket(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostPositionAdjustMargin(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostPositionStopLoss(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostPositionTakeProfit(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostPositionMarketClose(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderCancelByClientId(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostOrderCancelStopByClientId(params?: {}): Promise<implicitReturnType>;
    v1PerpetualPrivatePostMarketPreference(params?: {}): Promise<implicitReturnType>;
    v2PublicGetMaintainInfo(params?: {}): Promise<implicitReturnType>;
    v2PublicGetPing(params?: {}): Promise<implicitReturnType>;
    v2PublicGetTime(params?: {}): Promise<implicitReturnType>;
    v2PublicGetSpotMarket(params?: {}): Promise<implicitReturnType>;
    v2PublicGetSpotTicker(params?: {}): Promise<implicitReturnType>;
    v2PublicGetSpotDepth(params?: {}): Promise<implicitReturnType>;
    v2PublicGetSpotDeals(params?: {}): Promise<implicitReturnType>;
    v2PublicGetSpotKline(params?: {}): Promise<implicitReturnType>;
    v2PublicGetSpotIndex(params?: {}): Promise<implicitReturnType>;
    v2PublicGetFuturesMarket(params?: {}): Promise<implicitReturnType>;
    v2PublicGetFuturesTicker(params?: {}): Promise<implicitReturnType>;
    v2PublicGetFuturesDepth(params?: {}): Promise<implicitReturnType>;
    v2PublicGetFuturesDeals(params?: {}): Promise<implicitReturnType>;
    v2PublicGetFuturesKline(params?: {}): Promise<implicitReturnType>;
    v2PublicGetFuturesIndex(params?: {}): Promise<implicitReturnType>;
    v2PublicGetFuturesFundingRate(params?: {}): Promise<implicitReturnType>;
    v2PublicGetFuturesFundingRateHistory(params?: {}): Promise<implicitReturnType>;
    v2PublicGetFuturesPositionLevel(params?: {}): Promise<implicitReturnType>;
    v2PublicGetFuturesLiquidationHistory(params?: {}): Promise<implicitReturnType>;
    v2PublicGetFuturesBasisHistory(params?: {}): Promise<implicitReturnType>;
    v2PublicGetAssetsDepositWithdrawConfig(params?: {}): Promise<implicitReturnType>;
    v2PublicGetAssetsAllDepositWithdrawConfig(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountSubs(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountSubsApiDetail(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountSubsInfo(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountSubsApi(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountSubsTransferHistory(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountSubsSpotBalance(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAccountTradeFeeRate(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAssetsSpotBalance(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAssetsFuturesBalance(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAssetsMarginBalance(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAssetsFinancialBalance(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAssetsAmmLiquidity(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAssetsCreditInfo(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAssetsMarginBorrowHistory(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAssetsMarginInterestLimit(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAssetsDepositAddress(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAssetsDepositHistory(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAssetsWithdraw(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetAssetsTransferHistory(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetSpotOrderStatus(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetSpotBatchOrderStatus(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetSpotPendingOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetSpotFinishedOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetSpotPendingStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetSpotFinishedStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetSpotUserDeals(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetSpotOrderDeals(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesOrderStatus(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesBatchOrderStatus(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesPendingOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesFinishedOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesPendingStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesFinishedStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesUserDeals(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesOrderDeals(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesPendingPosition(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesFinishedPosition(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesPositionMarginHistory(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesPositionFundingHistory(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesPositionAdlHistory(params?: {}): Promise<implicitReturnType>;
    v2PrivateGetFuturesPositionSettleHistory(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountSubs(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountSubsFrozen(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountSubsUnfrozen(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountSubsApi(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountSubsEditApi(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountSubsDeleteApi(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountSubsTransfer(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAccountSettings(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAssetsMarginBorrow(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAssetsMarginRepay(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAssetsRenewalDepositAddress(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAssetsWithdraw(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAssetsCancelWithdraw(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAssetsTransfer(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAssetsAmmAddLiquidity(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostAssetsAmmRemoveLiquidity(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostSpotOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostSpotStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostSpotBatchOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostSpotBatchStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostSpotModifyOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostSpotModifyStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostSpotCancelAllOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostSpotCancelOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostSpotCancelStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostSpotCancelBatchOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostSpotCancelBatchStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostSpotCancelOrderByClientId(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostSpotCancelStopOrderByClientId(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesBatchOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesBatchStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesModifyOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesModifyStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesCancelAllOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesCancelOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesCancelStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesCancelBatchOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesCancelBatchStopOrder(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesCancelOrderByClientId(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesCancelStopOrderByClientId(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesClosePosition(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesAdjustPositionMargin(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesAdjustPositionLeverage(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesSetPositionStopLoss(params?: {}): Promise<implicitReturnType>;
    v2PrivatePostFuturesSetPositionTakeProfit(params?: {}): Promise<implicitReturnType>;
}
declare abstract class Exchange extends _Exchange {
}
export default Exchange;
