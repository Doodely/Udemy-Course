// Define Point Class
class Point {
    constructor(private _x?: number, private _y?: number) {        
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }

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

    get x() {
        return this._x;
    }

    // To make X readonly, comment out the set property!
    set x(value) {
        if(value < 0) {
            throw new Error('Value can not be less than 0');
        }

        this._x = value; 
    }
}

// Initialize Object
let point = new Point(1, 2);
let x = point.x;
point.x = 10;
//point.setX(10); // Now we can set X the slow way!
point.draw();