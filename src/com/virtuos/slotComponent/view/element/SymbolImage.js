/**
 * Created by zhangchi on 2014/8/15.
 */
var symbolOrd=["N","T","A","J","K","Q","P1","P2","P3","P4","S","W"];
var symbolOrder=
    [["A", "J", "P1", "J", "T", "K", "P2", "P1", "N", "T", "A", "J", "P3"] ,//"Q", "T", "A", "N", "P4", "K"],//, "N", "P4",  "Q", "N", "T", "P2",  "N", "T", "P4",  "A", "Q", "T", "P4", "J", "Q", "N", "N",     "Q", "P1", "A", "P1", "Q",     "P4", "N", "P3", "Q", "P3", "J", "N", "P4", "N", "Q", "P4", "N", "Q", "J", "N", "A", "P1"],
        ["P2", "J", "N", "P4", "J", "K", "P3", "N", "K", "P1", "N", "P2", "N"], //"J", "J", "P2", "A", "N", "P3"],//, "K", "J",  "J", "N", "K", "P2",  "Q", "P4", "P4", "N", "A", "N", "K", "T", "N", "P2", "K",    "A", "W", "N", "K", "A", "Q",   "P2", "A", "N", "N", "Q", "A", "Q", "P4", "N", "K", "K",    "N", "A", "P3", "K", "P2", "A"],
        ["P4", "T", "J", "J", "W",  "Q", "T",  "A", "K", "K",  "K",  "P1", "Q"], //"K", "T", "P3", "A", "J", "K"],//, "P2", "Q",  "Q", "K", "Q", "P4",  "T", "K", "Q",   "K", "J", "K", "P3", "T", "K", "K", "K",    "Q", "P4", "J", "P1", "T", "T", "N", "Q", "Q", "K", "N", "T", "K", "P1", "J", "T", "Q",     "P1", "J", "P1", "J", "T", "T"],
        ["N", "A", "P3", "J", "P4", "T", "P1", "K", "P4", "P2", "J", "N", "K"], //"P2", "P2", "N", "W", "A", "J"],//, "P3", "P2", "P1", "N", "N", "P1", "Q", "P4", "T", "N", "N", "J", "P1", "K", "A", "P1", "P3", "P3", "T", "J", "P3", "Q", "N", "P2", "T", "P3", "J", "Q", "N", "P2", "N", "P3", "Q", "P4", "A", "J", "P3", "A", "J", "P3"],
        ["Q", "K", "T", "P4", "K", "P1", "P1" ,"J","N", "P3", "K", "K", "T"]];  //"N", "P2", "Q", "N", "P4", "T"]];//, "P1", "P4", "N", "A", "P4", "J", "P1", "A", "P1", "P1", "J", "A", "A", "P2", "P3", "J", "A", "A", "P2", "K", "K", "T", "N",  "A", "P3", "J", "P3", "T", "A", "P3", "T", "A", "P4", "P1", "A","P1","P1","P1","P1","P2"]],
var SymbolImage=cc.Class.extend({
    _staticSymbolImage:null,
    _symbolTextureMap:null,
    initX:0,
    initY:0,
    ctor:function(symbol,symbolTextureMap,symbolVO)
    {
        this._staticSymbolImage=symbol;
        this._symbolTextureMap=symbolTextureMap;
        symbolVO=symbolVO||null;
        cc.defineGetterSetter(this,"visible",this.getVisible,this.setVisible);
        cc.defineGetterSetter(this,"staticSymbolImage",this.getStaticSymbolImage);
        cc.defineGetterSetter(this,"symbolName",this.getSymbolName);
        cc.defineGetterSetter(this,"symbolVO",null,this.setSymbolVO);

        if(symbolVO)
        {
            this._symbolVO = symbolVO;
        }
    },

    getSymbolName:function()
    {
        return this._symbolVO?this._symbolVO.symbolName:"";
    },

    setVisible:function(bol)
    {
        this._staticSymbolImage.visible=bol;
    },

    getVisible:function()
    {
        return this._staticSymbolImage.visible
    },

    getStaticSymbolImage:function()
    {
        return this._staticSymbolImage;
    },

    setSymbolVO:function(value)
    {
        this._symbolVO = value;
        if(this._symbolTextureMap.hasOwnProperty(value.symbolName)){
            this.setSource(value.symbolName);
            //visible = _visible;
        }else{
            throw new Error("Can not find symbol image texture by id:"+value.symbolName);
        }
    },

    setSource:function(name)
    {
        //this._symbolName=this.getSymbolByName(name)
        var symbolId=symbolOrd.indexOf(name)+1;
        var foreName
        if(symbolId>9)
        {
            foreName=this._symbolVO.isBlur?"blur_Symbol_00":"Symbol_00";
        }else
        {
            foreName=this._symbolVO.isBlur?"blur_Symbol_000":"Symbol_000";
        }
        var sourceName=foreName+symbolId+".png";
        this._staticSymbolImage.setSpriteFrame(sourceName);
    }

    /*set initX:function($x)
    {
        this._initX=$x;
    },

    set initY($y)
    {
        this._initY=$y;
    },

    get initX()
    {
        return this._initX;
    },

    get initY()
    {
        return this._initY;
    },*/

})