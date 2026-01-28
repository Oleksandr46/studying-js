// function getScreenType(screenWidth) {
//   const sm = 320;
//   const md = 768;
//   const lg = 1200;
//   if (screenWidth <= sm) {
//     return "Mobile screen";
//   } else if (screenWidth > sm && screenWidth <= md) {
//     return "Tablet screen";
//   } else if (screenWidth > md && screenWidth <= lg) {
//     return "Desktop screen";
//   } else {
//     return "Godzilla screen";
//   }
// }
// console.log(getScreenType(700)); // "Tablet screen"
// console.log(getScreenType(1200)); // "Desktop screen"
// console.log(getScreenType(1500)); // "Godzilla screen"
// console.log(getScreenType(320)); // "Mobile screen"

// function isNumberInRange(start, end, number) {
//   return number >= start && number <= end;
// }
// console.log(isNumberInRange(10, 30, 15)); // true
// console.log(isNumberInRange(10, 30, 5)); // false
// console.log(isNumberInRange(10, 30, 30)); // true
// console.log(isNumberInRange(10, 30, 31)); // false

// function checkAccess(subType) {
//   return subType === "pro" || subType === "vip";
// }
// console.log(checkAccess("pro")); // true
// console.log(checkAccess("vip")); // true
// console.log(checkAccess("free")); // false

// const isBlocked = false;
// const canChat = !isBlocked;
// if (canChat) {
//   console.log("Can type in chat!");
// } else {
//   console.log("Blocked from typing in chat!");
// }

// function canUseChat(isOnline, isBlocked) {
//   const canChat = isOnline && !isBlocked;
//   if (canChat) {
//     return `Can type in chat!`;
//   } else {
//     return `Blocked from typing in chat!`;
//   }
// }
// console.log(canUseChat(true, false)); // "Can type in chat!"
// console.log(canUseChat(false, false)); // "Blocked from typing in chat!"
// console.log(canUseChat(true, true)); // "Blocked from typing in chat!"

// let count = 0;
// while (count < 20) {
//   console.log(`Count: ${count}`);
//   count += 2;
// }

// function countClients(clientCounter, maxClients) {
//   let counter = clientCounter;
//   while (counter < maxClients) {
//     counter += 1;
//     console.log(counter);
//   }
// }
// countClients(0, 3); // 8 9 10 11

// function calculateTotal(number) {
//   let total = 0;
//   let i = 1;

//   while (i <= number) {
//     total += i;
//     i += 1;
//   }
//   console.log(total);
// }
// calculateTotal(24);

// function calculateTotal(number) {
//   let total = 0;
//   let i = 1; // починаємо з 1

//   while (i <= number) {
//     total = +i; // додаємо 1, потім 2, потім 3...
//     i += 1; // збільшуємо лічильник
//   }

//   return total;
// }

// console.log(calculateTotal(3));

// let count = 6;

// do {
//   console.log(`Count: ${count}`);
//   count += 1;
// } while (count < 5);

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// FOR // цикли

// function sumUpTo(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(sumUpTo(5)); // 15
// console.log(sumUpTo(10)); // 55
// console.log(sumUpTo(0)); // 0

// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; i += 1) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(calculateTotal(3)); // 6
// console.log(calculateTotal(5)); // 15
// console.log(calculateTotal(10)); // 55

// let x = 5;
// const y = x++;
// console.log(x); // 6
// console.log(y); // 5

// function calculateEvenTotal(number) {
//   let sum = 0;
//   for (let i = 0; i <= number; ++i) {
//     if (i % 2 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(calculateEvenTotal(5)); // 6
// console.log(calculateEvenTotal(10)); // 30

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);

//   if (i === 5) {
//     console.log("Met the number 5, interrupt the execution of the cycle");
//     break;
//   }
// }

// console.log("Log after cycle");

// function calculateTo(start, end) {
//   let number;

//   for (let i = start; i <= end; i++)
//     if (i % 5 === 0) {
//       number = i;
//       break;
//     }
//   return number;
// }
// console.log(calculateTo(6, 17)); // 10
// console.log(calculateTo(17, 25)); // 20
// console.log(calculateTo(31, 40)); // 35

// const start = 6;
// const end = 17;
// let number;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// function findNumber(max, target) {
//   console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(`Found the number $ {target}, interrupt the cycle`);
//       break;
//     }
//   }

