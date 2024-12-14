
function calculation(a, b, operation) {  // here operation is HOF 
    return operation(a, b)
}


function operation(a, b) { // This function is callback function
    return a + b;
}


console.log(calculation(5, 10, operation));
