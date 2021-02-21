const x = +prompt("Input first number");
const y = +prompt("Input second number");
const action = prompt("Input action");

let result = "";

function calc() {
    if (action !== "+" && action !== "-" && action !== "*" && action !== "/" && action !== "%" && action !== "^"){
        alert("Wrong action")
    }
    if (action === "+") {
        result = x + y;
    }
    if (action === "-") {
        result = x - y;
    }
    if (action === "*") {
        result = x * y;
    }
    if (action === "/") {
        result = x / y;
    }
    if (action === "%") {
        result = x % y;
    }
    if (action === "^") {
        result = x ** y;
    }
}
calc();
console.log(x + action + y + "=" + result)