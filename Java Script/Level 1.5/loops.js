// Loops in JavaScript

// 1. For Loop
// Runs a block of code a specific number of times.
for (let i = 0; i < 5; i++) {
    console.log(`for loop iteration: ${i}`);
}

// 2. While Loop
// Repeats code as long as a condition is true.
let count = 0;
while (count < 5) {
    console.log(`while loop iteration: ${count}`);
    count++;
}

// 3. Do...While Loop
// Runs code once, then repeats as long as a condition is true.
let num = 0;
do {
    console.log(`do...while iteration: ${num}`);
    num++;
} while (num < 5);

// 4. For...Of Loop
// Iterates over iterable objects like arrays, strings, maps, etc.
const arr = [10, 20, 30, 40];
for (const value of arr) {
    console.log(`for...of value: ${value}`);
}

const str = "hello";
for (const char of str) {
    console.log(`for...of character: ${char}`);
}

// 5. For...In Loop
// Iterates over the keys (properties) of an object.
const obj = { name: "Nishant", age: 20, city: "Hyderabad" };
for (const key in obj) {
    console.log(`for...in key: ${key}, value: ${obj[key]}`);
}

// 6. Break and Continue Statements
// Break exits the loop completely, Continue skips to the next iteration.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking at 5");
        break;
    }
    if (i % 2 === 0) {
        continue; // Skips even numbers
    }
    console.log(`Odd number: ${i}`);
}

// 7. forEach Method
// Executes a provided function once for each array element.
const numbers = [1, 2, 3, 4];
numbers.forEach((value, index) => {
    console.log(`forEach index: ${index}, value: ${value}`);
});

// 8. Infinite Loop (Use with caution!)
// Runs indefinitely until manually stopped or a condition breaks it.
let counter = 0;
while (true) {
    console.log(`Infinite loop counter: ${counter}`);
    if (counter === 3) {
        break; // Break condition
    }
    counter++;
}

// 9. Looping through Arrays with Different Loops
const fruits = ["apple", "banana", "mango"];

// Using For Loop
for (let i = 0; i < fruits.length; i++) {
    console.log(`for loop fruit: ${fruits[i]}`);
}

// Using While Loop
let i = 0;
while (i < fruits.length) {
    console.log(`while loop fruit: ${fruits[i]}`);
    i++;
}

// Using For...Of Loop
for (const fruit of fruits) {
    console.log(`for...of fruit: ${fruit}`);
}

// Using forEach
fruits.forEach(fruit => console.log(`forEach fruit: ${fruit}`));


// Summary of Loops in JavaScript

// 1. For Loop
// A traditional loop used when the number of iterations is known or fixed.
// Syntax: for(initialization; condition; increment) { block of code }
// Example: Iterating over a set number of times.

// 2. While Loop
// A loop that continues to execute as long as a condition is true.
// Syntax: while(condition) { block of code }
// Example: When the number of iterations is not fixed and depends on a condition.

// 3. Do...While Loop
// Similar to while loop, but it ensures the block of code runs at least once.
// Syntax: do { block of code } while(condition);
// Example: Used when the loop should run at least once before checking the condition.

// 4. For...Of Loop
// Used for iterating over iterable objects (arrays, strings, etc.)
// Syntax: for (const value of iterable) { block of code }
// Example: Ideal for iterating over elements like arrays or strings directly.

// 5. For...In Loop
// Used for iterating over the keys (properties) of an object.
// Syntax: for (const key in object) { block of code }
// Example: Useful for accessing object properties by their keys.

// 6. Break and Continue Statements
// break: Exits the loop completely.
// continue: Skips the current iteration and moves to the next one.
// Example: Used to control the flow of loops more precisely.

// 7. forEach Method
// A higher-order function that executes a provided function once for each array element.
// Syntax: array.forEach((value, index) => { block of code });
// Example: Useful for array iteration without manual index tracking.

// 8. Infinite Loop
// A loop that runs indefinitely unless stopped by a break condition or an external intervention.
// Syntax: while(true) { block of code }
// Example: Should be used with caution to avoid unintentional infinite iterations.

// 9. Looping through Arrays with Different Loops
// Different loops can be used to iterate through arrays: for loop, while loop, for...of loop, and forEach method.
// Example: Choose the loop based on the use case, whether you need access to the index or values directly.
