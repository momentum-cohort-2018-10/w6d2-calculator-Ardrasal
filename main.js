const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    const display = document.querySelector('.display');
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        console.log('operator', target.value);
    return;
    }

    if (target.classList.contains('decimal')) {
        console.log('decimal', target.value);
    return;
    }

    if (target.classList.contains('clear')) {
        console.log('clear', target.value);
        return;
    }

    console.log('digit', target.value);
});

const { target } = event;
const target = event.target;

if (!target.matches('button')) {
    return;
}

function inputDigit(digit) {
    const { displayValue } = calculator;
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
}

inputDigit(target.value);
updateDisplay();

function inputDecimal(dot) {
    if (!calculator.displayValue.includes(dot)) {
        calculator.displayValue += dot;
    }
}

inputDecimal(target.value);
updateDisplay();