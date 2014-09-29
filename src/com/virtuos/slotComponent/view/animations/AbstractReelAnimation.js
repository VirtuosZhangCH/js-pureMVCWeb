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
    _anticipationReels:[],
    _viewSymbolGrid:[],

    _rollingSpeed:1,
    _symbolHeight:132,
    _numberSymbolsInReel:3,
    _displayingStackLength:4,
    _columnWidth:135,
    _columnGap:27,

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

    //start play
    playIntroBounce:function()
    {
        this.resetAnimHalves();
        this.onPlayIntroBounce(0);
    },

    resetAnimHalves:function()
    {

    },

    onPlayIntroBounce:function(reelIndex)
    {

    },

    stop:function($reel,$anticipationReels)
    {

    },

    onPlayLoop:function($reelId)
    {

    }
})