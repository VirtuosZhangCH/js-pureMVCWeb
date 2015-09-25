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
        this.btn = new MyButton();
        this.btn.label = "未解锁";
        this.btn.label2 = "222";
        this.btn.skinName = MyButtonSkin;
        var ass = new egret.gui.UIAsset("bgImage");
        this.addElement(ass);
        this.btn.top = 20;
        this.addElement(this.btn);
        this.btn.addEventListener(egret.TouchEvent.TOUCH_TAP, onButtonClick, this);
        function onButtonClick(e) {
            this.btn.lable2 = "sssss";
            //this.btn.partAdded("lableDisplay2",this.btn.label2);
            console.log("ssss" + this.id);
        }
    };
    return GroupDemo;
})(egret.gui.Group);
GroupDemo.prototype.__class__ = "GroupDemo";
//# sourceMappingURL=GroupDemo.js.map