// ** HW-02 Задача 1. Замовлення дроїдів
// * Станція з продажу ремонтних дроїдів готова до запуску, залишилося написати
// * програмне забезпечення для відділу продажів.
// * Оголоси функцію makeTransaction(quantity, pricePerDroid, customerCredits),
// * яка складає та повертає повідомлення про купівлю ремонтних дроїдів.
// * Вона оголошує три параметри, значення яких будуть задаватися під час її виклику:
// * quantity — кількість замовлених дроїдів
// * pricePerDroid — ціна одного дроїда
// * customerCredits — сума коштів на рахунку клієнта
// * Доповни функцію таким чином:
// * Оголоси змінну для зберігання загальної суми замовлення
// * (загальна вартість усіх замовлених дроїдів) і задай їй вираз розрахунку цієї суми.
// * Додай перевірку, чи зможе клієнт оплатити замовлення:
// * якщо сума до сплати перевищує кількість кредитів на рахунку клієнта,
// * функція має повертати рядок "Insufficient funds!"
// * в іншому випадку функція має повертати рядок "You ordered <quantity>
// * droids worth <totalPrice> credits!", де <quantity> це кількість замовлених дроїдів,
// * а <totalPrice> це їх загальна вартість.
// */

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   let totalPrice = quantity * pricePerDroid;
//   if (totalPrice > customerCredits) {
//     return `Insufficient funds!`;
//   } else {
//     return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//   }
// }
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// ** HW-02 Задача 2. Форматування повідомлення
// *Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message)
// * та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).
// * Доповни код функції таким чином, що:
// * Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// * Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..."
// * в кінці та повертає обрізану версію. */

// function formatMessage(message, maxLength) {
//   if (message.length <= maxLength) {
//     return message;
//   } else {
//     return message.slice(0, maxLength) + "...";
//   }
// }
// console.log(formatMessage("Curabitur ligula sapien", 16)); // "Curabitur ligula..."
// console.log(formatMessage("Curabitur ligula sapien", 23)); // "Curabitur ligula sapien"
// console.log(formatMessage("Vestibulum facilisis purus nec", 20)); // "Vestibulum facilisis..."
// console.log(formatMessage("Vestibulum facilisis purus nec", 30)); // "Vestibulum facilisis purus nec"
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); // "Nunc sed turpis..."
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); // "Nunc sed turpis a felis in nunc fringilla"

// ** HW-02 Задача 3. Перевірка спаму
//  * Функція checkForSpam(message) приймає рядок (параметр message),
//  * перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки.
//  * Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.
//  * Доповни код функції таким чином, що:
//  * Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
//  * Якщо в рядку відсутні заборонені слова, функція повертає буль false
//  */

// function checkForSpam(message) {
//   return (
//     message.toLowerCase().includes("spam") ||
//     message.toLowerCase().includes("sale")
//   );
// }
// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("Amazing SalE, only tonight!")); // true
// console.log(checkForSpam("Trust me, this is not a spam message")); // true
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// ** HW-02 Задача 4. Доставка товару
//  * Оголоси функцію getShippingCost(country),
//  * яка повинна перевіряти можливість доставки товару в країну користувача (параметр country)
//  * і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.
//  * Формат рядка, що повертається "Shipping to <country> will cost <price> credits",
//  * де замість <country> і <price> необхідно підставити відповідні значення.
//  * Список країн і вартість доставки:
//  * China — 100 кредитів
//  * Chile — 250 кредитів
//  * Australia — 170 кредитів
//  * Jamaica — 120 кредитів
//  * Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку,
//  * то функція повинна повернути рядок "Sorry, there is no delivery to your country".
//  */

// function getShippingCost(country) {
//   let price;
//   switch (country) {
//     case "China":
//       price = 100;
//       break;
//     case "Chile":
//       price = 250;
//       break;
//     case "Australia":
//       price = 170;
//       break;
//     case "Jamaica":
//       price = 120;
//       break;
//     default:
//       return `Sorry, there is no delivery to your country`;
//   }
//   return `Shipping to ${country} will cost ${price} credits`;
// }
// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

// ** HW-03 Задача 1. Генератор slug
// * Напиши функцію slugify(title), яка приймає заголовок статті,
// * параметр title і повертає slug, створений із цього рядка.
// * Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
// * Усі символи slug повинні бути в нижньому регістрі.
// * Усі слова slug повинні бути розділені тире.
// * Візьми код нижче і встав після оголошення своєї функції для перевірки коректності
// * /її роботи. У консоль будуть виведені результати її роботи.

