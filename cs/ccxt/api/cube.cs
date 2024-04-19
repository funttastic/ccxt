// -------------------------------------------------------------------------------

// PLEASE DO NOT EDIT THIS FILE, IT IS GENERATED AND WILL BE OVERWRITTEN:
// https://github.com/ccxt/ccxt/blob/master/CONTRIBUTING.md#how-to-contribute-code

// -------------------------------------------------------------------------------

namespace ccxt;

public partial class cube : Exchange
{
    public cube (object args = null): base(args) {}

    public async Task<object> restIridiumPublicGetMarkets (object parameters = null)
    {
        return await this.callAsync ("restIridiumPublicGetMarkets",parameters);
    }

    public async Task<object> restIridiumPrivateGetUsersCheck (object parameters = null)
    {
        return await this.callAsync ("restIridiumPrivateGetUsersCheck",parameters);
    }

    public async Task<object> restIridiumPrivateGetUsersInfo (object parameters = null)
    {
        return await this.callAsync ("restIridiumPrivateGetUsersInfo",parameters);
    }

    public async Task<object> restIridiumPrivateGetUsersPositions (object parameters = null)
    {
        return await this.callAsync ("restIridiumPrivateGetUsersPositions",parameters);
    }

    public async Task<object> restIridiumPrivateGetUsersTransfers (object parameters = null)
    {
        return await this.callAsync ("restIridiumPrivateGetUsersTransfers",parameters);
    }

    public async Task<object> restIridiumPrivateGetUsersDeposits (object parameters = null)
    {
        return await this.callAsync ("restIridiumPrivateGetUsersDeposits",parameters);
    }

    public async Task<object> restIridiumPrivateGetUsersWithdrawals (object parameters = null)
    {
        return await this.callAsync ("restIridiumPrivateGetUsersWithdrawals",parameters);
    }

    public async Task<object> restIridiumPrivateGetUsersSubaccountSubaccountIdOrders (object parameters = null)
    {
        return await this.callAsync ("restIridiumPrivateGetUsersSubaccountSubaccountIdOrders",parameters);
    }

    public async Task<object> restIridiumPrivateGetUsersSubaccountSubaccountIdFills (object parameters = null)
    {
        return await this.callAsync ("restIridiumPrivateGetUsersSubaccountSubaccountIdFills",parameters);
    }

    public async Task<object> restIridiumPrivateGetUsersFeeEstimateMarketId (object parameters = null)
    {
        return await this.callAsync ("restIridiumPrivateGetUsersFeeEstimateMarketId",parameters);
    }

    public async Task<object> restIridiumPrivatePostUsersSubaccounts (object parameters = null)
    {
        return await this.callAsync ("restIridiumPrivatePostUsersSubaccounts",parameters);
    }

    public async Task<object> restIridiumPrivatePostUsersSubaccountsSubaccountId (object parameters = null)
    {
        return await this.callAsync ("restIridiumPrivatePostUsersSubaccountsSubaccountId",parameters);
    }

    public async Task<object> restIridiumPrivatePostUsersSubaccountsSubaccountIdWithdrawals (object parameters = null)
    {
        return await this.callAsync ("restIridiumPrivatePostUsersSubaccountsSubaccountIdWithdrawals",parameters);
    }

    public async Task<object> restMendelevPublicGetBookMarketIdSnapshot (object parameters = null)
    {
        return await this.callAsync ("restMendelevPublicGetBookMarketIdSnapshot",parameters);
    }

    public async Task<object> restMendelevPublicGetParsedBookMarketSymbolSnapshot (object parameters = null)
    {
        return await this.callAsync ("restMendelevPublicGetParsedBookMarketSymbolSnapshot",parameters);
    }

    public async Task<object> restMendelevPublicGetBookMarketIdRecentTrades (object parameters = null)
    {
        return await this.callAsync ("restMendelevPublicGetBookMarketIdRecentTrades",parameters);
    }

    public async Task<object> restMendelevPublicGetParsedBookMarketSymbolRecentTrades (object parameters = null)
    {
        return await this.callAsync ("restMendelevPublicGetParsedBookMarketSymbolRecentTrades",parameters);
    }

    public async Task<object> restMendelevPublicGetTickersSnapshot (object parameters = null)
    {
        return await this.callAsync ("restMendelevPublicGetTickersSnapshot",parameters);
    }

    public async Task<object> restMendelevPublicGetParsedTickers (object parameters = null)
    {
        return await this.callAsync ("restMendelevPublicGetParsedTickers",parameters);
    }

    public async Task<object> restOsmiumPrivateGetOrders (object parameters = null)
    {
        return await this.callAsync ("restOsmiumPrivateGetOrders",parameters);
    }

    public async Task<object> restOsmiumPrivateDeleteOrders (object parameters = null)
    {
        return await this.callAsync ("restOsmiumPrivateDeleteOrders",parameters);
    }

    public async Task<object> restOsmiumPrivateDeleteOrder (object parameters = null)
    {
        return await this.callAsync ("restOsmiumPrivateDeleteOrder",parameters);
    }

    public async Task<object> restOsmiumPrivatePostOrder (object parameters = null)
    {
        return await this.callAsync ("restOsmiumPrivatePostOrder",parameters);
    }

    public async Task<object> restOsmiumPrivatePatchOrder (object parameters = null)
    {
        return await this.callAsync ("restOsmiumPrivatePatchOrder",parameters);
    }

}