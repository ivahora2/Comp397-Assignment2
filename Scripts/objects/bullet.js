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
var objects;
(function (objects) {
    var Bullet = /** @class */ (function (_super) {
        __extends(Bullet, _super);
        function Bullet() {
            var _this = _super.call(this, "Bullet") || this;
            _this.Start();
            return _this;
        }
        Bullet.prototype.Start = function () {
            this._dx = 10;
            this._dy = 0;
            this.Reset();
        };
        Bullet.prototype.Update = function () {
            this.y += this._dx;
            this.CheckBounds();
        };
        Bullet.prototype.Reset = function () {
            this.x = -5000;
            this.y = -5000;
        };
        Bullet.prototype.Maint = function () {
        };
        Bullet.prototype.CheckBounds = function () {
            if (this.x >= this.width) {
                this.Reset();
            }
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map