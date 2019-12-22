<?php

namespace ccxtpro;

use React\Promise\Timer;
use React\Promise\Timer\TimeoutException;

use ccxt\RequestTimeout;
use ccxt\NetworkError;

use Ratchet\RFC6455\Messaging\Frame;
use Ratchet\RFC6455\Messaging\Message;

use Exception;
use RuntimeException;

class Client {

    public $url;
    public $futures = array();
    public $subscriptions = array();

    public $on_message_callback;
    public $on_error_callback;
    public $on_close_callback;

    public $error;
    public $connectionStarted;
    public $connectionEstablished;
    // public $connection_timer; // ?
    public $connectionTimeout = 30000;
    public $pingInterval;
    public $keepAlive;
    public $connection = null;
    public $connected; // connection-related Future

    // ratchet/pawl/reactphp stuff
    public $loop = null;
    public $connector = null;

    // ------------------------------------------------------------------------

    public function future($message_hash) {
        if (is_array($message_hash)) {
            $first_hash = $message_hash[0];
            if (!array_key_exists($first_hash, $this->futures)) {
                $future = new Future();
                $this->futures[$first_hash] = $future;
                $length = count($message_hash);
                for ($i = 1; $i < $length; $i++) {
                    $hash = $message_hash[$i];
                    $this->futures[$hash] = $future;
                }
            }
            return $this->futures[$first_hash];
        } else {
            if (!array_key_exists($message_hash, $this->futures)) {
                $this->futures[$message_hash] = new Future();
            }
            return $this->futures[$message_hash];
        }
    }

    public function resolve($result, $message_hash = null) {
        if ($message_hash) {
            if (array_key_exists($message_hash, $this->futures)) {
                $promise = $this->futures[$message_hash];
                $promise->resolve($result);
                unset($this->futures[$message_hash]);
            }
        } else {
            $message_hashes = array_keys($this->futures);
            foreach ($message_hashes as $message_hash) {
                $this->resolve($result, $message_hash);
            }
        }
        return $result;
    }

    public function reject($result, $message_hash = null) {
        if ($message_hash) {
            if (array_key_exists($message_hash, $this->futures)) {
                $promise = $this->futures[$message_hash];
                $promise->reject($result);
                unset($this->futures[$message_hash]);
            }
        } else {
            $message_hashes = array_keys($this->futures);
            foreach ($message_hashes as $message_hash) {
                $this->reject($result, $message_hash);
            }
        }
        return $result;
    }

    public function __construct(
            $url,
            callable $on_message_callback,
            callable $on_error_callback,
            callable $on_close_callback,
            $config
        ) {

        $this->url = $url;
        // $this->timeout = 5000;
        // $this->pingNonce = 0;
        // $this->lastPong = PHP_INT_MAX;
        // $timeoutTimer = null;
        $this->futures = array();
        $this->subscriptions = array();
        $this->connected = new Future();

        $this->on_message_callback = $on_message_callback;
        $this->on_error_callback = $on_error_callback;
        $this->on_close_callback = $on_close_callback;

        foreach ($config as $key => $value) {
            $this->{$key} =
                (property_exists($this, $key) && is_array($this->{$key}) && is_array($value)) ?
                    array_replace_recursive($this->{$key}, $value) :
                    $value;
        }

        if (!$this->loop) {
            throw new \ccxt\NotSupported('Client requires a reactphp event loop');
        }

        $connector = new \React\Socket\Connector($this->loop);
        $this->connector = new \Ratchet\Client\Connector($this->loop, $connector);
    }

    public function create_connection() {
        $connector = $this->connector;
        $timeout = $this->connectionTimeout / 1000;
        echo date('c'), ' connecting to ', $this->url, "\n";
        Timer\timeout($connector($this->url), $timeout, $this->loop)->then(
            function($connection) {
                echo date('c'), " connected\n";
                $this->connection = $connection;
                $this->connection->on('message', array($this, 'on_message'));
                $this->connection->on('close', array($this, 'on_close'));
                $this->connection->on('error', array($this, 'on_error'));
                $this->connection->on('pong', array($this, 'on_pong'));
                $this->connected->resolve($this->url);
            },
            function(\Exception $error) {
                // echo date('c'), ' connection failed ', get_class($error), ' ', $error->getMessage(), "\n";
                // the ordering of these exceptions is important
                // since one inherits another
                if ($error instanceof TimeoutException) {
                    $error = new RequestTimeout($error->getMessage());
                } else if ($error instanceof RuntimeException) {
                    // connection failed or rejected
                    $error = new NetworkError($error->getMessage());
                }
                $this->on_error($error);
            }
        );
    }

