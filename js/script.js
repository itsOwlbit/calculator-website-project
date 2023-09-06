let selectedNumbers = [];
let numberIndex = 0;
let selectedOperator = undefined;
let result = '';

const displayText = document.querySelector('.display-text');

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
        selectedNumbers[numberIndex] = newDigit;
    } else {
        selectedNumbers[numberIndex] *= 10;
        selectedNumbers[numberIndex] += parseInt(newDigit);
    }
}

// Process DECIMAL POINT
const decimalButton = document.querySelector('.decimal-button');
decimalButton.addEventListener('click', () => {
    console.log('Decimal point button clicked.')
})

// Process OPERATORS (% / * - +)
const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', () => {
        console.log(`Operator: ${operatorButton.textContent}`);
    })
})

// Process EQUAL Key
const equalButton = document.querySelector('.equal-button');
equalButton.addEventListener('click', () => {
    console.log('Equal button clicked.')
})

// Process CLEAR Functionality
const clearButton = document.querySelector('.ac-button');
clearButton.addEventListener('click', clearCalculator);

function clearCalculator() {
    clearVariables();
    updateDisplay();
}

// Process DELETE Functionality
const deleteButton = document.querySelector('.del-button');
deleteButton.addEventListener('click', deleteDigit);

function deleteDigit() {
    console.log('Delete button clicked.')
}

// Other Functions

function clearVariables() {
    selectedNumbers = [];
    numberIndex = 0;
    selectedOperator = undefined;
    result = '';
}

function updateDisplay() {
    if (!selectedNumbers[numberIndex]) {
        displayText.innerHTML = '';
    } else {
        displayText.innerHTML = selectedNumbers[numberIndex] 
    }
}

