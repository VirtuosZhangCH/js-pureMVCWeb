/**
 * Created by zhangchi on 2014/9/1.
 */
var AbstractActSprite  = AbstractSprite.extend({
    //what I need now is to check the parameter of the ctor
    //sprite:null,
    actions:null,
    //animation:null,
    ctor:function(name,actions){
        this.sprite =new cc.Sprite(name);
        this.actions=actions||null;
        if(this.actions)
            this.actions.retain();

        this.registGetSet();
    },

    stopAllActions:function()
    {
        this.sprite.stopAllActions();
    },

    stopAction:function()
    {
        if(this.actions)
            this.sprite.stopAction(this.actions);
    },

    playAction:function()
    {
        if(this.actions)
             this.sprite.runAction(this.actions);
    },

    release:function()
    {
        this._super();
    }

})