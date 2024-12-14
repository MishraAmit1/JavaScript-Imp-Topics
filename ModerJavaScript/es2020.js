// 1. Nullish Coalescing Operator (??)
// Kya hai?

// ?? operator null (null) ya undefined (undefined) ke liye check karta hai.
// Agar value null ya undefined hai, to default value le lo; warna original value return karo.
// Example:.


const name = null;
const defaultName = "amit";
const result = name ?? defaultName;
console.log(result); // "Amit"

// Q: Difference with || (OR)?

// || falsy values (e.g., 0, false, "") ko bhi consider karta hai.
// ?? sirf null aur undefined ke liye kaam karta hai.


const score = 0;
console.log(score || 50); // 50 (OR treats 0 as falsy)
console.log(score ?? 50); // 0 (Nullish checks only null/undefined)



// 2. Optional Chaining (?.)
// Kya hai?

// Nested properties access karte waqt agar property exist nahi karti, to error throw karne ke bajaye undefined return karta hai.
// Example:

const user = { profile: { name: "Amit" } };
console.log(user?.profile?.name); // "Amit"
console.log(user?.profile?.age);  // undefined (no error)
// Q: Kyu useful hai?

// Nested objects handle karte waqt errors avoid karta hai.




// 3. Dynamic import()
// Kya hai?

// JavaScript modules ko runtime mein asynchronously load karne ke liye.
// Example:


const loadUtils = async () => {
    const { sum } = await import('./utils.js');
    console.log(sum(5, 3)); // Output from dynamically imported module
};
loadUtils();

// Q: Kyu useful hai?

// Lazy loading aur performance optimization ke liye.


// 4. BigInt
// Kya hai?

// Integers ko handle karne ke liye jo Number type ke max safe value (2^53 - 1) se bade hote hain.
// Example:


const bigNumber = 9007199254740991n; // Add 'n' at the end
console.log(bigNumber + 1n); // 9007199254740992n
// Q: Kyu useful hai?

// High-precision calculations (e.g., cryptography, large datasets) ke liye.



// 5. Promise.allSettled()
// Kya hai?

// Multiple promises ka result return karta hai, chahe wo resolved ho ya rejected.
// Example:

const promises = [
    Promise.resolve("Success"),
    Promise.reject("Error"),
    Promise.resolve("Another success")
];

Promise.allSettled(promises).then(results => console.log(results));
// Output:
// [
//   { status: "fulfilled", value: "Success" },
//   { status: "rejected", reason: "Error" },
//   { status: "fulfilled", value: "Another success" }
// ]
// Q: Kyu useful hai?

// Jab humein saare promises ka status check karna ho, chahe kuch fail ho jayein.

// 8. for-in Order Stability
// Kya hai?

// Object properties ko iterate karte waqt, integer keys ascending order mein rahenge.
// Example:

const obj = { 100: "a", 2: "b", 7: "c" };
for (const key in obj) {
    console.log(key);
}







