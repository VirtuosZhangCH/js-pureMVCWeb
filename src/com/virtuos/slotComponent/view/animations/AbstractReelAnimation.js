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

    _reelAnimationStartDelay:1,
    _reelAnimationEndBounceDistance:20,
    _reelAnimationCompleteDelay:1,
    _doneFirstHalfAnimation:[],
    _doneSecondHalfAnimation:[],

    _introReelCompleted:0,
    _outroReelCompleted:0,

    _startBounceBackDistance:50,
    _endBounceBackDistance:50,
    _startBounceBackDistance:.5,
    _endBounceBackDuration:1,

    _isUserForcedStop:false,

    ctor:function()
    {

    },
    //jeff

    //component
    isReadyToStop:function()
    {
        return this._doneFirstHalfAnimation.length >= this._viewSymbolGrid.length;
    },

    playOutroBounce:function($anticipationReels)
    {
        this.resetAnimHalves();
        this._anticipationReels=$anticipationReels;
        this.onPlayOutroBounce(0);
    },

    onPlayOutroBounce:function($reelIndex)
    {

    },

    onPlayOutroBounceComplete:function($reelIndex)
    {
        var allComplete  = ($reelIndex >=this._viewSymbolGrid.length - 1);
        //so the -1 indicate this is the last one,then we don't have to expose the number reels to outside.
        if(allComplete)
        {
            if(this._reelAnimationCompleteDelay > 0)
            {
               /* var id:uint = setTimeout(function():void{
                _sigSpinComplete.dispatch(-1);
                clearTimeout(id);
                 },_reelAnimationCompleteDelay * 1000);*/
            }
            else
            {
                this._sigSpinComplete.dispatch(-1);
            }
        }else
        {
            this._sigSpinComplete.dispatch($reelIndex);
        }
    },

    onIntroBounceComplete:function($reelIndex)
    {
        var gridLength=this._blurSymbolGrid[$reelIndex].length;
        for(var i=0;i<gridLength;i++)
        {
            this._blurSymbolGrid[$reelIndex][i].visible=true;
        }

        this.onPlayLoop($reelIndex);

        if(this._doneFirstHalfAnimation.length){
            this._sigLoopReelAnimationsStarted.dispatch();
        }
        if (this._doneFirstHalfAnimation.indexOf($reelIndex) == -1)
        {
            this._doneFirstHalfAnimation.push($reelIndex);
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

        this._introReelCompleted=0;
        this._outroReelCompleted=0;
    },

    onPlayIntroBounce:function($reelIndex)
    {
        this._sigReelStarting.dispatch();

        //hardcode here TOBE optimized;
        //var reelSymbols = this._viewSymbolGrid[$reelIndex];
        //for()
        /*for (var i = 0; i < reelSymbols.length; i++)
        {
            reelSymbols[i].staticSymbolImage.runAction(cc.sequence(
                    cc.moveBy(.5,cc.p(0,60)),
                    cc.callFunc(this.onStartReel,this,i)
                ))
        }*/
        var startDelay = this._reelAnimationStartDelay
        var delayTime
        for(var i=0;i<this._viewSymbolGrid.length;i++)
        {
            delayTime=i*startDelay
            for(var j=0;j<this._viewSymbolGrid[i].length;j++)
            {
                var move1 = cc.moveBy(.25, cc.p(0, 60));
                this._viewSymbolGrid[i][j].staticSymbolImage.runAction(cc.sequence(
                    cc.delayTime(delayTime),
                    move1,move1.reverse(),
                    cc.callFunc(this.onStartReel,this,j)
                ))
            }
        }
      /*  var nextIndex = $reelIndex + 1;
        if (nextIndex < this._viewSymbolGrid.length) {
            var startDelay = this._reelAnimationStartDelay * .01;
            if(startDelay > 0) // setTimeout with a 0 value seems to add a very minor delay regardless
            {
                var callBack=cc.callFunc(this.onPlayIntroBounce,nextIndex);

                //this.runAction(cc.sequence(cc.delayTime(1),callBack));
                //this.scheduleOnce(callBack,startDelay,1,0);
            }
            else
            {
                this.onPlayIntroBounce(nextIndex);
            }
        }*/
    },

    onStartReel:function (node,id) {
        node.stopAllActions(); //After this stop next action not working, if remove this stop everything is working
        node.visible=false;

        if(id==0)
        {
            this.onIntroBounceComplete(this._introReelCompleted++);
        }
    },

    stop:function($reel,$anticipationReels,$isUserStop)
    {
        $anticipationReels=$anticipationReels||null;
        $isUserStop=$isUserStop||false;
        this._isUserForcedStop = $isUserStop;

        if (this.isReadyToStop() == false)
        {
            //this.startPolling($reel,$anticipationReels);//the animations are not ready to stop yet, then we do it later with a timer counting.
            return;
        }
        this.playStopAnimation($reel,$anticipationReels);
    },

    playStopAnimation:function($reel,$anticipationReels)
    {

    },

    onPlayLoop:function($reelId)
    {

    }
})


