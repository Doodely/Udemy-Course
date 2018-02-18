// Two ways to declare a variable
var number = 1;
/*
    Limits the scope to the block, statement, or expression where it is used.
    Can NOT be redeclared elsewhere
*/
var count = 2;
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i); // Purposeful syntax error; testing "LET"
}
doSomething();
