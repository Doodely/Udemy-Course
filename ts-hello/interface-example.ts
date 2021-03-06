/*
    This could get messy quick if more and more parameters are added...
*/
let drawPoint = (x, y) => {
    // ...
}

// It might be better to pass an object vs multiple params to encapsulate cleaner
let drawPoint2 = (point) => {
    // ...
}

/*
    This can still have an issue if you were to pass something like 
    "name: 'Mitchell'"; no commpile errors...
*/
drawPoint2({
    x: 1,
    y: 2
})

// Inline Annotation example; possibly verbose...
// Can be declared with {} and then inline-types
let drawPoint3 = (point: { x: number, y: number }) => {
    // ...
}

// Interface is best if this might be passed around vs typing the inline every time!
// Naming convention is Pascal [uppercase starting letter for each word...]
interface Point {
    x: number,
    y: number
}

let drawPoint4 = (point: Point) => {
    // ...
}

// Call function
drawPoint4({
    x: 1,
    y: 2
})