const inputText = document.querySelector("#input");
const outputText = document.querySelector("#outPut");
inputText.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let input = inputText.value;

    console.log(input);
    outputText.innerHTML = input;
    inputText.value = "";
  }
});
