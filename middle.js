const middle = function(arr) {
  let emptyArr = [];
  if (arr.length <= 2) {
      return emptyArr;
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

module.exports = middle;
