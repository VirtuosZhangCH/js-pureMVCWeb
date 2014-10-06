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
    _blurSymbolGrid:[],

    _rollingSpeed:1,
    _symbolHeight:132,
    _numberSymbolsInReel:3,
    _displayingStackLength:4,
    _columnWidth:135,
    _columnGap:27,

    _reelAnimationStartDelay:20,
    _reelAnimationEndBounceDistance:20,

    _doneFirstHalfAnimation:[],
    _doneSecondHalfAnimation:[],

    _startBounceBackDistance:50,
    _endBounceBackDistance:50,
    _startBounceBackDistance:1,
    _endBounceBackDuration:1,
    ctor:function()
    {

    },
    //jeff


    //component
    isReadyToStop:function()
    {
        return this._doneFirstHalfAnimation.length >= this._viewSymbolGrid.length;
    },

    onIntroBounceComplete:function(reelIndex)
    {
        this.onPlayLoop(reelIndex);

        if(this._doneFirstHalfAnimation.length){
            this._sigLoopReelAnimationsStarted.dispatch();
        }

        if (this._doneFirstHalfAnimation.indexOf(reelIndex) == -1)
        {
            this._doneFirstHalfAnimation.push(reelIndex);
            if (this.isReadyToStop())
            {
                this._sigAllLoopingReelAnimationsStarted.dispatch();
            }
        }
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

    setSymbolGrid:function(symbols)
    {
        this._viewSymbolGrid = symbols;
    },

    play:function()
    {
        this.playIntroBounce();
    },

    //start play
    playIntroBounce:function()
    {
        this.resetAnimHalves();
        this.onPlayIntroBounce(0);
    },

    resetAnimHalves:function()
    {
        this._doneSecondHalfAnimation.length = 0;
        this._doneFirstHalfAnimation.length = 0;
    },

    onPlayIntroBounce:function($reelIndex)
    {
        this._sigReelStarting.dispatch();

        //hardcode here TOBE optimized;
        var reelSymbols = this._viewSymbolGrid[$reelIndex];
        for (var i = 0; i < reelSymbols.length; i++)
        {
            //reelSymbols[i].visible = $visibility;
            //reelSymbols[i].reset();

            reelSymbols[i].staticSymbolImage.runAction(cc.sequence(
                    cc.moveBy(.5,cc.p(0,60)),
                    cc.callFunc(this.onStartReel,this)
                ))
        }

    },

    onStartReel:function (node) {
        node.stopAllActions(); //After this stop next action not working, if remove this stop everything is working
        node.visible=false;
    },

    stop:function($reel,$anticipationReels)
    {

    },

    onPlayLoop:function($reelId)
    {

    }
})