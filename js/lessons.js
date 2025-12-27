// const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];
// const joinArr = courses.join(" ");
// const str = "JavaScript is awesome!";
// const arrFromStr = str.split(" ");
// const updeteCourses = courses.slice(2, 4);

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// const isFriendsOnline = [true, true, false, true];
// for (let i = 0; i < friends.length; i++) {
//   //   console.log((friends[i] += `-${isFriendsOnline[i] ? "Online" : "Offline"}`));
// }
// for (const friend of friends) {
//   //   console.log(friend);
// }

// **
//  * Напиши скрипт для обчисоення площі прямокутника зі сторонами,
//  * значення яких зберігається у змінній values у вигляді рядка.
//  * Значення гарантовано розділені пробілом.
//  */
// const values = "8 11";
// function calculeteSquare(data) {
//   if (typeof data !== "string") {
//     console.warn("Wrong data type");
//     return;
//   }
//   const squareParams = data.split(" ");
//   const square = squareParams[0] * squareParams[1];
//   console.log("🚀 ~ square:", square);
// }
// calculeteSquare(values);

// **
//  * Напиши скрипт для перебору масиву fruits.
//  * Для кожного елемента масиву виведи в консоль рядок
//  * у форматі номер_елемента: значення_елемента.
//  * Нумерація елементів повинна починатися з 1.
//  */
// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];
// for (let i = 0; i < fruits.length; i++) {
//   const element = fruits[i];
//   console.log(`${i + 1} : ${element}`);
// }

//  **
//  * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
//  */
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// function calculeteNumber(numbers) {
//   let total = 0;
//   for (const number of numbers) {
//     if (number % 2 === 0) {
//       total += number;
//     }
//   }
//   return total;
// }
// const res1 = calculeteNumber(numbers);
// console.log("🚀 ~ res1:", res1);

//  **
//  * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
//  * У змінних names та phons зберігаються рядки імен та телефонних номерів,
//  * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
//  * відповідність. Кількість імен та телефонів гарантовано однакова.
//  */
// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,8900555663377,89005566300,89005566305";
// function showContacts(names, phones) {
//   let title = [];
//   const nameArray = names.split(",");
//   const phoneArray = phones.split(",");
//   if (nameArray.length > phoneArray.length) {
//     for (let i = 0; i < phoneArray.length; i += 1) {
//       const name = nameArray[i];
//       const phone = phoneArray[i];
//       title += `☎️ ${i + 1} . ${name} , ${phone}\n`;
//     }
//   } else {
//     for (let i = 0; i < nameArray.length; i += 1) {
//       const name = nameArray[i];
//       const phone = phoneArray[i];
//       title += `☎️ ${i + 1} . ${name} , ${phone}\n`;
//     }
//   }
//   return title;
// }
// const res2 = showContacts(names, phones);
// console.log(res2);

// **
//  * Напиши скрипт який виводить у консоль усі слова рядка
//  * крім першого і останнього. Результуючий рядок не повинен починатися
//  * або закінчуватися сомволом пробілу.
//  * Скрипт повинен працювати для будь-якого рядка.
//  */
// const string = "Welcome to the future";
// // const newString = string.split(" ").slice(1, -1).join(" ");
// // console.log("🚀 ~ newString:", newString);
// function showWords(string) {
//   const arr = string.split(" ");
//   return arr.slice(1, arr.length - 1).join(" ");
// }
// const res3 = showWords(string);
// console.log("🚀 ~ res3:", res3);
//  **
//  * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
//  * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
//  */
// const values = [2, 17, 94, 1, 0, 37];
// let min;
// function findMinNum(numbers) {
//   let minNum = numbers[0];

//   for (let i = 1; i < numbers.length; i++) {
//     const currentNumber = numbers[i];
//     if (currentNumber < minNum) {
//       minNum = currentNumber;
//     }
//   }
//   return minNum;
// }
// min = findMinNum(values);
// console.log("🚀 ~ min:", min);

// function foo(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] *= 2;
//   }
// }
// const numbers = [1, 2, 3, 4, 5];
// foo(numbers);
// console.log(numbers);

