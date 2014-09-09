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

   /* getMediatorName:function()
    {
        return this.mediatorName;
    },*/


    onRegister:function()
    {

    }

})