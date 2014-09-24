/**
 * Created by zhangchi on 2014/9/5.
 */
var testControlBarLayer=cc.Sprite.extend({
    testBt:null,
    sigOnClick:new Signal(),
    ctor:function()
    {

        cc.Sprite.prototype.ctor.call(this);
        this.initBg();
        this.initButton();
        this.layout();

    },

    layout:function()
    {
        this.normalLayer.y=96;
        this.bonusLayer.visible=false;
    },

    initButton:function()
    {
        var Spin=new cc.Sprite("#spin_btn.png");
        var Spin2=new cc.Sprite("#spin_btn.png");
        var Spin3=new cc.Sprite("#spin_btn.png");
        var SpinBt=new cc.MenuItemSprite(Spin,Spin2,Spin3,this.onCallBack,this);
        SpinBt.retain()
        var Paytable=new cc.Sprite("#paytable_btn.png");
        var Paytable2=new cc.Sprite("#paytable_btn.png");
        var Paytable3=new cc.Sprite("#paytable_btn.png");

        var PaytableBt=new cc.MenuItemSprite(Paytable,Paytable2,Paytable3,this.onClickPayTable,this);
        PaytableBt.retain();
        this.infoMenu=new cc.Menu(SpinBt,PaytableBt);
        this.infoMenu.retain();
        var table=cc.Sprite.create("#coins_bg.png");
        var plus=cc.Sprite.create("#coins_plus.png");
        var minus=cc.Sprite.create("#coins_minus.png");

        this.normalLayer.addChild(minus);
        this.normalLayer.addChild(plus);
        this.normalLayer.addChild(table);

        this.normalLayer.addChild(this.infoMenu,1);

        var FreeSpin=cc.Sprite.create("#freespin_btn.png");
        var FreeSpin2=cc.Sprite.create("#freespin_btn.png");
        var FreeSpin3=cc.Sprite.create("#freespin_btn.png");
        var AutoFreeSpin=cc.Sprite.create("#autofreespin_btn.png");
        var AutoFreeSpin2=cc.Sprite.create("#autofreespin_btn.png");
        var AutoFreeSpin3=cc.Sprite.create("#autofreespin_btn.png");
        var FreeSpinDisplay=cc.Sprite.create("#freespin_display.png");

        var table2=cc.Sprite.create("#coins_bg.png");
        var plus2=cc.Sprite.create("#coins_plus.png");
        var minus2=cc.Sprite.create("#coins_minus.png");

        this._tf=new cc.LabelTTF("1", "Microsoft Yahei", 15);
        this._tf.setHorizontalAlignment(cc.TEXT_ALIGNMENT_CENTER);

        var FreeSpinBt=new cc.MenuItemSprite(FreeSpin,FreeSpin2,FreeSpin3,this.onCallBack,this);
        var AutoFreeSpinBt=new cc.MenuItemSprite(AutoFreeSpin,AutoFreeSpin2,AutoFreeSpin3,this.onAutoCallBack,this);

        this.infoMenu2=cc.Menu.create(FreeSpinBt,AutoFreeSpinBt);
        this.bonusLayer.addChild(minus2);
        this.bonusLayer.addChild(plus2);
        this.bonusLayer.addChild(table2);
        this.bonusLayer.addChild(FreeSpinDisplay);
        this.bonusLayer.addChild(this._tf);

        this.bonusLayer.addChild(this.infoMenu2,1);

        minus.setPosition(70,0);
        plus.setPosition(170,0);
        table.setPosition(120,0);

        minus2.setPosition(70,0);
        plus2.setPosition(170,0);
        table2.setPosition(120,0);
        //Spin.setPosition(500,0);
        this.infoMenu.setPosition(500,0);
        this.infoMenu2.setPosition(500,0);

        FreeSpinBt.setPosition(400,0);
        AutoFreeSpinBt.setPosition(200,0);
        SpinBt.setPosition(400,0);
        PaytableBt.setPosition(0,0);
        FreeSpinDisplay.setPosition(500,0);
        this._tf.setPosition(500,0);

        //test button
       /* var closeItem = new cc.MenuItemImage(
            res.CloseNormal_png,
            res.CloseSelected_png,
            function () {
                //ss.release();
                this.sigOnClick.dispatch();
                cc.log("Menu is clicked!");
            }, this);
        closeItem.attr({
            x: 300,
            y: 200
            //anchorX: 0.5,
            //anchorY: 0.5
        });
        var menu = new cc.Menu(closeItem);
        menu.x = 0;
        menu.y = 0;
        this.addChild(menu);*/

    },

    onCallBack:function()
    {
        this.sigOnClick.dispatch();
    },

    initBg:function()
    {
        this.normalLayer=new cc.Sprite();
        this.bonusLayer=new cc.Sprite();
        //var con=new cc.ComponentContainer();
        var _bg=cc.Sprite.create("#gamecontrols_bg.png");
        var _bg2=cc.Sprite.create("#gamecontrols_bg.png");
        this.addChild(this.normalLayer);
        this.addChild(this.bonusLayer);
        //this.addChild(con);
        this.normalLayer.addChild(_bg,0);
        this.bonusLayer.addChild(_bg2,0);

        _bg.setScaleX(140);
        _bg2.setScaleX(140);

    }
})