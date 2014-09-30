/**
 * Created by zhangchi on 2014/9/25.
 */
var RollingTypeReelAnimation=AbstractReelAnimation.extend({
    _reelCanvas:null,
    _lastFrameTime:0,
    _isPlaying:false,
    _rollingSpeed:100,
    _anticipationRollingSpeed:200,
    _symbolTexturesMap:[],

    _symbolIDs:["N","T","A","J","K","Q","P1","P2","P3","P4","W"],
    _symbolOrder:
        [["A", "J", "P1", "J", "T", "K", "P2", "P1", "N", "T", "A", "J", "P3", "Q", "T", "A", "N", "P4", "K"],//, "N", "P4",  "Q", "N", "T", "P2",  "N", "T", "P4",  "A", "Q", "T", "P4", "J", "Q", "N", "N",     "Q", "P1", "A", "P1", "Q",     "P4", "N", "P3", "Q", "P3", "J", "N", "P4", "N", "Q", "P4", "N", "Q", "J", "N", "A", "P1"],
        ["P2", "J", "N", "P4", "J", "K", "P3", "N", "K", "P1", "N", "P2", "N", "J", "J", "P2", "A", "N", "P3"],//, "K", "J",  "J", "N", "K", "P2",  "Q", "P4", "P4", "N", "A", "N", "K", "T", "N", "P2", "K",    "A", "W", "N", "K", "A", "Q",   "P2", "A", "N", "N", "Q", "A", "Q", "P4", "N", "K", "K",    "N", "A", "P3", "K", "P2", "A"],
        ["P4", "T", "J", "J", "W",  "Q", "T",  "A", "K", "K",  "K",  "P1", "Q", "K", "T", "P3", "A", "J", "K"],//, "P2", "Q",  "Q", "K", "Q", "P4",  "T", "K", "Q",   "K", "J", "K", "P3", "T", "K", "K", "K",    "Q", "P4", "J", "P1", "T", "T", "N", "Q", "Q", "K", "N", "T", "K", "P1", "J", "T", "Q",     "P1", "J", "P1", "J", "T", "T"],
        ["N", "A", "P3", "J", "P4", "T", "P1", "K", "P4", "P2", "J", "N", "K", "P2", "P2", "N", "W", "A", "J"],//, "P3", "P2", "P1", "N", "N", "P1", "Q", "P4", "T", "N", "N", "J", "P1", "K", "A", "P1", "P3", "P3", "T", "J", "P3", "Q", "N", "P2", "T", "P3", "J", "Q", "N", "P2", "N", "P3", "Q", "P4", "A", "J", "P3", "A", "J", "P3"],
        ["Q", "K", "T", "P4", "K", "P1", "P1", "J", "N", "P3", "K", "K", "T",  "N", "P2", "Q", "N", "P4", "T"]],//, "P1", "P4", "N", "A", "P4", "J", "P1", "A", "P1", "P1", "J", "A", "A", "P2", "P3", "J", "A", "A", "P2", "K", "K", "T", "N",  "A", "P3", "J", "P3", "T", "A", "P3", "T", "A", "P4", "P1", "A","P1","P1","P1","P1","P2"]],
    ctor:function($reelContainer)
    {
        this._reelCanvas=$reelContainer;
        this._reelsAnimData=[];
    },

    enterFrameHandler:function()
    {
        //test here
        this._isPlaying=true
        //====
        var currentTime  = new Date().getTime();
        var ticks  = Math.min(Number.POSITIVE_INFINITY, currentTime - this._lastFrameTime);
        this._lastFrameTime = currentTime;
        //cc.log(this._lastFrameTime,currentTime)
        if(!this._isPlaying)
        {
            return;
        }
        this.updateReelCanvas(ticks);
    },

    play:function()
    {
        this.rebuildSymbolsStack();
        this._super();

        //commit out it to show test effect
        this._reelCanvas.schedule(this.enterFrameHandler.bind(this),1/24);
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
            if(this._symbolOrder)
            {
                if(this._symbolOrder.length != numReels)
                {
                    throw new Error("The length of _symbolOrder is not equal to number of reels");
                }

                var reelLength  = this._symbolOrder[i].length;
                var symbolIndex  = Math.floor(Math.random() * reelLength);
                while (column.length < reelLength)
                {
                    column.push(this._symbolOrder[i][symbolIndex]);
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
        var gridLength=this._viewSymbolGrid.length;
        var columnLength;
        var lastSybY=-1;
        for(var i=0;i<gridLength;i++)
        {
            columnLength=this._viewSymbolGrid[i].length
            for(var j=0;j<columnLength;j++)
            {
                tempSymbol=this._viewSymbolGrid[i][j]._staticSymbolImage;
                if(i==2)
                tempSymbol.y-=360;
                else if(i>=0)
                {
                    tempSymbol.y-=60;
                }
                if(tempSymbol.y<-400)
                {
                    tempSymbol.y+=columnLength*125;//this._viewSymbolGrid[i][columnLength-1].y+125;
                }

            }
        }

        cc.log("columnLength::",columnLength);
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

        for(var i=0;i<this._symbolOrder.length;i++)
        {
            temGrid=[]
            for(var j=0;j<this._symbolOrder[i].length;j++)
            {
                //cc.log("ORDER:",this.symbolOrder[i][j]);
                id=this._symbolIDs.indexOf(this._symbolOrder[i][j])+1;
                cc.log(id);
                strN= id>9?"#blur_Symbol_00"+id+".png":
                    "#blur_Symbol_000"+id+".png";


                tempSymbol=new cc.Sprite(strN);
                symbolImage=new SymbolImage(tempSymbol,this._symbolTexturesMap);
                this._reelCanvas.addChild(tempSymbol);

                tempSymbol.x=startX+165*i;
                tempSymbol.y=startY+125*(j-1);

                temGrid.push(symbolImage);
            }
            var animData  = new RollingReelAnimationData();
            this._reelsAnimData.push(animData);

            this._viewSymbolGrid.push(temGrid);
        }
    }
})