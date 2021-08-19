'use script';
//Selected Elements
const bill = document.querySelector('.bills--1');
const numberOfPeople = document.querySelector('.bills--2');
const btns = document.querySelector('.btns');
const customBtn = document.querySelector('.custom');
const errorMessage = document.querySelector('.error-message');
const tipValue = document.querySelector('.tip-value');
const totalValue = document.querySelector('.total-value');
const btnReset = document.querySelector('.btn-reset');
const input = document.querySelectorAll('input[type=number]');
//console.log(input);

//Restricting Character length
function checkLength(len, ele) {
  let fieldLength = ele.value.length;
  if (fieldLength <= len) {
    return true;
  } else {
    let str = ele.value;
    str = str.substring(0, str.length - 1);
    ele.value = str;
  }
}

//onBlur Event
function invalid(ele) {
  if (Number(ele.value) <= 0) {
    ele.style.outline = '2px solid red';
  } else {
    ele.style.outline = '';
  }
}

//onFocus Event
function valid(ele) {
  if (Number(ele.value) >= 0) {
    ele.style.outline = '2px solid hsl(172, 67%, 45%)';
  } else {
    ele.style.outline = '';
  }
}

//Accessing the buttons using DOM delegation and performing the calculation
btns.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    e.target.classList.contains('btn') ||
    e.target.classList.contains('custom')
  ) {
    //console.log(e.target);

    const billValue = Number(bill.value);
    const persons = Number(numberOfPeople.value);
    //console.log(billValue);

    //Tip calculation

    if (persons <= 0 || persons > 20) {
      // numberOfPeople.classList.add('bills-color');
      // invalid(numberOfPeople);
      errorMessage.textContent = `Can't be ${persons <= 0 ? persons : `> 20`}`;
    } else {
      errorMessage.textContent = '';
      // numberOfPeople.classList.remove('bills-color');
    }

    if (billValue > 0 && persons > 0 && persons <= 20 && e.target.value > 0) {
      const tipAmount = (billValue / persons) * Number(e.target.value / 100);
      tipValue.textContent = `$${tipAmount.toFixed(2)}`;
      const totalAmount = billValue / persons + tipAmount;
      totalValue.textContent = `$${totalAmount.toFixed(2)}`;
    } else {
      totalValue.textContent = tipValue.textContent = '$0.00';
    }
  }
});

//Reset Button
btnReset.addEventListener('click', function (e) {
  e.preventDefault();
  tipValue.textContent = '$0.00';
  totalValue.textContent = '$0.00';
  errorMessage.textContent = '';
  tipAmount = 0;
  totalAmount = 0;
  bill.value = '';
  numberOfPeople.value = '';
  customBtn.value = '';
  input.forEach(function (nodelist) {
    return (nodelist.style.outline = '');
  });
});
