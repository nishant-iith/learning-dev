// Simple code without any promises

// Function to calculate the sum of numbers from 1 to n
function findsum(n) {
    let ans = 0; 
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    console.log(ans);
}
function findSumTill100() {
    findsum(100);
}

// setTimeout(findSumTill100, 1000); // Call findSumTill100 after 1 second (1000 milliseconds)
// console.log("Hello, world!");

// Explanation:
// The console will show "Hello, world!" first because setTimeout is asynchronous.
// It will then wait for 1 second and call the findSumTill100 function, 
// which in turn calls findsum(100) to calculate the sum of numbers from 1 to 100.
// The sum is printed after the delay.

// This code is "ugly" because it doesn't handle async behavior in a neat way, 
// which is where promises come in to make the code cleaner and easier to read.

// UGLY way: Using callback functions



// const fs = require("fs"); // Node.js module for interacting with the file system

// My own asynchronous function that reads a file
function Readfn(callback) {
    // fs.readFile is an asynchronous function that reads a file. It takes 3 arguments:
    // 1. The name of the file to read
    // 2. The encoding (utf-8 means it's reading as text)
    // 3. A callback function that gets called once the file reading is done

    fs.readFile("a.txt", "utf8", function(err, data) {
        // If there is an error reading the file, this code will handle it
        if (err) {
            console.log("Error reading file:", err); // Print the error
        } else {
            callback(data); // If no error, call the callback with the file content
        }
    });
}

// Callback function to handle the file data once it's read
function onDone(data) {
    console.log(data); // Print the content of the file
}

// Call the Readfn function and pass the onDone function as a callback

// Readfn(onDone);



// Explanation:
// - The function Readfn is a custom asynchronous function that reads a file and then calls a callback when done.
// - The callback function `onDone` is passed into Readfn and is responsible for handling the result (in this case, printing the file content).
// - The `fs.readFile` function is asynchronous, meaning it doesn't block the program from doing other things while it's reading the file.
// - Once the file is read, the callback function `onDone` is called with the file's data and it logs it to the console.
// - The error handling part (`if (err)`) ensures that if there's an issue reading the file (e.g., file doesn't exist), an error message is printed.


// Why this is considered "ugly":
// - While this is a working solution, it can get difficult to manage if you have multiple asynchronous operations, 
//   especially if you need to chain many callbacks together.
// - This can lead to "callback hell," where the code becomes deeply nested and hard to read and maintain.

// Asynchronous code is useful when you want to perform tasks like reading files, fetching data from the web, or waiting for user input 
// without freezing or blocking the program from doing other tasks in the meantime.


// Cleaner way -> Promises

const fs = require('fs');

// my own asynchronous function
function Readfn(){// does not accept any arguments
    console.log("Inside Readfn")
    return new Promise(function(resolve){
        console.log("Inside Promise")
        fs.readFile("a.txt", "utf8", function(err, data){
            console.log("Resolveing data")
            resolve(data);
        });
    })
}

// callback function to call
function onDone(data){
    console.log(data);
}

// Readfn().then(onDone);
// or 
var a = Readfn();
a.then(onDone);


// Explanation:
// - `Readfn` is an asynchronous function that returns a promise. Inside the promise, `fs.readFile` is used to read the file asynchronously.
// - If the file is read successfully, the promise is resolved with the file's data.
// - If there’s an error (e.g., the file doesn’t exist), the promise is rejected with the error.
// - The `then()` method is used to handle the promise resolution (i.e., when the promise is resolved with the data). It calls the `onDone` function.