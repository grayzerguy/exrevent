const divRef = document.querySelector("div");
const colorArry = ["red", "green", "blue"];

divRef.addEventListener("click", function (event) {
  const color = colorArry[Math.floor(Math.random() * 3)];
  divRef.style.backgroundColor = color;
});
