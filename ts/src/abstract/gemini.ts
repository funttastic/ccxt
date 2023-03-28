// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

import { implicitReturnType } from '../base/types.js';
import { Exchange as _Exchange } from '../base/Exchange.js';

interface Exchange {
     webGetRestApi (params?: {}): Promise<implicitReturnType>;
     publicGetV1Symbols (params?: {}): Promise<implicitReturnType>;
     publicGetV1SymbolsDetailsSymbol (params?: {}): Promise<implicitReturnType>;
     publicGetV1StakingRates (params?: {}): Promise<implicitReturnType>;
     publicGetV1PubtickerSymbol (params?: {}): Promise<implicitReturnType>;
     publicGetV2TickerSymbol (params?: {}): Promise<implicitReturnType>;
     publicGetV2CandlesSymbolTimeframe (params?: {}): Promise<implicitReturnType>;
     publicGetV1TradesSymbol (params?: {}): Promise<implicitReturnType>;
     publicGetV1AuctionSymbol (params?: {}): Promise<implicitReturnType>;
     publicGetV1AuctionSymbolHistory (params?: {}): Promise<implicitReturnType>;
     publicGetV1Pricefeed (params?: {}): Promise<implicitReturnType>;
     publicGetV1BookSymbol (params?: {}): Promise<implicitReturnType>;
     publicGetV1EarnRates (params?: {}): Promise<implicitReturnType>;
     privatePostV1StakingUnstake (params?: {}): Promise<implicitReturnType>;
     privatePostV1StakingStake (params?: {}): Promise<implicitReturnType>;
     privatePostV1StakingRewards (params?: {}): Promise<implicitReturnType>;
     privatePostV1StakingHistory (params?: {}): Promise<implicitReturnType>;
     privatePostV1OrderNew (params?: {}): Promise<implicitReturnType>;
     privatePostV1OrderCancel (params?: {}): Promise<implicitReturnType>;
     privatePostV1WrapSymbol (params?: {}): Promise<implicitReturnType>;
     privatePostV1OrderCancelSession (params?: {}): Promise<implicitReturnType>;
     privatePostV1OrderCancelAll (params?: {}): Promise<implicitReturnType>;
     privatePostV1OrderStatus (params?: {}): Promise<implicitReturnType>;
     privatePostV1Orders (params?: {}): Promise<implicitReturnType>;
     privatePostV1Mytrades (params?: {}): Promise<implicitReturnType>;
     privatePostV1Notionalvolume (params?: {}): Promise<implicitReturnType>;
     privatePostV1Tradevolume (params?: {}): Promise<implicitReturnType>;
     privatePostV1ClearingNew (params?: {}): Promise<implicitReturnType>;
     privatePostV1ClearingStatus (params?: {}): Promise<implicitReturnType>;
     privatePostV1ClearingCancel (params?: {}): Promise<implicitReturnType>;
     privatePostV1ClearingConfirm (params?: {}): Promise<implicitReturnType>;
     privatePostV1Balances (params?: {}): Promise<implicitReturnType>;
     privatePostV1BalancesStaking (params?: {}): Promise<implicitReturnType>;
     privatePostV1NotionalbalancesCurrency (params?: {}): Promise<implicitReturnType>;
     privatePostV1Transfers (params?: {}): Promise<implicitReturnType>;
     privatePostV1AddressesNetwork (params?: {}): Promise<implicitReturnType>;
     privatePostV1DepositNetworkNewAddress (params?: {}): Promise<implicitReturnType>;
     privatePostV1DepositCurrencyNewAddress (params?: {}): Promise<implicitReturnType>;
     privatePostV1WithdrawCurrency (params?: {}): Promise<implicitReturnType>;
     privatePostV1AccountTransferCurrency (params?: {}): Promise<implicitReturnType>;
     privatePostV1PaymentsAddbank (params?: {}): Promise<implicitReturnType>;
     privatePostV1PaymentsMethods (params?: {}): Promise<implicitReturnType>;
     privatePostV1PaymentsSenWithdraw (params?: {}): Promise<implicitReturnType>;
     privatePostV1BalancesEarn (params?: {}): Promise<implicitReturnType>;
     privatePostV1EarnInterest (params?: {}): Promise<implicitReturnType>;
     privatePostV1EarnHistory (params?: {}): Promise<implicitReturnType>;
     privatePostV1ApprovedAddressesNetworkRequest (params?: {}): Promise<implicitReturnType>;
     privatePostV1ApprovedAddressesAccountNetwork (params?: {}): Promise<implicitReturnType>;
     privatePostV1ApprovedAddressesNetworkRemove (params?: {}): Promise<implicitReturnType>;
     privatePostV1Account (params?: {}): Promise<implicitReturnType>;
     privatePostV1AccountCreate (params?: {}): Promise<implicitReturnType>;
     privatePostV1AccountList (params?: {}): Promise<implicitReturnType>;
     privatePostV1Heartbeat (params?: {}): Promise<implicitReturnType>;
}
abstract class Exchange extends _Exchange {}

export default Exchange