<?php
namespace ccxt;

// ----------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -----------------------------------------------------------------------------
use React\Async;
use React\Promise;
include_once PATH_TO_CCXT . '/test/base/test_trade.php';
include_once PATH_TO_CCXT . '/test/base/test_shared_methods.php';

function test_watch_trades_for_symbols($exchange, $skipped_properties, $symbols) {
    return Async\async(function () use ($exchange, $skipped_properties, $symbols) {
        $method = 'watchTradesForSymbols';
        $now = $exchange->milliseconds();
        $ends = $now + 15000;
        while ($now < $ends) {
            $response = null;
            try {
                $response = Async\await($exchange->watch_trades_for_symbols($symbols));
            } catch(\Throwable $e) {
                if (!is_temporary_failure($e)) {
                    throw $e;
                }
                $now = $exchange->milliseconds();
                continue;
            }
            assert(gettype($response) === 'array' && array_keys($response) === array_keys(array_keys($response)), $exchange->id . ' ' . $method . ' ' . $exchange->json($symbols) . ' must return an array. ' . $exchange->json($response));
            $now = $exchange->milliseconds();
            $symbol = null;
            for ($i = 0; $i < count($response); $i++) {
                $trade = $response[$i];
                $symbol = $trade['symbol'];
                test_trade($exchange, $skipped_properties, $method, $trade, $symbol, $now);
                assert_in_array($exchange, $skipped_properties, $method, $trade, 'symbol', $symbols);
            }
            if (!(is_array($skipped_properties) && array_key_exists('timestamp', $skipped_properties))) {
                assert_timestamp_order($exchange, $method, $symbol, $response);
            }
        }
    }) ();
}
