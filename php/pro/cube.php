<?php

namespace ccxt\pro;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

use Exception; // a common import
use React\Async;
use React\Promise\PromiseInterface;

class cube extends \ccxt\async\cube {

    public function describe() {
        // TODO check all info!!!
        return $this->deep_extend(parent::describe(), array(
            'has' => array(
                'ws' => true,
                'watchBalance' => false,
                'watchMyTrades' => false,
                'watchOHLCV' => false,
                'watchOHLCVForSymbols' => false,
                'watchOrderBook' => true,
                'watchOrderBookForSymbols' => false,
                'watchOrders' => false,
                'watchOrdersForSymbols' => false,
                'watchPositions' => false,
                'watchTicker' => false,
                'watchTickers' => false,
                'watchTrades' => false,
                'watchTradesForSymbols' => false,
                'createOrderWs' => false,
                'editOrderWs' => false,
                'cancelOrderWs' => false,
                'cancelOrdersWs' => false,
                'cancelAllOrdersWs' => false,
                'fetchBalanceWs' => false,
                'fetchDepositsWs' => false,
                'fetchMarketsWs' => false,
                'fetchMyTradesWs' => false,
                'fetchOHLCVWs' => false,
                'fetchOpenOrdersWs' => false,
                'fetchOrderWs' => false,
                'fetchOrdersWs' => false,
                'fetchTradesWs' => false,
                'fetchTradingFeesWs' => false,
                'fetchWithdrawalsWs' => false,
            ),
            'urls' => array(
                'api' => array(
                    'ws' => array(
                        'production' => array(
                            'iridium' => 'wss://api.cube.exchange/ir',
                            'mendelev' => 'wss://api.cube.exchange/md',
                            'osmium' => 'wss://api.cube.exchange/os',
                        ),
                        'staging' => array(
                            'iridium' => 'wss://staging.cube.exchange/ir',
                            'mendelev' => 'wss://staging.cube.exchange/md',
                            'osmium' => 'wss://staging.cube.exchange/os',
                        ),
                    ),
                ),
            ),
            'options' => array(
                'environment' => 'production',
                'api' => array(
                    'ws' => array(
                        'mendelev' => array(
                            'public' => array(
                                'orderbook' => '/book/:market_id',
                                'orderbookTops' => '/tops',
                            ),
                        ),
                    ),
                ),
            ),
        ));
    }

    public function watch_order_book(string $symbol, ?int $limit = null, $params = array ()): PromiseInterface {
        return Async\async(function () use ($symbol, $limit, $params) {
            /**
             * watches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
             * @see https://cubexch.gitbook.io/cube-api/websocket-$market-data-api#order-book-data
             * @param {string} $symbol unified $symbol of the $market to fetch the order book for
             * @param {int} [$limit] the maximum amount of order book entries to return
             * @param {array} [$params] extra parameters specific to the exchange API endpoint
             * @return {array} A dictionary of ~@link https://docs.ccxt.com/#/?id=order-book-structure order book structures~ indexed by $market symbols
             */
            Async\await($this->load_markets());
            $environment = $this->options['environment'];
            $marketId = strtolower($symbol);
            $market = $this->market($marketId);
            $symbol = $this->safe_symbol($marketId, $market);
            $url = $this->urls['api']['ws'][$environment]['mendelev'] . $this->options['api']['ws']['mendelev']['public']['orderbook'];
            $requestId = '';
            $subParams = array();
            $request = array(
                'method' => 'SUBSCRIBE',
                'params' => $subParams,
                'id' => $requestId,
            );
            $messageHash = '';
            return Async\await($this->watch($url, $messageHash, $request, $messageHash));
        }) ();
    }
}
