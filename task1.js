const d = +prompt("Input Diameter of circle in mm");

function getCircleSquare(diameter) {
    let rad = diameter / 2;
    return Math.PI * (rad ** 2);
}

function getCircleLength(diameter) {
    return Math.PI * diameter;
}

console.log("Square of a circle = " + getCircleSquare(d) + "mm^2");
console.log("Length of a circle = " + getCircleLength(d) + "mm");
