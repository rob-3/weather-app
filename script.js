const data = document.querySelector("#data");
const button = document.querySelector("#button");
const searchbox = document.querySelector("#search");

const proxy = "https://cors-anywhere.herokuapp.com/";
const searchURL = proxy + "https://www.metaweather.com/api/location/search/?query=";
const woeidURL = proxy + "https://www.metaweather.com/api/location/";

button.addEventListener("click", onClick);
searchbox.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    onClick();
  }
});

function onClick() {
  const input = searchbox.value;
  // Clear value
  searchbox.value = "";

  // Loading indicator
  data.innerHTML = "Loading...";

  // Making a request
  fetch(searchURL + input)
    .then(blob => blob.json())
    .then(results => {
      const woeid = results[0].woeid;
      fetch(woeidURL + woeid)
        .then(blob => blob.json())
        .then(weatherData => {
          // Get today's data
          const weatherToday = weatherData.consolidated_weather[0];
          data.innerHTML = 
            `Weather: ${weatherToday.weather_state_name}<br>
             High: ${toFarenheit(weatherToday.max_temp)}°F<br>
             Low: ${toFarenheit(weatherToday.min_temp)}°F`;
        });
    })
    .catch(err => {
      console.log(err);
      data.innerHTML = "Request failed!";
    });
}

function toFarenheit(celcius) {
  return Math.round(celcius * (9/5) + 32);
}
