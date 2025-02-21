// .Checkbox = property that determines whether the checkbox is checked or not
//             and also the radio button.

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterCardBtn");
const paytmBtn = document.getElementById("paytmBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function () {
  if (myCheckbox.checked) {
    subResult.textContent = "checked";
  } else {
    subResult.textContent = "unchecked";
  }


  if (visaBtn.checked) {
    paymentResult.textContent = "you are paying with visa";
  } 
  else if (masterBtn.checked) {
    paymentResult.textContent = "you are paying with master";
  } 
  else if (paytmBtn.checked) {
    paymentResult.textContent = "you are paying with paytm";
  } 
  else {
    paymentResult.textContent = "you must select a payment method";
  }
};
