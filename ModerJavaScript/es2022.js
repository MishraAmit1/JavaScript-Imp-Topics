// 2. Object.hasOwn()
// Kya hai?

// Object.prototype.hasOwnProperty ka ek safer aur cleaner alternative.
// Example:

const obj = { name: "Amit", age: 24 };
console.log(Object.hasOwn(obj, "name"));  // true
console.log(Object.hasOwn(obj, "city"));  // false

// Q: Kyu useful hai ?

//     Prototype chain issues ko avoid karta hai, cleaner syntax provide karta hai.


// Array and TypedArray Find from Last
// a. findLast()
// Kya hai?

// Array ke last element ko find karta hai jo condition satisfy kare.
// Example:

const arr = [5, 12, 8, 130, 44];
const result = arr.findLast(num => num > 10);
console.log(result); // 44



// b. findLastIndex()
// Kya hai?

// Last matching element ka index find karta hai.
// Example:

const arr = [5, 12, 8, 130, 44];
const index = arr.findLastIndex(num => num > 10);
console.log(index); // 4 (index of 44)
// Q: Kyu useful hai?

// Backward searching efficient banata hai


