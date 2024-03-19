const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🧨🧨🧨 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tester = [1, 2, 3, 4, 5];

const tail = function(arr) {
  let tailed = arr.slice(1);
  return tailed;
};

console.log(tail(tester));
console.log(tester);
tail(tester);
assertEqual(tester.length, 5);

assertEqual(tail([1]).length, 0);
assertEqual(tail([]).length, 0);