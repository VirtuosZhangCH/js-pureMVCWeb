/**
 * Created by zhangchi on 2014/9/29.
 */
var RollingReelAnimationData=cc.Class.extend({
    isAnimating:false,
    isStopping:true,
    distanceSymbolsMoved:0,
    symbolIDs:[],
    bottomPositionIndex:0,


    ctor:function()
    {
        this.isAnimating = false;
        this.isStopping = false;
        this.distanceSymbolsMoved = 0;
        this.bottomPositionIndex = 0;

    },

    showAndStart:function()
    {
        this.isAnimating = false;
        this.isStopping = false;
        this.distanceSymbolsMoved = 0;
        this.bottomPositionIndex = 0;
    },

    introComplete:function()
    {
        this.isAnimating = true;
        this.isStopping = false;
    },

    ontroStarted:function()
    {
        this.isAnimating = false;
        this.isStopping = true;
    },

    hideAndStop:function()
    {
        this.isAnimating = false;
        this.isStopping = false;
        this.distanceSymbolsMoved = 0;
        this.bottomPositionIndex = 0;
    }
});