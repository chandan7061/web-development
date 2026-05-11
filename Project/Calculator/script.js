let display = document.getElementById("display");

let buttons = document.querySelectorAll(".btns");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.innerText;

    if (value === "AC") {
      expression = "";
      display.innerText = "0";
    } else if (value === "C") {
      expression = expression.slice(0, -1);

      if (expression === "") {
        display.innerText = "0";
      } else {
        display.innerText = expression;
      }
    } else if (value === "=") {
      try {
        let result = Function("return " + expression)();

        display.innerText = result;

        expression = result.toString();
      } catch (error) {
        display.innerText = "Error";

        expression = "";
      }
    } else {
      expression += value;

      display.innerText = expression;
    }
  });
});

document.addEventListener("keydown", (event) => {
  let key = event.key;

  if ("0123456789+-*/.%".includes(key)) {
    expression += key;

    display.innerText = expression;
  } else if (key === "Enter") {
    try {
      let result = Function("return " + expression)();

      display.innerText = result;

      expression = result.toString();
    } catch {
      display.innerText = "Error";

      expression = "";
    }
  } else if (key === "Backspace") {
    expression = expression.slice(0, -1);

    if (expression === "") {
      display.innerText = "0";
    } else {
      display.innerText = expression;
    }
  }
});
