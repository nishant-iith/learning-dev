// Arrays 
// const person = ["Nishant", "Harkirat", "Love Babbar", "Shraddha"];
// const gender = ["Male", "Male", "Male", "Female"];

// for(let i = 0; i < person.length; i++) {
//     if(gender[i]=="Female"){
//         console.log(person[i]);
//     }
// }

// Objects 
// const user1 = {name: "Nishant", age: 18, gender:"Male"};
// console.log(user1["name"])

// Array of objects
const users = [
    {name: "Nishant", age: 18, gender: "Male"},
    {name: "Harkirat", age: 18, gender: "Male"},
    {name: "Love Babbar", age: 18, gender:"Male"},
    {name: "Shraddha", age: 18, gender: "Female"}
];

for(let i = 0; i < users.length; i++){
    if(users[i]["gender"] == "Female"){
        console.log(users[i]["name"]);
        console.log(users[i]);
    }
}
