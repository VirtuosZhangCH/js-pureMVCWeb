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
        this.createClipper();

        this.testSymbol=new AbstractAnimation("BWW_Pic1_00",1,60,.04)
        this.addChild(this.testSymbol.getStaticSprite());

        //this.testSymbol.x=200;
        //this.testSymbol.y=200;
        this.testSymbol.setPosition(150,0)
        this.testSymbol.x=200;
        this.testSymbol.opacity=122;
        this.testSymbol2=new AbstractAnimation("BWW_Pic2_00",1,60,.04)
        this.addChild(this.testSymbol2.getStaticSprite());

        this.testSymbol2.setPosition(300,0)

        this.testSymbol3=new AbstractAnimation("BWW_Pic3_00",1,60,.04)
        this.addChild(this.testSymbol3.getStaticSprite());

        //this.testSymbol3.x=200;
        //this.testSymbol3.y=600;
        this.testSymbol3.setPosition(450,0)
    },

    createClipper:function()
    {
        this.clipper=new cc.ClippingNode();
        this.clipper.tag="Reel Canvas";

        this.clipper.width=400;
        this.clipper.height=400;

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
        content.anchorX = 0.5;
        content.anchorY = 0.5;
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

    play:function()
    {
        //this.testSymbol.getStaticSprite().setOpacity(122);
        this.testSymbol.play();
        this.testSymbol2.play();
        this.testSymbol3.play();

        this.testSymbol2.opacity-=10;
    },

    init:function()
    {

    }
})