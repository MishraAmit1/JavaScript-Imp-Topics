// 1. What is an Object Constructor ?
// An object constructor is a function (usually written with a capitalized name) that is used to initialize and define the properties and methods of an object.

Syntax:
function ConstructorName(parameters) {
    this.property1 = value1;
    this.property2 = value2;
    // Add more properties
    this.methodName = function () {
        // Define method
    };
}

// 2. Example of Object Constructor

function Person(name, age, state) {
    this.fullname = name;
    this.age = age;
    this.state = state;
}
// first we have to create a constructor for a new object
let person1 = new Person("Amit", 22, "Gujarat");
let person2 = new Person("Sumit", 21, "Pune");


person1.gender = "Male"; // this same way we can add  the values in 
person2.sayAge = function () {
    console.log(`I am ${this.age} years old.`);

}
console.log(person1);
console.log(person2);





