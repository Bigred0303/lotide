const objectTest = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

const findKey = (searchObject, callback) => {

  for (const item in searchObject) {
    if (callback(objectTest[item])) {
      return item;
    }
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(findKey(objectTest,(item) => item["stars"] === 2), "noma");
assertEqual(findKey(objectTest,(item) => item["stars"] === 3), "Akaleri");
assertEqual(findKey(objectTest,(item) => item["stars"] === 1), "Blue Hill");
