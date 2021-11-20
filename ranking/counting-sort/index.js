function countingSort(arr) {
  let countingObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (countingObj[arr[i]] == null) {
      countingObj[arr[i]] = 1;
    } else {
      countingObj[arr[i]]++;
    }
  }

  let index = 0;
  let result = [];
  while(result.length < arr.length) {
    if (countingObj[index] != null) {
      let number = index;
      let count = countingObj[index];
      for (let i = 0; i < count; i++) {
        result.push(number);
      }
    }
    index++;
  }

  return result;
}

console.log(countingSort([1,6,2,7,22,74,23,943,1090, 5]));
