const priceInput = document.getElementById('price');
const customInput = document.getElementById('custom');
const peopleInput = document.getElementById('number-people');
const tipButtonOne = document.getElementById('tipBtn1');
const tipButtonTwo = document.getElementById('tipBtn2');
const tipButtonThree = document.getElementById('tipBtn3');
const tipButtonFour = document.getElementById('tipBtn4');
const tipButtonFive = document.getElementById('tipBtn5');
const alertText = document.getElementById('alert');
const resetButton = document.getElementById('resetBtn');

peopleInput.addEventListener('input', () => {
    if (peopleInput.value === '0') {
        alertText.classList.remove('hidden');
        peopleInput.style.borderColor = 'red';
        peopleInput.style.transition = 'none';
    } else {
        alertText.classList.add('hidden');
        peopleInput.style.borderColor = '';
    }
});

const calculateTipAmount = () => {};