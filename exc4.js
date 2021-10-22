const arryOfchars = ["!", "@", "#", "$", "%"];

const inputText1 = document.querySelector("#text");
const outputText1 = document.querySelector("#output");

// inputText1.addEventListener("keypress", function (event) {
//   for (let i of arryOfchars) {
//     if (event.key === i) {
//       event.preventDefault();
//       outputText1.textContent = `You  can not use  ${i}`;
//     }
//   }
// });

inputText1.addEventListener("keypress", function (event) {
  array.forEach(element, function (element) {
    if (event.key === element) {
      event.preventDefault();
      outputText1.textContent = `You can't use this character`;
    }
  });
});
