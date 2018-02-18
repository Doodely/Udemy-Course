/*
     This code could be verbose, example:

        point.z = 3;
        point-a1 = 4;
        etc...

     Using a constructor can help keep the code clean (Also supports lazy-loading!)
     You can NOT have multiple constructors; unlike other languages...

        // Reserve keyword; added to Point class
        constructor() {

        }
    
    Constructors can also take parameters (causing a compilation error with: let point = new Point())
    Making parameters optional can be done by adding a "?" after the variable name

        constructor(x?: number, y?: number) {

        }
*/
// Define Point Class
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        // ...
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
// Initialize Object
var point = new Point();
point.draw();
/*
    Access modifiers can help prevent overrides!

    Being able to override a property might not be the best thing...

    TypeScript Access Modifiers:
        Public // Default
        Private
        Protected

    Prefixing "x" with private will prevent it showing up in Intellisense
    Same with "y"
*/
// Define Point Class
var Point2 = /** @class */ (function () {
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw = function () {
        // ...
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point2;
}());
// Initialize Object
var point2 = new Point2(1, 2);
// point2.x = 3; // Error for private variable
point2.draw();
/*
    Access modifiers In Constructors

    The code looks redundant
    
        this.x = x;
        this.y = y;

    and TypeScript can help achieve the same thing with less code!

    Let's remove the private properties...

    Now we can initialize access type (Must type 'public' if public) and TypeScript
    will automagically initialize and create the variable types
*/
// Define Point Class
var Point3 = /** @class */ (function () {
    function Point3(x, y) {
        this.x = x;
        this.y = y;
    }
    Point3.prototype.draw = function () {
        // ...
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point3;
}());
// Initialize Object
var point3 = new Point3(1, 2);
point3.draw();
