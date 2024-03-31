const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  console.log(results);
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
assertArraysEqual(letterPositions("hello").l, [2, 3]);