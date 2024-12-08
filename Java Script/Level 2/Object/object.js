const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5",
    key6: "value6",
    key7: "value7",
};

/**
 * Object Methods
 * Object.keys() -> Returns a list of keys from the object
 * Object.values() -> Returns a list of values from the object
 * Object.entries() -> Returns an array of key-value pairs
 * Object.hasOwnProperty() -> Checks if the object has a specific key
 * Object.assign() -> Copies properties from one or more source objects to a target object
 */

console.log("Keys: ", Object.keys(sampleObject)); // Returns an array of keys
console.log("Values: ", Object.values(sampleObject)); // Returns an array of values
console.log("Entries: ", Object.entries(sampleObject)); // Returns an array of key-value pairs

// Example for Object.hasOwnProperty()
console.log("Has key 'key1': ", sampleObject.hasOwnProperty("key1")); // true
console.log("Has key 'key8': ", sampleObject.hasOwnProperty("key8")); // false

// Example for Object.assign()
const newObject = { key8: "value8", key9: "value9" };
const mergedObject = Object.assign({}, sampleObject, newObject); // Merges newObject into sampleObject
console.log("Merged Object: ", mergedObject);

// Additional: Iterating using Object.entries()
console.log("Iterating through key-value pairs:");
for (const [key, value] of Object.entries(sampleObject)) {
    console.log(`${key}: ${value}`);
}
