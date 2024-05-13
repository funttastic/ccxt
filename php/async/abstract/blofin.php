<?php

namespace ccxt\async\abstract;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code


abstract class blofin extends \ccxt\async\Exchange {
    public function public_get_market_instruments($params = array()) {
        return $this->request('market/instruments', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function public_get_market_tickers($params = array()) {
        return $this->request('market/tickers', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function public_get_market_books($params = array()) {
        return $this->request('market/books', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function public_get_market_trades($params = array()) {
        return $this->request('market/trades', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function public_get_market_candles($params = array()) {
        return $this->request('market/candles', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function public_get_market_mark_price($params = array()) {
        return $this->request('market/mark-price', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function public_get_market_funding_rate($params = array()) {
        return $this->request('market/funding-rate', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function public_get_market_funding_rate_history($params = array()) {
        return $this->request('market/funding-rate-history', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_asset_balances($params = array()) {
        return $this->request('asset/balances', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_trade_orders_pending($params = array()) {
        return $this->request('trade/orders-pending', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_trade_fills_history($params = array()) {
        return $this->request('trade/fills-history', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_asset_deposit_history($params = array()) {
        return $this->request('asset/deposit-history', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_asset_withdrawal_history($params = array()) {
        return $this->request('asset/withdrawal-history', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_asset_bills($params = array()) {
        return $this->request('asset/bills', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_account_balance($params = array()) {
        return $this->request('account/balance', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_account_positions($params = array()) {
        return $this->request('account/positions', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_account_leverage_info($params = array()) {
        return $this->request('account/leverage-info', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_account_margin_mode($params = array()) {
        return $this->request('account/margin-mode', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_account_batch_leverage_info($params = array()) {
        return $this->request('account/batch-leverage-info', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_trade_orders_tpsl_pending($params = array()) {
        return $this->request('trade/orders-tpsl-pending', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_trade_orders_history($params = array()) {
        return $this->request('trade/orders-history', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_trade_orders_tpsl_history($params = array()) {
        return $this->request('trade/orders-tpsl-history', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_user_query_apikey($params = array()) {
        return $this->request('user/query-apikey', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_get_affiliate_basic($params = array()) {
        return $this->request('affiliate/basic', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function private_post_trade_order($params = array()) {
        return $this->request('trade/order', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function private_post_trade_cancel_order($params = array()) {
        return $this->request('trade/cancel-order', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function private_post_account_set_leverage($params = array()) {
        return $this->request('account/set-leverage', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function private_post_trade_batch_orders($params = array()) {
        return $this->request('trade/batch-orders', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function private_post_trade_order_tpsl($params = array()) {
        return $this->request('trade/order-tpsl', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function private_post_trade_cancel_batch_orders($params = array()) {
        return $this->request('trade/cancel-batch-orders', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function private_post_trade_cancel_tpsl($params = array()) {
        return $this->request('trade/cancel-tpsl', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function private_post_trade_close_position($params = array()) {
        return $this->request('trade/close-position', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function private_post_asset_transfer($params = array()) {
        return $this->request('asset/transfer', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function publicGetMarketInstruments($params = array()) {
        return $this->request('market/instruments', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function publicGetMarketTickers($params = array()) {
        return $this->request('market/tickers', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function publicGetMarketBooks($params = array()) {
        return $this->request('market/books', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function publicGetMarketTrades($params = array()) {
        return $this->request('market/trades', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function publicGetMarketCandles($params = array()) {
        return $this->request('market/candles', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function publicGetMarketMarkPrice($params = array()) {
        return $this->request('market/mark-price', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function publicGetMarketFundingRate($params = array()) {
        return $this->request('market/funding-rate', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function publicGetMarketFundingRateHistory($params = array()) {
        return $this->request('market/funding-rate-history', 'public', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetAssetBalances($params = array()) {
        return $this->request('asset/balances', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetTradeOrdersPending($params = array()) {
        return $this->request('trade/orders-pending', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetTradeFillsHistory($params = array()) {
        return $this->request('trade/fills-history', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetAssetDepositHistory($params = array()) {
        return $this->request('asset/deposit-history', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetAssetWithdrawalHistory($params = array()) {
        return $this->request('asset/withdrawal-history', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetAssetBills($params = array()) {
        return $this->request('asset/bills', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetAccountBalance($params = array()) {
        return $this->request('account/balance', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetAccountPositions($params = array()) {
        return $this->request('account/positions', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetAccountLeverageInfo($params = array()) {
        return $this->request('account/leverage-info', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetAccountMarginMode($params = array()) {
        return $this->request('account/margin-mode', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetAccountBatchLeverageInfo($params = array()) {
        return $this->request('account/batch-leverage-info', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetTradeOrdersTpslPending($params = array()) {
        return $this->request('trade/orders-tpsl-pending', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetTradeOrdersHistory($params = array()) {
        return $this->request('trade/orders-history', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetTradeOrdersTpslHistory($params = array()) {
        return $this->request('trade/orders-tpsl-history', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetUserQueryApikey($params = array()) {
        return $this->request('user/query-apikey', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privateGetAffiliateBasic($params = array()) {
        return $this->request('affiliate/basic', 'private', 'GET', $params, null, null, array("cost" => 1));
    }
    public function privatePostTradeOrder($params = array()) {
        return $this->request('trade/order', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function privatePostTradeCancelOrder($params = array()) {
        return $this->request('trade/cancel-order', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function privatePostAccountSetLeverage($params = array()) {
        return $this->request('account/set-leverage', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function privatePostTradeBatchOrders($params = array()) {
        return $this->request('trade/batch-orders', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function privatePostTradeOrderTpsl($params = array()) {
        return $this->request('trade/order-tpsl', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function privatePostTradeCancelBatchOrders($params = array()) {
        return $this->request('trade/cancel-batch-orders', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function privatePostTradeCancelTpsl($params = array()) {
        return $this->request('trade/cancel-tpsl', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function privatePostTradeClosePosition($params = array()) {
        return $this->request('trade/close-position', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
    public function privatePostAssetTransfer($params = array()) {
        return $this->request('asset/transfer', 'private', 'POST', $params, null, null, array("cost" => 1));
    }
}
