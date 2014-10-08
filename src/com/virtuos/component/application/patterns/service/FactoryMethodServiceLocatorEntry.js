/**
 * Created by zhangchi on 2014/10/8.
 */
var FactoryMethodServiceLocatorEntry  = cc.Class.extend({
    _factoryMethod:null,
    _multitonKey:"",
    ctor:function(factoryMethod,multitonKey)
    {
        if (factoryMethod == null)
        {
            throw new Error("Supplied factory method was null");
        }
        if (factoryMethod.length !== 0)
        {
            throw new Error("Incorrect number of arguments on factory method, expected <0> but got <" + factoryMethod.length + ">");
        }
        this._factoryMethod = factoryMethod;
        this._multitonKey = multitonKey;
    },

    destroy:function()
    {
        this._factoryMethod = null;
        this._multitonKey = null;
    },
    retrieveService:function()
    {
        var _loc_1 = this._factoryMethod();
        if (_loc_1 == null)
        {
            throw new Error("Service Factory Method yeilded null");
        }
        _loc_1.initializeNotifier(this._multitonKey);
        return _loc_1;
    }

})