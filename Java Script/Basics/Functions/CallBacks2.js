// Arithmatic 

// function Calculate(a, b, type){
//     if(type == "sum"){
//         return a + b;
//     }
//     if(type == "minus"){
//         return a - b;
//     }
//     if(type == "mul"){
//         return a * b;
//     }
// }

// const value = Calculate(4, 5, "sum");
// console.log(value);

// Call Back

function sum(a, b){
    return a + b;
}
function mul(a, b){
    return a * b;
}
function minus(a,b ){
    return a - b;
}

function arithmatic(a, b, type){
    if(type == sum){
        return sum(a, b);
    }
    if(type == mul){
        return mul(a, b);
    }
    if(type == minus){
        return minus(a, b);
    }
}
const value = arithmatic(4, 5, sum);
console.log(value);