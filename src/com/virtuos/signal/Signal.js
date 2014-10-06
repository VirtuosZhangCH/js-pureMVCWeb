/**
 * Created by zhangchi on 2014/9/5.
 */
var Signal  = cc.Class.extend({
        func:null,
        point:null,
        ctor:function()
        {
            this.name="signal";
        },
        add:function($fun,$point)
        {
            this.func=$fun;
            this.point=$point;
        },
        remove:function()
        {
            this.func=null;
            this.point=null;
        },
        dispatch:function($par)
        {
            $par=$par||null;
            if(this.point&&this.func)
              this.func.apply(this.point,[$par]);
        },
        registBind:function()
        {
           this.point=this;
        }

})