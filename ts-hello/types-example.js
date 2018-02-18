var count = 5; // Hovering the mouse over 'count' will show it is declared as type 'number'
count = 'a'; // Compilation error for hard-type
/*
    Typescript won't complain about the declaration of unassigned variables with
     type 'any'. This is practically a var with limited-scope, but isn't very useful
     with TypeScript...
*/
var a; // Type is 'any'
a = 1;
a = true;
a = 'a';
/*
    So you can use type-annotations to declare the type when you expect a certain type.
    We now get proper syntax errors for values outside the expected type.
*/
var b;
b = 1;
b = true;
b = 'b';
/* Common Types */
var c;
var d;
var e;
var f;
var g; // Array of numbers
var gh = [1, 2, 3];
var gi = [1, true, 'a', false];
// Enums & Constants
// Verbose way...
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
// Enum Way
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red; // This will have intellisense when you type "." with the properties
// Explicitly setting enums (best practice)
// In the future someone could come in an add a new color, this can help prevent value changes
var otherColor;
(function (otherColor) {
    otherColor[otherColor["Red"] = 0] = "Red";
    otherColor[otherColor["Green"] = 1] = "Green";
    otherColor[otherColor["Blue"] = 2] = "Blue";
})(otherColor || (otherColor = {}));
;
var otherBackgroundColor = otherColor.Red;
