const text = document.querySelector("#onlynum");

text.addEventListener("keyup", isNum);

function isNum(event) {
  if (isNaN(text.value)) {
    text.value = "";
  }
}
