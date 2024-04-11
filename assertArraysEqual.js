const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arr1, arr2) {
  let arrayCheck = eqArrays(arr1, arr2);
  if (arrayCheck) {
    console.log(`✔✔✔  Assertion Passed: ${arr1} === ${arr2} The arrays are equal`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${arr1} !== ${arr2} The arrays aren't equal`);
  }
};
  
module.exports = assertArraysEqual;