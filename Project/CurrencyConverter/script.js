const rates = {
  USD: 1,
  INR: 83.12,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 157.3,
  AUD: 1.51,
  CAD: 1.37,
  CNY: 7.24,
  RUB: 89.5,
  AED: 3.67,
  PKR: 278.4,
  BDT: 117.2,
  NPR: 133.0,
};

const country1 = document.getElementById("country1");

const country2 = document.getElementById("country2");

const flag1 = document.getElementById("flag1");

const flag2 = document.getElementById("flag2");

const amount = document.getElementById("orgAmount");

const result = document.getElementById("newAmount");

const error = document.getElementById("error");

const rateText = document.getElementById("rateText");

const convertBtn = document.getElementById("convertBtn");

const swapBtn = document.getElementById("swapBtn");

// Load Countries

async function loadCountries() {
  const response = await fetch("./codes.json");

  const data = await response.json();

  data.forEach((country) => {
    let option1 = document.createElement("option");

    option1.value = `${country.Currency_Code},${country.Country_Code}`;

    option1.text = country.Country;

    let option2 = option1.cloneNode(true);

    country1.appendChild(option1);

    country2.appendChild(option2);
  });

  // Default Countries

  country1.value = "USD,US";

  country2.value = "INR,IN";

  updateFlag(country1, flag1);

  updateFlag(country2, flag2);
}

loadCountries();

// Update Flags

function updateFlag(select, flag) {
  const code = select.value.split(",")[1];

  flag.src = `https://flagsapi.com/${code}/flat/64.png`;
}

// Dropdown Change Events

country1.addEventListener("change", () => {
  updateFlag(country1, flag1);
});

country2.addEventListener("change", () => {
  updateFlag(country2, flag2);
});

// Swap Button

swapBtn.addEventListener("click", () => {
  let temp = country1.value;

  country1.value = country2.value;

  country2.value = temp;

  updateFlag(country1, flag1);

  updateFlag(country2, flag2);

  convertCurrency();
});

// Convert Button

convertBtn.addEventListener("click", convertCurrency);

// Convert Function

function convertCurrency() {
  error.innerText = "";

  if (amount.value == "") {
    error.innerText = "Please enter amount";

    return;
  }

  if (amount.value <= 0) {
    error.innerText = "Amount must be greater than zero";

    return;
  }

  const fromCurrency = country1.value.split(",")[0];

  const toCurrency = country2.value.split(",")[0];

  const usdAmount = amount.value / rates[fromCurrency];

  const convertedAmount = usdAmount * rates[toCurrency];

  result.innerText = `${convertedAmount.toFixed(2)} ${toCurrency}`;

  rateText.innerText = `1 ${fromCurrency} = ${(rates[toCurrency] / rates[fromCurrency]).toFixed(2)} ${toCurrency}`;
}
