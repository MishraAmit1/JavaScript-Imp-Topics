// ECMAScript 2019(ES10) Features List
// Array Methods:

// Array.prototype.flat()
// Array.prototype.flatMap()
// Object Methods:

// Object.fromEntries()
// String Methods:

// String.prototype.trimStart()
// String.prototype.trimEnd()
// Optional catch Binding

// Symbol.description Property

// Well - formed JSON.stringify()

// Stable Array.sort()


// 1. Array flat() and flatMap()
// Kya hai?

// flat(): Multi-dimensional arrays ko flatten (single-dimensional) karne ke liye.
// flatMap(): Mapping aur flattening ek saath karne ke liye.
// Example:

// flat():

const numbers = [1, [2, 3], [4, [5, 6]]];
console.log(numbers.flat(1)); // [1, 2, 3, 4, [5, 6]]
console.log(numbers.flat(2)); // [1, 2, 3, 4, 5, 6]
console.log(numbers.flat(Infinity)); //  same output as above but flat all array [1, 2, 3, 4, 5, 6]


// flatMap():
const phrases = ["hello world", "javascript rocks"];
const result = phrases.flatMap(phrase => phrase.split(" "));
console.log(result); // ["hello", "world", "javascript", "rocks"]

// Q: Kyu useful hai?

// Nested arrays ke saath kaam karna asaan banata hai.
// flatMap() memory aur time bachata hai, kyunki mapping aur flattening ek step mein hota hai.

// 2. Object.fromEntries()
// Kya hai?

// Arrays ko objects mein convert karne ke liye.
// Object.entries() ka reverse.
// Example:


const entries = [["name", "Amit"], ["age", 25], ["city", "Delhi"]];
const obj = Object.fromEntries(entries);
console.log(obj);
// { name: "Amit", age: 25, city: "Delhi" }

// Q: Kyu useful hai?

// Data transformation ke liye, jaise key-value pairs ko objects mein badalna.


// 3. String trimStart() and trimEnd()
// Kya hai?

// Strings ke start ya end se whitespaces ko remove karna.
// Example:

const message = "   Hello JavaScript!   ";
console.log(message.trimStart()); // "Hello JavaScript!   "
console.log(message.trimEnd());   // "   Hello JavaScript!"

// Q: Kyu useful hai?

// Jab sirf leading ya trailing spaces ko remove karna ho.


// 4. Optional catch Binding
// Kya hai?

// catch block mein error variable optional ho gaya.
// Example:
try {
    JSON.parse("invalid JSON");
} catch {
    console.log("Something went wrong!");
}


// Q: Kyu useful hai?

// Jab error variable ki zarurat na ho, toh cleaner code likhne ke liye.


// 6. Well-formed JSON.stringify()
// Kya hai?

// JSON.stringify ab invalid Unicode characters ko handle kar leta hai.
// Example:

const invalidUnicode = "\uD800";
console.log(JSON.stringify(invalidUnicode)); // '"\\ud800"'


// Q: Kyu useful hai ?

//     Data serialization zyada reliable ban gayi.



// 7. Stable Array.sort()
// Kya hai?

// Array.sort() ab stable sorting ensure karta hai, matlab identical elements original order mein rahenge.

const items = [{ id: 1, value: 20 }, { id: 2, value: 10 }];
items.sort((a, b) => a.value - b.value);
console.log(items); // [ { id: 2, value: 10 }, { id: 1, value: 20 } ]

// Q: Kyu useful hai?

// Sorting algorithms mein reliability ensure karna.











