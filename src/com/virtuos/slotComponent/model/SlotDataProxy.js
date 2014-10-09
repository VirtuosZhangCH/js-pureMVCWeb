/**
 * Created by zhangchi on 2014/9/4.
 */
var SlotDataProxy  = Proxy.extend({

    _betLines:null,
    _coinSize:null,
    _lastSpinResult:{},
    _freeSpinRemaining:0,
    _isAutoSpin:false,

    slotRequestService:null,

    _lastSpinResult:null,
    _spinResponseRecieved:false,

    ctor:function(name)
    {
        this._super(SlotDataProxy.NAME);
        this._betLines = 1;
        this._coinSize = 0;

        cc.defineGetterSetter(this,"isSpinFree",this.getIsSpinFree,this.setIsSpinFree);
        cc.defineGetterSetter(this,"lastSpinResult",this.getLastSpinResult );
        cc.defineGetterSetter(this,"spinResponseRecieved",this.getSpinResponseRecieved,this.setSpinResponseRecieved);
    },

    onRegister:function()
    {
        this.slotRequestService = this.facade.retrieveService("SlotRequestService");
        //this.slotRequestService.sigHandShakeResponse.add(handleHandshakeResponce);
        this.slotRequestService._sigSpinResponse.add(this.handleSpinResponse.bind(this),this);
        //this.slotRequestService.sigAppReset.add(handleGameReset);
    },

    handleSpinResponse:function(spinResponse)
    {
        this._lastSpinResult = spinResponse;

        this.setSpinResponseRecieved(true);
    },

    getLastSpinResult:function()
    {
        return this._lastSpinResult;
    },

    getSpinResponseRecieved:function()
    {
        return  this._spinResponseRecieved;
    },

    setSpinResponseRecieved:function(value)
    {
        this._spinResponseRecieved = value;
        value   && this.sendNotification(NotesGameDataUpdate.SPIN_RESPONSE_RECIEVED);
    },

    getIsSpinFree:function()
    {
        return this._freeSpinRemaining>0;
    },

    setIsSpinFree:function(value)
    {
        this._isAutoSpin = value;
    },

    sendNotification:function($notificationName,$body, $type)
    {
        $body=$body||null;
        $type=$type||null;
        if(Facade.getInstance(this.multitonKey))
        {
            Facade.getInstance(this.multitonKey).sendNotification($notificationName, $body, $type);
        }
    },

    onRemove:function()
    {
        //TODO remove
        //slotRequestService._sigHandShakeResponse.remove(handleHandshakeResponce);
        this.slotRequestService._sigSpinResponse.remove(this.handleSpinResponse);
        this.slotRequestService = null;
    }
})

SlotDataProxy.NAME="SlotDataProxy";