/**
 * Created by zhangchi on 2014/10/6.
 */
var SymbolVO=cc.Class.extend({
    reelIndex:0,
    symbolIndex:0,
    symbolName:"",
    isBlur:false,

    toString:function()
    {
        return "[SymbolVO: symbolIndex " + this.symbolIndex + ", symbolName " + this.symbolName + ", reelIndex " + this.reelIndex + "]";
    }

})