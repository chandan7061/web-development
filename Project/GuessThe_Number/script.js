// Random number from 1 to 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const guessedNumber = Number(document.getElementById("guessNumber").value);

  if (guessedNumber > randomNumber) {
    alert("OOPS! SORRY!!! TRY A SMALLER NUMBER.");
  } else if (guessedNumber < randomNumber) {
    alert("OOPS! SORRY!!! TRY A LARGER NUMBER.");
  } else {
    alert("🎉 Congratulations! You guessed the correct number.");
  }

  document.getElementById("guessNumber").value = "";
});
