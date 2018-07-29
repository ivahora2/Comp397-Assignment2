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
        /**
         * Creates an instance of Cloud.
         * @memberof Cloud
         */
        function Bullet() {
            var _this = _super.call(this, "Bullet") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Bullet.prototype._checkBounds = function () {
            // check bottom boundary
            if (this.x > config.Screen.WIDTH) {
                this.Reset();
            }
        };
        // public methods
        Bullet.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.Reset();
        };
        Bullet.prototype.Update = function () {
            this.x -= this._horizontalSpeed;
            this._checkBounds();
        };
        Bullet.prototype.Reset = function () {
            this._horizontalSpeed = Math.floor((Math.random() * 5) + 1); // between -2 and 2 ppf
            this.x = config.Screen.WIDTH;
            this.y = Math.floor((Math.random() * (config.Screen.HEIGHT - this.height)) + this.halfHeight);
        };
        return Bullet;
    }(objects.GameObject));
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map