// function slugify(title) {
//   return title.trim().toLowerCase().split(" ").join("-");
// }
// console.log(slugify("  Arrays for beginners  ")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// ** HW-03 Задача 2. Композиція масивів
// * Напиши функцію під назвою makeArray, яка приймає три параметри:
// *  firstArray (масив), secondArray (масив) і maxLength (число).
// * Функція повинна створювати новий масив, який містить усі елементи з firstArray,
// * а потім усі елементи з secondArray.
// * Якщо кількість елементів у новому масиві перевищує maxLength,
// * функція повинна повернути копію масиву з довжиною maxLength елементів.
// * В іншому випадку функція повинна повернути весь новий масив.*/

// function makeArray(firstArray, secondArray, maxLength) {
//   const newArray = firstArray.concat(secondArray);
//   return newArray.slice(0, maxLength);
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// ** HW-03 Задача 3. Фільтрація масиву чисел
// * Напиши функцію filterArray(numbers, value), яка приймає масив чисел (numbers)
// * та значення (value) як параметри. Функція повинна повертати новий масив
// * лише тих чисел із масиву numbers, які більші за значення value.
// * Усередині функції:
// * Створи порожній масив, у який будеш додавати підходящі числа.
// * Використай цикл для ітерації кожного елемента масиву numbers.
// * Використовуй умовний оператор if усередині циклу для перевірки кожного елемента
// * и додавання до свого масиву.
// * Поверни свій новий масив з підходящими числами як результат.
//  */

// function filterArray(numbers, value) {
//   const total = [];
//   for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element > value) {
//       total.push(element);
//     }
//   }
//   return total;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// ** HW-04 Задача 1. Пакування товарів
// /**
//  * Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює,
//  * чи помістяться всі товари в контейнер при пакуванні.
//  * Функція оголошує два параметри:
//  * products — об’єкт, у якому ключі містять назви товарів, а їхні значення —
//  * кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
//  * containerSize — число, максимальна кількість одиниць товарів, яку в себе
//  * може вмістити контейнер.
//  * Функція має повернути результат перевірки, чи помістяться всі товари в контейнер.
//  * Тобто порахувати загальну кількість товарів в об’єкті products і повернути true,
//  * якщо вона менше або дорівнює containerSize, і false, якщо ні.
//  */
// function isEnoughCapacity(products, containerSize) {
//   const productValues = Object.values(products);
//   //   console.log("🚀 ~ productValues:", productValues);
//   let sum = 0;
//   for (const value of productValues) {
//     sum += value;
//     if (sum >= containerSize) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// ** HW-04  Задача 2. Розрахунок калорій
// /**
//  * Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення
//  * кількості калорій, які спортсмен споживав протягом тижня. Функція очікує один
//  * параметр: days — масив об’єктів. Кожен об’єкт описує день тижня та кількість
//  * калорій calories, спожитих спортсменом, у цей день.
//  * /

// function calcAverageCalories(days) {
//   const calculateValues = Object.values(days);
//   let sum = 0;
//   for (const value of calculateValues) {
//     sum += value.calories;
//   }
//   if (sum === 0) {
//     return 0;
//   }
//   return sum / calculateValues.length;
// }
// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 },
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 },
//   ])
// ); // 2270

// console.log(calcAverageCalories([])); // 0

//  ** HW-04 Задача 3. Профіль гравця
//  *
//  * Об’єкт profile описує профіль користувача на ігровій платформі.
//  * У його властивостях зберігається ім’я профілю username та кількість активних
//  * годин playTime, проведених у грі.
//    const profile = {
//       username: "Jacob",
//       playTime: 300,
//     };
//  * Доповни об’єкт profile методами для роботи з його властивостями.
//  * Метод changeUsername(newName) повинен приймати рядок (нове ім’я) в параметр newName
//  * та змінювати значення властивості username на нове. Нічого не повертає.
//  * Метод updatePlayTime(hours) повинен приймати число (кількість годин)
//  * у параметр hours та збільшити на нього значення властивості playTime.
//  * Нічого не повертає.
//  * Метод getInfo() має повертати рядок формату <Username> has <amount> active hours!,
//  * де <Username> — це ім’я профілю, а <amount> — кількість ігрових годин.
//  */

// const profile = {
//   username: "Jacob",
//   playTime: 300,
//   changeUsername(newName) {
//     this.username = newName;
//   },
//   updatePlayTime(hours) {
//     this.playTime += hours;
//   },

