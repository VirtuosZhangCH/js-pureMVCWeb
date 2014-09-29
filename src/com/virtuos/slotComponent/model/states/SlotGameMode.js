/**
 * Created by zhangchi on 2014/9/29.
 */
/**
 * Created by zhangchi on 2014/9/9.
 */
var SlotGameMode  = cc.Class.extend({

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

SlotGameMode.NORMAL_SPINS=new SlotGameMode(100,"NORMAL_SPINS");
SlotGameMode.FREE_SPINS =new SlotGameMode(200,"FREE_SPINS");
SlotGameMode.FEATURE_SELECTING = new SlotGameMode(300,"FEATURE_SELECTING");
SlotGameMode.BONUS_GAME = new SlotGameMode(400,"BONUS_GAME");