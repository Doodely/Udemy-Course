// Define Point Class
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        // Scoped to class and access is available
        // getX() {
        //     return this.x;
        // }
        // One way to set X; though a property (below) is better readable and performant
        // setX(value) {
        //     if(value < 0) {
        //         throw new Error('Value can not be less than 0');
        //     }
        //     this.x = value;
        // }
        get: function () {
            return this._x;
        },
        // To make X readonly, comment out the set property!
        set: function (value) {
            if (value < 0) {
                throw new Error('Value can not be less than 0');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
// Initialize Object
var point = new Point(1, 2);
var x = point.x;
point.x = 10;
//point.setX(10); // Now we can set X the slow way!
point.draw();
