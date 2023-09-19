let selectedNumbers = [];
let numberIndex = 0;
let selectedOperator = '';
lastEnteredValue = NaN;
let result = 0;

function clearVariables() {
    selectedNumbers = [];
    numberIndex = 0;
    selectedOperator = '';
    lastEnteredValue = NaN;
    result = 0;
}

const displayText = document.querySelector('.display-text');
displayText.innerHTML = '0';

// Process Selected NUMBERS
const numberButtons = document.querySelectorAll('.number-button');
numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('click', () => {
        updateNumber(numberButton.textContent);
        updateDisplay();
    });
});

function updateNumber(newDigit) {
    if (!selectedNumbers[numberIndex]) {
        selectedNumbers[numberIndex] = parseInt(newDigit, 10);
    } else {
        selectedNumbers[numberIndex] *= 10;
        selectedNumbers[numberIndex] += parseInt(newDigit, 10);
    }

    console.log(`updateNumber: ${selectedNumbers[numberIndex]}`);
}

// Process DECIMAL POINT
const decimalButton = document.querySelector('.decimal-button');
decimalButton.addEventListener('click', () => {
    console.log('Decimal point feature not implemented.');
})

// Process OPERATORS (% / * - +)
const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        if (Array.isArray(selectedNumbers)) {
            if (selectedNumbers.length === 1) {
                numberIndex = 1;
            } else if (selectedNumbers.length === 2) {
                console.log(`${selectedNumbers[0]} ${selectedOperator} ${selectedNumbers[1]} `);
                // debugger;
                calculateEquation(selectedNumbers[0], selectedNumbers[1]);
                
                selectedNumbers[0] = result;
                selectedNumbers.pop();
            
                displayText.innerHTML = result; 
            }

            selectedOperator = operatorButton.textContent;
        }
    })
})

const percentageButton = document.querySelector('.percentage-button');
percentageButton.addEventListener('click', () => {
    console.log('Percentage feature not implemented.');
})

// Process EQUAL Key
const equalButton = document.querySelector('.equal-button');
equalButton.addEventListener('click', () => {
    if (selectedOperator !== '') {
        if (selectedNumbers.length === 2) {
            lastEnteredValue = selectedNumbers[1];
            calculateEquation(selectedNumbers[0], selectedNumbers[1]);

            selectedNumbers[0] = result;
            selectedNumbers.pop();
        
            displayText.innerHTML = result; 
        } else if (selectedNumbers.length === 1) {
            calculateEquation(selectedNumbers[0], lastEnteredValue);

            selectedNumbers[0] = result;
        
            displayText.innerHTML = result; 
        }
    } 
})

// There must be two valid numbers in selectedNumbers array
// An operator was selected
function calculateEquation(a, b) {
    switch (selectedOperator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            if (!b) {
                clearVariables();
                result = NaN;
            } else {
                result = a / b;
            }
            break;
        case '%':
            console.log('Percent feature not implemented.');
            break;
        default:
            console.log('Error on calculateEquation switch.');
            break;
    }

    console.log(`${a} ${selectedOperator} ${b} = ${result}`);
}

// Process CLEAR Functionality
const clearButton = document.querySelector('.ac-button');
clearButton.addEventListener('click', clearCalculator);

function clearCalculator() {
    clearVariables();
    displayText.innerHTML = '0';
}

// Process DELETE Functionality

const deleteButton = document.querySelector('.del-button');
deleteButton.addEventListener('click', deleteDigit);

function deleteDigit() {
    console.log('Delete function not implemented.');
}

// Other Functions

function updateDisplay() {
    if (selectedNumbers[numberIndex].length === 0) {
        displayText.innerHTML = '';
    } else {
        displayText.innerHTML = String(selectedNumbers[numberIndex]);
    }
}

