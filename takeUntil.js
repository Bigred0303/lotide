

const takeUntil = (arr, callback) => {
    let results = [];
    for (const item of arr) {
       if (!(callback(item))) {
        results.push(item);
       } else {
        break;
       }
    }
    return results
}


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

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"])

module.exports = takeUntil;