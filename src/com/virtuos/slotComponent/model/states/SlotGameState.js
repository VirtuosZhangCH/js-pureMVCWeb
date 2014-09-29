/**
 * Created by zhangchi on 2014/9/29.
 */
/**
 * Created by zhangchi on 2014/9/9.
 */
var SlotGameState  = cc.Class.extend({

    _label:"",
    _id:0,

    ctor:function(id, label)
    {
        this._id=id;
        this._label=label;
    },

    toString:function()
    {
        return this._label;
    }
})

SlotGameState.INITIALIZING=new SlotGameState(-1,"INITIALIZING");
SlotGameState.STANDING_BY =new SlotGameState(1,"STANDING_BY");

SlotGameState.PLAYING_INTRO_REEL_ANIMATIONS = new SlotGameState(3,"PLAYING_INTRO_REEL_ANIMATIONS");
SlotGameState.PLAYING_LOOP_REEL_ANIMATIONS = new SlotGameState(4,"PLAYING_LOOP_REEL_ANIMATIONS");
SlotGameState.PLAYING_OUTRO_REEL_ANIMATIONS = new SlotGameState(5,"PLAYING_OUTRO_REEL_ANIMATIONS");

SlotGameState.SHOWING_ADDITIONAL_ANIMATIONS = new SlotGameState(6,"SHOWING_ADDITIONAL_ANIMATIONS");
SlotGameState.SHOWING_ALL_WINNING_LINES = new SlotGameState(7,"SHOWING_ALL_WINNING_LINES");
SlotGameState.PLAYING_SYMBOL_ANIMATIONS = new SlotGameState(8,"PLAYING_SYMBOL_ANIMATIONS");

SlotGameState.AWAITING_PLAYER_INPUT = new SlotGameState(9,"AWAITING_PLAYER_INPUT");
SlotGameState.TRANSITIONING = new SlotGameState(10,"TRANSITIONING");