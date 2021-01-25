const data = document.querySelector("#data");
const button = document.querySelector("#button");
const searchbox = document.querySelector("#search");

const proxy = "https://cors-anywhere.herokuapp.com/";
const searchURL = proxy + "https://www.metaweather.com/api/location/search/?query=";
const woeidURL = proxy + "https://www.metaweather.com/api/location/";

button.addEventListener("click", onClick);

function onClick() {
  const input = searchbox.value;
  console.log("You typed: " + input);

  // Making a request
  fetch(searchURL + input)
    .then(blob => blob.json())
    .then(data => {
      const woeid = data[0].woeid;
      fetch(woeidURL + woeid)
        .then(blob => blob.json())
        .then(data => {
          // Get today's data
          const weatherToday = data.consolidated_weather[0];
          console.log("Weather: " + weatherToday.weather_state_name);
          console.log("High: " + weatherToday.max_temp);
          console.log("Low: " + weatherToday.min_temp);
        });
    });
}
