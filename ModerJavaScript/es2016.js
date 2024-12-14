// 1. Array .includes() Method ❓
// Kya hai?
// Array ke andar ek value exist karti hai ya nahi, yeh check karna .includes() se easy ho gaya. Pehle hum indexOf() ka use karte the, jo thoda verbose aur less readable tha.

// Example:
const fruits = ["apple", "banana", "mango"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape")); // false

// Q: Pehle kaise karte the ?

// .indexOf() ka use karte the:

console.log(fruits.indexOf("banana") !== -1); // true
console.log(fruits.indexOf("grape") !== -1); // false

// Q: Kyu better hai ?

// .includes() ka syntax zyada readable hai aur NaN values ke liye better kaam karta hai.


// 2. Exponentiation Operator(**)❓
// Kya hai ?
// Exponents ko calculate karne ka shorthand syntax, jo Math.pow() ko replace karta hai.

// Example:

console.log(2 ** 3); // 8 (2 raised to the power of 3)
console.log(5 ** 2); // 25
Q: Pehle kaise karte the ?
    Math.pow() ka use karte the:

console.log(Math.pow(2, 3)); // 8
// Q: Kyu better hai ?

// Shorter aur cleaner syntax, especially jab exponents ko chain karna ho:

console.log(2 ** 3 ** 2); // 512


// 2016 ke features ke use - cases:
.includes()

// Aapko quickly check karna hai ki koi element array mein hai ya nahi.
// Example:

const shoppingList = ["milk", "bread", "butter"];
if (shoppingList.includes("milk")) {
    console.log("Milk is already in the list!");
}

// ** operator:

// Math - related operations, jaise kisi number ka square ya cube nikalna:

const radius = 3;
const area = Math.PI * radius ** 2;
console.log(area); // 28.274333882308138