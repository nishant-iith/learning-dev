// asynchronous programming

// function getData(dataId){
//     setTimeout(() => {
//         console.log("Data -> "+ dataId)
//     }, 2000);
// }

// getData(1); // wait for 2s run the next code
// getData(2); // wait for 2s run the next code
// getData(3); // wait for 2s run the next code
// getData(4); // wait for 2s run the next code

// In this case all of the calls will run immediately
// If we want data 1 to print first and then data 2 to print then ?

function getData(dataId, callback){
    console.log("Getting data "+dataId+" ...")
    setTimeout(() => {
        console.log("Data -> "+ dataId)
        if(callback){ // if the callback exists then call it
            callback(dataId);
        }
    }, 2000);
}

// callback hell -> Nested callbacks stacked below one another forming a pyramid structure (Pyramid of Doom)
getData(1, () => {
    getData(2, ()=>{
        getData(3, ()=>{
            getData(4, ()=>{
                getData(5)
            })
        })
    })
} )

// To solve this problem we have Promises




