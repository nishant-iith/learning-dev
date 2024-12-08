// Math function -> 
/**
 * Math.random() ->(method) Math.random(): number => Returns a pseudorandom number between 0 and 1.
 * Math.round() -> (method) Math.round(x: number): number => Returns a supplied numeric expression rounded to the nearest integer. @param x — The value to be rounded to the nearest integer.
 * Math.ceil() -> 
 * Math.floor()
 * Math.max()
 * Math.min()
 * Math.pow()
 * Math.sqrt()
 */

let random_num = Math.random()
console.log("Random Number " + random_num*10)
console.log("Random Number " + Math.round(random_num * 10))
console.log("Ceil of Number "+ Math.ceil(random_num*10))
console.log("Floor of the Number "+ Math.floor(random_num * 10));
arr = []
for(let i = 0; i < 10; i++){
    arr.push(Math.round(Math.random()*10))
}

// console.log("max number from the array " + arr + " is -> " + Math.max(arr));

// need to use spread operator
/**
 * Spread Operator:
 * Math.max(...arr) spreads the elements of the array arr as individual arguments to Math.max().
 * Same applies to Math.min(...arr).
 */

console.log("max number from the array " + arr + " is -> " + Math.max(...arr));
console.log("min number from the array " + arr + " is -> " + Math.min(...arr));

// power

console.log("Power of the number (base, exponent) " + Math.pow(random_num, 2)) // base, exponenet
console.log("Square root of the number " + Math.sqrt(random_num)) // square root