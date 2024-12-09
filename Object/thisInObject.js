// 1.	In an object method. this refers to the object.
// 2.	Alone, this refers to the global object.
// 3.	In a function, this refers to the global object.
// 4.	In a function. in strict mode, this is undefined.
// 5.	In an event, this refers to the element that received the event.
// 6.	Methods like call(), apply(), and bind() can refer this to any object.


// 1
// const bioData = {
//     id: "A12345", // to use we have to put them into a [] bracket
//     myName: "Amit Mishra",
//     age: 23,
//     getData() {
//         console.log(`This data is for ${this.myName} or ${bioData.myName}`);
// yha par jo this use hua hai wo iss bioData object tk hee simit hai
//     },
// }
// bioData.getData();


// 2
// console.log(this);


// 3
// const bioData = {
//     id: "A12345", // to use we have to put them into a [] bracket
//     myName: "Amit Mishra",
//     age: 23,
//     greet: () => {
//         console.log(`This data is for ${this.myName} or ${bioData.myName}`);
//         // yha par jo this use hua hai wo iss bioData object tk hee simit hai
//         // lekin ab wo arrow function waje se undefined aaraha hai
//     },
// }
// bioData.greet();

// 4
// const bioData = {
//     id: "A12345", // to use we have to put them into a [] bracket
//     myName: "Amit Mishra",
//     age: 23,
//     getData: () => {
//         console.log(this); // yha par this jo hai wo window ko lega kuki hai fat arrow function use ho rha hai
//         if we use normal function then this will represent the bioData object
//     },
// }
// bioData.getData();
