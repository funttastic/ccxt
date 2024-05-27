import os
import sys

root = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
sys.path.append(root)

# ----------------------------------------------------------------------------

# PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
# https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

# ----------------------------------------------------------------------------
# -*- coding: utf-8 -*-

from ccxt.base.precise import Precise  # noqa E402
from ccxt.test.base import test_shared_methods  # noqa E402

def test_liquidation(exchange, skipped_properties, method, entry, symbol):
    format = {
        'info': {},
        'symbol': 'ETH/BTC',
        'contracts': exchange.parse_number('1.234'),
        'contractSize': exchange.parse_number('1.234'),
        'price': exchange.parse_number('1.234'),
        'baseValue': exchange.parse_number('1.234'),
        'quoteValue': exchange.parse_number('1.234'),
        'timestamp': 1502962946216,
        'datetime': '2017-09-01T00:00:00',
    }
    # todo: atm, many exchanges fail, so temporarily decrease stict mode
    empty_allowed_for = ['timestamp', 'datetime', 'quoteValue', 'baseValue', 'previousClose', 'price', 'contractSize', 'contracts']
    test_shared_methods.assert_structure(exchange, skipped_properties, method, entry, format, empty_allowed_for)
    test_shared_methods.assert_timestamp_and_datetime(exchange, skipped_properties, method, entry)
    log_text = test_shared_methods.log_template(exchange, method, entry)
    test_shared_methods.assert_greater(exchange, skipped_properties, method, entry, 'contracts', '0')
    test_shared_methods.assert_greater(exchange, skipped_properties, method, entry, 'contractSize', '0')
    test_shared_methods.assert_greater(exchange, skipped_properties, method, entry, 'price', '0')
    test_shared_methods.assert_greater(exchange, skipped_properties, method, entry, 'baseValue', '0')
    test_shared_methods.assert_greater(exchange, skipped_properties, method, entry, 'quoteValue', '0')
    contracts = exchange.safe_string(entry, 'contracts')
    contract_size = exchange.safe_string(entry, 'contractSize')
    price = exchange.safe_string(entry, 'price')
    base_value = exchange.safe_string(entry, 'baseValue')
    if contracts and contract_size:
        assert Precise.string_eq(base_value, Precise.string_mul(contracts, contract_size)), 'baseValue == contracts * contractSize' + log_text
        if price:
            assert Precise.string_eq(base_value, Precise.string_mul(Precise.string_mul(contracts, contract_size), price)), 'quoteValue == contracts * contractSize * price' + log_text
    # if singular was called, then symbol needs to be asserted
    if method == 'watchLiquidations' or method == 'fetchLiquidations':
        test_shared_methods.assert_symbol(exchange, skipped_properties, method, entry, 'symbol', symbol)
