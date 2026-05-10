document.getElementById("travelForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const km = Number(document.getElementById("km").value);

  const error = document.getElementById("error");

  error.innerText = "";

  // Validation

  if (document.getElementById("km").value === "" || isNaN(km) || km < 0) {
    error.innerText = "Please enter a non-negative number of kilometres";

    document.getElementById("resultCard").classList.add("d-none");

    return;
  }

  let slab1Km = 0;
  let slab2Km = 0;
  let slab3Km = 0;

  let slab1Cost = 0;
  let slab2Cost = 0;
  let slab3Cost = 0;

  // Fare Rates
  // First 10 KM = ₹11/km
  // Next 40 KM = ₹10/km
  // Above 50 KM = ₹8/km

  slab1Km = Math.min(km, 10);
  slab1Cost = slab1Km * 11;

  if (km > 10) {
    slab2Km = Math.min(km - 10, 40);
    slab2Cost = slab2Km * 10;
  }

  if (km > 50) {
    slab3Km = km - 50;
    slab3Cost = slab3Km * 8;
  }

  const total = slab1Cost + slab2Cost + slab3Cost;

  // Display Results

  document.getElementById("totalBill").innerText = `Rs. ${total.toLocaleString(
    "en-IN",
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  )}`;

  document.getElementById("slab1").innerText =
    `${slab1Km} km × Rs.11 = Rs.${slab1Cost.toFixed(2)}`;

  document.getElementById("slab2").innerText =
    `${slab2Km} km × Rs.10 = Rs.${slab2Cost.toFixed(2)}`;

  document.getElementById("slab3").innerText =
    `${slab3Km} km × Rs.8 = Rs.${slab3Cost.toFixed(2)}`;

  document.getElementById("resultCard").classList.remove("d-none");
});
