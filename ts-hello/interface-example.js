/*
    This could get messy quick if more and more parameters are added...
*/
var drawPoint = function (x, y) {
    // ...
};
// It might be better to pass an object vs multiple params to encapsulate cleaner
var drawPoint2 = function (point) {
    // ...
};
/*
    This can still have an issue if you were to pass something like
    "name: 'Mitchell'"; no commpile errors...
*/
drawPoint2({
    x: 1,
    y: 2
});
// Inline Annotation example; possibly verbose...
// Can be declared with {} and then inline-types
var drawPoint3 = function (point) {
    // ...
};
var drawPoint4 = function (point) {
    // ...
};
// Call function
drawPoint4({
    x: 1,
    y: 2
});
