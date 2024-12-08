// Call Stack, Web App, and Callback Queue in JavaScript

/**
 * 1. **Call Stack**:
 *    - It is a data structure that keeps track of function calls in JavaScript.
 *    - When a function is called, it is pushed to the top of the stack. When the function finishes execution, it is popped off.
 *    - JavaScript is single-threaded, meaning only one task is executed at a time in the call stack.
 *    - If a function calls another function, the calling function is paused and pushed to the stack until the called function is completed.
 *
 * Example:
 * 
 * function first() {
 *   console.log("First function");
 *   second(); // Call second function
 * }
 * 
 * function second() {
 *   console.log("Second function");
 * }
 * 
 * first(); // Starts the function calls
 *
 * **Output**:
 * First function
 * Second function
 *
 * **Process**:
 * - first() is pushed to the stack.
 * - Then second() is called and pushed on top of the stack.
 * - When second() finishes, it's popped off, and then first() finishes and is popped off.
 */

/**
 * 2. **Web App**:
 *    - A web app is a program that runs in a browser and interacts with users.
 *    - In JavaScript, a web app is primarily based on asynchronous operations and event-driven programming.
 *    - JavaScript interacts with the **Browser API** (which includes setTimeout, DOM manipulation, etc.) and **callback queue** to handle tasks without blocking the UI.
 *    - It keeps the app responsive while performing tasks like fetching data, timers, etc.
 *    - The Web App works in combination with the **Event Loop** and **Callback Queue**.
 *
 * Example: A web app might have functions to load content from a server, update the DOM, or respond to user interactions, all while keeping the page responsive.
 */

/**
 * 3. **Callback Queue**:
 *    - The Callback Queue (or Event Queue) is a queue where **callback functions** are placed when an asynchronous operation is completed.
 *    - After JavaScript finishes executing the current code in the call stack, it checks the callback queue to see if there are any pending tasks that need to be executed.
 *    - Callbacks are executed in the order they are placed in the queue, but only once the call stack is empty.
 *    - Asynchronous functions like `setTimeout`, `fetch`, or events like user clicks are examples of tasks that push their callbacks to the callback queue.
 *
 * Example:
 *
 * console.log("Start");
 * setTimeout(() => {
 *   console.log("This is inside setTimeout");
 * }, 2000); // This function will be executed after 2 seconds
 * console.log("End");
 *
 * **Output**:
 * Start
 * End
 * This is inside setTimeout
 *
 * **Process**:
 * - "Start" is logged first.
 * - The `setTimeout` callback is placed in the callback queue after 2 seconds.
 * - The event loop waits for the call stack to finish, and then the callback in the queue is executed.
 */

/**
 * **Event Loop**:
 *    - The event loop constantly checks if the call stack is empty.
 *    - If the call stack is empty and there are functions in the callback queue, it moves the functions from the callback queue to the call stack for execution.
 *    - It ensures that asynchronous operations do not block the main thread, allowing the web app to remain responsive.
 * 
 * The Event Loop and the Callback Queue are key in handling asynchronous tasks in JavaScript, allowing multiple operations to run without blocking the main thread.
 */

// Example code showing the interaction between call stack, callback queue, and event loop:

console.log("Start");

setTimeout(() => {
    console.log("Inside setTimeout callback");
}, 2000); // Callback added to the callback queue

console.log("End");

// After "Start" and "End" are logged, the setTimeout callback is executed after 2 seconds.


// Use -> https://latentflip.com/loupe/ for visualization
// and run the below code to understand how it works

console.log("Start");

setTimeout(function (){
    console.log("Inside setTimeout callback");
}, 7000); // Callback added to the callback queue

for(let i = 0; i < 5 ; i++){
    console.log(i);
}

console.log("End");