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
const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,8900555663377,89005566300";

function showContacts(names, phones) {
  let title = " #    | Contact | Phone \n";
  const nameArray = names.split(",");
  const phoneArray = phones.split(",");

  for (let i = 0; i < nameArray.length; i += 1) {
    const name = nameArray[i];
    const phone = phoneArray[i];
    title += `☎️ ${i + 1} | ${name} | ${phone}\n`;
  }
  return title;
}
const res2 = showContacts(names, phones);
console.log(res2);

// **
//  * Напиши скрипт який виводить у консоль усі слова рядка
//  * крім першого іостаннього. Результуючий рядок не повинен починатися
//  * або закінчуватися сомволом пробілу.
//  * Скрипт повинен працювати для будь-якого рядка.
//  */
const string = "Welcome to the future";

//  **
//  * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
//  * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
//  */
