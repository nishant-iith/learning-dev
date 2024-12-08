// JSON means JavaScript object Notation

// javascript object
// const user = {
//     name: "Nishant",
//     age: 13,
//     isMarried: false
// }

// console.log(user["name"]);
// const users = '{name: "Nishant", age: 13, isMarried: false}'
// console.log(user["0"]);

// JSON.parse
// JSON.stringify

// const users = '{"name": "Nishant", "age": 13, "isMarried": false}'
// const user = JSON.parse(users)
// console.log(user["isMarried"])

// js object

const users = [
    {
        name: "Nishant",
        age: 21,
        isMarried: false
    },
    {
        name: "Julia",
        age: 20,
        isMarried: false
    },
    {
        name: "Pritesh",
        age: 22,
        isMarried: true
    },
    {
        name: "Arin",
        age: 23,
        isMarried: false
    }
];

console.log(users);

const users2 = JSON.stringify(users);
console.log(users2)


// function jsonMethods(jsonString) {
//     console.log("Original JSON String:", jsonString);

//     // Parsing JSON string to JavaScript object
//     let parsedObject = JSON.parse(jsonString);
//     console.log("After JSON.parse():", parsedObject);

//     // Stringifying JavaScript object to JSON string
//     let jsonStringified = JSON.stringify(parsedObject);
//     console.log("After JSON.stringify():", jsonStringified);
//   }

//   // Example Usage for JSON Methods
//   const sampleJSONString =
//     '{"key": "value", "number": 42, "nested": {"nestedKey": "nestedValue"}}';

//   jsonMethods(sampleJSONString);
