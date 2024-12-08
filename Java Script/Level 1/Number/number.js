console.log(parseInt("42")); // string to integer
console.log(parseInt("42eee")); // string to integer
console.log(parseInt("42px")); // string to integer
console.log(parseInt("42.44px")); // string to integer
console.log(parseFloat("42.44ews")); // string to float point

// but not this one ->
console.log(parseFloat("efs 42.44ews")); // string to float point