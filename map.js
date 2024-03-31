const words = ["ground", "control", "to", "major", "tom"];

const map = function (array, callback) {
    const results = [];
    for (let item of array) {
        results.push(callback(item))
    }
    return results;
  };

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
  
  const assertArraysEqual = function(arr1, arr2) {
    let arrayCheck = eqArrays(arr1, arr2);
    if (arrayCheck) {
      console.log(`✔✔✔  Assertion Passed: ${arr1} === ${arr2} The arrays are equal`);
    } else {
      console.log(`🧨🧨🧨 Assertion Failed: ${arr1} !== ${arr2} The arrays aren't equal`);
    }
  };
const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word[1]);
const results3 = map(words, (word) => word[12]);

assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);
assertArraysEqual(results2, ["r", "o", "o", "a"]);
assertArraysEqual(results3, []);
