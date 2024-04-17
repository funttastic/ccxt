# -*- coding: utf-8 -*-

# PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
# https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

from ccxt.base.exchange import Exchange
from ccxt.abstract.cube import ImplicitAPI
import hashlib
import math
from ccxt.base.types import Any, Balances, Currencies, IndexType, Int, Market, Num, Order, OrderBook, OrderSide, OrderType, Str, Ticker, Tickers, Trade
from typing import List
from ccxt.base.errors import BadRequest
from ccxt.base.errors import BadSymbol
from ccxt.base.errors import InsufficientFunds
from ccxt.base.errors import OrderNotFound
from ccxt.base.errors import AuthenticationError
from ccxt.base.decimal_to_precision import TICK_SIZE


class cube(Exchange, ImplicitAPI):

    def describe(self):
        # TODO verify allnot !!
        return self.deep_extend(super(cube, self).describe(), {
            'id': 'cube',
            'name': 'cube',
            'countries': [],
            'rateLimit': 100,
            'version': 'v0',
            'pro': False,
            'has': {
                'CORS': None,
                'spot': True,
                'margin': False,
                'swap': True,
                'future': False,
                'option': False,
                'addMargin': False,
                'cancelAllOrders': True,
                'cancelOrder': True,
                'cancelOrders': False,
                'closeAllPositions': False,
                'closePosition': False,
                'createDepositAddress': False,
                'createMarketOrder': False,
                'createOrder': True,
                'createOrders': False,
                'createPostOnlyOrder': False,
                'createReduceOnlyOrder': False,
                'createStopLimitOrder': False,
                'createStopMarketOrder': False,
                'createStopOrder': False,
                'fetchAccounts': True,
                'fetchBalance': True,
                'fetchBorrowInterest': False,
                'fetchBorrowRateHistory': False,
                'fetchClosedOrders': False,
                'fetchCrossBorrowRate': False,
                'fetchCrossBorrowRates': False,
                'fetchCurrencies': True,
                'fetchDeposit': False,
                'fetchDepositAddress': False,
                'fetchDepositAddresses': False,
                'fetchDepositAddressesByNetwork': False,
                'fetchDeposits': False,
                'fetchDepositsWithdrawals': False,
                'fetchFundingHistory': False,
                'fetchFundingRate': False,
                'fetchFundingRateHistory': False,
                'fetchFundingRates': False,
                'fetchIndexOHLCV': False,
                'fetchIsolatedBorrowRate': False,
                'fetchIsolatedBorrowRates': False,
                'fetchLedger': False,
                'fetchLedgerEntry': False,
                'fetchLeverageTiers': False,
                'fetchMarketLeverageTiers': False,
                'fetchMarkets': True,
                'fetchMarkOHLCV': False,
                'fetchMyTrades': False,
                'fetchOHLCV': False,
                'fetchOpenInterest': False,
                'fetchOpenInterestHistory': False,
                'fetchOpenOrders': True,
                'fetchOrder': True,
                'fetchOrderBook': True,
                'fetchOrderBooks': False,
                'fetchOrders': False,
                'fetchOrderTrades': False,
                'fetchPermissions': False,
                'fetchPosition': False,
                'fetchPositions': False,
                'fetchPositionsForSymbol': False,
                'fetchPositionsRisk': False,
                'fetchPremiumIndexOHLCV': False,
                'fetchTicker': True,
                'fetchTickers': True,
                'fetchTrades': True,
                'fetchTradingLimits': False,
                'fetchTransactionFee': False,
                'fetchTransactionFees': False,
                'fetchTransactions': False,
                'fetchTransfers': False,
                'fetchWithdrawAddresses': False,
                'fetchWithdrawal': False,
                'fetchWithdrawals': False,
                'reduceMargin': False,
                'setLeverage': False,
                'setMargin': False,
                'setMarginMode': False,
                'setPositionMode': False,
                'signIn': False,
                'transfer': False,
                'withdraw': False,
            },
            'urls': {
                'referral': '',
                'logo': 'https://github.com/ccxt/ccxt/assets/43336371/3aa748b7-ea44-45e9-a9e7-b1d207a2578a',
                'api': {
                    'rest': {
                        'production': {
                            'iridium': 'https://api.cube.exchange/ir/v0',
                            'mendelev': 'https://api.cube.exchange/md/v0',
                            'osmium': 'https://api.cube.exchange/os/v0',
                        },
                        'staging': {
                            'iridium': 'https://staging.cube.exchange/ir/v0',
                            'mendelev': 'https://staging.cube.exchange/md/v0',
                            'osmium': 'https://staging.cube.exchange/os/v0',
                        },
                    },
                    'ws': {
                        'production': {
                            'iridium': 'wss://api.cube.exchange/ir',
                            'mendelev': 'wss://api.cube.exchange/md',
                            'osmium': 'wss://api.cube.exchange/os',
                        },
                        'staging': {
                            'iridium': 'wss://staging.cube.exchange/ir',
                            'mendelev': 'wss://staging.cube.exchange/md',
                            'osmium': 'wss://staging.cube.exchange/os',
                        },
                    },
                },
                'www': 'https://www.cube.exchange/',
                'doc': 'https://cubexch.gitbook.io/cube-api',
                'fees': 'hhttps://www.cube.exchange/fees',
            },
            'fees': {
                'trading': {
                    'maker': self.parse_number('0.004'),
                    'taker': self.parse_number('0.008'),
                },
            },
            'api': {
                'rest': {
                    'iridium': {
                        'public': {
                            'get': {
                                '/markets': 1,
                            },
                        },
                        'private': {
                            'get': {
                                '/users/check': 1,
                                '/users/info': 1,
                                '/users/positions': 1,
                                '/users/transfers': 1,
                                '/users/deposits': 1,
                                '/users/withdrawals': 1,
                                '/users/subaccount/{subaccountId}/orders': 1,
                                '/users/subaccount/{subaccountId}/fills': 1,
                                '/users/fee-estimate/{market_id}': 1,
                            },
                            'post': {
                                '/users/subaccounts': 1,
                                '/users/subaccounts/{subaccount_id}': 1,
                            },
                        },
                    },
                    'mendelev': {
                        'public': {
                            'get': {
                                '/book/{market_id}/snapshot': 1,
                                '/parsed/book/{market_symbol}/snapshot': 1,
                                '/book/{market_id}/recent-trades': 1,
                                '/parsed/book/{market_symbol}/recent-trades': 1,
                                '/tickers/snapshot': 1,
                                '/parsed/tickers': 1,
                            },
                        },
                    },
                    'osmium': {
                        'private': {
                            'get': {
                                '/orders': 1,
                            },
                            'delete': {
                                '/orders': 1,
                                '/order': 1,
                            },
                            'post': {
                                '/order': 1,
                            },
                            'patch': {
                                '/order': 1,
                            },
                        },
                    },
                },
            },
            'commonCurrencies': {},
            'precisionMode': TICK_SIZE,
            'exceptions': {
                'exact': {
                    'Must be authorized': AuthenticationError,
                    'Market not found': BadRequest,
                    'Insufficient funds': InsufficientFunds,
                    'Order not found': BadRequest,
                },
            },
            'options': {
                'environment': 'production',
            },
        })

    def generate_signature(self) -> Any:
        timestamp = int(math.floor(self.now()) / 1000)
        timestampBuffer = self.number_to_le(timestamp, 4)
        fixedString = 'cube.xyz'
        payload = self.binary_concat_array([fixedString, timestampBuffer])
        secretKeyBytes = self.base64_to_binary(self.string_to_base64(self.secret))
        hmac = self.hmac(payload, secretKeyBytes, hashlib.sha256, 'binary')
        signatureB64 = self.binary_to_base64(hmac)
        return [signatureB64, timestamp]

    def generate_authentication_headers(self) -> Any:
        signature, timestamp = self.generate_signature()
        return {
            'x-api-key': self.apiKey,
            'x-api-signature': signature,
            'x-api-timestamp': str(timestamp),
        }

    def authenticate_request(self, request: Any) -> Any:
        headers = self.safe_dict(request, 'headers', {})
        request.headers = self.extend(headers, self.generate_authentication_headers())
        return request

    def sign(self, path: str, api='public', method='GET', params={}, headers=None, body=None):
        environment = self.options['environment']
        baseUrl: str = None
        if api.find('iridium') >= 0:
            baseUrl = self.urls['api']['rest'][environment]['iridium']
        elif api.find('mendelev') >= 0:
            baseUrl = self.urls['api']['rest'][environment]['mendelev']
        elif api.find('osmium') >= 0:
            baseUrl = self.urls['api']['rest'][environment]['osmium']
        url = baseUrl + self.implode_params(path, params)
        params = self.omit(params, self.extract_params(path))
        if method == 'GET':
            if params:
                url += '?' + self.urlencode(params)
        if api.find('private') >= 0:
            request: Any = {
                'body': body,
                'headers': {
                    'Content-Type': 'application/json',
                    'Referer': 'CCXT',
                },
            }
            request = self.authenticate_request(request)
            headers = request.headers
            if method != 'GET':
                body = self.urlencode(params)
        return {'url': url, 'method': method, 'body': body, 'headers': headers}

    def fetch_currencies(self, params={}) -> Currencies:
        """
        fetches all available currencies on an exchange
        :see: https://cubexch.gitbook.io/cube-api/rest-iridium-api#markets
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict: an associative dictionary of currencies
        """
        response = self.restIridiumPublicGetMarkets(params)
        # {
        #     "result": {
        #         "assets": [
        #             {
        #                 "assetId": 1,
        #                 "symbol": "BTC",
        #                 "decimals": 8,
        #                 "displayDecimals": 5,
        #                 "settles": True,
        #                 "assetType": "Crypto",
        #                 "sourceId": 1,
        #                 "metadata": {
        #                     "dustAmount": 3000
        #                 },
        #                 "status": 1
        #             },
        #             ...
        #         ],
        #         "sources": [
        #             {
        #                 "sourceId": 0,
        #                 "name": "fiat",
        #                 "metadata": {}
        #             },
        #             ...
        #         ],
        #         "markets": [
        #             {
        #                 "marketId": 100004,
        #                 "symbol": "BTCUSDC",
        #                 "baseAssetId": 1,
        #                 "baseLotSize": "1000",
        #                 "quoteAssetId": 7,
        #                 "quoteLotSize": "1",
        #                 "priceDisplayDecimals": 2,
        #                 "protectionPriceLevels": 3000,
        #                 "priceBandBidPct": 25,
        #                 "priceBandAskPct": 400,
        #                 "priceTickSize": "0.1",
        #                 "quantityTickSize": "0.00001",
        #                 "status": 1,
        #                 "feeTableId": 2
        #             },
        #             ...
        #         ],
        #         "feeTables": [
        #             {
        #                 "feeTableId": 1,
        #                 "feeTiers": [
        #                     {
        #                         "priority": 0,
        #                         "makerFeeRatio": 0.0,
        #                         "takerFeeRatio": 0.0
        #                     }
        #                 ]
        #             },
        #             {
        #                 "feeTableId": 2,
        #                 "feeTiers": [
        #                     {
        #                         "priority": 0,
        #                         "makerFeeRatio": 0.0004,
        #                         "takerFeeRatio": 0.0008
        #                     }
        #                 ]
        #             }
        #         ]
        #     }
        # }
        result: Currencies = {}
        rawCurrencies = self.safe_dict(
            self.safe_dict(response, 'result'),
            'assets'
        )
        for i in range(0, len(rawCurrencies)):
            rawCurrency = rawCurrencies[i]
            id = self.safe_string_upper(rawCurrency, 'symbol')
            code = self.safe_currency_code(id)
            # TODO verifynot !!
            currency = self.safe_currency_structure({
                'id': id,
                'numericId': self.safe_integer(rawCurrency, 'assetId'),
                'code': self.safe_string_upper(rawCurrency, 'symbol'),
                'precision': self.safe_integer(rawCurrency, 'decimals'),
                'type': self.safe_string_lower(rawCurrency, 'assetType'),
                'name': self.safe_string(rawCurrency, 'symbol'),
                'active': self.safe_integer(rawCurrency, 'status') == 1,
                'deposit': None,
                'withdraw': None,
                'fee': None,
                'fees': {},
                'networks': {},
                'limits': {
                    'deposit': {
                        'min': None,
                        'max': None,
                    },
                    'withdraw': {
                        'min': None,
                        'max': None,
                    },
                },
                'info': rawCurrency,
            })
            result[code] = currency
        return result

    def fetch_ticker(self, symbol: str, params={}) -> Ticker:
        tickers = self.fetch_tickers([symbol], params)
        ticker = self.safe_value(tickers, symbol, None)
        if ticker is None:
            raise BadSymbol(self.id + ' fetchTicker() symbol ' + symbol + ' not found')
        return ticker

    def fetch_tickers(self, symbols=None, params={}) -> Tickers:
        """
        fetches the ticker for all markets
        :see: https://cubexch.gitbook.io/cube-api/rest-mendelev-api#tickers-snapshot
        :param str[] [symbols]: an array of symbols to fetch the tickers for
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict: a dictionary of tickers indexed by symbol
        """
        response = self.restMendelevPublicGetParsedTickers(params)
        # {
        #   "result": [
        #     {
        #       "ask": 101.17,
        #       "base_currency": "SOL",
        #       "base_volume": 29332.58,
        #       "bid": 101.16,
        #       "high": 109.69,
        #       "last_price": 101.17,
        #       "low": 100.23,
        #       "open": 107.72,
        #       "quote_currency": "USDC",
        #       "quote_volume": 3062431.887,
        #       "ticker_id": "SOLUSDC",
        #       "timestamp": 1708521090000
        #     },
        #     ...
        #   ]
        # }
        result = {}
        rawTickers = self.safe_list(response, 'result', [])
        for i in range(0, len(rawTickers)):
            if symbols is not None and not self.in_array(self.safe_string(rawTickers[i], 'ticker_id'), symbols):
                rawTicker = self.safe_dict(rawTickers, i)
                ticker = self.parse_ticker(rawTicker)
                result[ticker.symbol] = ticker
        return result

    def parse_ticker(self, ticker: dict) -> Ticker:
        timestamp = self.safe_integer(ticker, 'timestamp')
        symbol = self.safe_string(ticker, 'ticker_id')
        baseVolume = self.safe_number(ticker, 'base_volume')
        quoteVolume = self.safe_number(ticker, 'quote_volume')
        last = self.safe_number(ticker, 'last_price')
        high = self.safe_number(ticker, 'high')
        low = self.safe_number(ticker, 'low')
        bid = self.safe_number(ticker, 'bid')
        ask = self.safe_number(ticker, 'ask')
        return self.safe_ticker({
            'symbol': symbol,
            'timestamp': timestamp,
            'datetime': self.iso8601(timestamp),
            'high': high,
            'low': low,
            'bid': bid,
            'bidVolume': None,
            'ask': ask,
            'askVolume': None,
            'vwap': None,
            'open': self.safe_number(ticker, 'open'),
            'close': None,
            'last': last,
            'previousClose': None,
            'change': None,
            'percentage': None,
            'average': None,
            'baseVolume': baseVolume,
            'quoteVolume': quoteVolume,
            'info': ticker,
        })

    def fetch_markets(self, params={}) -> List[Market]:
        """
        retrieves data on all markets for cube
        :see: https://cubexch.gitbook.io/cube-api/rest-iridium-api#markets
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict[]: an array of objects representing market data
        """
        response = self.restIridiumPublicGetMarkets(params)
        # {
        #     "result": {
        #         "assets": [
        #             {
        #                 "assetId": 1,
        #                 "symbol": "BTC",
        #                 "decimals": 8,
        #                 "displayDecimals": 5,
        #                 "settles": True,
        #                 "assetType": "Crypto",
        #                 "sourceId": 1,
        #                 "metadata": {
        #                     "dustAmount": 3000
        #                 },
        #                 "status": 1
        #             },
        #             ...
        #         ],
        #         "sources": [
        #             {
        #                 "sourceId": 0,
        #                 "name": "fiat",
        #                 "metadata": {}
        #             },
        #             ...
        #         ],
        #         "markets": [
        #             {
        #                 "marketId": 100004,
        #                 "symbol": "BTCUSDC",
        #                 "baseAssetId": 1,
        #                 "baseLotSize": "1000",
        #                 "quoteAssetId": 7,
        #                 "quoteLotSize": "1",
        #                 "priceDisplayDecimals": 2,
        #                 "protectionPriceLevels": 3000,
        #                 "priceBandBidPct": 25,
        #                 "priceBandAskPct": 400,
        #                 "priceTickSize": "0.1",
        #                 "quantityTickSize": "0.00001",
        #                 "status": 1,
        #                 "feeTableId": 2
        #             },
        #             ...
        #         ],
        #         "feeTables": [
        #             {
        #                 "feeTableId": 1,
        #                 "feeTiers": [
        #                     {
        #                         "priority": 0,
        #                         "makerFeeRatio": 0.0,
        #                         "takerFeeRatio": 0.0
        #                     }
        #                 ]
        #             },
        #             {
        #                 "feeTableId": 2,
        #                 "feeTiers": [
        #                     {
        #                         "priority": 0,
        #                         "makerFeeRatio": 0.0004,
        #                         "takerFeeRatio": 0.0008
        #                     }
        #                 ]
        #             }
        #         ]
        #     }
        # }
        result = []
        rawMarkets = self.safe_dict(self.safe_dict(response, 'result'), 'markets')
        rawAssets = self.safe_dict(
            self.safe_dict(response, 'result'),
            'assets'
        )
        for i in range(0, len(rawMarkets)):
            rawMarket = self.safe_dict(rawMarkets, i)
            id = self.safe_string_lower(rawMarket, 'symbol')
            rawBaseAsset = None
            for j in range(0, len(rawAssets)):
                if self.safe_string(self.safe_dict(rawAssets, j), 'assetId') == self.safe_string(rawMarket, 'baseAssetId'):
                    rawBaseAsset = self.safe_dict(rawAssets, j)
                    break
            rawQuoteAsset = None
            for j in range(0, len(rawAssets)):
                if self.safe_string(self.safe_dict(rawAssets, j), 'assetId') == self.safe_string(rawMarket, 'quoteAssetId'):
                    rawQuoteAsset = self.safe_dict(rawAssets, j)
                    break
            baseId = self.safe_string_upper(rawBaseAsset, 'symbol')
            quoteId = self.safe_string_upper(rawQuoteAsset, 'symbol')
            base = self.safe_currency_code(baseId)
            quote = self.safe_currency_code(quoteId)
            market = self.safe_market_structure({
                'id': id,
                'lowercaseId': id,
                'symbol': base + '/' + quote,
                'base': base,
                'quote': quote,
                'settle': None,
                'baseId': baseId,
                'quoteId': quoteId,
                'settleId': None,
                'type': 'spot',
                'spot': True,
                'margin': False,
                'swap': False,
                'future': False,
                'option': False,
                'active': self.safe_integer(rawMarket, 'status') == 1,
                'contract': False,
                'linear': None,
                'inverse': None,
                'contractSize': None,
                'taker': self.safe_number(self.safe_dict(self.fees, 'trading'), 'taker'),
                'maker': self.safe_number(self.safe_dict(self.fees, 'trading'), 'maker'),
                'expiry': None,
                'expiryDatetime': None,
                'strike': None,
                'optionType': None,
                'precision': {
                    'amount': self.parse_number(
                        self.parse_precision(self.safe_string(rawMarket, 'quantityTickSize'))
                    ),
                    'price': self.parse_number(
                        self.parse_precision(self.safe_string(rawMarket, 'priceTickSize'))
                    ),
                },
                'limits': {
                    'leverage': {
                        'min': None,
                        'max': None,
                    },
                    'amount': {
                        'min': None,
                        'max': None,
                    },
                    'price': {
                        'min': None,
                        'max': None,
                    },
                    'cost': {
                        'min': None,
                        'max': None,
                    },
                },
                'created': None,
                'info': rawMarket,
            })
            result.append(market)
        return result

    def fetch_order_book(self, symbol: str, limit: Int = None, params={}) -> OrderBook:
        """
        fetches information on open orders with bid(buy) and ask(sell) prices, volumes and other data
        :see: https://cubexch.gitbook.io/cube-api/rest-mendelev-api#book-market_id-snapshot
        :see: https://cubexch.gitbook.io/cube-api/rest-mendelev-api#parsed-book-market_symbol-snapshot
        :param str symbol: unified symbol of the market to fetch the order book for
        :param int [limit]: the maximum amount of order book entries to return
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict: A dictionary of `order book structures <https://docs.ccxt.com/#/?id=order-book-structure>` indexed by market symbols
        """
        self.load_markets()
        marketId = symbol.lower()
        market = self.market(marketId)
        marketInfo = self.safe_dict(market, 'info')
        symbolFromInfo = self.safe_string(marketInfo, 'symbol')
        request = {'market_symbol': symbolFromInfo}
        response = self.restMendelevPublicGetParsedBookMarketSymbolSnapshot(self.extend(request, params))
        #
        # {
        #   "result":{
        #       "ticker_id":"BTCUSDC",
        #       "timestamp":1711544655331,
        #       "bids":[
        #           [
        #               70635.6,
        #               0.01
        #           ]
        #       ],
        #       "asks":[
        #           [
        #               70661.8,
        #               0.1421
        #           ]
        #       ]
        #   }
        # }
        #
        rawBids = self.safe_list(self.safe_dict(response, 'result'), 'bids', [])
        rawAsks = self.safe_list(self.safe_dict(response, 'result'), 'asks', [])
        rawOrderbook = {
            'bids': rawBids,
            'asks': rawAsks,
        }
        timestamp = self.safe_timestamp(self.safe_dict(response, 'result'), 'timestamp')
        return self.parse_order_book(rawOrderbook, symbol, timestamp, 'bids', 'asks')

    def parse_bids_asks(self, bidasks, priceKey: IndexType = 0, amountKey: IndexType = 1, countOrIdKey: IndexType = 2) -> List[Any]:
        return bidasks

    def fetch_trades(self, symbol: str, since: Int = None, limit: Int = None, params={}):
        """
        get the list of most recent trades for a particular symbol
        :see: https://cubexch.gitbook.io/cube-api/rest-mendelev-api#book-market_id-recent-trades
        :see: https://cubexch.gitbook.io/cube-api/rest-mendelev-api#parsed-book-market_symbol-recent-trades
        :param str symbol: unified symbol of the market to fetch trades for
        :param int [since]: timestamp in ms of the earliest trade to fetch
        :param int [limit]: the maximum number of trades to fetch
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :param int params['lastId']: order id
        :returns Trade[]: a list of `trade structures <https://docs.ccxt.com/#/?id=public-trades>`
        """
        self.load_markets()
        market = self.market(symbol)
        request = {}
        # response = self.restMendelevPublicGetParsedBookMarketIdRecentTrades(self.extend(request, params))
        #
        # {
        #     "result":{
        #         "trades":[
        #             {
        #                 "tradeId":1192726,
        #                 "price":25730,
        #                 "aggressingSide":1,
        #                 "restingExchangeOrderId":775000423,
        #                 "fillQuantity":2048,
        #                 "transactTime":1710261845127064300,
        #                 "aggressingExchangeOrderId":775000298
        #             },
        #             {
        #                 "tradeId":1192723,
        #                 "price":25730,
        #                 "aggressingSide":0,
        #                 "restingExchangeOrderId":775000298,
        #                 "fillQuantity":5000,
        #                 "transactTime":1710261844303742500,
        #                 "aggressingExchangeOrderId":774996895
        #             }
        #         ]
        #     }
        # }
        #
        response = self.restMendelevPublicGetParsedBookMarketSymbolRecentTrades(self.extend(request, params))
        #
        # {
        #     "result":{
        #         "ticker_id":"BTCUSDC",
        #         "trades":[
        #             {
        #                 "id":1106939,
        #                 "p":63565.6,
        #                 "q":0.01,
        #                 "side":"Ask",
        #                 "ts":1711153560907
        #             },
        #             {
        #                 "id":1107084,
        #                 "p":63852.9,
        #                 "q":0.01,
        #                 "side":"Bid",
        #                 "ts":1711156552440
        #             }
        #         ]
        #     }
        # }
        #
        return self.parse_trades(response, market, since, limit)

    def parse_trade(self, trade, market: Market = None) -> Trade:
        raise Error('Not implemented!')  # TODO fixnot !!

    def fetch_balance(self, params={}) -> Balances:
        """
        query for balance and get the amount of funds available for trading or funds locked in orders
        :see: https://cubexch.gitbook.io/cube-api/rest-iridium-api#users-positions
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict: a `balance structure <https://docs.ccxt.com/#/?id=balance-structure>`
        """
        self.load_markets()
        response = self.restIridiumPrivateGetUsersPositions(params)
        result = self.safe_dict(response, 'balances', {})
        return self.parse_balances(result)

    def parse_balances(self, response) -> Balances:
        # TODO fill and fixnot !!
        return self.safe_balance({
            'info': response,
            'timestamp': None,
            'datetime': None,
            'free': {},
            'used': {},
            'total': {},
        })

    def create_order(self, symbol: str, type: OrderType, side: OrderSide, amount: float, price: Num = None, params={}):
        """
        create a trade order
        :see: https://cubexch.gitbook.io/cube-api/rest-osmium-api#order
        :param str symbol: unified symbol of the market to create an order in
        :param str type: 'market' or 'limit' or 'STOP_LOSS' or 'STOP_LOSS_LIMIT' or 'TAKE_PROFIT' or 'TAKE_PROFIT_LIMIT' or 'STOP'
        :param str side: 'buy' or 'sell'
        :param float amount: how much of you want to trade in units of the base currency
        :param float [price]: the price that the order is to be fullfilled, in units of the quote currency, ignored in market orders
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict: an `order structure <https://docs.ccxt.com/#/?id=order-structure>`
        """
        self.load_markets()
        # marketId = symbol.lower()
        market = self.market(symbol)
        rawMarketId = self.safe_integer(self.safe_dict(market, 'info'), 'marketId')
        exchangePrice = price * 100
        exchangeAmount = amount * 100
        exchangeSide = 1  # TODO fixnot !!
        exchangeOrderType = 0  # TODO fixnot !!
        request = {
            'clientOrderId': self.safe_integer(params, 'clientOrderId'),
            'requestId': self.safe_integer(params, 'requestId'),
            'marketId': rawMarketId,
            'price': exchangePrice,
            'quantity': exchangeAmount,
            'side': exchangeSide,
            'timeInForce': self.safe_integer(params, 'timeInForce'),
            'orderType': exchangeOrderType,
            'subaccountId': self.safe_integer(params, 'subaccountId'),
            'selfTradePrevention': self.safe_integer(params, 'selfTradePrevention'),
            'postOnly': self.safe_integer(params, 'postOnly'),
            'cancelOnDisconnect': self.safe_bool(params, 'cancelOnDisconnect'),
        }
        response = self.restOsmiumPrivatePostOrder(self.extend(request, params))
        return self.parse_order(response, market)

    def cancel_order(self, id: str, symbol: Str = None, params={}):
        """
        cancels an open order
        :param str id: order id
        :param str symbol: unified symbol of the market the order was made in
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict: An `order structure <https://docs.ccxt.com/#/?id=order-structure>`
        """
        # IMPLEMENTAR A LÓGICAnot !!
        self.load_markets()
        request = {
            'uuid': id,
        }
        response = self.restOsmiumPrivateDeleteOrder(self.extend(request, params))
        return self.parse_order(response)

    def cancel_all_orders(self, symbol: Str = None, params={}):
        """
        cancel all open orders
        :param str symbol: alpaca cancelAllOrders cannot setting symbol, it will cancel all open orders
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict[]: a list of `order structures <https://docs.ccxt.com/#/?id=order-structure>`
        """
        self.load_markets()
        return self.cancel_order('all', symbol, params)

    def fetch_open_orders(self, symbol: Str = None, since: Int = None, limit: Int = None, params={}):
        """
        fetch all unfilled currently open orders
        :param str symbol: unified market symbol of the market orders were made in
        :param int [since]: the earliest time in ms to fetch orders for
        :param int [limit]: the maximum number of order structures to retrieve
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns Order[]: a list of `order structures <https://docs.ccxt.com/#/?id=order-structure>`
        """
        # IMPLEMENTAR A LÓGICAnot !!
        self.load_markets()
        market = None
        if symbol is not None:
            market = self.market(symbol)
        request = {}
        if symbol is not None:
            request['market'] = market['id']
        response = self.restOsmiumPrivateGetOrders(self.extend(request, params))
        return self.parse_orders(response, market, since, limit)

    def fetch_order(self, id: str, symbol: Str = None, params={}):
        """
        fetches information on an order made by the user
        :see: https://github.com/ace-exchange/ace-official-api-docs/blob/master/api_v2.md#open-api---order-status
        :param str symbol: unified symbol of the market the order was made in
        :param dict [params]: extra parameters specific to the exchange API endpoint
        :returns dict: An `order structure <https://docs.ccxt.com/#/?id=order-structure>`
        """
        self.load_markets()
        request = {}
        response = self.restOsmiumPrivateGetOrders(self.extend(request, params))
        rawOrders = self.safe_dict(self.safe_dict(response, 'result'), 'orders')
        targetRawOrder = None
        for i in range(0, len(rawOrders)):
            rawOrder = rawOrders[i]
            rawOrderId = self.safe_string(rawOrder, 'orderId')
            if rawOrderId == id:
                targetRawOrder = rawOrder
        if targetRawOrder:
            return self.parse_order(targetRawOrder, None)
        raise OrderNotFound('Order "' + id + '" not found.')

    def parse_order(self, order, market: Market = None) -> Order:
        return self.safe_order({})
