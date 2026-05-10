document.getElementById("billForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const units = Number(document.getElementById("units").value);

  let slab1Units = 0;
  let slab2Units = 0;
  let slab3Units = 0;
  let slab4Units = 0;

  let slab1Charge = 0;
  let slab2Charge = 0;
  let slab3Charge = 0;
  let slab4Charge = 0;

  // First 50 units
  slab1Units = Math.min(units, 50);
  slab1Charge = slab1Units * 0.5;

  // 51 - 200 units
  if (units > 50) {
    slab2Units = Math.min(units - 50, 150);
    slab2Charge = slab2Units * 0.75;
  }

  // 201 - 450 units
  if (units > 200) {
    slab3Units = Math.min(units - 200, 250);
    slab3Charge = slab3Units * 1.2;
  }

  // Above 450 units
  if (units > 450) {
    slab4Units = units - 450;
    slab4Charge = slab4Units * 1.5;
  }

  const subtotal = slab1Charge + slab2Charge + slab3Charge + slab4Charge;

  const surcharge = subtotal * 0.2;

  const grandTotal = subtotal + surcharge;

  // Display values

  document.getElementById("slab1").innerText =
    `${slab1Units} Units = ₹${slab1Charge.toFixed(2)}`;

  document.getElementById("slab2").innerText =
    `${slab2Units} Units = ₹${slab2Charge.toFixed(2)}`;

  document.getElementById("slab3").innerText =
    `${slab3Units} Units = ₹${slab3Charge.toFixed(2)}`;

  document.getElementById("slab4").innerText =
    `${slab4Units} Units = ₹${slab4Charge.toFixed(2)}`;

  document.getElementById("subtotal").innerText = `₹${subtotal.toFixed(2)}`;

  document.getElementById("surcharge").innerText = `₹${surcharge.toFixed(2)}`;

  document.getElementById("grandTotal").innerText = `₹${grandTotal.toFixed(2)}`;

  document.getElementById("resultCard").classList.remove("d-none");
});

// Reset Button

document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("units").value = "";

  document.getElementById("resultCard").classList.add("d-none");
});
