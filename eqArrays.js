let i = 0;

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔  Assertion Passed: ${actual} === ${expected} The arrays are equal`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${actual} !== ${expected} The arrays aren't equal`);
  }
};

const eqArrays = function(arr1, arr2) {
  let stillTrue = true;
  for (const element of arr1) {
    if (element !== arr2[i])
      stillTrue = false;
    i++;
  }
  return stillTrue;
};

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);