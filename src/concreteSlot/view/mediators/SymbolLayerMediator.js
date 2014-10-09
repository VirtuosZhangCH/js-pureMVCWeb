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

    mapNotifications:function()
    {
        //this.notificationMap.add("test",this.handleTest,this);
        this.notificationMap.add(NotesApplication.SLOT_GAME_STATE_CHANGED,this.handleGameStateChanged,this);
        this.notificationMap.add(NotesGameDataUpdate.SPIN_RESPONSE_RECIEVED,this.onSpinResultHandler,this);
    },

    onSpinResultHandler:function(body,point)
    {
        //cc.log("UPDATE REELS");
        point._view.onUpdateResult(point._slotDataProxy.lastSpinResult);
    },

    handleGameStateChanged:function(body,point)
    {
        //if(body)
        switch  ( body.getBody())
        {
            case SlotGameState.PLAYING_INTRO_REEL_ANIMATIONS:
                point._view.playReelAnimation();
                break;
            case SlotGameState.PLAYING_LOOP_REEL_ANIMATIONS:
                //just a test TO GET FAKE DATA
                cc.eventManager.dispatchCustomEvent(SpinResponseEvent.SPIN_RESPONSE,"KKKOOO");
                break;
            case SlotGameState.PLAYING_OUTRO_REEL_ANIMATIONS:

                break;
        }

    },

    handleTest:function(body,point)
    {
        point._view.play();
    },

    onRegister:function()
    {
        this._slotDataProxy = this.facade.retrieveProxy(SlotDataProxy.NAME);
        this._slotStatesProxy = this.facade.retrieveProxy(SlotStatesProxy.NAME);
        this._view.sigClick.add(this.onViewClick,this);

        //this._view.sigReelSpinComplete.add(this.onSpinComplete,this);
        //this._view.sigReelReadyToStop.add(onAnimationReadyToStop);
        //this._view.sigLoopReelAnimationsStarted.add(onLoopReelAnimationsStarted);
        this._view.sigAllLoopingReelAnimationsStarted.add(this.onAllLoopReelAnimationsStarted,this);
        //this._view.sigReelStoppingHitBottom.add(this.onSpinStoppingHitBottom,this);
        this._view.sigReelStopping.add(this.onReelStopping,this);
    },

    onSpinStoppingHitBottom:function($reelIndex)
    {
        if($reelIndex == -1){
            //------- play sound -----------------------
            this.sendNotification(NotesSound.PLAY_FINAL_REEL_HITS_BOTTOM);
            this.sendNotification(NotesComponent.FINAL_REEL_SPIN_HIT_BOTTOM);
        } else {
            //this. playAnticipationReels($reelIndex + 1);
            //------- play sound -----------------------
            this.sendNotification(NotesSound.PLAY_REEL_HITS_BOTTOM,$reelIndex);//this index can be used for play different sounds on hit bottom.
            this.sendNotification(NotesComponent.REEL_SPIN_HIT_BOTTOM,$reelIndex);
        }
    },

    onReelStopping:function($reelIndex)
    {
        //================ update spin progress state ==================
        this._slotStatesProxy.currentState = SlotGameState.PLAYING_OUTRO_REEL_ANIMATIONS;
    },

    onAllLoopReelAnimationsStarted:function()
    {
        this._slotStatesProxy.currentState = SlotGameState.PLAYING_LOOP_REEL_ANIMATIONS;
    },

    onSpinComplete:function($reelIndex)
    {
        if($reelIndex == -1)
        {
            this._slotStatesProxy.currentState = SlotGameState.STANDING_BY;
            this.sendNotification(NotesComponent.FINAL_REEL_SPIN_COMPLETE);
        }else
        {
            this.sendNotification(NotesComponent.REEL_SPIN_COMPLETE,$reelIndex);// one reel animation complete
        }
    },

    onViewClick:function()
    {
        cc.log("SPIN!!!!!!");
        cc.log(this._slotDataProxy.isSpinFree);
        //TODO sendNotifications
        //if is a bonus win skip
        //else change states to
        //this.sendNotification("test",123);
        //this._slotDataProxy.isAutoSpin=true;
    },

    sendNotification:function($notificationName,$body, $type)
    {
       this._super($notificationName,$body, $type);
    }

})