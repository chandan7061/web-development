const API_KEY = "857c028f16308862fc66552309fe2b86";

async function getWeather() {
  const cityName = document.getElementById("cityName").value.trim();

  const { Lattitude, Longitude } = await getGeoLocation(cityName);

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${Lattitude}&lon=${Longitude}&appid=${API_KEY}`;

  const response = await fetch(WEATHER_API);
  const data = await response.json();

  const temperature = (data.main.temp - 273.15).toFixed(1);
  const maxTemp = (data.main.temp_max - 273.15).toFixed(1);
  const minTemp = (data.main.temp_min - 273.15).toFixed(1);

  document.getElementById("city").innerText = data.name;
  document.getElementById("Temperature").innerText = temperature;

  document.getElementById("weatherType").innerText =
    data.weather[0].description;

  document.getElementById("wind").innerText = data.wind.speed + " km/h";

  document.getElementById("humidity").innerText = data.main.humidity + "%";

  document.getElementById("maxTemp").innerText = maxTemp + "°C";

  document.getElementById("minTemp").innerText = minTemp + "°C";
}

async function getGeoLocation(city) {
  const GEO_LOC_API = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;

  const response = await fetch(GEO_LOC_API);
  const data = await response.json();

  const Lattitude = data[0].lat;
  const Longitude = data[0].lon;

  return { Lattitude, Longitude };
}
