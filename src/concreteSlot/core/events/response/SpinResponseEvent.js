/**
 * Created by zhangchi on 2014/10/8.
 */
var SpinResponseEvent=cc.EventCustom.extend({
    _spinResponse:null,
    ctor:function(response)
    {
        this._spinResponse = response;
        this._super(SpinResponseEvent.SPIN_RESPONSE);
    },

    getSpinResponse:function()
    {
        return this._spinResponse;
    }
})

SpinResponseEvent.SPIN_RESPONSE="SpinResultEvent::SPIN_RESPONSE";