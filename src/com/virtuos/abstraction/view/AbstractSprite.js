/**
 * Created by zhangchi on 2014/9/1.
 */
var AbstractSprite  = cc.Class.extend({
    //what I need now is to check the parameter of the ctor
    sprite: null,

    ctor: function (name) {
        this.sprite =new cc.Sprite(name);// sprite;
        this.registGetSet();
    },

    registGetSet:function()
    {
        cc.defineGetterSetter(this,"x",this.getPositionX,this.setPositionX);
        cc.defineGetterSetter(this,"y",this.getPositionY,this.setPositionY);
        cc.defineGetterSetter(this,"opacity",this.getOpacity,this.setOpacity);
        cc.defineGetterSetter(this,"visible",this.getVisible,this.setVisible);
    },

    getPositionY:function()
    {
        return this.sprite.y;
    },

    setPositionX: function ($y) {
        this.sprite.x = $y;
    },

    getPositionX:function()
    {
        return this.sprite.x;
    },

    setPositionX: function ($x) {
        this.sprite.x = $x;
    },

    getStaticSprite:function()
    {
        return  this.sprite;
    },

    setPosition: function ($x, $y) {
        this.getStaticSprite().x = $x;
        this.getStaticSprite().y = $y;
    },
    setOpacity:function(val)
    {
        this.getStaticSprite().opacity=val;
    },

    getOpacity:function(val)
    {
        return this.getStaticSprite().opacity;
    },

    getVisible:function()
    {
        return this.getStaticSprite().visible;
    },

    setVisible:function(bol)
    {
        this.getStaticSprite().visible=bol;
    },

    release:function()
    {
        this.getStaticSprite().release();
        cc.log("sprite released");
    }
})