//   console.log("Log in body function after cycle");
// }

// findNumber(10, 9);
// console.log("Log after exiting function");

// function findNumber(max, target) {
//   console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(
//         `Found the number $ {target}, we make a return, interrupting the loop and function`
//       );
//       return i;
//     }
//   }

//   // Цей console.log не виконується
//   console.log("Log in body function after cycle");
// }

// const result = findNumber(10, 6);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);

// const number = prompt("Enter a number between 1 and 10:");
// // console.log(typeof number);
// let msg;
// if (Number(number)) {
//   if (Number(number) > 12) {
//     msg = "Number is greater than 12";
//   } else {
//     msg = "Number is 12 or less";
//   }
// } else {
//   msg = "Invalid input, not a number";
// }
// console.log(msg);

// const points = 5000;
// if (points <= 500) {
//   console.log("level 1");
// } else if (points > 500 && points <= 1500) {
//   console.log("level 2");
// } else if (points > 1500 && points <= 3000) {
//   console.log("level 3");
// } else {
//   console.log("level 4");
// }

// const balans = Math.random() * 200 - 100;
// console.log(balans);

// let message = balans >= 0 ? "Posityve balans" : "Negative balans";
// // if (balans >= 0) {
// //   message = "Posityve balans";
// // } else {
// //   message = "Negative balans";
// // }
// console.log(message);

// function dish(dishName) {
//   return function (chiefName) {
//     return `${chiefName} is cooking ${dishName}`;
//   };
// }
// const scrambledEggs = dish("scrambled eggs");
// const pasta = dish("pasta");
// console.log(pasta("Mike")); // "Mike is cooking pasta"
// console.log(pasta("Sara")); // "Sara is cooking pasta"
// console.log(scrambledEggs("John")); // "John is cooking scrambled eggs"
// console.log(scrambledEggs("Alice")); // "Alice is cooking scrambled eggs"

// const planets = ["Earth", "Mars", "Venus", "Uranus"];
// console.log("🚀 ~ planets:", planets);
// const firstElement = planets[0];

// console.log("🚀 ~ firstElement:", firstElement);
// planets[0] = "Jupiter";

// planets[2] = "Neptune";
// console.log("🚀 ~ planets:", planets);

// function getOrderQuantity(order) {
//   console.log(order.length);
// }
// getOrderQuantity(["apple", "peach", "pear", "banana"]);
// getOrderQuantity(["apple", "banana"]);
// getOrderQuantity([]);

// function getLastElementMeta(array) {
//   return [array.length - 1, array[array.length - 1]];
// }
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));

// function getExtremeElements(array) {
//   return [array[array.length - array.length], array[array.length - 1]];
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// let a = 5;
// let b = a;
// console.log("🚀 ~ b:", b);
// console.log("🚀 ~ a:", a);
// a = 10;
// console.log("🚀 ~ a:", a);
// console.log("🚀 ~ b:", b);

// const a = ["Mango", "Poly"];
// const b = a;
// console.log("🚀 ~ a:", a);
// console.log("🚀 ~ b:", b);
// a[1] = "Jacob";
// console.log("🚀 ~ a:", a);
// console.log("🚀 ~ b:", b);

// b[0] = "Ajax";
// console.log("🚀 ~ a:", a);
// console.log("🚀 ~ b:", b);

// const array = [1, 3, 5];
// console.log(String(array));
// console.log(Number(array.join("")));
// console.log(Number(array[0]), array[1], array[2]);
// console.log(array.join("-"));

// console.log(array.reduce((sum, num) => sum + num, 0));

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join(""));
// console.log(words.join(" "));
// console.log(words.join("-"));

// function transfornString(string) {
//   const words = string.split("_");
//   return words.join("-");
// }
// console.log(transfornString("user_ege"));
// console.log(transfornString("price_per_droid"));

// function getLength(array) {
//   const words = array.join("");
//   return words.length;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["M", "a", "n", "g", "o"]));

// const name = "Mngo";
// const letters = name.split("");
// console.log("🚀 ~ letters:", letters);

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log("🚀 ~ words:", words);

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log("🚀 ~ slugParts:", slugParts);

// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// const result = planets.slice(0, 2);
// console.log(result);
// console.log(planets.slice(0, 4));
// console.log(planets.slice(1, 3));

// function getSlice(array, value) {
//   const total = array.indexOf(value);
//   return array.slice(0, total + 1);
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob"));
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey"));

// const tags = [];
// for (let i = 0; i < 5; i++) {
//   tags.push(`tag-${i}`);
// }
// console.log("🚀 ~ tags:", tags);

// function createArrayOfNumbers(min, max) {
//   const total = [];
//   for (let i = min; i <= max; i += 1) {
//     total.push(i);
//   }
//   return total;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));
// console.log(createArrayOfNumbers());

// const planets = ["Earth", "Mars", "Venus"];
// for (let I = 0; I < planets.length; I++) {
//   console.log(planets[I]);
// }

// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (let i = 0; i < order.length; i++) {
//     sum += order[i];
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function getEvenNumbers(start, end) {
//   let sum = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       sum.push(i);
//     }
//   }
//   return sum;
// }
// console.log(getEvenNumbers(2, 5));
// console.log(getEvenNumbers(3, 11));
// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(8, 8));
// console.log(getEvenNumbers(7, 7));

// const planets = ["Earth", "Mars", "Venus"];
// console.log(planets.includes("Earth"));
// console.log(planets.includes("Mars"));
// console.log(planets.includes("Venus"));
// console.log(planets.includes("Jupiter"));

// const fruits = ["apple", "banana", "orange"];
// if (fruits.includes("banana")) {
//   console.log("The array has an element banana");
// } else {
//   console.log("Array does not contaun banana element");
// }

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     return `${item.toLowerCase()} is available to order!`;
//   } else {
//     return `Sorry! We are out of stock!`;
//   }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"));

// **Функція getCommonElements(array1, array2), приймає два масиви
// * (array1 та array2) довільної довжини в якості параметрів.
// * Доповни код функції:
// * Створи порожній масив для зберігання нового масиву.
// * Використай цикл for для ітерації кожного елемента у array1.
// * У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// * Якщо він існує, то додай елемент до нового масиву.
// * Поверни наповнений масив спільних елементів як результат роботи функції.
// */
// // Цикл FOR...OF
// // function getCommonElements(array1, array2) {
// //   let total = [];
// //   for (let i of array1) {
// //     if (array2.includes(i)) {
// //       total.push(i);
// //     }
// //   }
// //   return total;
// // }
// // Цикл FOR
// function getCommonElements(array1, array2) {
//   let total = [];

//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       total.push(array1[i]);
//     }
//   }

//   return total;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); //[2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //[1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //[12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); //[10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));//[]

//** Доповни код функції calculateTotalPrice(order) так,
// * щоб вона повертала загальну суму чисел в масиві order.
// * Використай цикл for...of для перебору масиву.
// */
// function calculateTotalPrice(order) {
//   let sum = 0;
//   for (const element of order) {
//     sum += element;
//   }
//   return sum;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));//138
// console.log(calculateTotalPrice([164, 48, 291]));//503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));//1116

//** Функція createReversedArray() може приймати довільну кількість аргументів.
// * Доповни код функції так, щоб вона повертала масив усіх аргументів,
// * але в масиві вони повинні йти у зворотному порядку. Тобто,
// * при виклику createReversedArray(1, 2, 3), функція має повернути масив [3, 2, 1].
// * Використовуй цикл або метод масиву toReversed(),
// * який застосовується до масиву і результатом роботи
// * повертає новий масив з елементами у зворотньому порядку.
// */

// function createReversedArray() {
//   let args = Array.from(arguments);
//   let total = args.toReversed();
//   return total;
// }

// console.log(createReversedArray(12, 85, 37, 4)); //[4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291)); //[291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176)); //[176, 63, 94, 371, 412]
// console.log(createReversedArray()); //[]

//**
// * Функція calculateTax(amount, taxRate) оголошує два параметри:
// * amount - число, сума від якої потрібно обчислити податок.
// * Обов'язковий параметр.
// * taxRate - число, податкова ставка. Необов'язковий параметр.
// * За замовчуванням його значення має бути 0.2.
// * Доповни код функції так, щоб вона повертала суму податку -
// * результат множення суми на податкову ставку.
//*/
// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100, 0.1)); //10
// console.log(calculateTax(200, 0.1)); //20
// console.log(calculateTax(100, 0.2)); //20
// console.log(calculateTax(200, 0.2)); //40
// console.log(calculateTax(100, 0.3)); //30
// console.log(calculateTax(200, 0.3)); //60
// console.log(calculateTax(100)); //20
// console.log(calculateTax(200)); //40

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const aptRating = apartment.rating;
// console.log("🚀 ~ aptRating:", aptRating);
// const aptDescr = apartment.descr;
// console.log("🚀 ~ aptDescr:", aptDescr);
// const aptPrice = apartment["price"];
// console.log("🚀 ~ aptPrice:", aptPrice);
// const aptTags = apartment["tags"];
// console.log("🚀 ~ aptTags:", aptTags);
// const aptTags1 = apartment.tags[0];
// console.log("🚀 ~ aptTags1:", aptTags1);
// const aptTags2 = apartment.tags[2];
// console.log("🚀 ~ aptTags2:", aptTags2);

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
// };
// console.log("🚀 ~ credentials:", credentials);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості з таким ключем
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];
// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const total = Object.keys(book);
// console.log("🚀 ~ total:", total);
// // console.log("🚀 ~ keys:", keys);

