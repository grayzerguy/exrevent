const arryOfchars = ["!", "@", "#", "$", "%"];

const inputText1 = document.querySelector("#text");
const outputText1 = document.querySelector("#output");

inputText1.addEventListener("keypress", function (event) {
  for (let i of arryOfchars) {
    if (event.key === i) {
      event.preventDefault();
      outputText1.textContent = `You  can not use  ${i}`;
    }
  }
});
// if (event.keypress===arryOfchars) {
//   event.preventDefault();
//   outputText1.innerHTML = "You can't use this character";
