let currentInput = '0';
let operator = '';
let firstOperand = null;

function updateDisplay() {
    document.getElementById('display').innerText = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' || currentInput === '-0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function addDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '0';
    operator = '';
    firstOperand = null;
    updateDisplay();
}

function setOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        currentInput = '0';
        operator = op;
    } else {
        calculateResult();
        operator = op;
    }
}

function calculateResult() {
    const secondOperand = parseFloat(currentInput);
    let result = 0;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
    }

    currentInput = result.toString();
    operator = '';
    firstOperand = null;
    updateDisplay();
}

// You can add keyboard support, more operations, etc., based on your requirements.
