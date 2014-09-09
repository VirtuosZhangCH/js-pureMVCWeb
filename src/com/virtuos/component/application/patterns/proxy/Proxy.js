/**
 * Created by zhangchi on 2014/9/3.
 */
var Proxy  = Notifier.extend({
    /*I need a view list here ,and I can add views to this list*/
    proxyName:"",
    data:null,

    ctor:function($proxyName,$data)
    {
        this.proxyName = $proxyName != null ? ($proxyName) : "Proxy";
        if ($data != null)
        {
            this.setData($data);
        }
    },

    //override
    initializeNotifier:function ($key)
    {
        this.multitonKey = $key;
    },

    getProxyName:function()
    {
        return this.proxyName;
    },

    onRegister:function()
    {

    },

    onRemove:function()
    {

    },

    getData:function()
    {
        return this.data;
    },

    setData:function($data)
    {
        this.data = $data;
    }
})