/**
 * Created by zhangchi on 2014/9/5.
 */
var testControlBarLayer=cc.Sprite.extend({
    testBt:null,
    sigOnClick:new Signal(),
    ctor:function()
    {
        //this._super();
        cc.Sprite.prototype.ctor.call(this);
        var closeItem = new cc.MenuItemImage(
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
        this.addChild(menu);
    }
})