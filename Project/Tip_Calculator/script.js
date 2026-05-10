document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const billAmount = Number(document.getElementById("billAmount").value);

  const service = Number(document.getElementById("service").value);

  const people = Number(document.getElementById("people").value);

  const tipAmount = billAmount * service;

  const totalBill = billAmount + tipAmount;

  const perPerson = totalBill / people;

  document.getElementById("result").innerText = `₹${perPerson.toFixed(2)}`;

  document.getElementById("billAmount").value = "";
  document.getElementById("people").value = "";
});
