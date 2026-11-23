let num1 = "";
let num2 = "";
let operator;
let completedCalculation = false;

function round(num) {
    return Math.round(num * 1000) / 1000;
}
function addition(number1, number2) {
    let num = number1 + number2;
    return round(num);
}

function subtract(number1, number2) {
    let num = number1 - number2;
    return round(num);
}

function multiply(number1, number2) {
    let num = number1 * number2;
    return round(num);

}

function divide(number1, number2) {
    if (number2 === 0) return "Error"
    let num = number1 / number2
    return round(num);
}

function operation(operator, number1, number2) {
    let calculationTotal;
    number1 = parseFloat(number1)
    number2 = parseFloat(number2)
    console.log(operator)
    switch (operator) {
        case "+":
            calculationTotal = addition(number1, number2)
            console.log("total", calculationTotal)
            break;
        case "-":
            calculationTotal = subtract(number1, number2);
            break;
        case "x":
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

            if (completedCalculation === true) {
                num1 = digit.textContent
                updateDisplay(num1)
                completedCalculation = false
            }
            else if (!operator) {
                if (digit.textContent === "." && num1.includes(".")) return
                num1 += digit.textContent;
                console.log("This is num1", num1)
                updateDisplay(num1)
            }
            else {
                if (digit.textContent === "." && num2.includes(".")) return
                num2 += digit.textContent;
                console.log("This is num2", num2)
                updateDisplay(num2)
            }
        })
    })

}

function selectOperator() {
    const operators = document.querySelectorAll(".operations button")
    operators.forEach((operationButton) => {
        operationButton.addEventListener("click", () => {
            completedCalculation = false;
            if (num1 && num2 && operator) {

                num1 = operation(operator, num1, num2)
                updateDisplay(num1)
            }
            else {
                operator = operationButton.textContent
                updateDisplay(operator)

            }
            operator = operationButton.textContent
            num2 = "";




        })
    })
}




function updateDisplay(selection) {
    document.querySelector(".display").textContent = selection

    const clear = document.querySelector("#clear")
    clear.addEventListener("click", () => {
        document.querySelector(".display").textContent = "";
        num1 = "";
        num2 = "";
        operator = "";

    });

}

function calculateTotal() {
    const equalSign = document.querySelector("#total")
    equalSign.addEventListener("click", () => {
        updateDisplay(equalSign.textContent)
        total = operation(operator, num1, num2)
        updateDisplay(total)
        num1 = total
        num2 = ""
        operator = ""
        completedCalculation = true;
    })
}



updateNumbers()
selectOperator()
calculateTotal()




