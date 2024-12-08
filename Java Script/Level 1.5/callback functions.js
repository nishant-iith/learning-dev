// Callback Functions in JavaScript

// A callback is a function passed into another function to be run later.
// They are useful for asynchronous code, like waiting for a task to finish before running another.


function cube(a){
    return Math.pow(a,3);
}

function square(a){
    return Math.pow(a,2);
}

function specialsum(a,b,fn){
    console.log(fn)
    const val1 = fn(a)
    const val2 = fn(b)
    return val1 + val2
}

console.log("The special sum is : " +specialsum(1,3,square))


// Example 1: Using setTimeout (a built-in function) to run a callback after some time
// we can pass function directly without name and it will work even if we give name it doesn't effect much

setTimeout(function() {
    console.log("This is printed after 2 seconds!");
}, 2000); // 2000 milliseconds = 2 seconds


// Example 2: Using forEach (an array method) with a callback
const numbers = [1, 2, 3, 4, 5];

// forEach will call the function for each item in the array
numbers.forEach(function(num) {
    console.log(num * 2); // Prints 2, 4, 6, 8, 10
});


// Example 3: Passing a callback into a function
function greet(name, callback) {
    console.log("Hello, " + name);
    callback(); // Call the callback function
}

function sayGoodbye() {
    console.log("Goodbye!");
}

// Call greet with the sayGoodbye function as the callback
greet("Alice", sayGoodbye);
// Output:
// Hello, Alice
// Goodbye!


// Example 4: Using a callback in an async task (like downloading a file)
function downloadFile(fileName, callback) {
    console.log("Downloading " + fileName + "...");
    setTimeout(function() {
        console.log(fileName + " downloaded!");
        callback(); // Call the callback when done
    }, 3000); // Simulates downloading for 3 seconds
}

// After downloading, show a message
downloadFile("image.jpg", function() {
    console.log("Now you can open the file!");
});
// Output:
// Downloading image.jpg...
// image.jpg downloaded!
// Now you can open the file!


// Example 5: Callback with error handling
function fetchData(callback) {
    let error = false;
    if (error) {
        callback("Error: Data not found", null);
    } else {
        callback(null, "Data fetched successfully");
    }
}

fetchData(function(error, data) {
    if (error) {
        console.log(error); // If there is an error
    } else {
        console.log(data); // If data is fetched successfully
    }
});
// Output: Data fetched successfully
