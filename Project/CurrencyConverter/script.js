const country1 = document.getElementById("country1");
const country2 = document.getElementById("country2");

const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");

const convertBtn = document.getElementById("convertBtn");

const orgAmount = document.getElementById("orgAmount");

const newAmount = document.getElementById("newAmount");

const rateText = document.getElementById("rateText");

const loading = document.getElementById("loading");

const swapBtn = document.getElementById("swapBtn");

// Country Data
const countries = [
  { name: "India", currency: "INR", code: "IN" },
  { name: "United States", currency: "USD", code: "US" },
  { name: "United Kingdom", currency: "GBP", code: "GB" },
  { name: "Japan", currency: "JPY", code: "JP" },
  { name: "Canada", currency: "CAD", code: "CA" },
  { name: "Australia", currency: "AUD", code: "AU" },
  { name: "Germany", currency: "EUR", code: "DE" },
  { name: "China", currency: "CNY", code: "CN" },
  { name: "Russia", currency: "RUB", code: "RU" },
];

// Load Countries
function loadCountries() {
  countries.forEach((country) => {
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");

    option1.value = `${country.currency},${country.code}`;
    option2.value = `${country.currency},${country.code}`;

    option1.innerText = `${country.name} (${country.currency})`;
    option2.innerText = `${country.name} (${country.currency})`;

    country1.appendChild(option1);
    country2.appendChild(option2);
  });

  country1.value = "USD,US";
  country2.value = "INR,IN";

  updateFlag(country1, flag1);
  updateFlag(country2, flag2);
}

function updateFlag(select, image) {
  const countryCode = select.value.split(",")[1];

  image.src = `https://flagsapi.com/${countryCode}/flat/64.png`;

  image.onerror = () => {
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  };
}

country1.addEventListener("change", () => {
  updateFlag(country1, flag1);
});

country2.addEventListener("change", () => {
  updateFlag(country2, flag2);
});

convertBtn.addEventListener("click", async () => {
  const amount = orgAmount.value;

  if (amount === "" || amount <= 0) {
    alert("Please enter valid amount");
    return;
  }

  const fromCurrency = country1.value.split(",")[0].toLowerCase();

  const toCurrency = country2.value.split(",")[0].toLowerCase();

  loading.classList.remove("d-none");

  convertBtn.innerText = "Loading...";

  try {
    const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`;

    const response = await fetch(URL);

    const data = await response.json();

    const rate = data[fromCurrency][toCurrency];

    const finalResult = amount * rate;

    newAmount.innerText = `${finalResult.toFixed(2)} ${toCurrency.toUpperCase()}`;

    rateText.innerText = `1 ${fromCurrency.toUpperCase()} = ${rate.toFixed(2)} ${toCurrency.toUpperCase()}`;
  } catch (error) {
    console.log(error);

    newAmount.innerText = "Conversion Failed";
  } finally {
    loading.classList.add("d-none");

    convertBtn.innerText = "Convert";
  }
});

swapBtn.addEventListener("click", () => {
  let temp = country1.value;

  country1.value = country2.value;

  country2.value = temp;

  updateFlag(country1, flag1);
  updateFlag(country2, flag2);
});

loadCountries();
