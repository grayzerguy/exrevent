const arryOfchars = ["!", "@", "#", "$", "%"];

const inputText1 = document.querySelector("#text");
const outputText1 = document.querySelector("#output");

inputText1.addEventListener("keypress", function (event) {
  for (let char of arryOfchars) {
    if (event.key !== char) {
      outputText1.innerHTML = "";
    } else {
      event.preventDefault();
      outputText1.innerHTML = "You can't use this character";
    }
  }
});