// const book = {
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);

// for (const key of keys) {
//   console.log(key); // Ключ
//   console.log(book[key]); // Значення властивості
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
// }

// function countProps(object) {
//   return Object.keys(object).length;
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// /**
//  * Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries)
//  * в якості параметра. Кожна властивість об'єкта salaries — це ключ,
//  * що містить ім'я співробітника, та значення - його відповідна зарплатня.
//  * Доповни код функції countTotalSalary(salaries) так,
//  * щоб вона повертала загальну суму зарплат всіх співробітників.
//  */

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   for (const element of Object.values(salaries)) {
//     totalSalary += element;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400

// /**
//  * Масив colors містить колекцію кольорів. Кожен колір представлений об'єктом і
//  * має властивості hex і rgb з відповідними для цього формату і кольору значеннями.
//  * Перебери масив об'єктів colors, використовуючи цикл for...of.
//  * Додай у масив hexColors значення властивостей hex, а в масив rgbColors -
//  * значення властивостей rgb з усіх об'єктів масиву colors.
//  */

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }

// console.log("🚀 ~ hexColors:", hexColors);
// console.log("🚀 ~ rgbColors:", rgbColors);

// /**
//  * Функція getProductPrice(productName) приймає один параметр productName -
//  * назва продукту. Функція містить масив об'єктів products з такими властивостями,
//  * як name — ім'я товару, price — ціна і quantity — кількість.
//  * Доповни код функції так, щоб вона шукала об'єкт продукту з певним ім'ям
//  * (властивість name) в масиві products і повертала його ціну (властивість price).
//  * Якщо продукт з такою назвою не знайдений, функція повинна повертати null.
//  */
// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
// }
// console.log(getProductPrice("Radar")); //1300
// console.log(getProductPrice("Grip")); //1200
// console.log(getProductPrice("Scanner")); //2700
// console.log(getProductPrice("Droid")); //400
// console.log(getProductPrice("Engine")); //null

// /**
//  * Напиши функцію getAllPropValues(propName), яка приймає один параметр propName -
//  * ім'я (ключ) властивості. Функція повинна повернути масив усіх значень
//  * властивості з таким ім'ям з кожного об'єкта в масиві products.
//  * Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути
//  * порожній масив.
//  */
// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   const total = [];

//   for (const product of products) {
//     if (product[propName] !== undefined) {
//       total.push(product[propName]);
//     }
//   }
//   return total;
// }

// console.log(getAllPropValues("name")); //["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); //[4, 3, 7, 9]
// console.log(getAllPropValues("price")); //[1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); //[]

// /**
//  * Функція calculateTotalPrice(productName) приймає один параметр productName-
//  * назва товару. Функція містить масив об'єктів products з такими властивостями,
//  * як name — ім'я товару, price — ціна і quantity — кількість.
//  * Доповни код функції так, щоб вона повертала загальну вартість (ціна * кількість)
//  * товару з таким ім'ям з масиву products.
//  * Якщо продукту з такою назвою немає, то функція повинна повертати рядок
//  * "Product <productName> not found!" , де <productName> — це ім'я товару. */

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }
// console.log(calculateTotalPrice("Blaster")); //"Product Blaster not found!"
// console.log(calculateTotalPrice("Radar")); //5200
// console.log(calculateTotalPrice("Droid")); //2800
// console.log(calculateTotalPrice("Grip")); //10800
// console.log(calculateTotalPrice("Scanner")); //8100

