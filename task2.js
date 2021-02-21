const a = +prompt("Input first number");
const b = +prompt("Input second number");

let average = "";

function getAverage(){
    average = (a + b)/2;
}
getAverage();
console.log(average);
