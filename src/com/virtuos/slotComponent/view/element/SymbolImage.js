/**
 * Created by zhangchi on 2014/8/15.
 */
var symbolOrd=["N","T","A","J","K","Q","P1","P2","P3","P4","S","W"]
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
        var sourceName=foreName+symbolId+".png"
        this._staticSymbolImage.setSpriteFrame(sourceName);
        //this._staticSymbolImage.texture=name;
    },

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

    getSymbolByName :function($str)
    {
        switch($str)
        {
            case "N":
                return 0;
                break;
            case "T":
                return 1;
                break;
            case "A":
                return 2;
                break;
            case "J":
                return 3;
                break;
            case "K":
                return 4;
                break;
            case "Q":
                return 5;
                break;
            case "P1":
                return 6;
                break;
            case "P2":
                return 7;
                break;
            case "P3":
                return 8;
                break;
            case "P4":
                return 9;
                break;
            case "S":
                return 10;
                break;
            case "W":
                return 11;
                break;
        }

    }

})