const d = +prompt("Input Diameter of circle in mm");
let square = "";
let length = "";

function getCircleSquare() {
    let rad = d / 2;
    square = 3.14 * (rad ** 2);
}
getCircleSquare();
console.log("Square of a circle = " + square + "mm^2");

function getCircleLength() {
    length = 3.14 * d;
}
getCircleLength()
console.log("Length of a circle = " + length + "mm");