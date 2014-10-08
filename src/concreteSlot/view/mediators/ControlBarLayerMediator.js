/**
 * Created by zhangchi on 2014/9/5.
 */
var ControlBarLayerMediator=AbstractSlotComponentMediator.extend({
    _view:null,
    _slotDataProxy:null,
    _slotStatesProxy:null,
    ctor:function(name,viewComponent)
    {
        this._super(name,viewComponent);
        this._view=viewComponent;

        //cc.log("MediatorName:",this.mediatorName);
        //cc.defineGetterSetter(this,"mediatorName",this.getMediatorName);
    },

   /* getMediatorName:function()
    {
        return this.mediatorName;
    },*/

    onRegister:function()
    {
        //var reg=this._view.sigOnClick.registBind.bind(this);
        //reg();
        this._slotDataProxy = this.facade.retrieveProxy(SlotDataProxy.NAME);
        this._slotStatesProxy = this.facade.retrieveProxy(SlotStatesProxy.NAME);
        //var addBind=this._view.sigOnClick.add.bind(this)
        this._view.sigOnClick.add(this.onSpin,this);
       // addBind(this.onSpin,this)

    },

    onSpin:function()
    {
        cc.log("SPIN!!!!!!");
        cc.log(this._slotDataProxy.isSpinFree=true);
        //TODO sendNotifications
        this._slotStatesProxy.currentState=SlotGameState.PLAYING_INTRO_REEL_ANIMATIONS;
    },

    sendNotification:function($notificationName,$body, $type)
    {
        this._super($notificationName,$body, $type);
    }

})