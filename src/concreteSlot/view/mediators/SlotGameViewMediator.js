/**
 * Created by zhangchi on 2014/9/5.
 */
var SlotGameViewMediator=AbstractSlotComponentMediator.extend({
    _view:null,
    _slotDataProxy:SlotDataProxy,
    _slotStatesProxy:SlotStatesProxy,
    ctor:function(viewComponent)
    {
        this._super(ComponentTypes.MAIN_VIEW,viewComponent);
        this._view=viewComponent;
    },

   /* getMediatorName:function()
    {
        return this.mediatorName;
    },*/
    mapNotifications:function()
    {
        //this.notificationMap.add("test",this.handleTest,this);
    },

    onRegister:function()
    {
        this._slotDataProxy = this.facade.retrieveProxy(SlotDataProxy.NAME);
        this._slotStatesProxy=this.facade.retrieveProxy(SlotStatesProxy.NAME);
        //cc.log("VIEW IS:"+this._view);
        this.facade.registerMediator(new ControlBarLayerMediator(ComponentTypes.CONTROL_BAR,this._view.controlBar));
        this.facade.registerMediator(new SymbolLayerMediator(ComponentTypes.SYMBOLS_LAYER,this._view.symbolLayer));
    },

    onPointTest:function()
    {
        cc.log("OnPoint");
        //this._view.controlBar.visible=false;
    },

    handleTest:function(body,point)
    {
        cc.log("Pass Complete"+point.onPointTest());
    }
})