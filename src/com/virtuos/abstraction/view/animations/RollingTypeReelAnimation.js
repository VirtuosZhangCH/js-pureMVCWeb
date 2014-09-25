/**
 * Created by zhangchi on 2014/9/25.
 */
var RollingTypeReelAnimation=AbstractReelAnimation.extend({
    _reelContainer:null,

    symbolIDs:["N","T","A","J","K","Q","P1","P2","P3","P4","W"],
    symbolOrder:[["A", "J", "P1", "J", "T", "K", "P2", "P1", "N", "T", "A", "J", "P3", "Q", "T", "A", "N", "P4", "K", "N", "P4", "Q", "N", "T", "P2", "N", "T", "P4", "A", "Q", "T", "P4", "J", "Q", "N", "N", "Q", "P1", "A", "P1", "Q", "P4", "N", "P3", "Q", "P3", "J", "N", "P4", "N", "Q", "P4", "N", "Q", "J", "N", "A", "P1", "T", "N", "N", "Q", "N", "A", "P4", "Q", "N", "N", "A","P1","P1","P1","P1","P2"],
        ["P2", "J", "N", "P4", "J", "K", "P3", "N", "K", "P1", "N", "P2", "N", "J", "J", "P2", "A", "N", "P3", "K", "J", "J", "N", "K", "P2", "Q", "P4", "P4", "N", "A", "N", "K", "T", "N", "P2", "K", "A", "W", "N", "K", "A", "Q", "P2", "A", "N", "N", "Q", "A", "Q", "P4", "N", "K", "K", "N", "A", "P3", "K", "P2", "A", "N", "P2", "T", "T", "N", "P1", "A", "K", "P4", "P1", "P1", "A", "N", "N", "P4", "N", "Q", "Q", "P3", "N", "N", "P4", "K", "N", "P4", "K", "N", "P2", "K", "N", "P3", "A", "K", "P2", "A", "N", "K","P1","P1","P1","P1","P2"],
        ["P4", "T", "J", "J", "W", "Q", "T", "A", "K", "K", "K", "P1", "Q", "K", "T", "P3", "A", "J", "K", "P2", "Q", "Q", "K", "Q", "P4", "T", "K", "Q", "K", "J", "K", "P3", "T", "K", "K", "K", "Q", "P4", "J", "P1", "T", "T", "N", "Q", "Q", "K", "N", "T", "K", "P1", "J", "T", "Q", "P1", "J", "P1", "J", "T", "T", "T", "K", "N", "P3", "T", "T", "P1", "J", "J", "P1", "T", "J", "J", "J", "T", "T", "P2", "T", "J", "T", "J", "P1", "J", "J", "P1", "K", "Q", "T", "J", "T", "T", "P2", "K", "Q", "T", "T", "P2","P1","P1","P1","P1","P2"],
        ["N", "A", "P3", "J", "P4", "T", "P1", "K", "P4", "P2", "J", "N", "K", "P2", "P2", "N", "W", "A", "J", "P3", "P2", "P1", "N", "N", "P1", "Q", "P4", "T", "N", "N", "J", "P1", "K", "A", "P1", "P3", "P3", "T", "J", "P3", "Q", "N", "P2", "T", "P3", "J", "Q", "N", "P2", "N", "P3", "Q", "P4", "A", "J", "P3", "A", "J", "P3", "A", "N","P1","P1","P1","P1","P2"],
        ["Q", "K", "T", "P4", "K", "P1", "P1", "J", "N", "P3", "K", "K", "T", "N", "P2", "Q", "N", "P4", "T", "P1", "P4", "N", "A", "P4", "J", "P1", "A", "P1", "P1", "J", "A", "A", "P2", "P3", "J", "A", "A", "P2", "K", "K", "T", "N", "A", "P3", "J", "P3", "T", "A", "P3", "T", "A", "P4", "P1", "A","P1","P1","P1","P1","P2"]],
    ctor:function($reelContainer)
    {
        this._reelContainer=$reelContainer;
    },

    initBlurSymbols:function()
    {
        //return null;
        var tempSymbol;
        var id;
        var strN
        for(var i=0;i<this.symbolOrder.length;i++)
        {
            for(var j=0;j<this.symbolOrder[i].length;j++)
            {
                //cc.log("ORDER:",this.symbolOrder[i][j]);
                id=this.symbolIDs.indexOf(this.symbolOrder[i][j])+1;
                cc.log(id);
                strN= id>9?"#blur_Symbol_00"+id+".png":
                    "#blur_Symbol_000"+id+".png";

                tempSymbol=new cc.Sprite(strN);
                this._reelContainer.addChild(tempSymbol);
                tempSymbol.x=50*i;
                tempSymbol.y=50*j;
            }
        }
    }
})