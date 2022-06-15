/**
 * Returns group of array with equal elements where possible
 *
 * @param inputArray {Array} input Array
 * @param N {Integer} size of each group
 * @returns outputArray {Array[Array]} group of array with equal elements
 */
function groupArrayElements(inputArray, N) {
  let outputArray = [];
  if (N <= 0) {
    console.log("Input number N should be greater than 0");
    return outputArray;
  }
  while (inputArray.length) {
    outputArray.push(inputArray.splice(0, N));
  }

  return outputArray;
}

module.exports = {
  groupArrayElements,
};
