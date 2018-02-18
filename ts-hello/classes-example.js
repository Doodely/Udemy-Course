/*
    If more functions are made that are highly related, it might be better to
    create a class!

    Class: Groups variables (properties) and functions (methods) that are highly related.

    The commented code below shows a bad use of an interface that includes a function; this would
    be better suited for a class to access the methods and properties.
*/
// You are telling the compiler that this interface contains two properties (x & y) and a function (draw)
// interface Point {
//     x: number,
//     y: number,
//     draw: () => void // This property/function can access the properties of the interface; thus empty ()
// }
// let drawPoint = (point: Point) => {
//     // ...
// }
// let getDistance = (pointA: Point, pointB: Point) => {
//     // ...
// }
// // Call function
// drawPoint({
//     x: 1,
//     y: 2
// })
// Class Example
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        // ...
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
/*
    Declaring the class as an Object
        
        let point: Point;
        point.draw(); // Intellisense access with "."; This will throw an undefined error though with the console.log

    We must first initialize the variable to the object via let point: Point = new Point();

        let point: Point = new Point();
        point.draw();

    You can also let TypeScript infer the type and remove the redundant "Point after point: Point"

        let point = new Point();
        point.draw(); // X and Y will be undefined still
*/
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
