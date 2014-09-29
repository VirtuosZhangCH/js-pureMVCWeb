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
        cc.defineGetterSetter(this,"currentMode",this.getCurrentMode,this.setCurrentMode);
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
            this._currentState && (this._previousState =this._currentState);
            this._currentState = value;
            this.sendNotification(NotesApplication.SLOT_GAME_STATE_CHANGED,value,0);
            cc.log("<<---- Game state changed into:"+this._currentState.toString()+" ----->>");
        }
    },
    getCurrentMode:function()
    {
        return this._currentMode;
    },


    setCurrentMode:function(value)
    {
        if(this._currentMode != value){
            this._currentMode && (this._previousMode =this._currentMode);
            this._currentMode = value;
            this.sendNotification(NotesApplication.SLOT_GAME_MODE_CHANGED,value);
            cc.log("<<---- Game state changed into:"+this._currentMode.toString()+" ----->>");
        }
    },

    sendNotification:function($notificationName,$body, $type)
    {
        $body=$body||null;
        $type=$type||null;
        if(Facade.getInstance(this.multitonKey))
        {
            Facade.getInstance(this.multitonKey).sendNotification($notificationName, $body, $type);
        }
    },

    onRemove:function()
    {
        //TODO remove
    }

})

SlotStatesProxy.NAME="SlotStatesProxy";