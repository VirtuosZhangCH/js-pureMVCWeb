/**
 * Created by zhangchi on 2014/10/8.
 */
var SlotRequestService=Service.extend({
    _sigSpinResponse:new Signal(),
    _sigHandShakeResponse:new Signal(),
    _sigCoinSizeUpdate:new Signal(),

    ctor:function()
    {
        cc.eventManager.addCustomListener("SpinResultEvent::SPIN_RESPONSE",this.handleSpinResponse.bind(this))
    },

    handleSpinResponse:function(event)
    {
        cc.log("handleSpinResponse"+event.getUserData());
        this._sigSpinResponse.dispatch(event.getUserData());
    }

})