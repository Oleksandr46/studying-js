// const dog = {
//   name: "Mango",
//   age: 3,
//   isGoodBoy: true,
// };

// const json = JSON.stringify(dog);
// console.log(json); //{"name":"Mango","age":3,"isGoodBoy":true}

// //!===================================================
// try {
//   const data = JSON.parse('{"username": "Mango"}');
//   console.log(data);
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }
// //!===========================================
// try {
//   const data = JSON.parse("Well, this is awkward");
// } catch (error) {
//   console.log(error.name); // "SyntaxError"
//   console.log(error.message); // Unexpected token W in JSON at position 0
// }

// console.log("✅ This is fine, we handled parsing error in try...catch");

// console.log(window.localStorage);
// console.log(localStorage);

// localStorage.setItem("ui-theme", "light");
// console.log(localStorage);

// const settings = {
//   theme: "dark",
//   isAuthenticated: true,
//   options: [1, 2, 3],
// };
// localStorage.setItem("settings", JSON.stringify(settings));

// const savedTheme = localStorage.getItem("ui-theme");
// console.log(savedTheme);

// const savedItem = localStorage.getItem("key-that-does-not-exist");
// console.log(savedItem);

// const savedSettings = localStorage.getItem("settings");
// console.log(savedSettings);
// const parsedSettings = JSON.parse(savedSettings);
// console.log(parsedSettings);

// localStorage.setItem("ui-theme", "dark");
// console.log(localStorage.getItem("ui-theme"));

// localStorage.removeItem("ui-theme");
// console.log(localStorage.getItem("ui-theme"));

// localStorage.setItem("ui-theme", "light");
// localStorage.setItem("notif-level", "mute");

// console.log(localStorage);

// localStorage.clear();
// console.log(localStorage);

// console.log(window.sessionStorage);
// sessionStorage.setItem("user-id", "123");
// sessionStorage.setItem(
//   "tickets",
//   JSON.stringify({ from: "Lviv", to: "Kyiv", quantity: 2 })
// );
// console.log(sessionStorage);

// const userId = sessionStorage.getItem("user-id");
// console.log(userId);
// const tickets = JSON.parse(sessionStorage.getItem("tickets"));
// console.log(tickets);
// sessionStorage.removeItem("tickets");
// console.log(sessionStorage);

// const form = document.querySelector(".feedback-form");
// const textarea = form.elements.message;
// const localStorageKey = "goit-example-message";

// textarea.value = localStorage.getItem(localStorageKey) ?? "";

// form.addEventListener("input", evt => {
//   localStorage.setItem(localStorageKey, evt.target.value);
// });
// form.addEventListener("submit", evt => {
//   evt.preventDefault();
//   console.log(evt.target.elements.message.value);
//   localStorage.removeItem(localStorageKey);
//   form.reset();
// });

//!===========================
function saveToLS(key, value) {
  const json = JSON.stringify(value);
  localStorage.setItem(key, json);
}

function loadFromLS(key, defaultValue) {
  const jsonData = localStorage.getItem(key);
  try {
    const data = JSON.parse(jsonData);
    return data ?? defaultValue;
  } catch {
    return jsonData ?? defaultValue;
  }
}
//!===========================
