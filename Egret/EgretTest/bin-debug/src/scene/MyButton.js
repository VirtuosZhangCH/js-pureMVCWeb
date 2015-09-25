/**
 *
 * @author
 *
 */
var MyButton = (function (_super) {
    __extends(MyButton, _super);
    function MyButton() {
        _super.call(this);
        this.Label2 = new egret.gui.Label();
    }
    var __egretProto__ = MyButton.prototype;
    __egretProto__.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //this.Label2 
        //this.addChild(this.Label2);
        //this.addElement(this.Label2);
    };
    return MyButton;
})(egret.gui.Button);
MyButton.prototype.__class__ = "MyButton";
//# sourceMappingURL=MyButton.js.map