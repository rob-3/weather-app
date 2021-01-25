const data = document.querySelector("#data");
const button = document.querySelector("#button");
const searchbox = document.querySelector("#search");

const proxy = "https://cors-anywhere.herokuapp.com/";
const searchURL = proxy + "https://www.metaweather.com/api/location/search/?query=";
const woeidURL = proxy + "https://www.metaweather.com/api/location/";

button.addEventListener("click", onClick);

function onClick() {
  const input = searchbox.value;

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
             High: ${weatherToday.max_temp}<br>
             Low: ${weatherToday.min_temp}`;
        });
    });
}
