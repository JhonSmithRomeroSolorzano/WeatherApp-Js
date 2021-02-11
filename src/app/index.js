require("./index.css");
const { Weather } = require("./Weather");
const { UI } = require("./UI");
const { Store } = require("./Store");

const store = new Store();
const { city, countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);
const ui = new UI();

async function fetchWeather() {
  const data = await weather.getWeather();
  //console.log(data);
  ui.render(data);
}
document.getElementById("w-change-btn").addEventListener("click", (e) => {
  const city = document.getElementById("city").value;
  const countryCity = document.getElementById("countryCode").value;
  store.setLocationData(city, countryCity);

  weather.changeLocation(city, countryCity);
  fetchWeather();
  e.preventDefault();
});
document.addEventListener("DOMContentLoaded", fetchWeather);
