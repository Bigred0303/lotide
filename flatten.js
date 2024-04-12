const flatten = function(arr) {
  let flatArr = arr.reduce((accumulator, value) => accumulator.concat(value), []);
  return flatArr;
};

const eqArrays = function(arr1, arr2) {
  let stillTrue = true;
  let i = 0;
  if (arr1 === undefined || arr2 === undefined) {
    return stillTrue = false;
  }
  if (arr1.length === arr2.length) {
    for (const element of arr1) {
      if (element !== arr2[i])
        stillTrue = false;
      i++;
    }
  } else {
    stillTrue = false;
  }
      
  return stillTrue;
};
    
const assertArraysEqual = function(arr1, arr2) {
  let arrayCheck = eqArrays(arr1, arr2);
  if (arrayCheck) {
    console.log(`✔✔✔  Assertion Passed: ${arr1} === ${arr2} The arrays are equal`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${arr1} !== ${arr2} The arrays aren't equal`);
  }
};

flatten([1, 2, [3, 4], 5, [6]]);

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;