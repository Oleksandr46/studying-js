/**
 * - Подія input
 * - Подія blur
 *
 * Виводь в консоль все що користувач вводить в input
 */
const userName = document.querySelector(".js-user-name");
// userName.addEventListener("input", event => {
//   const input = event.currentTarget;
//   console.log(input.value);
// });

// userName.addEventListener("blur", event => {
//   const input = event.currentTarget;
//   console.log("Blur", input.value);
// });
/**
 * Користувач вводить в input своє ім'я після втрати
 * фокусу отримує alert з повідомленням-привітанням
 */

userName.addEventListener("blur", onBlur);

function onBlur(event) {
  const input = event.target;
  if (input.value === "") {
    alert("⚠️ Please enter your name");
    return;
  }
  alert(`Hello user: ${input.value}`);
  input.value = "";
}
