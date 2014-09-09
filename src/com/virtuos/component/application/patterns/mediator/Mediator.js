/**
 * Created by zhangchi on 2014/9/3.
 */
var Mediator  = Notifier.extend({
    mediatorName:null,
    viewComponent:null,
    notificationMap:null,

    ctor:function($mediatorName,$viewComponent)
    {
        //$mediatorName=$mediatorName|"";
        if(!$mediatorName)
        {
            throw "Need a mediatorName please ToBe optimized";
        }
        this.notificationMap = new NotificationMap();
        this.mediatorName = $mediatorName != null ? ($mediatorName) : ("Mediator");
        this.viewComponent = $viewComponent;
        this.mapNotifications();
    },

    getMediatorName:function()
    {
        return this.mediatorName;
    },

    setViewComponent:function(viewComponent)
    {
        this.viewComponent = viewComponent;
    },

    getViewComponent:function()
    {
        return this.viewComponent;
    },

    listNotificationInterests:function()
    {
        return this.notificationMap.listNotificationInterests();
    },

    handleNotification:function(notification)
    {
        //TODO
        this.notificationMap.handleNotification(notification);
    },
    onRegister:function()
    {

    },
    onRemove:function()
    {

    },
    mapNotifications:function()
    {

    },

    //override
    initializeNotifier:function ($key)
    {
        this.multitonKey = $key;
        //this._super();
    }


})