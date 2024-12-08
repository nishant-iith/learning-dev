// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

var arr = [1, 2, 3];
console.log("Original array : " + arr);

// push function 
arr = [1, 2, 3];
arr.push(4);
console.log("Original array after push : " + arr);

// pop
arr = [1, 2, 3];
arr.pop();
console.log("Original array pops the last element : " + arr);

// shift function
arr = [1, 2, 3];
arr.shift();
console.log("Original array after shifting last element : " + arr);

// unshift function 
arr = [1, 2, 3];
arr.unshift(0);
console.log("Original array after unshift (adding something in front) : " + arr);

// splice 
arr = [1, 2, 3];
console.log("Original array after splice : " + arr.splice(1,2));


// console.log("Original array : " + arr);
// console.log("Original array : " + arr);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// concatinating arrays
console.log("After concatinating arrays : " + arr1 + " and " + arr2 + " = " + arr1.concat(arr2));