// function showArguments() {
//   console.log(arguments);
//   const ards = Array.from(arguments);
//   console.log("🚀 ~ ards:", ards);
// }
// showArguments(1, 2, 3);
// showArguments(1, 2, 3, 4, 5);
// showArguments(1, 2, 3, 4, 5, 6, 7);

// let room = 1;
// function printMessage(guestName, hotelName = "Peach Hotel", roomNumber = room) {
//   const message = `Room number ${roomNumber} is hotel ${hotelName} reserved by ${guestName}`;
//   room += 1;
//   return message;
// }
// const result = printMessage("Mango");
// console.log("🚀 ~ result:", result);
// const result1 = printMessage("Poly", "Strawbery Hotel");
// console.log("🚀 ~ result1:", result1);

// function createLink(domen, protocol = "pttps://") {
//   const link = protocol + domen + "/";
//   return link;
// }

// const res1 = createLink("goit.ua");
// console.log("🚀 ~ res1:", res1);

// (function () {
//   return "Worked";
// })();

// const fn1 = function () {
//   console.log("Unonimus function worked ✨");
// };
// fn1();

//  ** Перепиши Функцію add для складання довільної
//  * кількості аргументів (чисел) на function expression
//  */

// const add = function () {
//   const args = Array.from(arguments);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 4, 5, 6));

//  **
//  * Напиши функцію calAverage() яка приймає довільну кількість
//  * аргументів і повертає їхнє середнє значення. Усі аргументи
//  * будуть лише числами.
//  */

// function calAverage() {
//   const args = Array.from(arguments);
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total / args.length;
// }
// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// const globalValue = 10;
// console.log(userName); // Global scope
// console.log(globalValue); // 10

// function foo() {
//   const a = 20;
//   console.log(a);
//   console.log(userName); // Global scope
//   console.log(globalValue); // 10

//   for (let i = 0; i < 5; i++) {
//     console.log(a);
//     console.log(userName); // Global scope
//     console.log(globalValue); // 10
//   }
//   if (i === 2) {
//     console.log(a);
//     console.log(userName); // Global scope
//     console.log(globalValue); // 10
//   }
// }
// foo();

//  /**
//  * Напиши функцію logItems(items), яка отримає масив  та
//  * використовує цикл, який для кожного елемента масиву буде виводити в консоль
//  * повідомоення у форматі <номер елемента> - <значення елемента>. Нумерація
//  * елементів повинна починатися з 1.
//  * Наприклад для першого елемента масиву ["Mango", "Poly", "Ajax"]
//  * з індексом 0 буде виведено 1 - Mango, а для індексу 2 виведено 3 Ajax.
//  */

// function logItems(items) {
//   for (let i = 0; i < items.length; i++) {
//     const item = items[i];
//     console.log(`${i + 1} - ${item}`);
//   }
// }
// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);

// /**
//  * Напиши функцію printInfo(names, phones) яка виводить у консоль ім'я та
//  * телеіонний номер користувача. у параметри names та phones будуть передані
//  * рядки імен та телефонних номерів, розділені комами. Порядковий номер імен
//  * та телефонів у рядках вказують на відповідність.
//  * Кількість імен та кількість телефонів гарантовано однакова.
//  */

// function printInfo(names, phones) {
//   const namesArr = names.split(",");
//   const phonesArr = phones.split(",");

//   for (let i = 0; i < namesArr.length; i++) {
//     const name = namesArr[i];
//     const phone = phonesArr[i];
//     console.log(`${name}, ${phone}`);
//   }
// }
// printInfo(
//   "Jacob,Wiliam,Solomon,Artemus",
//   "89001234567,89001112233,890055566377,890055566300"
// );

// /**
//  * Напиши функцію formatTime(minuts) яка переведе значення minuts
//  * (кількість хвилин) у рядок у форматі годин та хвилин HH:MM
//  */
function formatTime(minuts) {
  const hours = Math.trunc(minuts / 60);
  const minutes = minuts % 60;

  return `${normalizeDigits(hours)}:${normalizeDigits(minutes)}`;
}

console.log(formatTime(70)); // "01:10"
console.log(formatTime(450)); // "07:30"
console.log(formatTime(1441)); // "24:01"
function normalizeDigits(number) {
  return String(number).padStart(2, "0");
}
