function addition(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operation(operator, num1, num2) {
    switch (operator) {
        case "add":
            addition(num1, num2);
            break;
        case "subtract":
            subtract(num1, num2);
            break;
        case "multiply":
            multiply(num1, num2);
            break;
        case "divide":
            divide(num1, num2);
            break;
    }
}

function updateNum1() {
    const digits = document.querySelectorAll(".digits button");

    digits.forEach((digit) => {
        digit.addEventListener("click", () => {
            num1 = digit.textContent;
            // Start Here: Num1 is not updating to the specifc digit clicked 
            console.log(num1);
        });

    })



}
// input: when button clicked 
// update num1

// todo: step 5

let num1;
let num2;
let operator;

