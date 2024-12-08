// Array Handbook

// Array Methods: forEach(), map(), filter(), reduce(), find(), sort()

// Sample array to work with
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// Using forEach()
const arr2 = [];
function fun(num) {
    arr2.push(num * 2); // Multiply each element by 2 and push to arr2
}
arr.forEach(fun);
console.log("Using forEach(), arr2: ", arr2);

// Using map()
// Map creates a new array by applying a function to each element
const mappedArray = arr.map(num => num * 3); // Multiply each element by 3
console.log("Using map(): ", mappedArray);

// Using filter()
// Filter creates a new array with elements that pass a condition
const filteredArray = arr.filter(num => num % 2 === 0); // Get even numbers
console.log("Using filter(): ", filteredArray);

// Using reduce()
// Reduce applies a function to each element and reduces the array to a single value
const sum = arr.reduce((acc, num) => acc + num, 0); // Calculate the sum of all elements
console.log("Using reduce() - Sum of array: ", sum);

// Using find()
// Find returns the first element that satisfies a condition
const firstEven = arr.find(num => num % 2 === 0); // Find the first even number
console.log("Using find(): First even number is ", firstEven);

// Using sort()
// Sort modifies the original array and sorts elements. Can be customized with a comparator.
const unsortedArray = [10, 5, 3, 12, 7, 1];
unsortedArray.sort((a, b) => a - b); // Sort in ascending order
console.log("Using sort(): ", unsortedArray);

// Extra Example: Chaining methods
// Find the square of even numbers and sum them
const sumOfSquaresOfEvens = arr
    .filter(num => num % 2 === 0) // Get even numbers
    .map(num => num ** 2) // Square them
    .reduce((acc, num) => acc + num, 0); // Sum the squares
console.log("Sum of squares of even numbers: ", sumOfSquaresOfEvens);
