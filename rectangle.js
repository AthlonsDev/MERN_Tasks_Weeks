
// arrow function "Public" so it is exportable to another module - u1612023
exports.perimeter = (length, breadth) => {
    return ("Perimeter of rectangle is " + 2*(length*breadth))
}
// Both functions take in two parameter, length and breadth, and return the result - u1612023
exports.area = (length, breadth) => {
    return ("Area of rectangle is " + (length*breadth))
}
