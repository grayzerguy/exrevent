const sonDiv = document.querySelector("#cDiv");
const father = document.querySelector("#fDiv");
const gFather = document.querySelector("#gfDiv");

let bgSon = true;
let bgFather = true;
let bgGFather = true;

sonDiv.addEventListener("click", clickSon);
function clickSon(event) {
  if (bgGFather) {
    gFather.style.background = "yellow";
  } else {
    gFather.style.background = "gray";
  }
  bgGFather = !bgGFather;
}
