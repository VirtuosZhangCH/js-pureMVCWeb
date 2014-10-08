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
    startup:function(definitionOfSlotDataProxy,definitionOfSlotStatesProxy,definitionOfSlotRequestService,mainView,mainViewMediator)
    {
        //var slotDataProxy=new SlotDataProxy()
        var slotDataProxy = new definitionOfSlotDataProxy();
        var slotStatesProxy = new definitionOfSlotStatesProxy();
        var slotRequestService = new definitionOfSlotRequestService();
        if(!slotRequestService){
            throw new Error("definationOfSlotRequestService must be an implementation of ISlotRequestService");
            return;
        }
        if(!slotDataProxy){
            throw new Error("definitionOfSlotDataProxy must be a descendent of SlotDataProxy");
            return;
        }
        if(!slotStatesProxy){
            throw new Error("definationOfSlotStatesProxy must be a descendent of SlotStatesProxy");
            return;
        }
        this.registerServiceAsSingleton("SlotRequestService",slotRequestService);
        this.registerProxy(slotDataProxy);
        this.registerProxy(slotStatesProxy);
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