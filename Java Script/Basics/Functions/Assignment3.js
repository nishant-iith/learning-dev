// // Create a terminal clock (HH:MM:SS)

// var time = [23,59,55];

// function changeHour(){
//     time[0] = time[0]+1;
// }

// function changeMinute(){
//     time[1] = time[1]+1;
// }

// function changeSecond(){
//     time[2] = time[2]+1;
// }

// function clock(){
//     console.clear();
//     console.log(time[0]+ ":" +time[1]+ ":" +time[2]);
//     changeSecond();
//     if(time[2]==60){
//         time[2] = 0;
//         changeMinute();
//         if(time[1]==60){
//             time[1] = 0;
//             changeHour();
//             if(time[0]== 24){
//                 time[0] = 0;
//             }
//         }
//     }
// }

// setInterval(clock, 1*1000);


// chat gpt

var time = [23, 59, 55]; // Initial time (HH:MM:SS)

function changeSecond() {
    time[2] += 1; // Increment seconds
    if (time[2] === 60) { // Check if seconds reach 60
        time[2] = 0; // Reset seconds to 0
        changeMinute();
    }
}

function changeMinute() {
    time[1] += 1; // Increment minutes
    if (time[1] === 60) { // Check if minutes reach 60
        time[1] = 0; // Reset minutes to 0
        changeHour();
    }
}

function changeHour() {
    time[0] += 1; // Increment hours
    if (time[0] === 24) { // Check if hours reach 24
        time[0] = 0; // Reset hours to 0
    }
}

function clock() {
    console.clear(); // Clear the terminal
    // Format time for better display (e.g., 01:09:05 instead of 1:9:5)
    const formattedTime = time
        .map(unit => (unit < 10 ? "0" + unit : unit)) // Add leading zeros
        .join(":"); // Combine into HH:MM:SS format

    console.log(formattedTime); // Print the current time
    changeSecond(); // Update the time
}

setInterval(clock, 1000); // Run the clock function every second
