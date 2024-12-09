const bioData = {
    myName:"Amit Mishra",
    age:23,
    "is'Student":false, // using [] bracket we can access this key and use backTick or double quotes 
    getData(){
        console.log(`This data is for ${this.myName} or ${bioData.myName}`);
    },
    greet :function(){
        console.log(`This data is for ${this.age}`);
    }
}
bioData.greet() // This data is for 23
bioData.getData(); // This data is for Amit Mishra or Amit Mishra
console.log(bioData[`is'Student`]); // false

// if u have to add something in this object 
bioData.person = "amit"; 
console.log(bioData); // output will be same but this key value also

// u can access the object value with 2 methods
console.log(bioData.age); // use this method or below method
console.log(bioData["age"]); // 23
console.log(bioData['age']);// 23
console.log(bioData[`age`]); // same output for all 



// how to use dynamic type data in Object
// when to use -> when we want to get user name and value in react

let idType = "studentId"; // u have extra way to change the id suppose u can change it to collegeId or hospitalId like that
const bioData = {
    [idType] :"A12345", // to use we have to put them into a [] bracket
    myName:"Amit Mishra",
    age:23,
    "is'Student":false, // using [] bracket we can access this key and use backTick or double quotes 
    getData(){
        console.log(`This data is for ${this.myName} or ${bioData.myName}`);
    },
    greet :function(){
        console.log(`My ${idType} is ${bioData[idType]} and name is ${bioData.myName}`);
    }
}
bioData.greet();





