// 1. String.prototype.replaceAll()
// Kya hai?

// String ke sabhi matching substrings ko replace karne ke liye.
// Example:

const text = "hello world, world!";
const newText = text.replaceAll("world", "universe");
console.log(newText); // "hello universe, universe!"


// 7. New Array Methods
// a. Array.prototype.at()
// Kya hai?

// Array index ko access karne ka naya tarika, negative indexing support karta hai.
// Example:


const arr = [10, 20, 30, 40];
console.log(arr.at(1));  // 20 (1st index)
console.log(arr.at(-1)); // 40 (last element)


// Example (String):
const str = "JavaScript";
console.log(str.at(4));   // S
console.log(str.at(-1));  // t (last character)
