/**
 * Created by zhangchi on 2014/9/29.
 */
var AbstractReelAnimation=cc.Class.extend({
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
        this.isAnimating = true;
        this.isStopping = false;
        this.distanceSymbolsMoved = 0;
        this.bottomPositionIndex = 0;
    },

    hideAndStop:function()
    {
        this.isAnimating = false;
        this.isStopping = false;
        this.distanceSymbolsMoved = 0;
        this.bottomPositionIndex = 0;
    }
});