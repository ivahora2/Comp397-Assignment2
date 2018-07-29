var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var Info = /** @class */ (function (_super) {
        __extends(Info, _super);
        // constructors
        function Info() {
            var _this = _super.call(this) || this;
            _this.Start();
            return _this;
        }
        // private methods
        // public methods
        Info.prototype.Start = function () {
            this.Main();
        };
        Info.prototype.Update = function () {
        };
        Info.prototype.Reset = function () {
        };
        Info.prototype.Destroy = function () {
        };
        Info.prototype.Main = function () {
            console.log("Starting - INFO SCENE");
        };
        return Info;
    }(objects.Scene));
    scenes.Info = Info;
})(scenes || (scenes = {}));
//# sourceMappingURL=info.js.map