/**
 * Created by zhangchi on 2014/9/5.
 */
var Signal  = cc.Class.extend({
        func:null,
        point:null,
        ctor:function()
        {

        },
        add:function($fun,$point)
        {
            $point.func=$fun;
            this.point=$point;
        },
        dispatch:function($par)
        {
            $par=$par|null;
            this.point.func.apply(this.point,[$par]);
        }
})