<?php

namespace ccxt\async;

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

use Exception; // a common import
use ccxt\async\abstract\coinspot as Exchange;
use ccxt\ExchangeError;
use ccxt\ArgumentsRequired;
use ccxt\Precise;
use React\Async;
use React\Promise\PromiseInterface;

class coinspot extends Exchange {

    public function describe() {
        return $this->deep_extend(parent::describe(), array(
            'id' => 'coinspot',
            'name' => 'CoinSpot',
            'countries' => array( 'AU' ), // Australia
            'rateLimit' => 1000,
            'pro' => false,
            'has' => array(
                'CORS' => null,
                'spot' => true,
                'margin' => false,
                'swap' => false,
                'future' => false,
                'option' => false,
                'addMargin' => false,
                'cancelOrder' => true,
                'closeAllPositions' => false,
                'closePosition' => false,
                'createMarketOrder' => false,
                'createOrder' => true,
                'createReduceOnlyOrder' => false,
                'createStopLimitOrder' => false,
                'createStopMarketOrder' => false,
                'createStopOrder' => false,
                'fetchBalance' => true,
                'fetchBorrowRateHistories' => false,
                'fetchBorrowRateHistory' => false,
                'fetchCrossBorrowRate' => false,
                'fetchCrossBorrowRates' => false,
                'fetchFundingHistory' => false,
                'fetchFundingRate' => false,
                'fetchFundingRateHistory' => false,
                'fetchFundingRates' => false,
                'fetchIndexOHLCV' => false,
                'fetchIsolatedBorrowRate' => false,
                'fetchIsolatedBorrowRates' => false,
                'fetchLeverage' => false,
                'fetchLeverageTiers' => false,
                'fetchMarginMode' => false,
                'fetchMarkOHLCV' => false,
                'fetchMyTrades' => true,
                'fetchOpenInterestHistory' => false,
                'fetchOrderBook' => true,
                'fetchPosition' => false,
                'fetchPositionHistory' => false,
                'fetchPositionMode' => false,
                'fetchPositions' => false,
                'fetchPositionsForSymbol' => false,
                'fetchPositionsHistory' => false,
                'fetchPositionsRisk' => false,
                'fetchPremiumIndexOHLCV' => false,
                'fetchTicker' => true,
                'fetchTickers' => true,
                'fetchTrades' => true,
                'fetchTradingFee' => false,
                'fetchTradingFees' => false,
                'reduceMargin' => false,
                'setLeverage' => false,
                'setMarginMode' => false,
                'setPositionMode' => false,
                'ws' => false,
            ),
            'urls' => array(
                'logo' => 'https://user-images.githubusercontent.com/1294454/28208429-3cacdf9a-6896-11e7-854e-4c79a772a30f.jpg',
                'api' => array(
                    'public' => 'https://www.coinspot.com.au/pubapi',
                    'private' => 'https://www.coinspot.com.au/api',
                ),
                'www' => 'https://www.coinspot.com.au',
                'doc' => 'https://www.coinspot.com.au/api',
                'referral' => 'https://www.coinspot.com.au/register?code=PJURCU',
            ),
            'api' => array(
                'public' => array(
                    'get' => array(
                        'latest',
                    ),
                ),
                'private' => array(
                    'post' => array(
                        'orders',
                        'orders/history',
                        'my/coin/deposit',
                        'my/coin/send',
                        'quote/buy',
                        'quote/sell',
                        'my/balances',
                        'my/orders',
                        'my/buy',
                        'my/sell',
                        'my/buy/cancel',
                        'my/sell/cancel',
                        'ro/my/balances',
                        'ro/my/balances/{cointype}',
                        'ro/my/deposits',
                        'ro/my/withdrawals',
                        'ro/my/transactions',
                        'ro/my/transactions/{cointype}',
                        'ro/my/transactions/open',
                        'ro/my/transactions/{cointype}/open',
                        'ro/my/sendreceive',
                        'ro/my/affiliatepayments',
                        'ro/my/referralpayments',
                    ),
                ),
            ),
            'markets' => array(
                'ADA/AUD' => $this->safe_market_structure(array( 'id' => 'ada', 'symbol' => 'ADA/AUD', 'base' => 'ADA', 'quote' => 'AUD', 'baseId' => 'ada', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
                'BTC/AUD' => $this->safe_market_structure(array( 'id' => 'btc', 'symbol' => 'BTC/AUD', 'base' => 'BTC', 'quote' => 'AUD', 'baseId' => 'btc', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
                'ETH/AUD' => $this->safe_market_structure(array( 'id' => 'eth', 'symbol' => 'ETH/AUD', 'base' => 'ETH', 'quote' => 'AUD', 'baseId' => 'eth', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
                'XRP/AUD' => $this->safe_market_structure(array( 'id' => 'xrp', 'symbol' => 'XRP/AUD', 'base' => 'XRP', 'quote' => 'AUD', 'baseId' => 'xrp', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
                'LTC/AUD' => $this->safe_market_structure(array( 'id' => 'ltc', 'symbol' => 'LTC/AUD', 'base' => 'LTC', 'quote' => 'AUD', 'baseId' => 'ltc', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
                'DOGE/AUD' => $this->safe_market_structure(array( 'id' => 'doge', 'symbol' => 'DOGE/AUD', 'base' => 'DOGE', 'quote' => 'AUD', 'baseId' => 'doge', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
                'RFOX/AUD' => $this->safe_market_structure(array( 'id' => 'rfox', 'symbol' => 'RFOX/AUD', 'base' => 'RFOX', 'quote' => 'AUD', 'baseId' => 'rfox', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
                'POWR/AUD' => $this->safe_market_structure(array( 'id' => 'powr', 'symbol' => 'POWR/AUD', 'base' => 'POWR', 'quote' => 'AUD', 'baseId' => 'powr', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
                'NEO/AUD' => $this->safe_market_structure(array( 'id' => 'neo', 'symbol' => 'NEO/AUD', 'base' => 'NEO', 'quote' => 'AUD', 'baseId' => 'neo', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
                'TRX/AUD' => $this->safe_market_structure(array( 'id' => 'trx', 'symbol' => 'TRX/AUD', 'base' => 'TRX', 'quote' => 'AUD', 'baseId' => 'trx', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
                'EOS/AUD' => $this->safe_market_structure(array( 'id' => 'eos', 'symbol' => 'EOS/AUD', 'base' => 'EOS', 'quote' => 'AUD', 'baseId' => 'eos', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
                'XLM/AUD' => $this->safe_market_structure(array( 'id' => 'xlm', 'symbol' => 'XLM/AUD', 'base' => 'XLM', 'quote' => 'AUD', 'baseId' => 'xlm', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
                'RHOC/AUD' => $this->safe_market_structure(array( 'id' => 'rhoc', 'symbol' => 'RHOC/AUD', 'base' => 'RHOC', 'quote' => 'AUD', 'baseId' => 'rhoc', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
                'GAS/AUD' => $this->safe_market_structure(array( 'id' => 'gas', 'symbol' => 'GAS/AUD', 'base' => 'GAS', 'quote' => 'AUD', 'baseId' => 'gas', 'quoteId' => 'aud', 'type' => 'spot', 'spot' => true )),
            ),
            'commonCurrencies' => array(
                'DRK' => 'DASH',
            ),
            'options' => array(
                'fetchBalance' => 'private_post_my_balances',
            ),
            'precisionMode' => TICK_SIZE,
        ));
    }

    public function parse_balance($response): array {
        $result = array( 'info' => $response );
        $balances = $this->safe_value_2($response, 'balance', 'balances');
        if (gettype($balances) === 'array' && array_keys($balances) === array_keys(array_keys($balances))) {
            for ($i = 0; $i < count($balances); $i++) {
                $currencies = $balances[$i];
                $currencyIds = is_array($currencies) ? array_keys($currencies) : array();
                for ($j = 0; $j < count($currencyIds); $j++) {
                    $currencyId = $currencyIds[$j];
                    $balance = $currencies[$currencyId];
                    $code = $this->safe_currency_code($currencyId);
                    $account = $this->account();
                    $account['total'] = $this->safe_string($balance, 'balance');
                    $result[$code] = $account;
                }
            }
        } else {
            $currencyIds = is_array($balances) ? array_keys($balances) : array();
            for ($i = 0; $i < count($currencyIds); $i++) {
                $currencyId = $currencyIds[$i];
                $code = $this->safe_currency_code($currencyId);
                $account = $this->account();
                $account['total'] = $this->safe_string($balances, $currencyId);
                $result[$code] = $account;
            }
        }
        return $this->safe_balance($result);
    }

    public function fetch_balance($params = array ()): PromiseInterface {
        return Async\async(function () use ($params) {
            /**
             * query for balance and get the amount of funds available for trading or funds locked in orders
             * @see https://www.coinspot.com.au/api#listmybalance
             * @param {array} [$params] extra parameters specific to the exchange API endpoint
             * @return {array} a ~@link https://docs.ccxt.com/#/?id=balance-structure balance structure~
             */
            Async\await($this->load_markets());
            $method = $this->safe_string($this->options, 'fetchBalance', 'private_post_my_balances');
            $response = Async\await($this->$method ($params));
            //
            // read-write api keys
            //
            //     ...
            //
            // read-only api keys
            //
            //     {
            //         "status":"ok",
            //         "balances":array(
            //             {
            //                 "LTC":array("balance":0.1,"audbalance":16.59,"rate":165.95)
            //             }
            //         )
            //     }
            //
            return $this->parse_balance($response);
        }) ();
    }

    public function fetch_order_book(string $symbol, ?int $limit = null, $params = array ()): PromiseInterface {
        return Async\async(function () use ($symbol, $limit, $params) {
            /**
             * fetches information on open orders with bid (buy) and ask (sell) prices, volumes and other data
             * @see https://www.coinspot.com.au/api#listopenorders
             * @param {string} $symbol unified $symbol of the $market to fetch the order book for
             * @param {int} [$limit] the maximum amount of order book entries to return
             * @param {array} [$params] extra parameters specific to the exchange API endpoint
             * @return {array} A dictionary of ~@link https://docs.ccxt.com/#/?id=order-book-structure order book structures~ indexed by $market symbols
             */
            Async\await($this->load_markets());
            $market = $this->market($symbol);
            $request = array(
                'cointype' => $market['id'],
            );
            $orderbook = Async\await($this->privatePostOrders ($this->extend($request, $params)));
            return $this->parse_order_book($orderbook, $market['symbol'], null, 'buyorders', 'sellorders', 'rate', 'amount');
        }) ();
    }

    public function parse_ticker(array $ticker, ?array $market = null): array {
        //
        //     {
        //         "btc":{
        //             "bid":"51970",
        //             "ask":"53000",
        //             "last":"52806.47"
        //         }
        //     }
        //
        $symbol = $this->safe_symbol(null, $market);
        $last = $this->safe_string($ticker, 'last');
        return $this->safe_ticker(array(
            'symbol' => $symbol,
            'timestamp' => null,
            'datetime' => null,
            'high' => null,
            'low' => null,
            'bid' => $this->safe_string($ticker, 'bid'),
            'bidVolume' => null,
            'ask' => $this->safe_string($ticker, 'ask'),
            'askVolume' => null,
            'vwap' => null,
            'open' => null,
            'close' => $last,
            'last' => $last,
            'previousClose' => null,
            'change' => null,
            'percentage' => null,
            'average' => null,
            'baseVolume' => null,
            'quoteVolume' => null,
            'info' => $ticker,
        ), $market);
    }

    public function fetch_ticker(string $symbol, $params = array ()): PromiseInterface {
        return Async\async(function () use ($symbol, $params) {
            /**
             * fetches a price $ticker, a statistical calculation with the information calculated over the past 24 hours for a specific $market
             * @see https://www.coinspot.com.au/api#latestprices
             * @param {string} $symbol unified $symbol of the $market to fetch the $ticker for
             * @param {array} [$params] extra parameters specific to the exchange API endpoint
             * @return {array} a ~@link https://docs.ccxt.com/#/?$id=$ticker-structure $ticker structure~
             */
            Async\await($this->load_markets());
            $market = $this->market($symbol);
            $response = Async\await($this->publicGetLatest ($params));
            $id = $market['id'];
            $id = strtolower($id);
            $prices = $this->safe_value($response, 'prices');
            //
            //     {
            //         "status":"ok",
            //         "prices":{
            //             "btc":{
            //                 "bid":"52732.47000022",
            //                 "ask":"53268.0699976",
            //                 "last":"53284.03"
            //             }
            //         }
            //     }
            //
            $ticker = $this->safe_dict($prices, $id);
            return $this->parse_ticker($ticker, $market);
        }) ();
    }

    public function fetch_tickers(?array $symbols = null, $params = array ()): PromiseInterface {
        return Async\async(function () use ($symbols, $params) {
            /**
             * fetches price tickers for multiple markets, statistical information calculated over the past 24 hours for each $market
             * @see https://www.coinspot.com.au/api#latestprices
             * @param {string[]|null} $symbols unified $symbols of the markets to fetch the $ticker for, all $market tickers are returned if not assigned
             * @param {array} [$params] extra parameters specific to the exchange API endpoint
             * @return {array} a dictionary of ~@link https://docs.ccxt.com/#/?$id=$ticker-structure $ticker structures~
             */
            Async\await($this->load_markets());
            $response = Async\await($this->publicGetLatest ($params));
            //
            //    {
            //        "status" => "ok",
            //        "prices" => {
            //        "btc" => array(
            //        "bid" => "25050",
            //        "ask" => "25370",
            //        "last" => "25234"
            //        ),
            //        "ltc" => {
            //        "bid" => "79.39192993",
            //        "ask" => "87.98",
            //        "last" => "87.95"
            //        }
            //      }
            //    }
            //
            $result = array();
            $prices = $this->safe_value($response, 'prices');
            $ids = is_array($prices) ? array_keys($prices) : array();
            for ($i = 0; $i < count($ids); $i++) {
                $id = $ids[$i];
                $market = $this->safe_market($id);
                if ($market['spot']) {
                    $symbol = $market['symbol'];
                    $ticker = $prices[$id];
                    $result[$symbol] = $this->parse_ticker($ticker, $market);
                }
            }
            return $this->filter_by_array_tickers($result, 'symbol', $symbols);
        }) ();
    }

    public function fetch_trades(string $symbol, ?int $since = null, ?int $limit = null, $params = array ()): PromiseInterface {
        return Async\async(function () use ($symbol, $since, $limit, $params) {
            /**
             * get the list of most recent $trades for a particular $symbol
             * @see https://www.coinspot.com.au/api#orderhistory
             * @param {string} $symbol unified $symbol of the $market to fetch $trades for
             * @param {int} [$since] timestamp in ms of the earliest trade to fetch
             * @param {int} [$limit] the maximum amount of $trades to fetch
             * @param {array} [$params] extra parameters specific to the exchange API endpoint
             * @return {Trade[]} a list of ~@link https://docs.ccxt.com/#/?id=public-$trades trade structures~
             */
            Async\await($this->load_markets());
            $market = $this->market($symbol);
            $request = array(
                'cointype' => $market['id'],
            );
            $response = Async\await($this->privatePostOrdersHistory ($this->extend($request, $params)));
            //
            //     {
            //         "status":"ok",
            //         "orders":array(
            //             array("amount":0.00102091,"rate":21549.09999991,"total":21.99969168,"coin":"BTC","solddate":1604890646143,"market":"BTC/AUD"),
            //         ),
            //     }
            //
            $trades = $this->safe_list($response, 'orders', array());
            return $this->parse_trades($trades, $market, $since, $limit);
        }) ();
    }

    public function fetch_my_trades(?string $symbol = null, ?int $since = null, ?int $limit = null, $params = array ()) {
        return Async\async(function () use ($symbol, $since, $limit, $params) {
            /**
             * fetch all $trades made by the user
             * @see https://www.coinspot.com.au/api#rotransaction
             * @param {string} $symbol unified $market $symbol
             * @param {int} [$since] the earliest time in ms to fetch $trades for
             * @param {int} [$limit] the maximum number of $trades structures to retrieve
             * @param {array} [$params] extra parameters specific to the exchange API endpoint
             * @return {Trade[]} a list of ~@link https://docs.ccxt.com/#/?id=trade-structure trade structures~
             */
            Async\await($this->load_markets());
            $request = array();
            $market = null;
            if ($symbol !== null) {
                $market = $this->market($symbol);
            }
            if ($since !== null) {
                $request['startdate'] = $this->yyyymmdd($since);
            }
            $response = Async\await($this->privatePostRoMyTransactions ($this->extend($request, $params)));
            //  {
            //   "status" => "ok",
            //   "buyorders" => array(
            //     array(
            //       "otc" => false,
            //       "market" => "ALGO/AUD",
            //       "amount" => 386.95197925,
            //       "created" => "2022-10-20T09:56:44.502Z",
            //       "audfeeExGst" => 1.80018002,
            //       "audGst" => 0.180018,
            //       "audtotal" => 200
            //     ),
            //   ),
            //   "sellorders" => array(
            //     array(
            //       "otc" => false,
            //       "market" => "SOLO/ALGO",
            //       "amount" => 154.52345614,
            //       "total" => 115.78858204658796,
            //       "created" => "2022-04-16T09:36:43.698Z",
            //       "audfeeExGst" => 1.08995731,
            //       "audGst" => 0.10899573,
            //       "audtotal" => 118.7
            //     ),
            //   )
            // }
            $buyTrades = $this->safe_value($response, 'buyorders', array());
            for ($i = 0; $i < count($buyTrades); $i++) {
                $buyTrades[$i]['side'] = 'buy';
            }
            $sellTrades = $this->safe_value($response, 'sellorders', array());
            for ($i = 0; $i < count($sellTrades); $i++) {
                $sellTrades[$i]['side'] = 'sell';
            }
            $trades = $this->array_concat($buyTrades, $sellTrades);
            return $this->parse_trades($trades, $market, $since, $limit);
        }) ();
    }

    public function parse_trade($trade, ?array $market = null): array {
        //
        // public fetchTrades
        //
        //     {
        //         "amount":0.00102091,
        //         "rate":21549.09999991,
        //         "total":21.99969168,
        //         "coin":"BTC",
        //         "solddate":1604890646143,
        //         "market":"BTC/AUD"
        //     }
        //
        // private fetchMyTrades
        //     {
        //       "otc" => false,
        //       "market" => "ALGO/AUD",
        //       "amount" => 386.95197925,
        //       "created" => "2022-10-20T09:56:44.502Z",
        //       "audfeeExGst" => 1.80018002,
        //       "audGst" => 0.180018,
        //       "audtotal" => 200,
        //       "total" => 200,
        //       "side" => "buy",
        //       "price" => 0.5168600000125209
        //     }
        $timestamp = null;
        $priceString = null;
        $fee = null;
        $audTotal = $this->safe_string($trade, 'audtotal');
        $costString = $this->safe_string($trade, 'total', $audTotal);
        $side = $this->safe_string($trade, 'side');
        $amountString = $this->safe_string($trade, 'amount');
        $marketId = $this->safe_string($trade, 'market');
        $symbol = $this->safe_symbol($marketId, $market, '/');
        $solddate = $this->safe_integer($trade, 'solddate');
        if ($solddate !== null) {
            $priceString = $this->safe_string($trade, 'rate');
            $timestamp = $solddate;
        } else {
            $priceString = Precise::string_div($costString, $amountString);
            $createdString = $this->safe_string($trade, 'created');
            $timestamp = $this->parse8601($createdString);
            $audfeeExGst = $this->safe_string($trade, 'audfeeExGst');
            $audGst = $this->safe_string($trade, 'audGst');
            // The transaction $fee which consumers pay is inclusive of GST by default
            $feeCost = Precise::string_add($audfeeExGst, $audGst);
            $feeCurrencyId = 'AUD';
            $fee = array(
                'cost' => $this->parse_number($feeCost),
                'currency' => $this->safe_currency_code($feeCurrencyId),
            );
        }
        return $this->safe_trade(array(
            'info' => $trade,
            'id' => null,
            'symbol' => $symbol,
            'timestamp' => $timestamp,
            'datetime' => $this->iso8601($timestamp),
            'order' => null,
            'type' => null,
            'side' => $side,
            'takerOrMaker' => null,
            'price' => $this->parse_number($priceString),
            'amount' => $this->parse_number($amountString),
            'cost' => $this->parse_number($costString),
            'fee' => $fee,
        ), $market);
    }

    public function create_order(string $symbol, string $type, string $side, float $amount, ?float $price = null, $params = array ()) {
        return Async\async(function () use ($symbol, $type, $side, $amount, $price, $params) {
            /**
             * create a trade order
             * @see https://www.coinspot.com.au/api#placebuyorder
             * @param {string} $symbol unified $symbol of the $market to create an order in
             * @param {string} $type must be 'limit'
             * @param {string} $side 'buy' or 'sell'
             * @param {float} $amount how much of currency you want to trade in units of base currency
             * @param {float} [$price] the $price at which the order is to be fullfilled, in units of the quote currency, ignored in $market orders
             * @param {array} [$params] extra parameters specific to the exchange API endpoint
             * @return {array} an ~@link https://docs.ccxt.com/#/?id=order-structure order structure~
             */
            Async\await($this->load_markets());
            $method = 'privatePostMy' . $this->capitalize($side);
            if ($type === 'market') {
                throw new ExchangeError($this->id . ' createOrder() allows limit orders only');
            }
            $market = $this->market($symbol);
            $request = array(
                'cointype' => $market['id'],
                'amount' => $amount,
                'rate' => $price,
            );
            return Async\await($this->$method ($this->extend($request, $params)));
        }) ();
    }

    public function cancel_order(string $id, ?string $symbol = null, $params = array ()) {
        return Async\async(function () use ($id, $symbol, $params) {
            /**
             * cancels an open order
             * @see https://www.coinspot.com.au/api#cancelbuyorder
             * @see https://www.coinspot.com.au/api#cancelsellorder
             * @param {string} $id order $id
             * @param {string} $symbol not used by coinspot cancelOrder ()
             * @param {array} [$params] extra parameters specific to the exchange API endpoint
             * @return {array} An ~@link https://docs.ccxt.com/#/?$id=order-structure order structure~
             */
            $side = $this->safe_string($params, 'side');
            if ($side !== 'buy' && $side !== 'sell') {
                throw new ArgumentsRequired($this->id . ' cancelOrder() requires a $side parameter, "buy" or "sell"');
            }
            $params = $this->omit($params, 'side');
            $method = 'privatePostMy' . $this->capitalize($side) . 'Cancel';
            $request = array(
                'id' => $id,
            );
            return Async\await($this->$method ($this->extend($request, $params)));
        }) ();
    }

    public function sign($path, $api = 'public', $method = 'GET', $params = array (), $headers = null, $body = null) {
        $url = $this->urls['api'][$api] . '/' . $path;
        if ($api === 'private') {
            $this->check_required_credentials();
            $nonce = $this->nonce();
            $body = $this->json($this->extend(array( 'nonce' => $nonce ), $params));
            $headers = array(
                'Content-Type' => 'application/json',
                'key' => $this->apiKey,
                'sign' => $this->hmac($this->encode($body), $this->encode($this->secret), 'sha512'),
            );
        }
        return array( 'url' => $url, 'method' => $method, 'body' => $body, 'headers' => $headers );
    }
}
