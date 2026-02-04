/**
 * Подія сlick
 *
 * Натискаючи на кнопку "Click me" змусь
 * червоний квадратик зміщуватись на 50px по діагоналі
 */

const clickMe = document.querySelector(".js-click");
const removeBtn = document.querySelector(".js-remove");
const box = document.querySelector(".js-box");

clickMe.addEventListener("click", handlerClick);

let step = 0;
function handlerClick() {
  step += 50;
  box.style.top = `${step}px`;
  box.style.left = `${step}px`;
}

removeBtn.addEventListener("click", event => {
  console.log("remove listener");

  clickMe.removeEventListener("click", handlerClick);
});
