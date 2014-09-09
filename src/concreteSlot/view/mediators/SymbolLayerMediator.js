/**
 * Created by zhangchi on 2014/9/9.
 */
/**
 * Created by zhangchi on 2014/9/5.
 */
var SymbolLayerMediator=AbstractSlotComponentMediator.extend({
    _view:null,
    _slotDataProxy:null,
    _slotStatesProxy:null,
    ctor:function(name,viewComponent)
    {
        this._super(name,viewComponent);
        this._view=viewComponent;

        //cc.defineGetterSetter(this,"mediatorName",this.getMediatorName);
    },

    /*getMediatorName:function()
    {
        return this.mediatorName;
    },*/

    onRegister:function()
    {
        this._slotDataProxy = this.facade.retrieveProxy(SlotDataProxy.NAME);
        this._slotStatesProxy = this.facade.retrieveProxy(SlotStatesProxy.NAME);
        this._view.sigClick.add(this.onViewClick,this);
    },

    onViewClick:function()
    {
        cc.log("SPIN!!!!!!");
        cc.log(this._slotDataProxy.isSpinFree);
        //TODO sendNotifications
        //if is a bonus win skip
        //else change states to
        //this.sendNotification("test",123);
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