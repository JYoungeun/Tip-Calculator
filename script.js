const priceInput = document.getElementById('price');
const peopleInput = document.getElementById('number-people');
const tipButtonOne = document.getElementById('tipBtn1');
const tipButtonTwo = document.getElementById('tipBtn2');
const tipButtonThree = document.getElementById('tipBtn3');
const tipButtonFour = document.getElementById('tipBtn4');
const tipButtonFive = document.getElementById('tipBtn5');
const customInput = document.getElementById('custom');
const alertText = document.getElementById('alert');
const tipAmount = document.getElementById('tip-amount-output');
const totalAmount = document.getElementById('total-output');
const resetButton = document.getElementById('resetBtn');

const tipPercentages = {
    tipButtonOne: 5,
    tipButtonTwo: 10,
    tipButtonThree: 15,
    tipButtonFour: 25,
    tipButtonFive: 50,
};

let selectedTipPercentage = 0;

priceInput.addEventListener('keydown', (event) => {
    if (event.key === 'e' || event.key === 'E' || event.key === '-') {
        event.preventDefault();
    }
});

customInput.addEventListener('keydown', (event) => {
    if (event.key === 'e' || event.key === "E" || event.key === '-') {
        event.preventDefault();
    };
});

peopleInput.addEventListener('keydown', (event) => {
    if (event.key === 'e' || event.key === "E" || event.key === '-') {
        event.preventDefault();
    };
});

let isInputLocked = false;

peopleInput.addEventListener('input', () => {
    if (peopleInput.value === '0') {
        alertText.classList.remove('hidden');
        peopleInput.style.borderColor = 'red';
        peopleInput.style.transition = 'none';
        isInputLocked = true;
    } else {
        alertText.classList.add('hidden');
        peopleInput.style.borderColor = '';
        isInputLocked = false;
    }
});

peopleInput.addEventListener('keydown', (event) => {
    if (isInputLocked) {
        if (event.key !== 'Backspace' && event.key !== 'Delete') {
            event.preventDefault();
        }
    }
});

function calculateTip() {
    const price = parseFloat(priceInput.value);
    const people = parseInt(peopleInput.value);

    if (isNaN(price) || isNaN(people) || people <= 0) {
        tipAmount.innerText = "$0.00";
        return;
    };

    const tip = (price * selectedTipPercentage) / 100;
    tipAmount.innerText = `$${(tip / people).toFixed(2)}`;
};

document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.tip');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(tip => tip.classList.remove('active'));
            this.classList.add('active');
        });

        customInput.addEventListener('click', () => {
            buttons.forEach(tip => tip.classList.remove('active'));
        });

        customInput.addEventListener('input', () => {
            if (customInput.value !== "") {
                button.disabled = true;
            } else {
                button.disabled = false;
            };
            selectedTipPercentage = parseFloat(customInput.value) || 0;
            calculateTip();
        });
        selectedTipPercentage = tipPercentages[this.id] || 0;
        calculateTip();
    });
});

priceInput.addEventListener('input', calculateTip);

peopleInput.addEventListener('input', calculateTip);

resetButton.addEventListener('click', () => {
    priceInput.value = "";
    customInput.value = "";
    peopleInput.value = "";
    tipAmount.innerText = "$0.00";
    totalAmount.innerText = "$0.00";
    const buttons = document.querySelectorAll('.tip');
    buttons.forEach(tip => tip.classList.remove('active'));
    alertText.classList.add('hidden');
    peopleInput.style.borderColor = '';
    isInputLocked = false;
});