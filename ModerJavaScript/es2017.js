// 1. Async/Await ❓
// Kya hai?
// Async/Await promises ke upar ek abstraction hai jo asynchronous code ko synchronous jaisa readable banata hai.

// Example:


const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

// fetchData();
// Q: Pehle kaise karte the?

// Pehle .then() aur .catch() ka use hota tha:

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));


//     Q: Kyu better hai?

// Readable aur maintainable code likhne mein madad karta hai.
// try...catch block ke through errors handle karna easy hota hai.


// 2. Object.entries() and Object.values() ❓
// Kya hai?
// Objects ke andar ki keys aur values ko easily iterate karne ke liye methods provide karta hai.

// Example:

// Object.entries(): Keys aur values ka array of arrays return karta hai.


const student = { name: "Amit", age: 22, city: "Delhi" };
console.log(Object.entries(student));
// [["name", "Amit"], ["age", 22], ["city", "Delhi"]]
// Object.values(): Sirf values ka array return karta hai.


console.log(Object.values(student));
// ["Amit", 22, "Delhi"]

// Q: Pehle kaise karte the ?

// for...in loop ka use hota tha, jo zyada verbose tha:

for (let key in student) {
    console.log(key, student[key]);
}

// Q: Kyu better hai ?

//     Short aur direct syntax provide karta hai.


// 3. String Padding(padStart() and padEnd()) ❓
// Kya hai ?
//     Strings ko specific length tak pad karne ke liye methods introduce kiye gaye.

//         Example:


const id = "123";
console.log(id.padStart(6, "0")); // "000123"
console.log(id.padEnd(6, "*")); // "123***"

// Q: Use -case kya hai ?

//     Uniform formatting ke liye useful hai, jaise invoice numbers ya dates.


// 4. Object.getOwnPropertyDescriptors()
// Kya hai ?
//     Ek object ke properties ke descriptors(jaise writable, configurable, enumerable) access karne ke liye use hota hai.

//         Example:


const user = { name: "Amit", age: 22 };
const descriptors = Object.getOwnPropertyDescriptors(user);
console.log(descriptors);
Output:

// {
//     name: { value: "Amit", writable: true, enumerable: true, configurable: true },
//     age: { value: 22, writable: true, enumerable: true, configurable: true }
// }
// Q: Kyu useful hai ?

//     Jab aapko ek object ke property attributes ko inspect ya copy karna ho.





// 5. Trailing Commas in Function Parameters ❓
// Kya hai ?
//     Functions ke parameter lists mein trailing commas allow kar diye gaye.Yeh readability aur diff checking ke liye useful hai.

//         Example:


function sum(a, b, c,) {
    return a + b + c;
}
console.log(sum(1, 2, 3)); // 6
// Q: Kyu useful hai ?

// Jab multiple parameters ho aur ek parameter ko add / remove karna ho, tab commas handle karna easy hota hai.



// 2017 ke Features ka Use -case:
// Async / Await:
// APIs ke saath asynchronous requests ko handle karne mein.
// Example: Fetching data from a server.
// Object.entries() / Object.values():
// Objects ko iterate karte waqt.
// String Padding:
// Formatted strings(jaise IDs ya dates) create karte waqt.
// Property Descriptors:
// Libraries aur frameworks ke low - level operations mein kaam aata hai.
// Trailing Commas:
// Code maintainability improve karta hai.