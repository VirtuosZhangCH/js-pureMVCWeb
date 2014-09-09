/**
 * Created by zhangchi on 2014/9/3.
 */
var Notifier  = cc.Class.extend({

    multitonKey:null,
    ctor:function()
    {

    },
    sendNotification:function($notificationName,$body, $type)
    {
        var $body=$body|null;
        var $type=$type|null;
        if(Facade.getInstance(this.multitonKey))
        {
            Facade.getInstance.sendNotification($notificationName, $body, $type);
        }

    },

    initializeNotifier:function ($key)
    {
        this.multitonKey = $key;
    }

})

Notifier.prototype=
{
    get facade()
    {
        if (this.multitonKey == null)
        {
            throw "multitonKey for this Notifier not yet initialized!";
        }
        return Facade.getInstance(this.multitonKey);
    }
}