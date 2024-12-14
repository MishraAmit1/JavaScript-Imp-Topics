//! 2015 (ES6): JavaScript ka Sabse Bada Upgrade


// let and const (Block - scoped variables)
// Arrow Functions(=> )
// Template Literals
// Default Parameters
// Destructuring(Array and Object)
// Classes
// Promises
// Modules(import/export)
// Spread Operator(...)
// Rest Operator(...)
// Enhanced Object Literals
// Map and Set(New Data Structures)
// WeakMap and WeakSet
// Symbol(Primitive Data Type)
// Iterators and Generators
// Block - Scoped Functions
// for...of Loop
// Object.assign()
// New Methods for Strings and Numbers
// Proxy and Reflect Objects
// Promise.all() and Promise.race()



// 1. let and const ❓
// Kya hai?
// let aur const ne var ko replace kiya, kyunki var ka function-scoped hone ki wajah se bugs aate the.
// let block-scoped hai, aur const immutable (constant) values ke liye hai.

// Example:
if (true) {
    let x = 10;
    const y = 20;
    console.log(x, y);
}
// console.log(x, y); // ReferenceError: x is not defined

// Q: var kyu avoid karna chahiye?

// var function-scoped hota hai, toh block ke bahar bhi accessible rehta hai, jo unexpected behavior cause karta hai.


// 2. Arrow Functions (=>) ❓

// Concise syntax for functions, aur this ka scope lexical hota hai.

// Example:

// Normal function
const add = function (a, b) {
    return a + b;
};

// Arrow function
const addArrow = (a, b) => a + b;

console.log(add(5, 3)); // 8
console.log(addArrow(5, 3)); // 8

// Arrow functions me this kaise behave karta hai?

// Arrow functions ka this parent scope se inherit hota hai.

const obj = {
    name: "Amit",
    greet: () => console.log(this.name),
};
obj.greet(); // Undefined (arrow function ka `this` global scope ka hoga)


// 3. Template Literals ❓
// Kya hai?
// Backticks (``) ki wajah se strings dynamic aur readable ho gaye.

// Example:
const name = "Amit";
const age = 26;

const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);
// Output: My name is Amit and I am 26 years old.



// 4. Default Parameters ❓
// Kya hai?
// Functions ke parameters ke liye default value assign kar sakte ho.

// Example:

const greet = (name = "Guest") => `Hello, ${name}!`;
console.log(greet()); // Hello, Guest!
console.log(greet("Amit")); // Hello, Amit!

// 5. Destructuring
// Kya hai?
// Arrays aur objects se data extract karne ka easy tareeka.

// Example:
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1, 2, 3

const obj = { name: "Amit", age: 26 };
const { name, age } = obj;
console.log(name, age); // Amit, 26



// 6. Promises ❓
// Kya hai?
// Asynchronous operations ko handle karna easy bana.

// Example:

const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched!"), 2000);
});

fetchData
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

//  Q: Promises kyu useful hain?

// Callback hell se bachate hain aur asynchronous tasks ko chain karna easy banate hain.

// 7. Modules (import/export)
// Kya hai?
// Ek file se doosri file mein code import/export karne ka system.

// Example:

// utils.js
export const add = (a, b) => a + b;

// main.js
import { add } from "./utils.js";
console.log(add(2, 3)); // 5


// 8. Spread and Rest Operators (...)
// Kya hai?
// Arrays aur objects ko expand/collapse karne ka shorthand.

// Example:.

// Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Rest
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);
console.log(sum(1, 2, 3)); // 6














