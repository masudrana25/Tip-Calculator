const total = document.querySelector('#total');
const tipPerPerson = document.querySelector('#tip-per-person');
const totalPerPerson = document.querySelector('#total-per-person');


total.addEventListener('change', function () {
  const bill = parseFloat(document.querySelector('#bill').value);
  const tip = parseFloat(document.querySelector('#tip').value);
  const person = parseFloat(document.querySelector('#person').value);
  if (bill && tip && person) {
    const tipTotal = (bill * tip) / 100;
    const billTotal = bill + tipTotal;
    tipPerPerson.textContent = (tipTotal / person).toFixed(2);
    totalPerPerson.textContent = (billTotal / person).toFixed(2);
  }
  
  console.log(bill, tip, person);
  
  // console.log(bill, tip, person);
})