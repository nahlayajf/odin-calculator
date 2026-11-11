let num1;
let num2;
let operator;
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
    let calculationTotal;
    number1 = parseInt(number1)
    number2 = parseInt(number2)
    console.log(operator)
    switch (operator) {
        case "+":
            calculationTotal = addition(number1, number2)
            console.log("total", calculationTotal)
            break;
        case "-":
            calculationTotal = subtract(number1, number2);
            break;
        case "*":
            calculationTotal = multiply(number1, number2);
            break;
        case "/":
            calculationTotal = divide(number1, number2);
            break;
        default:
            calculationTotal = "Error"
    }

    return calculationTotal
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

function calculateTotal() {
    const equalSign = document.querySelector("#total")
    equalSign.addEventListener("click", () => {
        updateDisplay(equalSign.textContent)
        total = operation(operator, num1, num2)
        updateDisplay(total)
        num1 = total
    })


}



updateNumbers()
selectOperator()
calculateTotal()




