/**
 * Created by zhangchi on 2014/9/29.
 */
var RollingReelAnimationData=cc.Class.extend({
    isAnimating:false,
    isStopping:true,
    distanceSymbolsMoved:0,
    symbolIDs:[],
    bottomPositionIndex:0,
    //jeff
    toStart:false,
    toStop:false,

    ctor:function()
    {
        this.isAnimating = false;
        this.isStopping = false;
        this.distanceSymbolsMoved = 0;
        this.bottomPositionIndex = 0;

        this.toStart=false;
        this.toStop=false;

    },

    showAndStart:function()
    {
        this.isAnimating = true;
        this.isStopping = false;
        this.distanceSymbolsMoved = 0;
        this.bottomPositionIndex = 0;

        this.toStart=true;
        this.toStop=false;
    },

    hideAndStop:function()
    {
        this.isAnimating = false;
        this.isStopping = false;
        this.distanceSymbolsMoved = 0;
        this.bottomPositionIndex = 0;

        this.toStart=false;
        this.toStop=true;
    }
});