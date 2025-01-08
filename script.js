const billInput = document.getElementById('bill');
const tipBtns = document.querySelectorAll('.tip-button');
const customTipInput = document.getElementById('custom-tip');
const peopleInput = document.getElementById('people');
const tipAmountDisplay = document.querySelector('.tip-amount p');
const totalDisplay = document.querySelector('.total p');
const resetBtn = document.querySelector('.reset');

// Calculate tip when a tip button is clicked
tipBtns.forEach(btn => {
    btn.onclick = () => {
        let percentage = parseInt(btn.innerText)/100;
        caluclateTip(percentage);
    }
});

// Calculate tip when custom tip is entered
customTipInput.oninput = () => {
    let percentage = parseFloat(customTipInput.value)/100;
    caluclateTip(percentage);
};

// Calculate Tip and Display it
function caluclateTip(percentage) {
    let bill = parseFloat(billInput.value);
    let people = parseFloat(peopleInput.value);

    // Only calculate if all inputs are filled else do nothing
    if (bill && people && percentage) {
        
        let tipAmount = (percentage * bill)/people;
        let total = (bill + tipAmount*people)/people;

        tipAmountDisplay.innerText = `$${tipAmount.toFixed(2)}`;
        totalDisplay.innerText = `$${total.toFixed(2)}`;
    }
}

// Reset Button
resetBtn.onclick = () => {
    location.reload();
};

