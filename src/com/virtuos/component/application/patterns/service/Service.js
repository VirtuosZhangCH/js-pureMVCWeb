/**
 * Created by zhangchi on 2014/10/8.
 */
var Service  = cc.Class.extend({
    facade:null,
    ctor:function()
    {

    },
    initializeNotifier:function($key)
    {
        this.facade = Facade.getInstance($key);
    }

})