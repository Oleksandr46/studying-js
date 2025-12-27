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

const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
};
console.log("🚀 ~ credentials:", credentials);
