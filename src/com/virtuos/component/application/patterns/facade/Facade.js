/**
 * Created by zhangchi on 2014/9/3.
 */
var Facade  = cc.Class.extend({
    controller:null,
    model:null,
    view:null,
    multitionKey:"Facade",
    serviceLocator:null,

    ctor:function ($key) {
        if (Facade.instanceMap[$key] != null)
        {
            throw Error("Facade instance for this Multiton key already constructed!");
        }
        this.initializeNotifier($key);
        Facade.instanceMap[this.multitonKey] = this;
        this.initializeFacade();
    },

    initializeFacade:function()
    {
        this.initializeServiceLocator();
        this.initializeModel();
        this.initializeController();
        this.initializeView();
    },

    initializeController:function()
    {
        if (this.controller != null)
        {
            return;
        }
        this.controller = Controller.getInstance(this.multitonKey);
    },

    initializeModel:function()
    {
        if (this.model != null)
        {
            return;
        }
        this.model = Model.getInstance(this.multitonKey);
    },

    initializeView:function()
    {
        if (this.view != null)
        {
            return;
        }
        this.view = View.getInstance(this.multitonKey);
        return;
    },

    initializeServiceLocator:function()
    {
        if (this.serviceLocator != null)
        {
            return;
        }
        this.serviceLocator = ServiceLocator.getInstance(this.multitonKey);
    },

    registerCommand:function(notificationName,commandClassRef)
    {
        this.controller.registerCommand(notificationName, commandClassRef);
    },
    removeCommand:function(notificationName)
    {
        this.controller.removeCommand(notificationName);
    },
    hasCommand:function(notificationName)
    {
        return this.controller.hasCommand(notificationName);
    },
    registerProxy:function(proxy)
    {
        this.model.registerProxy(proxy);
    },
    retrieveProxy:function(proxyName)
    {
        return this.model.retrieveProxy(proxyName);
    },
    removeProxy:function(proxyName)
    {
        var _loc_2 = null;
        if (this.model != null)
        {
            _loc_2 = this.model.removeProxy(proxyName);
        }
    },
    hasProxy:function(proxyName)
    {
        return this.model.hasProxy(proxyName);
    },

    registerMediator:function(mediator)
    {
        if (this.view != null)
        {
            cc.log("NAME::"+this.view.multitonKey)
            this.view.registerMediator(mediator);
        }
    },

    retrieveMediator:function(mediatorName)
    {
        return this.view.retrieveMediator(mediatorName)
    },

    removeMediator:function(mediatorName)
    {
        var _loc_2 = null;
        if (this.view != null)
        {
            _loc_2 = this.view.removeMediator(mediatorName);
        }
        return _loc_2;
    },
    hasMediator:function(mediatorName)
    {
        return this.view.hasMediator(mediatorName);
    },

    sendNotification:function(notificationName,body,type)
    {
        body=body||null;
        type=type||null;
        this.notifyObservers(new Notification(notificationName, body, type));

    },

    //service

    registerService:function(serviceInterfaceOrName,serviceClazz)
    {
        this.serviceLocator.registerService(serviceInterfaceOrName, serviceClazz);
    },
    registerServiceAsSingleton:function(serviceInterfaceOrName,serviceInstance)
    {
        this.serviceLocator.registerServiceAsSingleton(serviceInterfaceOrName, serviceInstance);
    },
    registerServiceFactory:function(serviceInterfaceOrName,serviceFactoryMethod)
    {
        this.serviceLocator.registerServiceFactory(serviceInterfaceOrName, serviceFactoryMethod);
    },
    retrieveService:function(serviceInterfaceOrName)
    {
        return this.serviceLocator.retrieveService(serviceInterfaceOrName);
    },
    removeService:function(serviceInterfaceOrName)
    {
        this.serviceLocator.removeService(serviceInterfaceOrName);
    },
    hasService:function(serviceInterfaceOrName)
    {
        return this.serviceLocator.hasService(serviceInterfaceOrName);
    },


    notifyObservers:function(notification)
    {
        if (this.view != null)
        {
            this.view.notifyObservers(notification);
        }
    },
    initializeNotifier:function(key)
    {
        this.multitonKey = key;
    }
});

Facade.instanceMap=[];
Facade.KEY="Facade";
Facade.getInstance = function (key) {
    if (Facade.instanceMap[key] == null)
    {
        Facade.instanceMap[key] = new Facade(key);
    }
    return Facade.instanceMap[key];
};
Facade.hasCore= function (key)
{
    return Facade.instanceMap[key] != null;
}


Facade.removeCore= function (key)
{
    if (Facade.instanceMap[key] == null)
    {
        return;
    }
    Model.removeModel(key);
    View.removeView(key);
    Controller.removeController(key);
    delete Facade.instanceMap[key];
}// end function
