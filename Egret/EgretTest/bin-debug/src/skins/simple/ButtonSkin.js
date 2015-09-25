var skins;
(function (skins) {
    var simple;
    (function (simple) {
        var ButtonSkin = (function (_super) {
            __extends(ButtonSkin, _super);
            function ButtonSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [60, 140]);
                this.elementsContent = [this.__4_i(), this.__10_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "button_down_png"),
                        new egret.gui.SetProperty("labelDisplay", "textColor", 0x222222)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "button_disabled_png"),
                        new egret.gui.SetProperty("labelDisplay", "textColor", 0xcccccc)
                    ])
                ];
            }
            var __egretProto__ = ButtonSkin.prototype;
            Object.defineProperty(__egretProto__, "skinParts", {
                get: function () {
                    return ButtonSkin._skinParts;
                },
                enumerable: true,
                configurable: true
            });
            __egretProto__.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "button_normal_png", 100]);
                return t;
            };
            __egretProto__.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [0, "center", "middle"]);
                return t;
            };
            __egretProto__.__6_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [0, "center", "middle"]);
                return t;
            };
            __egretProto__.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x"], ["progressbar_fill_png", 0]);
                return t;
            };
            __egretProto__.__8_i = function () {
                var t = new egret.gui.Label();
                t.x = 0;
                return t;
            };
            __egretProto__.__9_i = function () {
                var t = new egret.gui.Group();
                t.left = 10;
                t.layout = this.__6_i();
                t.elementsContent = [this.__7_i(), this.__8_i(), this.labelDisplay_i()];
                return t;
            };
            __egretProto__.icon_i = function () {
                var t = new egret.gui.UIAsset();
                this.icon = t;
                this.__s(t, ["source", "x"], ["closebtn_disabled_png", 1]);
                return t;
            };
            __egretProto__.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["fontFamily", "size", "textColor", "x"], ["Tahoma", 10, 0xff1111, 0]);
                return t;
            };
            __egretProto__.__10_i = function () {
                var t = new egret.gui.Group();
                t.setStyle("textColor", 0x981818);
                this.__s(t, ["bottom", "left", "right", "top"], [10, 10, 10, 10]);
                t.layout = this.__5_i();
                t.elementsContent = [this.icon_i(), this.__9_i()];
                return t;
            };
            ButtonSkin._skinParts = ["icon", "labelDisplay"];
            return ButtonSkin;
        })(egret.gui.Skin);
        simple.ButtonSkin = ButtonSkin;
        ButtonSkin.prototype.__class__ = "skins.simple.ButtonSkin";
    })(simple = skins.simple || (skins.simple = {}));
})(skins || (skins = {}));
//# sourceMappingURL=ButtonSkin.js.map