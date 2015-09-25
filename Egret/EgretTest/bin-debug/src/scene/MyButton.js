/**
 *
 * @author
 *
 */
var MyButton = (function (_super) {
    __extends(MyButton, _super);
    function MyButton() {
        _super.call(this);
        this._label2 = "";
    }
    var __egretProto__ = MyButton.prototype;
    Object.defineProperty(__egretProto__, "label2", {
        get: function () {
            if (this.lableDisplay2) {
                return this.lableDisplay2.text;
            }
            else {
                return this._label2;
            }
        },
        set: function (value) {
            this._label2 = value;
            if (this.lableDisplay2) {
                this.lableDisplay2.text = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    __egretProto__.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
        if (instance == this.lableDisplay2) {
            this.lableDisplay2.text = this._label2;
        }
    };
    return MyButton;
})(egret.gui.Button);
MyButton.prototype.__class__ = "MyButton";
//# sourceMappingURL=MyButton.js.map