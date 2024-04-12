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

const eqObjects = function(object1, object2) {
  const obj1 = Object.keys(object1);
  const obj2 = Object.keys(object2);
  if (obj1.length !== obj2.length) {
    return false;
  }
  for (const key of obj1) {
    if (Array.isArray(object1[key]) !== Array.isArray(object2[key])) {
      return false;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!(eqArrays(object1[key], object2[key]))) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require("util").inspect;

  let objCheck = eqObjects(object1, object2);
  if (objCheck) {
    console.log(`✔✔✔  Assertion Passed: ${inspect(object1)} === ${inspect(object2)} The objects are equal`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)} The objects aren't equal`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
  
assertObjectsEqual(shirtObject, anotherShirtObject);
  
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
  
assertObjectsEqual(shirtObject, longSleeveShirtObject);

module.exports = assertObjectsEqual;