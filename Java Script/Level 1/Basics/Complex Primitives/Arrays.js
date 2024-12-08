// const names = ["Nishant", "Harkirat", "Love Babbar", "Striver"]
// const ages = [18, 19, 20, 21]
// let result = ["A", "B", "C", "D"];

// ages[2] = 22;
// result[2] = "A+";

// for(let i = 0; i < names.length;i++){
//     console.log(names[i] + " -> " + ages[i] + " -> " + result[i])
// }

// print biggest number in the array 

var array = [100, 99, 87, 52, 922, 96, 80, 0];
var max = 0;
for(let i = 0; i < array.length; i++){
    if(array[i] > max){
        max = array[i];
    }
}
console.log(max);