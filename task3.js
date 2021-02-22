const x = +prompt("Input first number");
const y = +prompt("Input second number");
const action = prompt("Input action");

function calc(num1, num2, act) {
    if (act !== "+" && act !== "-" && act !== "*" && act !== "/" && act !== "%" && act !== "^") {
        alert("Wrong action")
    }
    if (act === "+") {
        return num1 + num2;
    }
    if (act === "-") {
        return num1 - num2;
    }
    if (act === "*") {
        return num1 * num2;
    }
    if (act === "/") {
        return num1 / num2;
    }
    if (act === "%") {
        return num1 % num2;
    }
    if (act === "^") {
        return num1 ** num2;
    }
};
console.log(x + action + y + "=", calc(x, y, action))
