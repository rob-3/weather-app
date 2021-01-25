const data = document.querySelector("#data");
const button = document.querySelector("#button");
const searchbox = document.querySelector("#search");

const proxy = "https://cors-anywhere.herokuapp.com/";
const searchURL = proxy + "https://www.metaweather.com/api/location/search/?query=";

button.addEventListener("click", onClick);

function onClick() {
  const input = searchbox.value;
  console.log("You typed: " + input);

  // Making a request
  const promise = fetch(searchURL + input);

  promise.then(blob => blob.json()).then(data => console.log(data));
}
