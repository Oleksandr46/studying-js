//* Асинхронність;
// const setBtn = document.querySelector(".js-set");
// const clearBtn = document.querySelector(".js-clear");
// let timeoutId;

// setBtn.addEventListener("click", () => {
//   timeoutId = setTimeout(() => {
//     console.log("I love async JS!");
//   }, 2000);
// });

// clearBtn.addEventListener("click", () => {
//   clearTimeout(timeoutId);
//   console.log(`Timeout whith id ${timeoutId} has stopped!`);
// });

//!================================================================
//* Інтервал;

// const startBtn = document.querySelector(".js-start");
// const stopBtn = document.querySelector(".js-stop");
// let intervalId;

// startBtn.addEventListener("click", () => {
//   intervalId = setInterval(() => {
//     console.log(`Interval ID: ${intervalId}, ${Math.random()}`);
//   }, 1000);
// });

// stopBtn.addEventListener("click", () => {
//   clearInterval(intervalId);
//   console.log(`Interval with ID: ${intervalId} has stopped!`);
// });
//!================================================================

//*Дата і час
// const date = new Date("2026-03-03");

// const date = new Date("2026-03-03T14:25:00");
// const date = new Date(2026, 2, 16, 14, 25, 0, 0);

// console.log(date);
// console.log(date.getTime());

// const time = Date.now();
// console.log("🚀 ~ time:", time);

// const staetTime = Date.now();
// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }
// const endTime = Date.now();
// const elapsedTime = endTime - staetTime;
// console.log(`Elapsed time: ${elapsedTime} ms`);
//!================================================================
//*Проміси

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => console.log("promise settled"));

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value);
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally");
//   });
//!================================================================
//*Промісифікація
// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);
//     setTimeout(() => {
//       const isSuccess = true;
//       if (isSuccess) {
//         resolve("success value");
//       } else {
//         reject("error");
//       }
//     }, 2000);
//   });
// };
// fetchUserFromServer("Mango")
//   .then(user => console.log(user))
//   .catch(error => console.log(error));

// new Promise(resolve => resolve("success value"))
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

// Promise.resolve("success value")
//   .then(value => console.log(value))
//   .catch(error => console.log(error));
//!================================================================

// const makeGreeting = guestName => {
//   if (!guestName) {
//     return Promise.reject("Guest name must not be emply");
//   } else {
//     return Promise.resolve(`Welcome ${guestName}`);
//   }
// };

// makeGreeting("Mango")
//   .then(greeting => console.log(greeting))
//   .catch(error => console.log(error));
//!================================================================
//*Створення промісів із затримкою

// const makePromise = ({ value, delay, shouldResolve = true }) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve(value);
//       } else {
//         reject(value);
//       }
//     }, delay);
//   });
// };
// makePromise({
//   value: "A",
//   delay: 1000,
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));
// makePromise({
//   value: "B",
//   delay: 3000,
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));
// makePromise({
//   value: "C",
//   delay: 2000,
//   shouldResolve: false,
// })
//   .then(value => console.log(value))
//   .catch(error => console.log(error));
//!================================================================
//*Обробка множинних промісів
