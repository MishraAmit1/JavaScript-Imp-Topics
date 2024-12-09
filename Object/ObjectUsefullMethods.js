const product = {
   id: 1,
   name: "Laptop",
   category: "Computers",
   brand: "Dell",
   price: 99999,
   stock: 40,
   description: `lorem const product id : 1, name:"Laptop
    category:"Computers",
    brand:"Dell",
    price:99999,
    stock:40,
    description:"lorem`
}
// 1
console.log(Object.keys(product));

// 2
console.log(Object.values(product));

// 3
// it will return an array containing array of key value pairs for each enumerable own property of an object
let entries = Object.entries(product);
console.log(entries);


// 4
// if u want to know if object have the particular key or not
console.log(product.hasOwnProperty("name"));


// 5
// Object.assign() // Copies the values of enumerable own properties from one or source object to target a object
// wala pehele hee use kar chuke hain
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

// const mergedObject = Object.assign({},target,source);
console.log(mergedObject);

// 6
//  Object. freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.
Object.freeze(product);
product.id = 123456789;
console.log(product);

// 7
// 5. Object.freeze() and Object.seal()
// Object.freeze():  Makes the object immutable.
// Object.seal(): Allows modification of existing properties but prevents adding or deleting properties.
const person = { name: "Amit" };
Object.freeze(person);
person.name = "Aditya"; // No effect
console.log(person.name); // Output: Amit



// Q1.Explain the difference between Object.create() and { }.
// { } creates an object with Object.prototype.
// Object.create() allows you to create an object with a specific prototype or no prototype.
// Q2.How do you merge two objects in JavaScript ?
//    Answer :

//    Using the spread operator:

let obj1 = { a: 1 };
let obj2 = { b: 2 };
let merged = { ...obj1, ...obj2 };
// Using Object.assign:

// let merged = Object.assign({}, obj1, obj2);
// Q3.How do you freeze or seal an object ?
// Answer :
// Object.freeze: Makes an object immutable (no adding, deleting, or changing).
// Object.seal: Prevents adding or deleting properties but allows modifying existing ones.

let obj = { a: 1 };
Object.freeze(obj);
obj.a = 2; // Does nothing


// Given an object representing a student write a function to add a new subject with its corresponding grade to the students record Also check if the grades property is present or not ?
// Function to add a subject and grade

const addSubject = (student, subject, marks) => {
   if (!student.grades) {
      student.grades = {};
   }
   console.log(student.grades[subject] = marks);
   return student;

}
// Example Usage
const student = {
   name: "Amit Mishra",
   age: 20,
   grades: {
      Math: "A",
      Science: "B+"
   }
};

// Add a new subject
const updatedStudent = addSubject(student, "English", "A+");
console.log(updatedStudent);



// write a function that compares two objects to determine if they have same properties and values

let objA = { name: "Alice", age: 26, city: " New York" };
let objB = { name: "Alice", age: 26, city: " New York" };
let objC = { name: "Bob", age: 28, city: "India" };


function areObjectsEqual(obj1, obj2) {
   const keys1 = Object.keys(obj1);
   const keys2 = Object.keys(obj2);
   if (keys1.length !== keys2.length) {
      return false;
   }


   for (const key of keys1) {
      if (obj1[key] !== obj2[key]) {
         return false;
      }
   }
   return true;

}
// console.log(areObjectsEqual(objA,objB));
console.log(areObjectsEqual(objA, objB));



// write a function that transforms an array of an objects into an object where the keys are the objects  ids


function arrayToObject(objArr) {

   let newObj = {}
   for (const obj of objArr) {
      newObj[obj.id] = obj;
   }
   return newObj;

}
let inputArray = [
   { id: 1, name: "Alice" },
   { id: 2, name: "Charlie" },
   { id: 3, name: "Bob" },
];

console.log(arrayToObject(inputArray));