//   getInfo() {
//     return `${this.username} has ${this.playTime} active hours!`;
//   },
// };
// console.log(profile.getInfo()); // "Jacob has 300 active hours!"
// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"
// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// /**
//  * Пошук друга за іменем
//  */

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: false },
  { name: "Ajax", online: false },
];

// function firstFriendByName(allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       return friend;
//     }
//   }
//   console.log("Error!");

//   return `${friendName} is not found`;
// }
// console.log(firstFriendByName(friends, "Poly"));
// console.log(firstFriendByName(friends, "Chelsy"));

// /**
//  * Отримати імена всіх друзів
//  */

// function getAllNames(allFriends) {
//   const names = [];
//   for (let i = 0; i < allFriends.length; i++) {
//     const friend = allFriends[i];
//     console.log("🚀 ~ element:", friend.name);
//     names.push(friend.name);
//   }
//   return names;
// }
// console.log(getAllNames(friends));

// /**
//  * Отримуємо імена тільки тих друзів, які зараз онлайн
//  */

// function getOnlineFriends(allFriends) {
//   const friendsOnline = [];
//   for (const friend of allFriends) {
//     if (friend.online) {
//       friendsOnline.push(friend.name);
//     }
//   }
//   return friendsOnline;
// }
// console.log(getOnlineFriends(friends));

// /**
//  * Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та
//  * рядок з назвою каменю. Функція рахує і повертає загальну вариість з таким ім'ям, ціною та
//  * кількістю з об'єкта.
//  */

// const stones = [
//   { name: "Смарагд", price: 1300, quantity: 4 },
//   { name: "Діамант", price: 2700, quantity: 3 },
//   { name: "Сапфір", price: 400, quantity: 7 },
//   { name: "Щебінь", price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const stone of stones) {
//     if (stone.name === stoneName) {
//       const total = stone.price * stone.quantity;
//       return `Вартість каміння ${stone.name} складає ${total} y.o`;
//     }
//   }
//   return `В крамниці відсутнє каміння ${stoneName}`;
// }

// console.log(calcTotalPrice(stones, "Діамант"));
// console.log(calcTotalPrice(stones, "Діама"));

// const user = {
//   name: "Mango",
//   city: "Kyiv",
//   ...{
//     city: "Lviv",
//     Street: "Mazepy",
//     building: 10,
//   },
// };
// console.log("🚀 ~ user:", user);

// const registeredUser = {
//   nickname: "YK",
//   email: "exsample@gmail.com",
//   phone: "+38 099 123-45-67",
// };
// console.log("🚀 ~ registeredUser:", registeredUser);
// const updateProfile = {
//   nickname: "Ajax",
//   phone: "+38 077 123-45-67",
// };
// const updateInfo = {
//   ...registeredUser,
//   ...updateProfile,
// };
// console.log("🚀 ~ updateInfo:", updateInfo);

// /**
//  * HW-05 Задача 1. Імена користувачів
//  * Напиши стрілочну функцію getUserNames(users), яка прийматиме один параметр users — масив об’єктів користувачів.
//  * Функція має повертати масив імен усіх користувачів (властивість name) із масиву users.
//  * Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи.
//  * У консоль будуть виведені результати її викликів.
//  */
// const getUserNames = users => users.map(user => user.name);
// console.log(
//   getUserNames([
//     {
//       name: "Moore Hensley",
//       email: "moorehensley@indexia.com",
//       balance: 2811,
//     },
//     {
//       name: "Sharlene Bush",
//       email: "sharlenebush@tubesys.com",
//       balance: 3821,
//     },
//     {
//       name: "Ross Vazquez",
//       email: "rossvazquez@xinware.com",
//       balance: 3793,
//     },
//     {
//       name: "Elma Head",
//       email: "elmahead@omatom.com",
//       balance: 2278,
//     },
//     {
//       name: "Carey Barr",
//       email: "careybarr@nurali.com",
//       balance: 3951,
//     },
//     {
//       name: "Blackburn Dotson",
//       email: "blackburndotson@furnigeer.com",
//       balance: 1498,
//     },
//     {
//       name: "Sheree Anthony",
//       email: "shereeanthony@kog.com",
//       balance: 2764,
//     },
//   ])
// ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// /**
//  * HW-05 Задача 2. Користувачі з другом
//  * Напиши стрілочну функцію getUsersWithFriend(users, friendName) , яка прийматиме два параметра:
//  * перший параметр users — масив об’єктів користувачів
//  * другий параметр friendName — ім’я друга для пошуку.
//  * Функція має повертати масив усіх користувачів із масиву users, у яких є друг з іменем friendName.
//  * Друзі кожного користувача зберігаються у властивості friends. Якщо користувачів, у яких є такий друг немає,
//  * то функція має повернути порожній масив.
//  * Поради:
//  * Метод filter() можна використовувати для створення нового масиву з елементами, які задовольняють певну умову.
//  * Використовуй метод includes() для перевірки, чи масив friends містить friendName.
//  */

