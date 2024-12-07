// Calculate the time it takes between a setTimeout call and the inner function actully running

// GPT 

const startTime = performance.now();

setTimeout(() => {
    const endTime = performance.now();
    console.log("Time elapsed:", (endTime - startTime).toFixed(2), "ms");
}, 1000);
