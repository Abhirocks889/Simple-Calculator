let displayResult = '';
let operand1 = '';
let operator = '';
let operand2 = '';
let operand1Set = false;

const result =  document.querySelector('.result');

/**
 * Called on every button click
 * @param value 
 */
function onButtonClick(value) {
    if (!!result) {
        result.innerHTML = getResult(value);
    }
}

/**
 * Returns the result to be displayed on the screen
 * @param value
 * @returns string
 */
function getResult(value) {
    let displayResult;
    if (isOperator(value)) {
        if (operand1Set) {
            const computed = calculate(operand1, operand2, operator);
            operand1 = computed;
            operator = value;
            operand2 = '';
            displayResult = `${operand1} ${operator}`;
        } else {
            operand1Set = true;
            operator = value;
            operand1 = operand1 === '' ? 0 : operand1;
            displayResult = `${operand1} ${operator}`;
        }
    } else if (value === '=') {
        displayResult = calculate(operand1, operand2, operator);
        operand2 = '';
        operator = '';
        operand1 = displayResult;
        operand1Set = false;
    } else {
        if (!operand1Set) {
            operand1 += value;
            displayResult = operand1;
        } else {
            operand2 += value;
            displayResult = `${operand1} ${operator} ${operand2}`;;
        }
    }
    return displayResult;
}

/**
 * Checks if the value is of operand type
 * @param value
 * @returns boolean
 */
function isOperator(value) {
    return value === '/' || value === 'X' || value === '+' || value === '-';
}

/**
 * Performs the mathematical calculation
 * of two operands with the specified operator
 * @param value
 * @returns number
 */
function calculate(operand1, operand2, operator) {
    let op1 = operand1 !== '' ? parseInt(operand1) : 0;
    let op2 = operand2 !== '' ? parseInt(operand2) : 0;
    switch (operator) {
        case '+':
            return op1 + op2;
        case '-':
            return op1 - op2;
        case 'X':
            return op1 * op2;
        case '/':
            return op1 / op2;
        default:
            return 0;
    }
}