const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arr) {
  let first = arr[0];
  return first;
};


assertEqual(head([5,6,7]), 5);
assertEqual(head([]), "Hello");
assertEqual(head([5,6,7]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");