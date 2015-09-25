/**
 *
 * @author
 *
 */
var GroupDemo = (function (_super) {
    __extends(GroupDemo, _super);
    function GroupDemo() {
        _super.call(this);
    }
    var __egretProto__ = GroupDemo.prototype;
    __egretProto__.createChildren = function () {
        _super.prototype.createChildren.call(this);
        var btn = new MyButton();
        btn.label = "未解锁";
        //btn.Label2.text = "222";
        btn.skinName = "skins.simple.ButtonSkin";
        var ass = new egret.gui.UIAsset("bgImage");
        this.addElement(ass);
        btn.top = 20;
        this.addElement(btn);
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, onButtonClick, this);
        function onButtonClick(e) {
            console.log("ssss" + this.id);
        }
    };
    return GroupDemo;
})(egret.gui.Group);
GroupDemo.prototype.__class__ = "GroupDemo";
//# sourceMappingURL=GroupDemo.js.map