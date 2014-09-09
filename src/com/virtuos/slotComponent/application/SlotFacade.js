/**
 * Created by zhangchi on 2014/9/4.
 */
var SlotFacade  = Facade.extend({
    START_UP:"startup",
    /*
    *@param definationOfSlotDataProxy Class
    *@mainView component
    *@mainViewMediator Class
    *
    * */
    startup:function(definitionOfSlotDataProxy,mainView,mainViewMediator)
    {
        //var slotDataProxy=new SlotDataProxy()
        var slotDataProxy = new definitionOfSlotDataProxy();
        if(!slotDataProxy){
            throw new Error("definitionOfSlotDataProxy must be a descendent of SlotDataProxy");
            return;
        }
        this.registerProxy(slotDataProxy);
        this.registerMediator(new mainViewMediator(mainView));
    }

});

SlotFacade.instanceMap=[];
SlotFacade.KEY="SlotFacade";

SlotFacade.getInstance = function () {
    if (SlotFacade.instanceMap[SlotFacade.KEY] == null)
    {
        SlotFacade.instanceMap[SlotFacade.KEY]=new SlotFacade(SlotFacade.KEY);
    }
    return SlotFacade.instanceMap[SlotFacade.KEY];
};