// /**
//  * До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму
//  * для ведення інвентарю. Програма має додавати, видаляти,
//  * шукати та оновлювати зілля.
//  * Оголоси об'єкт atTheOldToad з наступними властивостями:
//  * potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
//  * getPotions() — метод, який повертає рядок "List of all available potions"
//  * addPotion(potionName) — метод, який повертає рядок "Adding <potionName>",
//  * де potionName — це значення параметра potionName */

// const atTheOldToad = {
//   potions: [],
//   getPotions() {
//     return `List of all available potions`;
//   },

//   addPotion(potionName) {
//     return `Adding ${potionName}`;
//   },
// };
// console.log(atTheOldToad.getPotions()); //"List of all available potions"
// console.log(atTheOldToad.addPotion("Invisibility")); //"Adding Invisibility"
// console.log(atTheOldToad.addPotion("Power potion")); //"Adding Power potion"

// /**
//  * Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною.
//  * Тому зараз у властивості potions буде зберігатися масив об'єктів
//  * з властивостями name та price.
//  * Об'єкт atTheOldToad має наступні властивості:
//  * potions — масив рядків, з назвами зілль
//  * getPotions() — метод, який повертає значення властивості potions
//  * addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion
//  * і додає його в кінець масиву у властивості potions.
//  * Додай метод getTotalPrice(), який має повертати загальну вартість
//  * усіх зілль з властивості potions.
//  */

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let sum = 0;
//     for (let potion of this.potions) {
//       sum += potion.price;
//     }
//     return sum;
//   },
// };
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.getTotalPrice());
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.getTotalPrice());

// /**
//  * Об'єкт atTheOldToad має наступні властивості:
//  * potions — масив об'єктів зілль
//  * getPotions() — метод, який повертає значення властивості potions
//  * updatePotionName() — метод, який приймає два параметра рядків oldName і newName
//  * Доповни метод updatePotionName(oldName, newName) таким чином,
//  * щоб він оновлював назву зілля з oldName на newName в масиві
//  * зілля у властивості potions.
//  */

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
//     for (let potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };

// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility"));

// console.log(atTheOldToad.updatePotionName("Speed potion", "Polymorth"));
// console.log(atTheOldToad.getPotions());

// /**
//  * Використовуючи синтаксис залишкових параметрів, доповни код функції add() так,
//  * щоб вона приймала будь-яку кількість аргументів у параметр args і
//  * повертала їхню суму.
//  */
// function add(...args) {
//   let sum = 0;
//   for (const element of args) {
//     sum += element;
//   }
//   return sum;
// }
// console.log(add(15, 27)); //42
// console.log(add(12, 4, 11, 48)); //75
// console.log(add(32, 6, 13, 19, 8)); //78

// /**
//  * Функція addOverNum() приймає довільну кількість аргументів чисел.
//  * Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів,
//  * які більші за задане число. Це число завжди буде передано першим аргументом.
//  * Для вирішення цього завдання тобі потрібно зробити наступне:
//  * Перший параметр value повинен представляти задане число, а решта аргументів
//  * повинні бути зібрані за допомогою синтаксису (...args)
//  * Усередині функції ініціалізуй змінну для зберігання загальної суми
//  * Потім пройдись по кожному аргументу за допомогою циклу
//  * Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його
//  * до загальної суми
//  * На завершення поверни загальну суму
//  */

// function addOverNum(value, ...args) {
//   let total = 0;
//   for (const element of args) {
//     if (element > value) {
//       total += element;
//     }
//   }
//   return total;
// }
// console.log(addOverNum(50, 15, 27)); //0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); //71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); //51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); //218

// /**
//  * Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.
//  * Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:
//  * Властивість best має містити найбільше число з масиву scores
//  * Властивість worst має містити найменше число з масиву scores.
//  * Використовуй оператор (...spread) і методи Math.max() і Math.min()
//  */

