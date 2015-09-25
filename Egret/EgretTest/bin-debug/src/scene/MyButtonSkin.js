/**
 *
 * @author
 *
 */
var MyButtonSkin = (function (_super) {
    __extends(MyButtonSkin, _super);
    function MyButtonSkin() {
        _super.call(this);
        this.skinParts = ["labelDisplay", "labelDisplay2"];
        this.minWidth = 140;
        this.height = 60;
        this.states = ["up", "down", "disabled"];
    }
    var __egretProto__ = MyButtonSkin.prototype;
    __egretProto__.createChildren = function () {
        var asset = new egret.gui.UIAsset();
        asset.left = asset.top = asset.bottom = asset.right = 0;
        this.background = asset; //new egret.gui.UIAsset();
        this.background.source = "button_down_png";
        this.addElement(this.background);
        _super.prototype.createChildren.call(this);
        this.labelDisplay2 = new egret.gui.Label();
        this.labelDisplay2.bottom = 10;
        this.labelDisplay.textColor = 0x000000;
        this.labelDisplay2.textColor = 0x000000;
        this.labelDisplay2.text = "wweert";
        this.addElement(this.labelDisplay2);
    };
    __egretProto__.commitCurrentState = function () {
        _super.prototype.commitCurrentState.call(this);
        switch (this.currentState) {
            case "up":
                this.labelDisplay2.bottom = 50;
                this.background.source = "button_normal_png";
                break;
            case "down":
                this.labelDisplay2.bottom = 10;
                this.labelDisplay2.text = "222";
                this.background.source = "button_down_png";
                break;
            case "disabled":
                this.labelDisplay2.bottom = 10;
                this.labelDisplay2.visible = false;
                this.background.source = "button_disabled_png";
                break;
        }
    };
    return MyButtonSkin;
})(egret.gui.ButtonSkin);
MyButtonSkin.prototype.__class__ = "MyButtonSkin";
//# sourceMappingURL=MyButtonSkin.js.map