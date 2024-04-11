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

module.exports = eqArrays;