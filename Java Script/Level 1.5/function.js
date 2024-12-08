// Functions in JavaScript
// A function is a set of statements that perform a task or calculate a value.

// Function Declaration (Function Statement)
// A function can be declared using the 'function' keyword, followed by the function name, parameters (optional), and the function body.
// Syntax: 
// function functionName(parameter1, parameter2, ...) {
//     // Function body
//     return value; // (Optional) returns a value from the function
// }
// Example: A function that adds two numbers.

function add(a, b) {
    return a + b;
}

console.log(add(5, 10)); // Output: 15


// Function Expression
// A function can also be assigned to a variable. This is known as a function expression.
// Syntax: 
// const functionName = function(parameter1, parameter2, ...) {
//     // Function body
//     return value; // (Optional) returns a value from the function
// }
// Example: A function expression that subtracts two numbers.

const subtract = function(a, b) {
    return a - b;
}

console.log(subtract(10, 3)); // Output: 7


// Arrow Functions (ES6+)
// Arrow functions are a shorter syntax for writing functions and do not have their own 'this' context.
// Syntax: 
// const functionName = (parameter1, parameter2, ...) => {
//     // Function body
//     return value; // (Optional) returns a value from the function
// }
// Example: An arrow function that multiplies two numbers.

const multiply = (a, b) => a * b;

console.log(multiply(4, 3)); // Output: 12


// Function Parameters and Arguments
// Functions can take parameters, which are placeholders for values passed to the function.
// Arguments are the actual values passed into the function.
// Example: A function that greets a user with their name.

function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!


// Default Parameters
// Functions can have default values for parameters in case no argument is passed.
// Syntax: 
// function functionName(parameter1 = defaultValue, parameter2 = defaultValue) { ... }
// Example: A function that multiplies two numbers with a default value of 1 for the second number.

function multiplyWithDefault(a, b = 1) {
    return a * b;
}

console.log(multiplyWithDefault(5)); // Output: 5 (5 * 1)
console.log(multiplyWithDefault(5, 3)); // Output: 15 (5 * 3)


// Return Statement
// The 'return' statement ends the execution of the function and optionally returns a value.
// If no return value is specified, the function returns 'undefined' by default.
// Example: A function that returns the square of a number.

function square(num) {
    return num * num;
}

console.log(square(4)); // Output: 16


// Function Scope
// Functions have their own local scope, meaning variables defined inside a function are not accessible outside of it.
// Example: A function with a local variable.

function localScope() {
    let x = 10;
    console.log(x); // Output: 10
}

localScope();
// console.log(x); // Error: x is not defined outside the function
