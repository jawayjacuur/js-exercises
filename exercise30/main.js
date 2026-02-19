function operate(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
function mult(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}


console.log("Addition:", operate(5, 3, add));        
console.log("Subtraction:", operate(5, 3, subtract)); 

console.log("multiply:", operate(5, 3, mult));    
console.log("divide:", operate(9, 3, divide));    


