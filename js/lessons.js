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

// function formatTime(minuts) {
//   const hours = Math.trunc(minuts / 60);
//   const minutes = minuts % 60;
//   return `${normalizeDigits(hours)}:${normalizeDigits(minutes)}`;
// }
// console.log(formatTime(70)); // "01:10"
// console.log(formatTime(450)); // "07:30"
// console.log(formatTime(1441)); // "24:01"
// function normalizeDigits(number) {
//  return String(number).padStart(2, "0");
// }

// const feedback = {
//   good: 5,
//   neutral: 10,
//   bad: 3,
// };
// let totalFeedback = 0;
// let counter = 0;
// // for (const key in feedback) {
// //   totalFeedback += feedback[key];
// //   counter++;
// // }
// // console.log("🚀 ~ counter:", counter);
// // console.log("Mean feedback", totalFeedback / counter);

// const keys = Object.keys(feedback);
// console.log("🚀 ~ keys:", keys);
// const values = Object.values(feedback);
// console.log("🚀 ~ values:", values);

// for (const value of values) {
//   totalFeedback += value;
// }
// console.log("🚀 ~ totalFeedback:", totalFeedback);

// /**
//  * Напиши скрипт, який для обєкта user, послідовно:
//  * додає поле mood зі значенням "happy",
//  * замінює значення hobby на "skydiving"
//  * замінює значення premium на false
//  * виводить вміст об'єкта user у форматі ключ: значення використовуючи Object.keys()
//  * та for...of
//  */

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mode = "happy";
// user.hobby = "skydiving";
// user.premium = !user.premium;

// const keys = Object.keys(user); //[]
// console.log("🚀 ~ keys:", keys);
// for (const key of keys) {
//   const message = `${key} : ${user[key]}`;
//   console.log(message);
// }

// /**
//  * У нас є об'єкт, де зберігається зарплати нашої команди. Напишіть код для
//  * підсумовання всіх зарплат і збережіть резудьтат у змінній sum.
//  * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
//  */

// const salaries = {
//   John: 100,
//   Ann: 160,
//   Peye: 130,
// };

// let sum = 0;
// const keys = Object.values(salaries);

// if (keys !== 0) {
//   for (const key of keys) {
//     sum += key;
//   }
// }
// console.log(sum);

// const temperatureMonday = [10, 12, 11];
// const temperatureTuesday = [8, 8, 9];
// const temperatureWednesday = [12, 10, 8];

// const temperetureByThreDay = [
//   ...temperatureMonday,
//   ...temperatureTuesday,
//   ...temperatureWednesday,
// ];
// console.log("🚀 ~ temperetureByThreDay:", temperetureByThreDay);
// const maxTemperature = Math.max(...temperetureByThreDay);
// console.log("🚀 ~ maxTemperature:", maxTemperature);
// const minTemperature = Math.min(...temperetureByThreDay);
// console.log("🚀 ~ minTemperature:", minTemperature);

// /**
//  * Створення масиву і тип за посиланням
//  */

// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = [...a];

// console.log("🚀 ~ a:", a);
// console.log("🚀 ~ b:", b);
// console.log(a === b);

// /**
//  * Створення об'єкта
//  */
// const objA = { x: 1, Y: 2 };
// const objB = { x: 0, Z: 3 };
// const objC = { ...objA, ...objB };
// console.log("🚀 ~ objC:", objC);

// /**
//  * Оновлення налаштування користувача
//  */
// const defaultSettings = {
//   theme: "light",
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };
// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };
// console.log("🚀 ~ finalSettings:", finalSettings);

// function registerGuest(name, callback) {
//   callback(name);
// }
// registerGuest("Mango", function (guestName) {
//   console.log(`Ласкаво просимо`);
// });
// registerGuest("Mango", function (guestName) {
//   console.log(`Чи потрібно ваш номер ${guestName}`);
// });
// registerGuest("Poly", function (guestName) {
//   console.log(`Ласкаво просимо постійних гостей ${guestName}`);
// });

// function calc(a, b, callback) {
//   const result = callback(a, b);
//   console.log("🚀 ~ result:", result);
// }
// calc(2, 3, function (base, power) {
//   return base ** power;
// });
// calc(10, 8, function (numinator, denominator) {
//   return numinator % denominator;
// });

// /**
//  * Напиши функцію each(array, callback), яка першим параметром очікує масив,
//  * а другим - функція, яка застосовується до кожного елемента масиву.
//  * Функція each повинна повернути новий масив, елементами якого будуть результати виклику коллбека.
//  */
// function each(array, callback) {
//   const newArray = [];
//   for (const item of array) {
//     const result = callback(item);
//     newArray.push(result);
//   }
//   return newArray;
// }
// const res2 = each([64, 49, 36, 25, 16], function (value) {
//   return value * 2;
// });
// console.log("🚀 ~ res2:", res2);

