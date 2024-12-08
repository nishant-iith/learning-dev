// Async Functions vs Sync Functions

/**
 * What does Synchronous mean?
 * - It means tasks happen one after another, in order. Only one task is being done at a time, sequentially.
 * 
 * What does Asynchronous mean?
 * - It is the opposite of synchronous. Tasks happen in parts and can run simultaneously. JavaScript switches between tasks quickly.
 * 
 * Let's build some intuition:
 * 
 * Human brain and body are single-threaded:
 * 1. We can only focus on one thing at a time.
 * 2. But, we can switch our focus between tasks or delegate tasks to others.
 * 
 * Similarly, JavaScript is single-threaded:
 * 1. It can switch between tasks.
 * 2. It can also assign tasks to other functions (like using `setTimeout` or asynchronous operations).
 */

// Until now we have seen only synchronous functions
// Example:
function findsum(n){
    let ans = 0;
    for(let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}
// console.log(findsum(100));

// Asynchronous function -> setTimeout

function givesum(){
    console.log(findsum(100));
}

// setTimeout makes the givesum function run after 1 second (1000 milliseconds)

// setTimeout(givesum, 1000);
// console.log("Hello, world!");

// The output would be "Hello, world!" first, and after 1 second, the sum will be printed

// can we make this synchronous -> yes, we can keep the thread busy for 1 sec and then it will go on

// More asynchronous functions in javascript: 
// fs.readFile -> to read a file from your file system
// Fetch -> to fetch data from an API endpoint 

const fs = require("fs");

// filesystem module to read file contents

fs.readFile("a.txt", "utf-8", function(err, data){
    if (err) {
        console.error("Error reading file", err);
        return;
    }
    console.log(data);
});

console.log("Hello world!");

