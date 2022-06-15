const { groupArrayElements } = require("../src/group-array");

// CHANGE INPUT HERE
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const N = 4;

console.log(`Input array: ${JSON.stringify(inputArray)}`);
console.log(`Input number: ${N}`);

const result = groupArrayElements(inputArray, N);

console.log(`Result: ${JSON.stringify(result)}`);
