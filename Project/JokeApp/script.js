async function GetNewJoke() {
  const API_URL = "https://official-joke-api.appspot.com/jokes/random";
  const response = await fetch(API_URL);

  const data = await response.json();
  console.log(data);
  document.getElementById("setup").innerText = data.joke || data.setup;

  document.getElementById("punchline").innerText = data.punchline || "";
}
