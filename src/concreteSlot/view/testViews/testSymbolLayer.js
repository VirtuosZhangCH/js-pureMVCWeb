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

        this.testSymbol=new AbstractAnimation("BWW_Pic1_00",1,60,.04)
        //this.addChild(this.testSymbol.getStaticSprite());

        //this.testSymbol.x=200;
        //this.testSymbol.y=200;
        this.testSymbol.setPosition(150,0)
        this.testSymbol.x=200;
        this.testSymbol.opacity=122;
        this.testSymbol2=new AbstractAnimation("BWW_Pic2_00",1,60,.04)
        //this.addChild(this.testSymbol2.getStaticSprite());

        this.testSymbol2.setPosition(300,0)

        this.testSymbol3=new AbstractAnimation("BWW_Pic3_00",1,60,.04)
        //this.addChild(this.testSymbol3.getStaticSprite());

        //this.testSymbol3.x=200;
        //this.testSymbol3.y=600;
        this.testSymbol3.setPosition(450,0)
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

    initAsRollingTypeReelAnimation:function($animationContainer)
    {
         return new RollingTypeReelAnimation($animationContainer);
    },

    createCustomReel:function()
    {

    },

    playReelAnimation:function()
    {
        //this.testSymbol.getStaticSprite().setOpacity(122);
        this.testSymbol.play();
        this.testSymbol2.play();
        this.testSymbol3.play();

        this.testSymbol2.opacity-=10;

        this.schedule(this.playReel,1/24);
    },

    playReel:function()
    {
        this._animationController.enterFrameHandler();
    },

    initChildren:function()
    {
        this.initSymbols();
    },

    initSymbols:function()
    {
        this.symbolFrames=[];
        this._symbolGrid=[];
        for(var i = 1; i <= 12; i++)
        {
            var str = i<10?"Symbol_000" + i + ".png":"Symbol_00" + i + ".png";
            var frame = cc.spriteFrameCache.getSpriteFrame(str);
            this.symbolFrames.push(frame);
        }

        var tempImageArr=[];
        for(var i=0;i<5;i++)
        {
            //tempArr=[];
            tempImageArr=[];
            for(var j=0;j<5;j++)
            {
                var symbol=cc.Sprite.create("#Symbol_0001.png");
                var symbolImage=new SymbolImage(symbol,this.symbolFrames);
                //TODO optimize here
                symbolImage.initX=symbol.x=(i-2)*165-4;
                symbolImage.initY=symbol.y=(j-2)*125-24;

                //tempArr.push(symbol);
                tempImageArr.push(symbolImage);
                this._symbolsContainer.addChild(symbol);

            }
            this._symbolGrid.push(tempImageArr);
        }
        return this._symbolGrid;
    }


})