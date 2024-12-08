// date methods 
// Date -> class pre made for use

const currentDate = new Date();

console.log("Current date: " + currentDate.getDate());
console.log("Current Year: " + currentDate.getYear()); // current year - 1900 don't know why but mentioned on google
console.log("Current Year: " + currentDate.getFullYear());
console.log("Current Month: " + currentDate.getMonth());
console.log("Current Date: " + currentDate);
console.log("Current Hour: " + currentDate.getHours());
console.log("Current Minute: " + currentDate.getMinutes());
console.log("Current Second: " + currentDate.getSeconds());


// set date
// console.log("Set current date : "+ currentDate.setFullYear(2022));
// console.log("After setting full date : " + currentDate);


console.log("Time in milliseconds : (since 1970) :" + currentDate.getTime());
// why 1970 ?
// epoch timestamp 