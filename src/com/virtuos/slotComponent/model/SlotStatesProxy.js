/**
 * Created by zhangchi on 2014/9/9.
 */
var SlotStatesProxy  = Proxy.extend({

    _currentState:null,
    _currentMode:null,
    _isAutoSpin:false,
    _previousMode:null,
    _previousState:null,

    ctor:function(name)
    {
        this._super(SlotStatesProxy.NAME);


        cc.defineGetterSetter(this,"currentState",this.getCurrentState,this.setCurrentState);
    },

    onRegister:function()
    {

    },

    getCurrentState:function()
    {
        return this._currentState;
    },

    setCurrentState:function(value)
    {
        if(this._currentState != value){
            this._currentState && (this._previousState = _currentState);
            this._currentState = value;
            this.sendNotification(NotesApplication.SLOT_GAME_STATE_CHANGED,_currentState);
            cc.log("<<---- Game state changed into:"+this._currentState.toString()+" ----->>");
        }
    },

    sendNotification:function($notificationName,$body, $type)
    {
        var $body=$body|null;
        var $type=$type|null;
        if(Facade.getInstance(this.multitonKey))
        {
            Facade.getInstance(this.multitonKey).sendNotification($notificationName, $body, $type);
        }
    }

})

SlotStatesProxy.NAME="SlotStatesProxy";