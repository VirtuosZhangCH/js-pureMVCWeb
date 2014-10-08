/**
 * Created by zhangchi on 2014/10/8.
 */
var SingletonServiceLocatorEntry  = cc.Class.extend({
    _serviceInstance:null,
    _multitonKey:"",
    _serviceInitialized:false,
    ctor:function(serviceInstance,multitonKey)
    {
        if (serviceInstance == null)
        {
            throw new Error("IService instance was null");
        }
        this._serviceInstance = serviceInstance;
        this._multitonKey = multitonKey;
    },

    destroy:function()
    {
        this._serviceInstance = null;
        this._multitonKey = null;
    },

    retrieveService:function()
    {
        if (!this._serviceInitialized)
        {
            this._serviceInstance.initializeNotifier(this._multitonKey);
            this._serviceInitialized = true;
        }
        return this._serviceInstance;
    }

})