// const res3 = each([64, 49, 36, 25, 16], function (value) {
//   return value - 10;
// });
// console.log("🚀 ~ res3:", res3);

// const res4 = each([64, 49, 36, 25, 16], function (value) {
//   return Math.sqrt(value);
// });
// console.log("🚀 ~ res4:", res4);

// const res5 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//   return Math.ceil(value);
// });
// console.log("🚀 ~ res5:", res5);

// const res6 = each([1.5, 2.1, 16.4, 9.7, 11.3], function (value) {
//   return Math.floor(value);
// });
// console.log("🚀 ~ res6:", res6);

// /**
//  * Метод forEach(callback)
//  * - Поелементно перебирає оригінальний масив
//  * - Нічого не повертає
//  * - Замінює класичниц for, якщо не потрібно переривати цикл.
//  */

// const numbers = [5, 10, 15, 20, 25];
// let total = 0;

// numbers.forEach(number => (total += number));
// console.log("🚀 ~ total:", total);

// /**
//  * Виконайте рефакторинг коду за допомогою методу forEach
//  * та стрілочної функції
//  */

// // function logItems(items) {
// //   console.log(items);
// //   for (let i = 0; i < items.length; i++) {
// //     console.log(`${i + 1} - ${items[i]}`);
// //   }
// // }

// function logItems(items) {
//   items.forEach((item, index) => console.log(`${index + 1} - ${item}`));
// }

// logItems(["Mango", "Poly", "Ajax"]);

// /**
//  * Виконайте рефакторинг коду за допомогою методу forEach
//  * та стрілочної функції
//  */
// // function printContactsInfo({ names, phones }) {
// //   const nameList = names.split(",");
// //   const phoneList = phones.split(",");
// //     for (let i = 0; i < nameList.length; i++) {
// //       console.log(`${nameList[i]}: ${phoneList[i]}`);
// //     }
// // }

// function printContactsInfo({ names, phones }) {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");
//   nameList.forEach((name, index, array) => {
//     console.log(`${name}: ${phoneList[index]}`);
//   });
// }

// printContactsInfo({
//   names: "Jacob,William,Solomon,Artemius",
//   phones: "89001234567,89001112233,890055566377,890055566300",
// });

// /**
//  * Виконайте рефакторинг коду за допомогою методу forEach
//  * та стрілочної функції
//  */

// function calculateAverage(...args) {
//   let total = 0;
//   for (let i = 0; i < args.length; i++) {
//     total += args[i];
//   }
//   return total / args.length;
// }

// function calculateAverage(...args) {
//   let total = 0;
//   args.forEach(element => (total += element));
//   return total / args.length;
// }
// console.log(calculateAverage(1, 2, 3, 4));

// /**
//  * Array.phototype.map()
//  * - Поелементно перебирає оригінальний масив
//  * - Не змінює оригінальний масив
//  * - Повертає новий масив такоїж довжини
//  */

const allCars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda-6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyotra",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyotra",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyotra",
    model: "Tacama",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

// /**
//  *  Нехай функція getModels повертає масив моделей (поле modal) всіх автомобілів.
//  */
// const getModels = cars => cars.map(item => item.model);
// console.table(getModels(allCars));

// const getModels = cars => {
//   const modal = cars.map(item => item.model);
//   return modal;
// };
// console.table(getModels(allCars));

// /**
//  * Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінним
//  * значенням властивості price залежно від переданої знижки.
//  */

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(item => item.price * (1 - discount));
// };

// const makeCarsWithDiscount = (cars, discount) => {
//   return cars.map(item => ({ ...item, price: item.price * (1 - discount) }));
// };
// console.table(makeCarsWithDiscount(allCars, 0.2));
// console.table(makeCarsWithDiscount(allCars, 0.4));

// /**
//  * Метод flatMap()
//  */

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
// const tags = tweets.flatMap((tweet, index, array) => {
//   return tweet.tags;
// });
// console.log("🚀 ~ tags:", tags);

// const updateTweets = tweets.map((tweet, index, array) => {
//   return {
//     ...tweet,
//     likes: tweet.likes + 1,
//     tags: [...tweet.tags.slice(0, -1)],
//   };
// });
// console.log("🚀 ~ updateTweets:", updateTweets);

// console.log("🚀 ~ tweets:", tweets);

