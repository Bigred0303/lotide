const without = function(source, itemsToRemove) {
  let i = 0;
  let newArray = [];
  for (i = 0; i < source.length; i++) {

    if (source[i] !== itemsToRemove[i]) {
      newArray.push(source[i]);
    }
  }
  return newArray;
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


const testArray = ["test", 1, "lighthouse"];
without(testArray, "test");
assertArraysEqual(testArray, ["test", 1, "lighthouse"]);
console.log(without([1, 2, 3], []));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
without([],[]);
without([],[5]);