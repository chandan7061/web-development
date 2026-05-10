const salaryForm = document.getElementById("salaryForm");

const calculateBtn = document.getElementById("calculateBtn");

const spinner = document.getElementById("spinner");

const btnText = document.getElementById("btnText");

// Function to calculate salary

function calculateGrossSalary(basic) {
  let hra = 0;
  let da = 0;

  // Salary Rules

  if (basic < 10000) {
    hra = basic * 0.2;
    da = basic * 0.8;
  } else if (basic <= 20000) {
    hra = basic * 0.25;
    da = basic * 0.9;
  } else {
    hra = basic * 0.3;
    da = basic * 0.95;
  }

  const gross = basic + hra + da;

  return {
    basic,
    hra,
    da,
    gross,
  };
}

// Form Submit

salaryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const basicSalary = Number(document.getElementById("basicSalary").value);

  const error = document.getElementById("error");

  error.innerText = "";

  // Validation

  if (
    document.getElementById("basicSalary").value === "" ||
    isNaN(basicSalary) ||
    basicSalary < 0
  ) {
    error.innerText = "Please enter a valid salary amount";

    document.getElementById("resultCard").classList.add("d-none");

    return;
  }

  // Loading Effect

  calculateBtn.disabled = true;

  btnText.classList.add("d-none");

  spinner.classList.remove("d-none");

  setTimeout(() => {
    const result = calculateGrossSalary(basicSalary);

    // Currency Format

    const formatCurrency = (amount) => {
      return amount.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2,
      });
    };

    // Display Results

    document.getElementById("basicResult").innerText = formatCurrency(
      result.basic,
    );

    document.getElementById("hraResult").innerText = formatCurrency(result.hra);

    document.getElementById("daResult").innerText = formatCurrency(result.da);

    document.getElementById("grossResult").innerText = formatCurrency(
      result.gross,
    );

    document.getElementById("resultCard").classList.remove("d-none");

    document.getElementById("successMsg").classList.remove("d-none");

    // Reset Button State

    calculateBtn.disabled = false;

    btnText.classList.remove("d-none");

    spinner.classList.add("d-none");
  }, 500);
});

// Reset Button

document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("basicSalary").value = "";

  document.getElementById("error").innerText = "";

  document.getElementById("resultCard").classList.add("d-none");

  document.getElementById("successMsg").classList.add("d-none");
});