// /**
//  * Метод Filter
//  *
//  * - Поелементно перебирає оригінальний масив
//  * - Повертає новий масив (з елементами або порожній)
//  * - Додає в масив, що повертається, елементи, які задовільняють умові коллбек-функції
//  * - якщо коллбек повертає true елемент додається в масив, що повертається
//  * - якщо коллбек повертає false елемент НЕ додається в масив, що повертається
//  */

// const number = [5, 10, 15, 20, 25];
// const filteredNumbers = number.filter(number => {
//   console.log(number < 11);

//   return number < 11;
// });
// console.log("🚀 ~ filteredNumbers:", filteredNumbers);

// /**
//  * Нехай функція filterByPrice повертає масив автомобілів ціна яких менша ніж
//  * значення параметра threshold
//  */
// const filterByPrice = (cars, threshold) =>
//   cars.filter(car => car.price < threshold);
// console.log("🚀 ~ filterByPrice:", filterByPrice);
// console.table(filterByPrice(allCars, 30000));
// console.table(allCars, 30000);

// /**
//  * Нехай функція getCarsWithDiscount повертає масив автомобілів властивість onSale яких true.
//  */
// const getCarsWithDiscount = cars => {
//   return cars.filter(car => {
//     return car.onSale;
//   });
// };
// console.table(getCarsWithDiscount(allCars));

// /**
//  * Нехай функція getCarsWithType повертає масив автомобілів тип яких зберігається
//  * зі значенням параметра type.
//  */

// const getCarsWithType = (cars, type) => {
//   return cars.filter(car => {
//     return car.type === type;
//   });
// };
// console.table(getCarsWithType(allCars, "suv"));
// console.table(getCarsWithType(allCars, "sedan"));

// const getCarsWithTypeAndPrice = (cars, type, threshold) => {
//   let totalPrice = 0;
//   // const filteredCarsByType = cars.filter(car => car.type === type);
//   // const filteredCarsByprice = filteredCarsByType.filter(
//   //   car => car.price < threshold
//   // );
//   // filteredCarsByprice.forEach(car => {
//   //   totalPrice += car.price;
//   // });
//   cars
//     .filter(car => car.type === type && car.price < threshold)
//     .forEach(car => {
//       totalPrice += car.price;
//     });
//   return totalPrice;
// };

// const result = getCarsWithTypeAndPrice(allCars, "suv", 32000);
// console.log("🚀 ~ result:", result);

// /**
//  * Метод  find
//  * - Поелементно перебирає оригінальний масив
//  * - Повертає перший елемент, що задовільняє умоів або underfined
//  */

// const numbers = [5, 10, 15, 20, 25];
// const number = numbers.find(number => number === 10);
// console.log("🚀 ~ number:", number);

// /**
//  * Шукаємо машину за модуллю
//  */
// const getCarByModel = (cars, model) => cars.find(car => car.model === model);
// console.log(getCarByModel(allCars, "F-150"));
// /**
//  * Шукаємо машину за типом кущова
//  */
// const getCarByType = (cars, type) => cars.find(car => car.type === type);

// console.log(getCarByType(allCars, "sedan"));
// console.log(getCarByType(allCars, "truck"));
// console.log(getCarByType(allCars, "tank"));

