/**
 * Created by zhangchi on 2014/10/8.
 */
var ServiceLocator  = cc.Class.extend({
    multitonKey:"",
    _serivceRegistry:{},

    ctor:function($key)
    {
        this._serivceRegistry ={}
        if (ServiceLocator.instanceMap[$key] != null)
        {
            throw Error("ServiceLocatorRegistry instance for this Multiton key already constructed!");
        }
        this.multitonKey = $key;
        ServiceLocator.instanceMap[this.multitonKey] = this;
    },

    registerService:function($serviceInterfaceOrName,$serviceClazz)
    {
        var entry;
        var serviceInterfaceOrName = $serviceInterfaceOrName;
        var serviceClazz = $serviceClazz;
        try
        {
            entry = new NewInstanceServiceLocatorEntry(serviceClazz, this.multitonKey);
            entry.retrieveService();
            this._serivceRegistry[serviceInterfaceOrName] = entry;
        }
        catch (e)
        {
            throw new Error(serviceInterfaceOrName, e.message);
        }
    },

    registerServiceAsSingleton:function(serviceInterfaceOrName, serviceInstance)
    {
        var serviceInterfaceOrName = serviceInterfaceOrName;
        var serviceInstance = serviceInstance;
        try
        {
            this._serivceRegistry[serviceInterfaceOrName] = new SingletonServiceLocatorEntry(serviceInstance, this.multitonKey);
        }
        catch (e)
        {
            throw new Error(serviceInterfaceOrName, e.message);
        }
    },

    registerServiceFactory:function(serviceInterfaceOrName,serviceFactoryMethod)
    {
        var entry;
        var serviceInterfaceOrName = serviceInterfaceOrName;
        var serviceFactoryMethod = serviceFactoryMethod;
        try
        {
            entry = new FactoryMethodServiceLocatorEntry(serviceFactoryMethod, this.multitonKey);
            entry.retrieveService();
            this._serivceRegistry[serviceInterfaceOrName] = entry;
        }
        catch (e)
        {
            throw new Error(serviceInterfaceOrName, e.message);
        }
    },

    retrieveService:function(serviceInterfaceOrName)
    {
        var _loc_2 = this._serivceRegistry[serviceInterfaceOrName];
        if (_loc_2 == null)
        {
            throw new Error("No Service registered against supplied serviceInterfaceOrName: <" + serviceInterfaceOrName + ">");
        }
        return _loc_2.retrieveService();
    },// end function

    removeService:function (serviceInterfaceOrName)
    {
        var _loc_2 = this._serivceRegistry[serviceInterfaceOrName];
        if (_loc_2 == null)
        {
            return;
        }
        _loc_2.destroy();
        delete this._serivceRegistry[serviceInterfaceOrName];
    },// end function

     hasService:function(serviceInterfaceOrName)
    {
        return this._serivceRegistry[serviceInterfaceOrName] != null;
    }// end function
})
ServiceLocator.instanceMap=[];
ServiceLocator.getInstance=function(key)
{
    if (ServiceLocator.instanceMap[key] == null)
    {
        ServiceLocator.instanceMap[key] = new ServiceLocator(key);
    }
    return ServiceLocator.instanceMap[key];
}// end function

ServiceLocator.removeServiceLocator=function (key)
{
    delete ServiceLocator.instanceMap[key];
}