// const getUsersWithFriend = (users, friendName) =>
//   users.filter(user => user.friends.includes(friendName));
// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//   },
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// /**
//  * HW-05 Задача 3. Сортування за кількістю друзів
//  * Напиши стрілочну функцію sortByDescendingFriendCount(users) ,
//  * яка прийматиме один параметр users — масив об’єктів користувачів.
//  * Функція має повертати масив усіх користувачів,
//  * відсортованих за спаданням кількостій їх друзів (властивість friends).
//  */
// const sortByDescendingFriendCount = users =>
//   users.toSorted((a, b) => b.friends.length - a.friends.length);
// console.log(
//   sortByDescendingFriendCount([
//     {
//       name: "Moore Hensley",
//       friends: ["Sharron Pace"],
//       gender: "male",
//     },
//     {
//       name: "Sharlene Bush",
//       friends: ["Briana Decker", "Sharron Pace"],
//       gender: "female",
//     },
//     {
//       name: "Ross Vazquez",
//       friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//       gender: "male",
//     },
//     {
//       name: "Elma Head",
//       friends: ["Goldie Gentry", "Aisha Tran"],
//       gender: "female",
//     },
//     {
//       name: "Carey Barr",
//       friends: ["Jordan Sampson", "Eddie Strong"],
//       gender: "male",
//     },
//     {
//       name: "Blackburn Dotson",
//       friends: ["Jacklyn Lucas", "Linda Chapman"],
//       gender: "male",
//     },
//     {
//       name: "Sheree Anthony",
//       friends: ["Goldie Gentry", "Briana Decker"],
//       gender: "female",
//     },
//   ])
// );
// // [
// //   {
// //     name: "Ross Vazquez",
// //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Carey Barr",
// //     friends: ["Jordan Sampson", "Eddie Strong"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Blackburn Dotson",
// //     friends: ["Jacklyn Lucas", "Linda Chapman"],
// //     gender: "male"
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"],
// //     gender: "female"
// //   },
// //   {
// //     name: "Moore Hensley",
// //     friends: ["Sharron Pace"],
// //     gender: "male"
// //   }
// // ]

// /**
//  * HW-06 Задача 1. Акаунт користувача
//  * Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі.
//  * Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

//  * Використай цей стартовий код і виконай рефакторинг. Після оголошення об'єкта ми додали виклики методів.
//  * У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.
//  */
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// /**
//  * HW-06 Задача 2. Склад
//  * Створи клас Storage, який створюватиме об'єкти для управління складом товарів.
//  * Клас очікує лише один аргумент — початковий масив товарів,
//  * який записується до створеного об'єкта в приватну властивість items.
//  * Оголоси наступні методи класу:
//  * getItems() — повертає масив поточних товарів у приватній властивості items.
//  * addItem(newItem) — приймає новий товар newItem і додає його до масиву товарів у приватну властивість items об'єкта.
//  * removeItem(itemToRemove) — приймає рядок з назвою товару itemToRemove і
//  * видаляє його з масиву товарів у приватній властивості items об'єкта.
//  */

// class Storage {
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// /**
//  * HW-06 Задача 3. Конструктор рядків
//  * Напиши клас StringBuilder, який приймає один параметр initialValue — довільний рядок,
//  * який записується у приватну властивість value об'єкта, що створюється.
//  *
//  * Оголоси наступні методи класу:
//  * getValue() — повертає поточне значення приватної властивості value.
//  * padEnd(str) — отримує параметр str (рядок) і додає його в кінець значення приватної властивості value об'єкта,
//  * який викликає цей метод.
//  * padStart(str) — отримує параметр str (рядок) і додає його на початок значення приватної властивості value об'єкта,
//  * який викликає цей метод.
//  * padBoth(str) — отримує параметр str (рядок) і додає його на початок і в кінець значення приватної властивості value об'єкта,
//  * який викликає цей метод.
//  */

// class StringBuilder {
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.#value = str + this.#value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
