async function GetNewJoke() {
  const API_URL = "https://official-joke-api.appspot.com/jokes/random";
  const response = await fetch(API_URL);

  const data = await response.json();

  document.getElementById("setup").innerText = data.joke || data.setup;

  document.getElementById("delivery").innerText = data.delivery || "";
}
