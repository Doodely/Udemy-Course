/*
    This file is only accessible to it's own self-defined scope.
    To let other files access it, we need to add "export" before 
    the class.

    ** Every file in TypeScript is technically a module; but only 
    officially once it is exported!

    ** You can export any type, not just classes... ;)

    This class / file is now a module to be reused
*/

export class Point {
    constructor(private _x?: number, private _y?: number) {        
    }

    draw() {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    }
}