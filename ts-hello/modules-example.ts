/*
    Ideally we will organize away from main.ts / main.js and instead opt for creating 
    module specific libraries for better code management.

    We will make a point.ts file to store the class Point and reference it's code here.

    We will then need to import point.ts
*/

import { Point } from './point'; // Relative path to file

// Initialize Object
let point = new Point(1, 2);
point.draw();