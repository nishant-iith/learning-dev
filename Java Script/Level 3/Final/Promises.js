// Promise is the "eventual" completion of task. It is an object in JS
// It is a solution to callback hell

// Resole and reject are callbacks provided by JavaScript

// let promise = new Promise((resolve, reject) => {} )
// let promise = new Promise((resolve, reject) => {
//     console.log("I'm a promise !")
// })

// Three states of promise 
/**
 * Pending 
 * Fulfilled [resolved]
 * Rejected [rejected]
*/

let promise = new Promise((resolve, reject) => {
    console.log("I'm a promise !")
    resolve("Success!")
})
