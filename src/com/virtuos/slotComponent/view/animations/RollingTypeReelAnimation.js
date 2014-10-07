/**
 * Created by zhangchi on 2014/9/25.
 */
var RollingTypeReelAnimation=AbstractReelAnimation.extend({
    _reelCanvas:null,
    _lastFrameTime:0,
    _isPlaying:false,
    _rollingSpeed:20,
    _anticipationRollingSpeed:200,
    _symbolTexturesMap:[],

    _columnHeight:0,

    ctor:function($reelContainer)
    {
        this._reelCanvas=$reelContainer;
        this._reelsAnimData=[];
    },

    enterFrameHandler:function()
    {
        //test here
        //this._isPlaying=true
        //====
        var currentTime  = new Date().getTime();
        var ticks  = Math.min(Number.POSITIVE_INFINITY, currentTime - this._lastFrameTime);
        this._lastFrameTime = currentTime;
        //cc.log(this._lastFrameTime,currentTime)
        if(!this._isPlaying)
        {
            return;
            this._reelCanvas.unschedule(this.enterFrameHandler.bind(this));
        }
        this.updateReelCanvas(ticks);
    },

    play:function()
    {
        this.rebuildSymbolsStack();
        this._super();

        //commit out it to show test effect
        //this._reelCanvas.schedule(this.enterFrameHandler.bind(this),1/24);
    },

    onPlayLoop:function($reelIndex)
    {
        this._isPlaying = true;
        this._reelsAnimData[$reelIndex].introComplete();

        if($reelIndex==0)
        {
            this._reelCanvas.schedule(this.enterFrameHandler.bind(this),1/24);
        }
    },

    rebuildSymbolsStack:function()
    {
        var numReels=this._viewSymbolGrid.length
        for (var i = 0; i <numReels ; i++)
        {
            var column=[];
            var j;
            for (j = this._viewSymbolGrid[i].length - 1; j >= 0; j--)
            {
                column.push(this._viewSymbolGrid[i][j].symbolName);
            }
            //if the _symbolOrder is provided by layer
            if(symbolOrder)
            {
                if(symbolOrder.length != numReels)
                {
                    throw new Error("The length of _symbolOrder is not equal to number of reels");
                }
                var reelLength  = symbolOrder[i].length;
                var symbolIndex  = Math.floor(Math.random() * reelLength);
                while (column.length < reelLength)
                {
                    column.push(symbolOrder[i][symbolIndex]);
                    symbolIndex = (symbolIndex + 1) % reelLength;
                }
            }
            //else
            //otherwise,we gonna take a random distribution
           /* {
                _symbolIDs.sort(int(Math.random()-.5));
                for (j = 0; j < _symbolIDs.length; j++)
                {
                    column.push(_symbolIDs[j]);
                }
            }*/
            this._reelsAnimData[i].symbolIDs = column;
        }
    },

    getIDsFromMap:function(_symbolTexturesMap)
    {
        var array = [];
        for(var id in _symbolTexturesMap)
        {
            array.push(id);
        }
        return array;
    },

    updateReelCanvas:function(ticksMs)
    {
        var speed=this._rollingSpeed;
        var moveDelta=speed * ticksMs / 1000;
        var tempSymbol;
       // cc.log("ticksMs::",ticksMs,"moveDelta::",moveDelta);
        var gridLength=this._reelsAnimData.length;
        var columnLength;
        //var columnHeight
        var lastSybY=-1;

        for(var i=0;i<gridLength;i++)
        {
            columnLength=this._blurSymbolGrid[i].length;
            //columnHeight=columnLength*125;
            //cc.log("reelAnimationData",i,this._reelsAnimData[i].isAnimating);
            if(!this._reelsAnimData[i].isAnimating)
            {
                this._reelsAnimData[i].showAndStart();
                /*var introLen=this._blurSymbolGrid[i].length
                for (var j = 0; j < introLen; j++)
                {
                    this._blurSymbolGrid[i][j].visible=false;
                }*/

            }else {
                for (var j = columnLength-1; j >=0; j--) {

                    tempSymbol = this._blurSymbolGrid[i][j]._staticSymbolImage;

                   // if (i == 2) {
                       // tempSymbol.y -= 360;
                   // } else if (i >= 0) {
                        tempSymbol.y -= speed;
                   // }
                    if (tempSymbol.y < -400) {
                        tempSymbol.y += this._columnHeight;
                    }
                }
            }
        }
        //cc.log("columnLength::",columnLength);
    },

    initBlurSymbols:function()
    {
        //set parament here
        var tempSymbol;
        var id;
        var strN;
        var startX=-335;
        var startY=-30;
        var temGrid=[];
        var symbolImage;

        for(var i = 1; i <= 12; i++)
        {
            var str = i<10?"blur_Symbol_000" + i + ".png":"blur_Symbol_00" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            this._symbolTexturesMap.push(frame);
        }

        for(var i=0;i<symbolOrder.length;i++)
        {
            temGrid=[]
            for(var j=0;j<symbolOrder[i].length;j++)
            {
                //cc.log("ORDER:",this.symbolOrder[i][j]);
                id=symbolOrd.indexOf(symbolOrder[i][j])+1;
                cc.log(id);
                strN= id>9?"#blur_Symbol_00"+id+".png":
                    "#blur_Symbol_000"+id+".png";

                tempSymbol=new cc.Sprite(strN);

                var symbolVO = new SymbolVO();
                symbolVO.reelIndex = i;
                symbolVO.symbolIndex = j;
                symbolVO.symbolName =symbolOrder[i][j];
                symbolVO.isBlur=true;

                symbolImage=new SymbolImage(tempSymbol,this._symbolTexturesMap,symbolVO);
                this._reelCanvas.addChild(tempSymbol);

                tempSymbol.visible=false;

                tempSymbol.x=startX+165*i;
                tempSymbol.y=startY+125*(j-2);

                temGrid.push(symbolImage);
            }
            var animData  = new RollingReelAnimationData();
            this._reelsAnimData.push(animData);

            this._blurSymbolGrid.push(temGrid);

        }
        this._columnHeight=this._blurSymbolGrid[0].length*125;
    }
})