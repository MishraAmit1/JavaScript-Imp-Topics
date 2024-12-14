// 1. Asynchronous Iteration(for await...of)
// Kya hai ?

//     Async iterables ko handle karne ke liye ek naya loop for await...of introduce kiya gaya.
// Asynchronous data streams, jaise APIs ya file streams, ke liye kaam aata hai.
//     Example:


async function fetchData() {
    const urls = ["url1", "url2", "url3"];
    const promises = urls.map(url => fetch(url));

    for await (const response of promises) {
        console.log(await response.text());
    }
}

fetchData();


// Q: Pehle kaise karte the ?

//     Promises ke saath.then() aur.catch() use karte the, jo zyada complex lagta tha.
// 2. Object Rest / Spread Properties
// Kya hai ?

//     Objects ke andar se properties ko extract karna ya combine karna aur bhi easy ho gaya.
// Spread operator(...) objects ke liye extend kiya gaya.
//     Example:

// Rest Properties:


const student = { name: "Amit", age: 22, city: "Delhi" };
const { name, ...rest } = student;
console.log(name); // "Amit"
console.log(rest); // { age: 22, city: "Delhi" }
// Spread Properties:


const studentDetails = { ...student, country: "India" };
console.log(studentDetails);
// { name: "Amit", age: 22, city: "Delhi", country: "India" }

// Q: Kyu useful hai ?

//     Cleaner aur readable code likhne mein madad karta hai.
// Immutable objects banane ke liye bhi helpful hai.
// 3. Promise.prototype.finally()
// Kya hai ?

//     Promise chain ke end mein ek finally() method add kiya gaya jo chahe promise resolve ho ya reject, hamesha execute hota hai.
//         Example:


fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error))
    .finally(() => console.log("Cleanup complete"));

//     Q: Kyu useful hai ?

//     Cleanup operations jaise loaders hide karne ya resources release karne ke liye helpful hai.
// Pehle kaise karte the ?

// .then() aur.catch() ke andar manually cleanup karte the, jo repetitive lagta tha.

// 4. Regular Expression Enhancements
// RegEx(Regular Expressions) ke saath kaam karna aur powerful aur user - friendly ho gaya:

// Lookbehind Assertions((?<=) and(?< !)):

// Positive Lookbehind:

const regex = /(?<=\$)\d+/;
console.log("$100".match(regex)); // ["100"]

// Negative Lookbehind:

const regex = /(?<!\$)\d+/;
console.log("100".match(regex)); // ["100"]

// Unicode Property Escapes(\p{}):

// Unicode characters ko match karne ke liye.

const regex = /\p{Script=Hiragana}/u;
console.log("あ".match(regex)); // ["あ"]
s(DotAll) Flag in RegEx:

// Dot(.) ab newline characters(\n) ko bhi match karta hai.

const regex = /foo.bar/s;
console.log("foo\nbar".match(regex)); // ["foo\nbar"]
// 2018 Features ke Use -case:
// Asynchronous Iteration:
// APIs ya streams ko asynchronous tarike se process karne ke liye.
//     Rest / Spread Properties:
// Data manipulation aur immutable objects ke liye.
// finally():
// Resource cleanup ya UI ke state ko reset karne ke liye.
// RegEx Enhancements:
// Text processing tasks aur complex patterns match karne ke liye.






const sum = (...numbers) => {
    return numbers.reduce((accum, arr) => accum = accum + arr, 0);
}
console.log(sum(1, 2, 3, 4));
