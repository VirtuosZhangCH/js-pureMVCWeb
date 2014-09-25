/**
 * Created by zhangchi on 2014/9/24.
 */
var AbstractReelAnimation=cc.Class.extend({
    _sigSpinComplete:new Signal(),
    _sigAllLoopingReelAnimationsStarted:new Signal(),
    _sigLoopReelAnimationsStarted:new Signal(),
    _sigSpinStoppingHitBottom:new Signal(),
    _sigReelStarting:new Signal(),
    _sigReelStopping:new Signal(),

    _reelsPositionHitBottom:[],
    _viewSymbolGrid:[],
    ctor:function()
    {

    },

    onLoopComplete:function($reelId)
    {

    },

    setReelSymbolsVisibility:function($reelIndex,$visibility)
    {
        var reelSymbols = this._viewSymbolGrid[$reelIndex];
        for (var i = 0; i < reelSymbols.length; i++)
        {
            reelSymbols[i].visible = $visibility;
            reelSymbols[i].reset();
        }
    },

    stop:function($reel,$anticipationReels)
    {

    },

    onPlayLoop:function($reelId)
    {

    }
})