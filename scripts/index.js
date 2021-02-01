const result = document.querySelector('.result');
addRippleEffectToButtons();
const getResult = calculator();


function addRippleEffectToButtons() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      const rippleBtn = document.createElement('div');
      rippleBtn.style.width = this.offsetWidth + 'px';
      rippleBtn.style.height = this.offsetHeight + 'px';
      rippleBtn.classList.add('ripple-btn');
      if (button.childNodes.length > 1) {
        const rpl = button.childNodes[1];
        button.removeChild(rpl);
      }
      button.appendChild(rippleBtn);
    });
  });
}

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
 * Creates a closure that creates an
 * abstraction for the calculator methods
 */
function calculator() {
  let displayResult = '', operand1 = '', operator = '';
  let operand2 = '', operand1Set = false;
  
  /**
   * Returns the result to be displayed on the screen
   * @param value
   * @returns strings
   */
  return function getResult(value) {    
    if (isOperator(value)) {
      return getResultForOperator(value);
    } else if (value === '=') {
      displayResult = calculate(operand1, operand2, operator);
      resetToInitialState();
      return displayResult;
    } else if (value === 'CE') {
      resetToInitialState();
      return 'Result';
    } else {
      return getResultForOperand(value);
    }
  }
  
  /**
   * Gets the display result for a given operand
   * @param value
   * @returns string
   */
  function getResultForOperand(value) {
    if (!operand1Set) {
      operand1 += value;
      displayResult = operand1;
    } else {
      operand2 += value;
      displayResult = `${operand1} ${operator} ${operand2}`;;
    }
    return displayResult;
  }
  
  /**
   * Gets the display result for a given operator
   * @param value
   * @returns string
   */
  function getResultForOperator(value) {
    if (operand1Set) {
      const computed = calculate(operand1, operand2, operator);
      operand1 = computed;
      operator = value;
      operand2 = '';
      displayResult = `${operand1} ${operator}`;
    } else {
      operand1Set = true;
      operator = value;
      operand1 = (typeof displayResult === 'number') ? displayResult : operand1 === '' ? 0 : operand1;
      displayResult = `${operand1} ${operator}`;
    }
    return displayResult;
  }
  
  /**
   * Resets the operator and the operands to the initial state
   */
  function resetToInitialState() {
    operand1 = '';
    operator = '';
    operand2 = '';
    operand1Set = false;
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
    operand1 = +operand1;
    operand2 = +operand2;
    switch (operator) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case 'X':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
      default:
        return 0;
    }
  }
}