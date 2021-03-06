let count = 5; // Hovering the mouse over 'count' will show it is declared as type 'number'
count = 'a'; // Compilation error for hard-type

/*
    Typescript won't complain about the declaration of unassigned variables with
     type 'any'. This is practically a var with limited-scope, but isn't very useful
     with TypeScript...
*/
let a; // Type is 'any'
a = 1;
a = true;
a = 'a';

/*
    So you can use type-annotations to declare the type when you expect a certain type.
    We now get proper syntax errors for values outside the expected type.
*/
let b: number;
b = 1;
b = true;
b = 'b';

/* Common Types */
let c: number;
let d: boolean;
let e: string;
let f: any;
let g: number[]; // Array of numbers
    let gh: number[] = [1, 2, 3];
    let gi: any[] = [1, true, 'a', false];




// Enums & Constants

// Verbose way...
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

// Enum Way
enum Color { Red, Green, Blue };
let backgroundColor = Color.Red; // This will have intellisense when you type "." with the properties

// Explicitly setting enums (best practice)
// In the future someone could come in an add a new color, this can help prevent value changes
enum otherColor { Red = 0, Green = 1, Blue = 2 };
let otherBackgroundColor = otherColor.Red;