// String handbook

// String: length, indexOf(), lastIndexOf(), slice(), substring(), replace(),
// split(), trim(), toUpperCase(), toLowerCase(), etc.

// Run each function to see the output, play and learn by doing.

// Length
function getLength(str) {
    console.log("Original string : "+ str);
    console.log("Length : "+ str.length);
}
// getLength("Hello world!");

function tellIndex(str, char){
    console.log("Original string : "+ str);
    console.log("The index of char : "+ char + " is " + str.indexOf(char));
}
// tellIndex("Hello world!", 'w');

str = "Nishant Verma";
console.log("Original string : "+ str);
console.log("Length : "+ str.length);
console.log("Index : "+ str.indexOf('V'));
console.log("Last index of char 'a' is " + str.lastIndexOf('a'));
console.log("The string is " + str + " and after slicing it (start, end) it gives : "+ str.slice(2, 8)); // last index is exclusive
console.log("The string is " + str + " the substring is (start, length) "+ str.substring(2, 8));
console.log("The string is " + str + " and after using replace function " + str.replace("Verma", "Taak"));
console.log("The string is " + str + " and after using split function " + str.split(" "));
// const array = str.split(" ");
// console.log(array[1]);

str1 = "   Hello World! Ji.   "
console.log("The string is '" + str1 + "' and after using trim function '" + str1.trim() + "' .");

console.log("The string is " + str + " and after using toUpperCase() -> " + str.toUpperCase() + ".");
console.log("The string is " + str + " and after using toLowerCase() -> " + str.toLowerCase() + ".");