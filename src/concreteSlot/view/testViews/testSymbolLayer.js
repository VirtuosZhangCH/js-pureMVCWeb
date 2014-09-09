/**
 * Created by zhangchi on 2014/9/9.
 */
var testSymbolLayer=cc.Sprite.extend({

    sigClick:new Signal(),
    ctor:function() {
        //this._super();
        cc.Sprite.prototype.ctor.call(this);
        this.testSymbol=new AbstractAnimation("BWW_Pic1_00",1,60,.04)
        this.addChild(this.testSymbol.getStaticSprite());

        //this.testSymbol.x=200;
        //this.testSymbol.y=200;
        this.testSymbol.setPosition(150,0)
        this.testSymbol.x=200;
        this.testSymbol.opacity=122;
        this.testSymbol2=new AbstractAnimation("BWW_Pic2_00",1,60,.04)
        this.addChild(this.testSymbol2.getStaticSprite());

        //this.testSymbol2.x=200;
        //this.testSymbol2.y=350;
        this.testSymbol2.setPosition(300,0)

        this.testSymbol3=new AbstractAnimation("BWW_Pic3_00",1,60,.04)
        this.addChild(this.testSymbol3.getStaticSprite());

        //this.testSymbol3.x=200;
        //this.testSymbol3.y=600;
        this.testSymbol3.setPosition(450,0)

    },

    play:function()
    {
        //this.testSymbol.getStaticSprite().setOpacity(122);
        this.testSymbol.play();
        this.testSymbol2.play();
        this.testSymbol3.play();
    },

    init:function()
    {

    }
})