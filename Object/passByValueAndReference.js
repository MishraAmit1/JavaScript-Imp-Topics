// Pass by Value 
let a = [1, 2, 3, 4, 5];
var b = [...a];
b.pop();
console.log(b); console.log(a);



// second example of Pass by value
function PassByValue(a) {
    return a + 2; // this value will be change because it pass its copy to init
}

let num = 10 // this is the original value
console.log(PassByValue(num));
console.log(num); // original value is not changing


// Pass by reference 
let a = [1, 2, 3, 4, 5];
var b = a;
b.pop(); console.log(b); console.log(a);


// to avoid this behavior and create a true copy of the object you can use methods like Object.assign() or the spread Operator(...);
const obj = { id: 1, name: "Amit Jha" };

let newObj = Object.assign({}, obj);
newObj.name = "Amit Mishra";
console.log(obj);
console.log(newObj);



// second example of Pass by Reference
function modifyArray(arr) {
    arr.push(4); // This changes the original array 
}
let myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray); // Output: [1, 2, 3, 4] 


// Two object are equal only if they refer to same object 

const obj1 = { name: "xyz" };
const obj2 = { name: "xyz" };

const isEqual = obj1 == obj2 ? true : false // output will be false even it have same key value but the memory allocation is different 
// if u want to compare then u have to compare with references

const obj3 = obj1;
const isEqual = obj1 == obj3 ? true : false // now the output will be true 
console.log(isEqual);


