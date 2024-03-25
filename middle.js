

const eqArrays = function(arr1, arr2) {
    let stillTrue = true;
    let i = 0;
    if (arr1 === undefined || arr2 === undefined) {
      return stilltrue = false;
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

  const middle = function(arr) {
    let emptyArr = [];
    if (arr.length <= 2) {
        return arr;
    }
    else if (arr.length % 2 === 1) {
        emptyArr.push(arr[(arr.length / 2) - 0.5])
        return emptyArr;
    }
    else if (arr.length % 2 === 0) {
        emptyArr.push(arr[(arr.length / 2) - 1])
        emptyArr.push(arr[(arr.length / 2)])
        return emptyArr;
    }
}

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1]), [1]);
assertArraysEqual(middle([1, 2]), [1, 2]);