// /**
//  * Метод every
//  *
//  * - Поелементно перебирає оригінальний масив
//  * - Повертає true якщо всі елементи масиву задовольняють умову
//  */
const players = [
  { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: true },
  { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: false },
  { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
  { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
  { id: "player-5", name: "Chelsy", timePlayed: 280, points: 48, online: true },
];
// console.table(players);

// const isAllOnline = players.every(player => player.online);
// console.log("🚀 ~ isAllOnline:", isAllOnline);

// /**
//  * Метод some
//  *
//  * - Поелементно перебирає оригінальний масив
//  * - Повертає true якщо хоча б один елементи масиву задовольняють умову
//  */

// const isAnyOnline = players.some(player => player.online);
// console.log("🚀 ~ isAnyOnline:", isAnyOnline);

// const anyHardcorePlayers = players.some(player => player.timePlayed > 1000);
// console.log("🚀 ~ anyHardcorePlayers:", anyHardcorePlayers);

// /**
//  * Метод reduce
//  *
//  * - Поелементно перебирає оригінальний масив
//  * - Значення, що повертається, залежить від розробника
//  */

// const numbers = [5, 10, 15, 20, 25];
// const total = numbers.reduce((acc, number, index, array) => {
//   return (acc += number);
// }, 0);
// console.log("🚀 ~ total:", total);

// /**
//  * Рахуємо загальну зарплату
//  */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajaks: 150,
// };

// const totalSalary = Object.values(salary).reduce(
//   (acc, salary) => (acc += salary)
// );
// console.log("🚀 ~ totalSalary:", totalSalary);

// /**
//  * Рахуємо загальну кількість годин
//  */

// const totalTimePlayed = players.reduce((acc, player) => {
//   return (acc += player.timePlayed);
// }, 0);
// console.log("🚀 ~ totalTimePlayed:", totalTimePlayed);

// /**
//  * Рахуємо загальну суму товарів кошика
//  */

// const cart = [
//   { lable: "Apples", price: 100, quantity: 2 },
//   { lable: "Bananas", price: 120, quantity: 3 },
//   { lable: "Lemons", price: 70, quantity: 4 },
// ];
// const totalAmount = cart.reduce((acc, item) => {
//   return (acc += item.price * item.quantity);
// }, 0);
// console.log("🚀 ~ totalAmount:", totalAmount);

// /**
//  * Метод toSorted
//  *
//  * - Свій порядок сортування чисел
//  * - Свій порядок сортування рядків
//  * - Сортування об'єктів
//  *
//  * За замовчуванням
//  * - сортує за зростанням
//  * - приводить елемент до рядків і сортує за [Unicode]
//  */

// const numbers = [1, 9, 6, 2, 3, 11];
// const sorted = numbers.toSorted((a, b) => a - b);
// console.log("🚀 ~ sorted:", sorted);

// /**
//  * Сортування масиву об'єктів
//  */

// const sortedByBestPlayers = players.toSorted(
//   (a, b) => b.timePlayed - a.timePlayed
// );
// console.table("🚀 ~ sortedByBestPlayers:", sortedByBestPlayers);

// const sortedByWorstPlayers = players.toSorted(
//   (a, b) => a.timePlayed - b.timePlayed
// );
// console.table("🚀 ~ sortedByWorstPlayers:", sortedByWorstPlayers);

// /**
//  * По першій літері імені
//  */
// const byName = players.toSorted((a, b) => a.name.localeCompare(b.name));
// console.table(byName);

// /**
//  * Нехай функція getAvailableCarNames повертає масив моделей автомобілів,
//  * але тільки тих, які на розпродажі
//  */
// const getAvailableCarNames = cars => {
//   return cars.filter(car => car.onSale).map(car => car.model);
// };
// console.table(getAvailableCarNames(allCars));

// /**
//  * Нехай функція getSortedCarsOnSale повертає масив автомобілів
//  * на розпродажі (Властивість OnSale), відсортованих за зростанням ціни.
//  */
// const getSortedCarsOnSale = cars => {
//   return cars.filter(car => car.onSale).toSorted((a, b) => a.price - b.price);
// };

// console.table(getSortedCarsOnSale(allCars));

// /**
//  * Напишіть метод calcTotalPrice(stoneName), який приймає назву
//  * каменю і розраховує та повертає загальну вартість каменів з таким ім'ям,
//  * ціною та кількістю з властивості stones.
//  */
// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamand", price: 2700, quantity: 3 },
//     { name: "Sapphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],
//   calcTotalPrice(stoneName) {
//     const findStone = this.stones.find(stone => stone.name === stoneName);
//     if (!findStone) {
//       return `Sorry. Your stone doesnt exist is store`;
//     }
//     return findStone.price * findStone.quantity;
//   },
// };
// console.log(chopShop.calcTotalPrice("Emerald")); //5200
// console.log(chopShop.calcTotalPrice("Diamand")); //8100
// console.log(chopShop.calcTotalPrice("Sapphire")); //9800
// console.log(chopShop.calcTotalPrice("Ruby")); //1600
// console.log(chopShop.calcTotalPrice("Sand"));

// /**
//  * Класи
//  * - Оголошення класу
//  * - Конструктор класу
//  * - Методи класу
//  * - Прототип екщемпляру
//  * - Приватеі властивості
//  * - Гетери і сеттери
//  * - Статичні властивості
//  */

// class Car {
//   static description = "Im only for class Car";
//   static counter = 0;
//   #brand;
//   #model;
//   constructor(brand, model, price) {
//     this.#brand = brand;
//     this.#model = model;
//     this.price = price;
//     Car.setCountOfInstances();
//   }
//   static setCountOfInstances() {
//     this.counter += 1;
//   }
//   get brand() {
//     return this.#brand;
//   }
//   set brand(updateBrandName) {
//     if (updateBrandName.toLowerCase() === this.#brand.toLowerCase()) {
//       this.#brand = updateBrandName;
//     }
//   }
//   witoutGetBrand() {
//     return this.#brand;
//   }
//   print() {
//     return `You create car: ${this.#brand} ${this.#model} with price ${this.price} $`;
//   }

//   makeDiscont(discount) {
//     this.price *= 1 - Number.parseInt(discount) / 100;
//   }
// }
// const instanceAudi = new Car("Audi", "A5", 30_000);
// console.log("🚀 ~ instanceAudi:", instanceAudi);

// instanceAudi.makeDiscont("10%");
// console.log(Car.description);
// console.log(instanceAudi.brand);
// console.log(instanceAudi.witoutGetBrand());
// instanceAudi.brand = "ZAZ";
// console.log(instanceAudi.brand);
// const res = instanceAudi.print();
// console.log("res", res);

// const instanceNissan = new Car("Nissan", "GT-R", 40_000);
// console.log("🚀 ~ instanceNissan:", instanceNissan);
// const instanceCadillac = new Car("Cadillac", "ATS", 10_000);
// console.log("🚀 ~ instanceCadillac:", instanceCadillac);
// console.log(Car.counter);

// /**
//  * Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:
//  * - email - пошта, рядок
//  * - age - вік, число
//  * - numberOfPosts - кількість ростів, число
//  * - topics - масив тем на яких спеціалізується блогер
//  *
//  * Клас чекає на один параметр - об'єкт налаштувань з одноіменними властивостями.
//  *
//  * Додай метод getInfo(), який, повертає рядок: User ${email}is ${age} years old and has ${numPost} posts.
//  * - Додвй метод updatePostCount(value), який у параметрі value приймає кількість постів,
//  * які потрібно додати користувачеві.
//  */
// class Blogger {
//   constructor(params) {
//     this.email = params.email;
//     this.age = params.age;
//     this.numberOfPosts = params.numberOfPosts;
//     this.topics = params.topics;
//   }
//   getInfo() {
//     return `Blogger ${this.email}is ${this.age} years old and has ${this.numberOfPosts} posts`;
//   }
//   updatePostsCount(value) {
//     this.numberOfPosts += value;
//   }
// }
// const mango = new Blogger({
//   email: "mango@mail.com",
//   age: 24,
//   numberOfPosts: 20,
//   topics: ["tech", "cooking"],
// });

// console.log(mango.getInfo()); // User mango@mail.com is 24 yaers old and has 20 posts
// mango.updatePostsCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 yaers old and has 25 posts

// const poly = new Blogger({
//   email: "poly@mail.com",
//   age: 19,
//   numberOfPosts: 17,
//   topics: ["sports", "gaming", "health"],
// });

// console.log(poly.getInfo()); // User poly@mail.com is 19 yaers old and has 17 posts
// poly.updatePostsCount(4);
// console.log(poly.getInfo()); // User mango@mail.com is 19 yaers old and has 21 posts

// /**
//  * Напиши клас User який створює об'єкт із властивостями login та email.
//  * Оголоси приватні властивості #login та #email, доступ до яких зроби через
//  * гетер та сетер login та email/
//  */

// class User {
//   #login;
//   #email;
//   constructor(params) {
//     this.#login = params.login;
//     this.#email = params.email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogine) {
//     this.#login = newLogine;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const mango = new User({
//   login: "Mango",
//   email: "mango@dog.woof",
// });
// console.log(mango.login); // Mango
// console.log(mango.email); // Mango

// mango.login = "Mangodoge";
// console.log(mango.login); // Mangodoge

// const poly = new User({
//   login: "Poly",
//   email: "poly@mail.com",
// });
// console.log(poly.login); // Poly
// console.log(poly.email); // Poly

// poly.login = "Polycutie";
// console.log(poly.login); // Polycutie

// /**
//  * Напиши клас Storage який створює об'єкти для керування складом товарів.
//  * При виклику отримуватиме один аргумент - початковий масив товарів і
//  * записуватиме його властивість items.
//  *
//  * Додай методи класу:
//  * - getItems() - повертає масив товарів.
//  * - addItems(item) - отримує новий товар і додає його до поточних.
//  * - removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.
//  */
// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItems(item) {
//     this.items.push(item);
//   }
//   removeItem(item) {
//     // this.items = this.items.filter(el => el !== item);
//     // альтернатианий варіант ⬇️
//     const index = this.items.indexOf(item);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//   }
// }
// const storage = new Storage(["🍎", "🍋", "🍇", "🍑"]);

// const items = storage.getItems();
// console.log(items); // ["🍎", "🍋", "🍇", "🍑"]

// storage.addItems("🍌");
// console.log(storage.items); //["🍎", "🍋", "🍇", "🍑", "🍌"]

// storage.removeItem("🍋");
// console.log(storage.items); //["🍎", "🍇", "🍑", "🍌"]
