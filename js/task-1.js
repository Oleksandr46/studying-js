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

function canUseChat(isOnline, isBlocked) {
  const canChat = isOnline && !isBlocked;
  if (canChat) {
    return `Can type in chat!`;
  } else {
    return `Blocked from typing in chat!`;
  }
}
console.log(canUseChat(true, false)); // "Can type in chat!"
console.log(canUseChat(false, false)); // "Blocked from typing in chat!"
console.log(canUseChat(true, true)); // "Blocked from typing in chat!"
