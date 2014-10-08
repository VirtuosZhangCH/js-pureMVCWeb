/**
 * Created by zhangchi on 2014/9/9.
 */
var testSymbolLayer=cc.Sprite.extend({

    sigClick:new Signal(),
    _reelAnimationsContainer:null,
    _symbolsContainer:null,

    _texturesMap : {},
    _blurredTexturesMap : {},
    _symbolGrid : [],
    _viewSymbolGrid : [],
    _animationController :null,// getStaticSymbolAnimationController();

    //own component

    _clipper:null,
    _clipRectangle:null,
    ctor:function() {
        //this._super();
        cc.Sprite.prototype.ctor.call(this);

        //clipper
        this.createChildren();
    },

    createChildren:function()
    {
        this._symbolsContainer=new cc.Sprite();
        this.addChild(this._symbolsContainer);
        this.createClipper();
    },

    createClipper:function()
    {
        this.clipper=new cc.ClippingNode();
        this.clipper.tag="Reel Canvas";

        this.clipper.width=1000;
        this.clipper.height=610;

        this.clipper.anchorX = 0.5;
        this.clipper.anchorY = 0.5;

        this.addChild(this.clipper);

        var stencil = new cc.DrawNode();
        var rectangle = [cc.p(0, 0),cc.p(this.clipper.width, 0),
            cc.p(this.clipper.width, this.clipper.height),
            cc.p(0, this.clipper.height)];

        var white = cc.color(255, 255, 255, 255);
        stencil.drawPoly(rectangle, white, 1, white);
        this.clipper.stencil = stencil;

        this.createReelContent();
        //this.createCustomReel();

    },

    createReelContent:function()
    {
        this._reelAnimationsContainer=new cc.SpriteBatchNode(res.s_blur);
        //TODO add symbols
        this._animationController=this.initAsRollingTypeReelAnimation(this._reelAnimationsContainer);

        this._animationController.initBlurSymbols();
        var content = this._reelAnimationsContainer
        content.tag = "Reel Content";

        content.x = this.clipper.width / 2;
        content.y = this.clipper.height / 2;
        this.clipper.addChild(content);

    },

    initAsRollingTypeReelAnimation:function($reelAnimationsContainer)
    {
         return new RollingTypeReelAnimation($reelAnimationsContainer);
    },

    createCustomReel:function()
    {

    },

    playReelAnimation:function()
    {
       //this.schedule(this.playReel,1/24);
       this._animationController.play();
    },

    initChildren:function()
    {
        this.initSymbols();
        this.initAnimationController(this._animationController);

        return this._symbolGrid;
    },

    initAnimationController:function(animationController)
    {
        animationController.setSymbolGrid(this._viewSymbolGrid)
    },

    initSymbols:function()
    {
        this.symbolFrames=[];
        this._viewSymbolGrid=[];
        this._symbolGrid=[];
        for(var i = 1; i <= 12; i++)
        {
            var str = i<10?"Symbol_000" + i + ".png":"Symbol_00" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            this.symbolFrames.push(frame);
        }

        var tempImageArr=[];
        var symbol
        var symbolImage
        for(var i=0;i<5;i++)
        {
            //tempArr=[];
            tempImageArr=[];
            for(var j=0;j<5;j++)
            {
                symbol=cc.Sprite.create("#Symbol_0001.png");
                var symbolVO = new SymbolVO();
                symbolVO.reelIndex = i;
                symbolVO.symbolIndex = j;
                symbolVO.symbolName = symbolOrder[i][j];
                symbolImage=new SymbolImage(symbol,this.symbolFrames,symbolVO);
                //TODO optimize here
                symbolImage.initX=symbol.x=(i-2)*165-4;
                symbolImage.initY=symbol.y=(j-2)*125-24;

                //just a test
                symbolImage.setSource(symbolOrder[i][j]);

                //tempArr.push(symbol);
                tempImageArr.push(symbolImage);
                this._symbolsContainer.addChild(symbol);

            }
            this._symbolGrid.push(tempImageArr);

            this._viewSymbolGrid.push(tempImageArr);
        }

    }
})