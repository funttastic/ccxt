
namespace ccxt;
// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

   public class BaseError : Exception
    {
        public BaseError() : base() { }
        public BaseError(string message) : base(message) { }
        public BaseError(string message, Exception inner) : base(message, inner) { }
    }
   public class ExchangeError : BaseError
    {
        public ExchangeError() : base() { }
        public ExchangeError(string message) : base(message) { }
        public ExchangeError(string message, BaseError inner) : base(message, inner) { }
    }
   public class AuthenticationError : ExchangeError
    {
        public AuthenticationError() : base() { }
        public AuthenticationError(string message) : base(message) { }
        public AuthenticationError(string message, ExchangeError inner) : base(message, inner) { }
    }
   public class PermissionDenied : AuthenticationError
    {
        public PermissionDenied() : base() { }
        public PermissionDenied(string message) : base(message) { }
        public PermissionDenied(string message, AuthenticationError inner) : base(message, inner) { }
    }
   public class AccountNotEnabled : PermissionDenied
    {
        public AccountNotEnabled() : base() { }
        public AccountNotEnabled(string message) : base(message) { }
        public AccountNotEnabled(string message, PermissionDenied inner) : base(message, inner) { }
    }
   public class AccountSuspended : AuthenticationError
    {
        public AccountSuspended() : base() { }
        public AccountSuspended(string message) : base(message) { }
        public AccountSuspended(string message, AuthenticationError inner) : base(message, inner) { }
    }
   public class ArgumentsRequired : ExchangeError
    {
        public ArgumentsRequired() : base() { }
        public ArgumentsRequired(string message) : base(message) { }
        public ArgumentsRequired(string message, ExchangeError inner) : base(message, inner) { }
    }
   public class BadRequest : ExchangeError
    {
        public BadRequest() : base() { }
        public BadRequest(string message) : base(message) { }
        public BadRequest(string message, ExchangeError inner) : base(message, inner) { }
    }
   public class BadSymbol : BadRequest
    {
        public BadSymbol() : base() { }
        public BadSymbol(string message) : base(message) { }
        public BadSymbol(string message, BadRequest inner) : base(message, inner) { }
    }
   public class OperationRejected : ExchangeError
    {
        public OperationRejected() : base() { }
        public OperationRejected(string message) : base(message) { }
        public OperationRejected(string message, ExchangeError inner) : base(message, inner) { }
    }
   public class NoChange : OperationRejected
    {
        public NoChange() : base() { }
        public NoChange(string message) : base(message) { }
        public NoChange(string message, OperationRejected inner) : base(message, inner) { }
    }
   public class MarginModeAlreadySet : NoChange
    {
        public MarginModeAlreadySet() : base() { }
        public MarginModeAlreadySet(string message) : base(message) { }
        public MarginModeAlreadySet(string message, NoChange inner) : base(message, inner) { }
    }
   public class MarketClosed : OperationRejected
    {
        public MarketClosed() : base() { }
        public MarketClosed(string message) : base(message) { }
        public MarketClosed(string message, OperationRejected inner) : base(message, inner) { }
    }
   public class BadResponse : ExchangeError
    {
        public BadResponse() : base() { }
        public BadResponse(string message) : base(message) { }
        public BadResponse(string message, ExchangeError inner) : base(message, inner) { }
    }
   public class NullResponse : BadResponse
    {
        public NullResponse() : base() { }
        public NullResponse(string message) : base(message) { }
        public NullResponse(string message, BadResponse inner) : base(message, inner) { }
    }
   public class InsufficientFunds : ExchangeError
    {
        public InsufficientFunds() : base() { }
        public InsufficientFunds(string message) : base(message) { }
        public InsufficientFunds(string message, ExchangeError inner) : base(message, inner) { }
    }
   public class InvalidAddress : ExchangeError
    {
        public InvalidAddress() : base() { }
        public InvalidAddress(string message) : base(message) { }
        public InvalidAddress(string message, ExchangeError inner) : base(message, inner) { }
    }
   public class AddressPending : InvalidAddress
    {
        public AddressPending() : base() { }
        public AddressPending(string message) : base(message) { }
        public AddressPending(string message, InvalidAddress inner) : base(message, inner) { }
    }
   public class InvalidOrder : ExchangeError
    {
        public InvalidOrder() : base() { }
        public InvalidOrder(string message) : base(message) { }
        public InvalidOrder(string message, ExchangeError inner) : base(message, inner) { }
    }
   public class OrderNotFound : InvalidOrder
    {
        public OrderNotFound() : base() { }
        public OrderNotFound(string message) : base(message) { }
        public OrderNotFound(string message, InvalidOrder inner) : base(message, inner) { }
    }
   public class OrderNotCached : InvalidOrder
    {
        public OrderNotCached() : base() { }
        public OrderNotCached(string message) : base(message) { }
        public OrderNotCached(string message, InvalidOrder inner) : base(message, inner) { }
    }
   public class CancelPending : InvalidOrder
    {
        public CancelPending() : base() { }
        public CancelPending(string message) : base(message) { }
        public CancelPending(string message, InvalidOrder inner) : base(message, inner) { }
    }
   public class OrderImmediatelyFillable : InvalidOrder
    {
        public OrderImmediatelyFillable() : base() { }
        public OrderImmediatelyFillable(string message) : base(message) { }
        public OrderImmediatelyFillable(string message, InvalidOrder inner) : base(message, inner) { }
    }
   public class OrderNotFillable : InvalidOrder
    {
        public OrderNotFillable() : base() { }
        public OrderNotFillable(string message) : base(message) { }
        public OrderNotFillable(string message, InvalidOrder inner) : base(message, inner) { }
    }
   public class DuplicateOrderId : InvalidOrder
    {
        public DuplicateOrderId() : base() { }
        public DuplicateOrderId(string message) : base(message) { }
        public DuplicateOrderId(string message, InvalidOrder inner) : base(message, inner) { }
    }
   public class ContractUnavailable : InvalidOrder
    {
        public ContractUnavailable() : base() { }
        public ContractUnavailable(string message) : base(message) { }
        public ContractUnavailable(string message, InvalidOrder inner) : base(message, inner) { }
    }
   public class NotSupported : ExchangeError
    {
        public NotSupported() : base() { }
        public NotSupported(string message) : base(message) { }
        public NotSupported(string message, ExchangeError inner) : base(message, inner) { }
    }
   public class ProxyError : ExchangeError
    {
        public ProxyError() : base() { }
        public ProxyError(string message) : base(message) { }
        public ProxyError(string message, ExchangeError inner) : base(message, inner) { }
    }
   public class ExchangeClosedByUser : ExchangeError
    {
        public ExchangeClosedByUser() : base() { }
        public ExchangeClosedByUser(string message) : base(message) { }
        public ExchangeClosedByUser(string message, ExchangeError inner) : base(message, inner) { }
    }
   public class OperationFailed : BaseError
    {
        public OperationFailed() : base() { }
        public OperationFailed(string message) : base(message) { }
        public OperationFailed(string message, BaseError inner) : base(message, inner) { }
    }
   public class NetworkError : OperationFailed
    {
        public NetworkError() : base() { }
        public NetworkError(string message) : base(message) { }
        public NetworkError(string message, OperationFailed inner) : base(message, inner) { }
    }
   public class DDoSProtection : NetworkError
    {
        public DDoSProtection() : base() { }
        public DDoSProtection(string message) : base(message) { }
        public DDoSProtection(string message, NetworkError inner) : base(message, inner) { }
    }
   public class RateLimitExceeded : NetworkError
    {
        public RateLimitExceeded() : base() { }
        public RateLimitExceeded(string message) : base(message) { }
        public RateLimitExceeded(string message, NetworkError inner) : base(message, inner) { }
    }
   public class ExchangeNotAvailable : NetworkError
    {
        public ExchangeNotAvailable() : base() { }
        public ExchangeNotAvailable(string message) : base(message) { }
        public ExchangeNotAvailable(string message, NetworkError inner) : base(message, inner) { }
    }
   public class OnMaintenance : ExchangeNotAvailable
    {
        public OnMaintenance() : base() { }
        public OnMaintenance(string message) : base(message) { }
        public OnMaintenance(string message, ExchangeNotAvailable inner) : base(message, inner) { }
    }
   public class InvalidNonce : NetworkError
    {
        public InvalidNonce() : base() { }
        public InvalidNonce(string message) : base(message) { }
        public InvalidNonce(string message, NetworkError inner) : base(message, inner) { }
    }
   public class RequestTimeout : NetworkError
    {
        public RequestTimeout() : base() { }
        public RequestTimeout(string message) : base(message) { }
        public RequestTimeout(string message, NetworkError inner) : base(message, inner) { }
    }
