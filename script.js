const data = document.querySelector("#data");
const button = document.querySelector("#button");
const searchbox = document.querySelector("#search");

data.innerHTML = "Hello from JavaScript!";

button.addEventListener("click", onClick);

function onClick() {
  const input = searchbox.value;
  console.log("You typed: " + input);
}
