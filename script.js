const data = document.querySelector("#data");
const button = document.querySelector("#button");

data.innerHTML = "Hello from JavaScript!";

button.addEventListener("click", onClick);

function onClick() {
  console.log("Clicked!");
}
