let displayResult = '';
let operand1 = '';
let operator = '';
let operand2 = '';
let operand1Set = false;

const result =  document.querySelector('.result');

/**
 * Called on every button click.
 * Currently just displays the value of the button in the result
 * @param value 
 */
function onButtonClick(value) {
    if (!!result) {
        if (isOperator(value)) {
            operator = value;
            operand1Set = true;
            displayResult = operator;
        } else if (value === '=') {
            displayResult = calculate(operand1, operand2, operator);
            operand2 = '';
            operand1 = '';
            operator = '';
            operand1Set = false;
        } else {
            if (!operand1Set) {
                operand1 += value;
                displayResult = operand1;
            } else {
                operand2 += value;
                displayResult = operand2;
            }
        }
        result.innerHTML = displayResult;
    }
}

function isOperator(value) {
    return value === '/' || value === 'X' || value === '+' || value === '-';
}

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