/**
 * Created by zhangchi on 2014/10/7.
 */
var AbstractResponseInterpreter=cc.Class.extend({

    interpret:function(response)
    {
        throw new Error("AbstractResponseInterpreter.interpret() should be overridden.");
    }
})