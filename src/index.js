function refreshWeather(response) {
  console.log(response.data.temperature.current);
  let temperatureElement = document.querySelector(".weather-app-temperature");
  let temperature = response.data.temperature.current;
  let city = document.querySelector("#weather-app-city");

  city.innerHTML = response.data.city;
  temperatureElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  //call api and update the interface
  let apiKey = "tb8746f8a332o55bf03481bf03f90fe4";
  let apiUlr = `https://api.shecodes.io/weather/v1/current?query=${city}}&key=${apiKey}`;
  axios.get(apiUlr).then(refreshWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  //let city = document.querySelector("#weather-app-city");
  //city.innerHTML = searchInput.value;
  //call API
  //search for city
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");