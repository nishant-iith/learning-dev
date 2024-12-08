// Create a counter in Javascript (count downs from 30 to 0)

var time = [30];
function reduceTime(){
    time[0] = time[0]-1;
}

function Time(){
    console.clear();
    console.log("Time : "+time[0]);
    reduceTime();
    if(time[0] == 0){
        clearInterval(timer);
        console.log("Time's up!!");
    }
}

var timer = setInterval(Time, 1000);