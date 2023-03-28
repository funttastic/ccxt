// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
     publicGetOrderBook (params?: {}): Promise<implicitReturnType>;
     publicGetTicker (params?: {}): Promise<implicitReturnType>;
     publicGetTransactions (params?: {}): Promise<implicitReturnType>;
     publicGetTradingPairs (params?: {}): Promise<implicitReturnType>;
     privatePostBalances (params?: {}): Promise<implicitReturnType>;
     privatePostBitcoinCashWithdrawal (params?: {}): Promise<implicitReturnType>;
     privatePostBitcoinCashDepositAddresses (params?: {}): Promise<implicitReturnType>;
     privatePostBitcoinDepositAddresses (params?: {}): Promise<implicitReturnType>;
     privatePostBitcoinWithdrawal (params?: {}): Promise<implicitReturnType>;
     privatePostBitcoinWithdrawalFees (params?: {}): Promise<implicitReturnType>;
     privatePostBuyInstant (params?: {}): Promise<implicitReturnType>;
     privatePostBuyLimit (params?: {}): Promise<implicitReturnType>;
     privatePostCancelOrder (params?: {}): Promise<implicitReturnType>;
     privatePostCancelOrderWithInfo (params?: {}): Promise<implicitReturnType>;
     privatePostCreateVoucher (params?: {}): Promise<implicitReturnType>;
     privatePostDashDepositAddresses (params?: {}): Promise<implicitReturnType>;
     privatePostDashWithdrawal (params?: {}): Promise<implicitReturnType>;
     privatePostEthereumWithdrawal (params?: {}): Promise<implicitReturnType>;
     privatePostEthereumDepositAddresses (params?: {}): Promise<implicitReturnType>;
     privatePostLitecoinWithdrawal (params?: {}): Promise<implicitReturnType>;
     privatePostLitecoinDepositAddresses (params?: {}): Promise<implicitReturnType>;
     privatePostOpenOrders (params?: {}): Promise<implicitReturnType>;
     privatePostOrder (params?: {}): Promise<implicitReturnType>;
     privatePostOrderHistory (params?: {}): Promise<implicitReturnType>;
     privatePostOrderById (params?: {}): Promise<implicitReturnType>;
     privatePostPusherAuth (params?: {}): Promise<implicitReturnType>;
     privatePostRedeemVoucher (params?: {}): Promise<implicitReturnType>;
     privatePostReplaceByBuyLimit (params?: {}): Promise<implicitReturnType>;
     privatePostReplaceByBuyInstant (params?: {}): Promise<implicitReturnType>;
     privatePostReplaceBySellLimit (params?: {}): Promise<implicitReturnType>;
     privatePostReplaceBySellInstant (params?: {}): Promise<implicitReturnType>;
     privatePostRippleDepositAddresses (params?: {}): Promise<implicitReturnType>;
     privatePostRippleWithdrawal (params?: {}): Promise<implicitReturnType>;
     privatePostSellInstant (params?: {}): Promise<implicitReturnType>;
     privatePostSellLimit (params?: {}): Promise<implicitReturnType>;
     privatePostTransactionHistory (params?: {}): Promise<implicitReturnType>;
     privatePostTraderFees (params?: {}): Promise<implicitReturnType>;
     privatePostTradeHistory (params?: {}): Promise<implicitReturnType>;
     privatePostTransfer (params?: {}): Promise<implicitReturnType>;
     privatePostTransferHistory (params?: {}): Promise<implicitReturnType>;
     privatePostUnconfirmedBitcoinDeposits (params?: {}): Promise<implicitReturnType>;
     privatePostUnconfirmedBitcoinCashDeposits (params?: {}): Promise<implicitReturnType>;
     privatePostUnconfirmedDashDeposits (params?: {}): Promise<implicitReturnType>;
     privatePostUnconfirmedEthereumDeposits (params?: {}): Promise<implicitReturnType>;
     privatePostUnconfirmedLitecoinDeposits (params?: {}): Promise<implicitReturnType>;
     privatePostUnconfirmedRippleDeposits (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange