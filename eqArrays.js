const eqArrays = function(arr1, arr2) {
  let stillTrue = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i])
      stillTrue = false;
    }
  return stillTrue;
};

module.exports = eqArrays;