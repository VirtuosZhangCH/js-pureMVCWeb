/**
 * Created by zhangchi on 2014/8/15.
 */
var SymbolImage=cc.Class.extend({
    _staticSymbolImage:null,
    _symbolTextureMap:null,
    initX:0,
    initY:0,
    ctor:function(symbol,symbolTextureMap)
    {
        this._staticSymbolImage=symbol;
        this._symbolTextureMap=symbolTextureMap;

        cc.defineGetterSetter(this,"visible",this.getVisible,this.setVisible);
        cc.defineGetterSetter(this,"staticSymbolImage",this.getStaticSymbolImage);
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

    setSource:function(name)
    {
        this._staticSymbolImage.setSpriteFrame(this._symbolTextureMap[this.getSymbolByName(name)]);
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