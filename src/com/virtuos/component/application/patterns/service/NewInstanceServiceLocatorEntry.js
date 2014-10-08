/**
 * Created by zhangchi on 2014/10/8.
 */
var NewInstanceServiceLocatorEntry  = cc.Class.extend({
    _serviceClazz:null,
    _multitonKey:"",

    ctor:function($serviceClazz,$multitonKey)
    {
        this._serviceClazz = $serviceClazz;
        this._multitonKey = $multitonKey;
    },

    destroy:function()
    {
        this._serviceClazz = null;
        this._multitonKey = null;
    },

    retrieveService:function()
    {
        var service;
        try
        {
            service = new this._serviceClazz();
            service.initializeNotifier(this._multitonKey);
        }
        catch (e)
        {
            throw new Error("Failed to Instantiate IService instance of: " + this._serviceClazz + ". " + e.message);
        }
        return service;
    }
})