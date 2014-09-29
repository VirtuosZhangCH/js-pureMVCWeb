/**
 * Created by zhangchi on 2014/9/4.
 */
var AbstractSlotComponentMediator  = Mediator.extend
({
    _viewComponent:null,
    ctor:function(mediatorName,viewComponent)
    {
        this._super(mediatorName,viewComponent);
        this._viewComponent=viewComponent;

       // cc.defineGetterSetter(this,"mediatorName",this.getMediatorName);
    },

    sendNotification:function($notificationName,$body, $type)
    {
        var $body=$body||null;
        var $type=$type||null;
        if(Facade.getInstance(this.multitonKey))
        {
            Facade.getInstance(this.multitonKey).sendNotification($notificationName, $body, $type);
        }
        //this._super($notificationName,$body, $type);

    },

    onRegister:function()
    {

    }

})