    public function connect($backoff_delay = 0) {
        if (!$this->connection) {
            $this->connection = true;
            if ($backoff_delay) {
                echo date('c'), ' backoff delay ', $backoff_delay, " seconds\n";
                $callback = array($this, 'create_connection');
                $this->loop->addTimer(((float)$backoff_delay) / 1000, $callback);
            } else {
                echo date('c'), ' no backoff delay', "\n";
                $this->create_connection();
            }
        }
        return $this->connected;
    }

    public function send($data) {
        $this->connection->send(Exchange::json($data));
    }

    public function close() {
        $this->connection->close();
    }

    public function isConnected() {
        return $this->connected;
    }

    public function on_pong() {
        // $this->lastPong = Exchange::milliseconds();
    }

    public function on_error($error) {
        echo date('c'), ' on_error ', get_class($error), ' ', $error->getMessage(), "\n";
        $this->error = $error;
        $on_error_callback = $this->on_error_callback;
        $on_error_callback($this, $error);
        $this->reset($error);
    }

    public function on_close($message) {
        echo date('c'), ' on_close ', (string) $message, "\n";
        exit();
        $on_close_callback = $this->on_close_callback;
        $on_close_callback($this, $message);
        if (!$this->error) {
            // todo: exception types for server-side disconnects
            $this->reset(new NetworkError($message));
        }
        exit();
    }

    public function on_message(Message $message) {
        try {
            // todo: add json detection in php
            $message = json_decode($message, true);
            // message = isJsonEncodedObject (message) ? JSON.parse (message) : message
        } catch (Exception $e) {
            echo date('c'), ' on_message json_decode ', $e->getMessage(), "\n";
            // reset with a json encoding error ?
        }
        $on_message_callback = $this->on_message_callback;
        $on_message_callback($this, $message);
    }

    public function reset($error) {
        // $this->clearPingInterval();
        $this->connected->reject($error);
        $this->reject($error);
    }

    // todo: finish ping-pong keep-alive in php

    // public function set_ping_interval() {
    //     if ($this->keepAlive) {
    //         $on_ping_interval = $this->on_ping_interval; // .bind (this)
    //         $this->pingInterval = setInterval($on_ping_interval, $this->keepAlive);
    //     }
    // }

    // public function clear_ping_interval() {
    //     if ($this->pingInterval) {
    //         $this->pingInterval = clearInterval($this->pingInterval);
    //     }
    // }

    // public function on_ping_interval() {
    //     if (($this->lastPong + $this->keepAlive) < milliseconds()) {
    //         $this->reset(new RequestTimeout('Connection to ' . $this->url . ' timed out due to a ping-pong keepalive missing on time'));
    //     } else {
    //         if ($this->is_open()) {
    //             $this->connection->ping(); // ?
    //         }
    //     }
    // }

    // private function check_timeout () {
    //     $this->timeoutTimer = $this->loop->addPeriodicTimer(1, function () {
    //         $this->pingNonce = ($this->pingNonce + 1) % (PHP_INT_MAX - 1);
    //         $this->connection->send (new Frame($this->pingNonce, true, Frame::OP_PING));
    //         if (Exchange::milliseconds ()  - $this->lastPong > $this->timeout) {
    //             $this->connected = false;
    //             foreach ($this->futures as $deferred) {
    //                 $deferred->reject (new RequestTimeout ('Client did not receive a pong in reply to a ping within ' . $this->timeout . ' seconds'));
    //             }
    //             $this->futures = array ();
    //             $this->loop->cancelTimer ($this->timeoutTimer);
    //         }
    //     });
    // }
};
