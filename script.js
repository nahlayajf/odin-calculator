let num1;
let num2;
let operator;
let total;
function addition(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

function operation(operator, number1, number2) {
    number1 = parseInt(number1)
    number2 = parseInt(number2)

    switch (operator) {
        case "+":
            total = addition(number1, number2)
            break;
        case "-":
            total = subtract(number1, number2);
            break;
        case "*":
            total = multiply(number1, number2);
            break;
        case "/":
            total = divide(number1, number2);
            break;
    }
    return total
}



function updateNumbers() {
    const digits = document.querySelectorAll(".digits button");
    digits.forEach((digit) => {
        digit.addEventListener("click", () => {
            if (!operator) {
                num1 = digit.textContent;
                console.log("THis is num1", num1)
                updateDisplay(num1)
            }
            else {
                num2 = digit.textContent;
                console.log("THis is num2", num2)
                updateDisplay(num2)
            }
        })
    })
}

function selectOperator() {
    const operators = document.querySelectorAll(".operations button")
    operators.forEach((operation) => {
        operation.addEventListener("click", () => {
            operator = operation.textContent;
            updateDisplay(operator)

        })
    })
}




function updateDisplay(selection) {
    document.querySelector(".display").textContent += selection
    const clear = document.querySelector("#clear")
    clear.addEventListener("click", () => document.querySelector(".display").textContent = "")

}

addition()
divide()
subtract()
multiply()
updateNumbers()
selectOperator()
operation(num1, num2, operator)



