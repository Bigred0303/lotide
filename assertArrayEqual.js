
const eqArrays = function(arr1, arr2) {
  let stillTrue = true;
  let i = 0;
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

const assertArraysEqual = function(eqArrays) {
  if (eqArrays === true) {
    console.log(`✔✔✔  Assertion Passed: ${eqArrays} === ${true} The arrays are equal`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${eqArrays} !== ${true} The arrays aren't equal`);
  }
};
  
console.log(assertArraysEqual(eqArrays([1,2,3], [1,2,3])));
console.log(assertArraysEqual(eqArrays([1,4,3], [1,2,3])));