/**
 * Created by zhangchi on 2014/9/5.
 */
var ControlBarLayerMediator=AbstractSlotComponentMediator.extend({
    _view:null,
    _slotDataProxy:null,
    ctor:function(name,viewComponent)
    {
        this._super(name,viewComponent);
        this._view=viewComponent;
    },

    /*getMediatorName:function()
    {
        return this.mediatorName;
    },*/

    onRegister:function()
    {
        this._slotDataProxy = this.facade.retrieveProxy(SlotDataProxy.NAME);
        this._view.sigOnClick.add(this.onSpin,this);
    },

    onSpin:function()
    {
        cc.log("SPIN!!!!!!");
        //TODO sendNotifications
        this.sendNotification("test",123);
       // this._slotDataProxy.isAutoSpin=true;
    },

    sendNotification:function($notificationName,$body, $type)
    {
        var $body=$body|null;
        var $type=$type|null;
        if(Facade.getInstance(this.multitonKey))
        {
            Facade.getInstance(this.multitonKey).sendNotification($notificationName, $body, $type);
        }
        //this._super($notificationName,$body, $type);

    }

})