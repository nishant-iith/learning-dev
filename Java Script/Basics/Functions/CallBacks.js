// function sum(num1, num2){
//     let result = num1 + num2;
//     return result;
// }

// function displayResult(data){
//     console.log("Result of the sum is : "+ data);
// }

// function displayResultPassive(data){
//     console.log("Sum's result is : "+ data);
// }

// // You are only allowed to call one funciton after this 
// // How will you display Result of a sum ?

// const ans = sum(5,6);
// displayResult(ans);


// Call Back //

function sum(num1, num2, funcToCall){
    let result = num1 + num2;
    funcToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is : "+ data);
}

function displayResultPassive(data){
    console.log("Sum's result is : "+ data);
}

const ans = sum(5,6,displayResultPassive);

