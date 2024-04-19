<?php

namespace ccxt\abstract;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code


abstract class cube extends \ccxt\Exchange {
    public function rest_iridium_public_get_markets($params = array()) {
        return $this->request('/markets', array('rest', 'iridium', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_iridium_private_get_users_check($params = array()) {
        return $this->request('/users/check', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_iridium_private_get_users_info($params = array()) {
        return $this->request('/users/info', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_iridium_private_get_users_positions($params = array()) {
        return $this->request('/users/positions', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_iridium_private_get_users_transfers($params = array()) {
        return $this->request('/users/transfers', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_iridium_private_get_users_deposits($params = array()) {
        return $this->request('/users/deposits', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_iridium_private_get_users_withdrawals($params = array()) {
        return $this->request('/users/withdrawals', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_iridium_private_get_users_subaccount_subaccountid_orders($params = array()) {
        return $this->request('/users/subaccount/{subaccountId}/orders', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_iridium_private_get_users_subaccount_subaccountid_fills($params = array()) {
        return $this->request('/users/subaccount/{subaccountId}/fills', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_iridium_private_get_users_fee_estimate_market_id($params = array()) {
        return $this->request('/users/fee-estimate/{market_id}', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_iridium_private_post_users_subaccounts($params = array()) {
        return $this->request('/users/subaccounts', array('rest', 'iridium', 'private'), 'POST', $params, null, null, array("cost" => 1));
    }
    public function rest_iridium_private_post_users_subaccounts_subaccount_id($params = array()) {
        return $this->request('/users/subaccounts/{subaccount_id}', array('rest', 'iridium', 'private'), 'POST', $params, null, null, array("cost" => 1));
    }
    public function rest_iridium_private_post_users_subaccounts_subaccount_id_withdrawals($params = array()) {
        return $this->request('/users/subaccounts/{subaccount_id}/withdrawals', array('rest', 'iridium', 'private'), 'POST', $params, null, null, array("cost" => 1));
    }
    public function rest_mendelev_public_get_book_market_id_snapshot($params = array()) {
        return $this->request('/book/{market_id}/snapshot', array('rest', 'mendelev', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_mendelev_public_get_parsed_book_market_symbol_snapshot($params = array()) {
        return $this->request('/parsed/book/{market_symbol}/snapshot', array('rest', 'mendelev', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_mendelev_public_get_book_market_id_recent_trades($params = array()) {
        return $this->request('/book/{market_id}/recent-trades', array('rest', 'mendelev', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_mendelev_public_get_parsed_book_market_symbol_recent_trades($params = array()) {
        return $this->request('/parsed/book/{market_symbol}/recent-trades', array('rest', 'mendelev', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_mendelev_public_get_tickers_snapshot($params = array()) {
        return $this->request('/tickers/snapshot', array('rest', 'mendelev', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_mendelev_public_get_parsed_tickers($params = array()) {
        return $this->request('/parsed/tickers', array('rest', 'mendelev', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_osmium_private_get_orders($params = array()) {
        return $this->request('/orders', array('rest', 'osmium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function rest_osmium_private_delete_orders($params = array()) {
        return $this->request('/orders', array('rest', 'osmium', 'private'), 'DELETE', $params, null, null, array("cost" => 1));
    }
    public function rest_osmium_private_delete_order($params = array()) {
        return $this->request('/order', array('rest', 'osmium', 'private'), 'DELETE', $params, null, null, array("cost" => 1));
    }
    public function rest_osmium_private_post_order($params = array()) {
        return $this->request('/order', array('rest', 'osmium', 'private'), 'POST', $params, null, null, array("cost" => 1));
    }
    public function rest_osmium_private_patch_order($params = array()) {
        return $this->request('/order', array('rest', 'osmium', 'private'), 'PATCH', $params, null, null, array("cost" => 1));
    }
    public function restIridiumPublicGetMarkets($params = array()) {
        return $this->request('/markets', array('rest', 'iridium', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restIridiumPrivateGetUsersCheck($params = array()) {
        return $this->request('/users/check', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restIridiumPrivateGetUsersInfo($params = array()) {
        return $this->request('/users/info', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restIridiumPrivateGetUsersPositions($params = array()) {
        return $this->request('/users/positions', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restIridiumPrivateGetUsersTransfers($params = array()) {
        return $this->request('/users/transfers', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restIridiumPrivateGetUsersDeposits($params = array()) {
        return $this->request('/users/deposits', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restIridiumPrivateGetUsersWithdrawals($params = array()) {
        return $this->request('/users/withdrawals', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restIridiumPrivateGetUsersSubaccountSubaccountIdOrders($params = array()) {
        return $this->request('/users/subaccount/{subaccountId}/orders', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restIridiumPrivateGetUsersSubaccountSubaccountIdFills($params = array()) {
        return $this->request('/users/subaccount/{subaccountId}/fills', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restIridiumPrivateGetUsersFeeEstimateMarketId($params = array()) {
        return $this->request('/users/fee-estimate/{market_id}', array('rest', 'iridium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restIridiumPrivatePostUsersSubaccounts($params = array()) {
        return $this->request('/users/subaccounts', array('rest', 'iridium', 'private'), 'POST', $params, null, null, array("cost" => 1));
    }
    public function restIridiumPrivatePostUsersSubaccountsSubaccountId($params = array()) {
        return $this->request('/users/subaccounts/{subaccount_id}', array('rest', 'iridium', 'private'), 'POST', $params, null, null, array("cost" => 1));
    }
    public function restIridiumPrivatePostUsersSubaccountsSubaccountIdWithdrawals($params = array()) {
        return $this->request('/users/subaccounts/{subaccount_id}/withdrawals', array('rest', 'iridium', 'private'), 'POST', $params, null, null, array("cost" => 1));
    }
    public function restMendelevPublicGetBookMarketIdSnapshot($params = array()) {
        return $this->request('/book/{market_id}/snapshot', array('rest', 'mendelev', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restMendelevPublicGetParsedBookMarketSymbolSnapshot($params = array()) {
        return $this->request('/parsed/book/{market_symbol}/snapshot', array('rest', 'mendelev', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restMendelevPublicGetBookMarketIdRecentTrades($params = array()) {
        return $this->request('/book/{market_id}/recent-trades', array('rest', 'mendelev', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restMendelevPublicGetParsedBookMarketSymbolRecentTrades($params = array()) {
        return $this->request('/parsed/book/{market_symbol}/recent-trades', array('rest', 'mendelev', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restMendelevPublicGetTickersSnapshot($params = array()) {
        return $this->request('/tickers/snapshot', array('rest', 'mendelev', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restMendelevPublicGetParsedTickers($params = array()) {
        return $this->request('/parsed/tickers', array('rest', 'mendelev', 'public'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restOsmiumPrivateGetOrders($params = array()) {
        return $this->request('/orders', array('rest', 'osmium', 'private'), 'GET', $params, null, null, array("cost" => 1));
    }
    public function restOsmiumPrivateDeleteOrders($params = array()) {
        return $this->request('/orders', array('rest', 'osmium', 'private'), 'DELETE', $params, null, null, array("cost" => 1));
    }
    public function restOsmiumPrivateDeleteOrder($params = array()) {
        return $this->request('/order', array('rest', 'osmium', 'private'), 'DELETE', $params, null, null, array("cost" => 1));
    }
    public function restOsmiumPrivatePostOrder($params = array()) {
        return $this->request('/order', array('rest', 'osmium', 'private'), 'POST', $params, null, null, array("cost" => 1));
    }
    public function restOsmiumPrivatePatchOrder($params = array()) {
        return $this->request('/order', array('rest', 'osmium', 'private'), 'PATCH', $params, null, null, array("cost" => 1));
    }
}