// function getExtremeScores(scores) {
//   const best = Math.max(...scores);
//   const worst = Math.min(...scores);
//   return { best, worst };
// }
// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); //{ best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24])); //{ best: 81, worst: 4 }

// /**
//  * Функція makeMessage приймає один параметр ім'я піци, що доставляється,
//  * pizzaName та повертає рядок з повідомленням клієнту.
//  * Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром
//  * (параметр callback) колбек-функцію і повертала результат її виклику.
//  * Функції deliverPizza або makePizza будуть передаватися як колбек для makeMessage і очікувати
//  * аргументом ім'я готової піци, що доставляється.
//  */
// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }
// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

// /**
//  * Функція makePizza має два параметри: pizzaName - ім'я піци та callback - колбек-функцію.
//  * Під час виконання, makePizza викликає цей колбек, передаючи йому pizzaName як аргумент.
//  * Доповни другий виклик функції makePizza(pizzaName, callback),
//  * передавши другим аргументом інлайн колбек-функцію eatPizza(pizzaName).
//  * Колбек eatPizza логує рядок "Eating pizza <назва піци>", де <назва піци> це значення параметра pizzaName
//  * */

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }
// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// /**
//  * Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
//  * і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і
//  * повертається як результат роботи функції.
//  * Доповни виклик метода forEach, передавши йому колбек-функцію, яка на кожній ітерації додає до
//  * totalPrice значення поточного елемента масива orderedItems.
//  */
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (index, orderedItems) {
//     totalPrice += index;
//   });
//   return totalPrice;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// /** */
//  * Функція filterArray(numbers, value) приймає першим параметром масив чисел numbers і повертає новий масив,
//  * в якому будуть тільки ті елементи оригінального масиву, які більші за значення другого параметра числа value.
//  * Якщо таких значень не буде знайдено, функція повертає порожній масив.
//  * Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach
//  */
// function filterArray(numbers, value) {
//   const total = [];
//   numbers.forEach(function (number) {
//     if (number > value) {
//       total.push(number);
//     }
//   });
//   return total;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
// const getUserEmails = users => users.map(user => user.email);
// console.log(getUserEmails(users));

// /**
//  * У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.
//  * Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця,
//  * і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame.
//  * Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime)
//  * на кількість ігор (властивість gamesPlayed).
//  */
// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + player.playtime / player.gamesPlayed;
// }, 0);
// console.log("🚀 ~ totalAveragePlaytimePerGame:", totalAveragePlaytimePerGame);

// /**
//  * Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
//  * Доповни код таким чином, щоб:
//  * У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
//  * У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
//  * У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
//  * У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
//  */
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((firstAutor, secondAutor) =>
//   firstAutor.author.localeCompare(secondAutor.author)
// );

// const sortedByReversedAuthorName = books.toSorted((firstAutor, secondAutor) =>
//   secondAutor.author.localeCompare(firstAutor.author)
// );

// const sortedByAscendingRating = books.toSorted(
//   (firstRating, secondRating) => firstRating.rating - secondRating.rating
// );

// const sortedByDescentingRating = books.toSorted(
//   (firstRating, secondRating) => secondRating.rating - firstRating.rating
// );

// console.log("🚀 ~ sortedByAuthorName:", sortedByAuthorName);
// console.log("🚀 ~ sortedByReversedAuthorName:", sortedByReversedAuthorName);
// console.log("🚀 ~ sortedByAscendingRating:", sortedByAscendingRating);
// console.log("🚀 ~ sortedByDescentingRating:", sortedByDescentingRating);

// /**
//  * Масив books містить масив об'єктів книг, кожен з яких містить властивості title, author, rating.
//  * Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
//  * рейтинг книг яких більший за значення змінної MIN_BOOK_RATING. Використовуй ланцюжок методів.
//  */
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Tell-Tale Heart",
//     author: "Edgar Allan Poe",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// const names = books
//   .filter(book => book.rating >= MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((firstAutor, secondAutor) => firstAutor.localeCompare(secondAutor));

// console.log("🚀 ~ names:", names);

// /**
//  * Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.
//  */
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(parent.hasOwnProperty("surname"));
// console.log(child.name);
// console.log(child.surname);

// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User("Mango", "mango@mail.com");
// console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

// const poly = new User("Poly", "poly@mail.com");
// console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }

// /**
//  * Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice зі значенням число 50000 -
//  * максимально допустима ціна автомобіля.
//  * Додай сеттеру price перевірку значення параметра newPrice, що передається.
//  * Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.
//  */
// class Car {
//   static maxPrice = 50000;
//   #price;

//   constructor(params) {
//     this.#price = params.price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.maxPrice) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// /**
//  * Додай класу Car публічний статичний метод checkPrice(price),
//  * що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.
//  * Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
//  * В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits"
//  */
// class Car {
//   static #maxPrice = 50000;
//   static checkPrice(price) {
//     if (price > Car.#maxPrice) {
//       return `Error! Price exceeds the maximum`;
//     }
//     return `Success! Price is within acceptable limits`;
//   }
//   constructor(params) {
//     this.price = params.price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

// /**
//  * Додай класу Admin метод constructor, який приймає один параметр params- об'єкт налаштувань
//  * з двома властивостями email і access. Додай класу Admin публічну властивість access,
//  * значення якої буде передаватися під час виклику конструктора.
//  */
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//   }
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// /**
//  * Додай класу Admin наступні властивості і методи.
//  * Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів.
//  * Значення за замовчуванням — це порожній масив.
//  * Публічний метод blacklist(email) для додавання пошти у чорний список.
//  * Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
//  * Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.
//  * Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails,
//  * і повертати true або false.
//  */
// class User {
//   #email;

//   constructor(email) {
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//     this.blacklistedEmails = [];
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// /**
//  * Module 7 DOM
//  */
// const element = document.querySelector(".list-item");
// console.log("🚀 ~ element:", element);
// const listItem = document.querySelectorAll(".list-item");
// console.log("🚀 ~ listItem:", listItem);

// const listWithClass = document.querySelector(".menu");
// console.log("🚀 ~ listWithClass:", listWithClass);

// const menuItemsByTagName = document.querySelectorAll("li");
// console.log("🚀 ~ menuItemsByTagName:", menuItemsByTagName);

// const menuItemsByTagClass = document.querySelectorAll(".menu-item");
// console.log("🚀 ~ menuItemsByTagClass:", menuItemsByTagClass);

// const firstMenuItem = document.querySelector(".menu-item");
// firstMenuItem.style.color = "tomato";
// console.log("🚀 ~ firstMenuItem:", firstMenuItem);

// const link = document.querySelector(".link");
// console.log(link.href);
// link.href = "https://neo.goit.global";
// console.log(link.href);

// const imageOne = document.querySelector(".imageOne");
// console.log(imageOne.src);
// console.log(imageOne.alt);

// imageOne.src = "https://picsum.photos/id/13/640/480";
// imageOne.alt = "River bank";
// console.log(imageOne.src);
// console.log(imageOne.alt);

// const el = document.querySelector(".text");
// const nested = document.querySelector(".sub-text");
// console.log(el.textContent);
// console.log(nested.textContent);
// el.textContent = "Username: Poly";
// console.log(el.textContent);

// // const textEl = document.querySelector(".article-text");
// // console.log(textEl.textContent);
// const titleEl = document.querySelector(".article-title");
// titleEl.textContent = "Welcome to Bahamas!";
// console.log(titleEl.textContent);

// const link = document.querySelector(".link");
// console.log(link.classList);

// // const hasActiveClass = link.classList.contains("is-active");
// const hasActiveClass = link.classList.contains("title");
// console.log("🚀 ~ hasActiveClass:", hasActiveClass);
// link.classList.add("special");
// console.log(link.classList);

// link.classList.remove("is-active");
// console.log(link.classList);

// link.classList.toggle("is-active");
// console.log(link.classList);

// link.classList.replace("special", "regular");
// console.log(link.classList);

// const button = document.querySelector(".btn");

// button.style.backgroundColor = "teal";
// button.style.fontSize = "24px";
// button.style.textAlign = "center";
// console.log(button.style);

// const imageTwo = document.querySelector(".imageTwo");
// console.log(imageTwo.hasAttribute("src"));
// console.log(imageTwo.hasAttribute("href"));
// console.log(imageTwo.getAttribute("alt"));

// imageTwo.setAttribute("alt", "Amazing nature");
// console.log(imageTwo.getAttribute("alt"));

// imageTwo.removeAttribute("alt");
// console.log(imageTwo.hasAttribute("alt"));

// const imageFree = document.querySelector(".imageFree");
// console.log(imageFree.attributes);

// console.log(imageFree.hasAttribute("src"));
// console.log(imageFree.getAttribute("alt"));
// imageFree.setAttribute("alt", "Amazing nature");
// console.log(imageFree.getAttribute("alt"));

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action);
// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action);

// saveBtn.dataset.action = "update";
// saveBtn.dataset.role = "admin";
// console.log(saveBtn.dataset.action);
// console.log(saveBtn.dataset.role);

// const heading = document.createElement("h1");
// heading.classList.add("title");
// heading.textContent = "This is a heading";
// console.log(heading);
// const image = document.createElement("img");
// image.src = "https://picsum.photos/id/11/320/240";
// image.alt = "Nature";
// console.log(image);

// const list = document.querySelector(".usernames");
// const lastItem = document.createElement("li");
// lastItem.textContent = "Poly";
// list.append(lastItem);

// const firstItem = document.createElement("li");
// firstItem.textContent = "Ajax";
// list.prepend(firstItem);

// const text = document.querySelector(".text");
// console.log(text.textContent);
// text.remove();

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// title.innerHTML = 'New and <span class="accent">improved</span> title';
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map(technology => `<li class="list-item">${technology}</li>`)
//   .join("");
// console.log(markup);
// list.innerHTML = markup;

// const list = document.querySelector(".list");
// const newTechnologies = ["React", "TypeScript", "Node.js"];
// const markup = newTechnologies
//   .map(technology => `<li class="list-item new">${technology}</li>`)
//   .join("");
// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("afterend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");

// const button = document.querySelector(".my-button");

// const handleClock = () => {
//   console.log("The button was pressed and now the next image will appear");
// };
// button.addEventListener("click", handleClock);

// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };
// singleBtn.addEventListener("click", handleClick);
// //====================================================
// const multiBtn = document.querySelector("#multiple");
// const firstCallback = () => {
//   console.log("first callback!");
// };
// const secondCallback = () => {
//   console.log("Second callback!");
// };
// const thirdCallback = () => {
//   console.log("Third callback!");
// };

// multiBtn.addEventListener("click", firstCallback);
// multiBtn.addEventListener("click", secondCallback);
// multiBtn.addEventListener("click", thirdCallback);

// const addListenerBtn = document.querySelector(".js-add");
// const removeListenerBtn = document.querySelector(".js-remove");
// const btn = document.querySelector(".target-btn");

// const handleClick = () => {
//   console.log("click event listener callback");
// };
// addListenerBtn.addEventListener("click", () => {
//   btn.addEventListener("click", handleClick);
//   console.log("click event listener was added to btn");
// });

// removeListenerBtn.addEventListener("click", () => {
//   btn.removeEventListener("click", handleClick);
//   console.log("click event listener was removed from btn");
// });

// const button = document.querySelector(".btnn");
// const handleClick = event => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };
// button.addEventListener("click", handleClick);

// document.addEventListener("keydown", event => {
//   console.log("Keydown: ", event);
// });
// document.addEventListener("keyup", event => {
//   console.log("Keyup: ", event);
// });

//=======================================================
// const clearLogBtn = document.querySelector(".js-clear");
// const logList = document.querySelector(".log-list");

// let keypressCounter = 1;

// console.log(clearLogBtn);

// document.addEventListener("keydown", logMessage);
// document.addEventListener("keyup", logMessage);
// clearLogBtn.addEventListener("click", reset);

// function logMessage({ type, key, code }) {
//   const markup = `<div class="log-item">
//   <span class="chip">${keypressCounter}</span>
//   <ul>
//   <li><b>Event</b>: ${type}</li>
//   <li><b>Key</b>: ${key}</li>
//   <li><b>Code</b>: ${code}</li>
//   </ul>
//   </div>`;

//   logList.insertAdjacentHTML("afterbegin", markup);
//   if (type === "keyup") {
//     incrementKeypressCounter();
//   }
// }
// function reset() {
//   keypressCounter = 1;
//   logList.innerHTML = "";
// }

// function incrementKeypressCounter() {
//   keypressCounter += 1;
// }
//=======================================
