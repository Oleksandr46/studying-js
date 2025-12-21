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
