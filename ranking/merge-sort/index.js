function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let middleIndex = Math.floor(arr.length / 2);
  let leftHalf = arr.slice(0, middleIndex);
  let rightHalf = arr.slice(middleIndex, arr.length);

  if (leftHalf.length >= 2) leftHalf = mergeSort(leftHalf);
  if (rightHalf.length >= 2) rightHalf = mergeSort(rightHalf);

  let result = [];
  while(leftHalf.length >= 0 || rightHalf.length >= 0) {
    if (leftHalf.length === 0) {
      result = result.concat(rightHalf);
      break;
    }

    else if (rightHalf.length === 0) {
      result = result.concat(leftHalf);
      break;
    }
    
    else if (leftHalf[0] < rightHalf[0]) {
      result.push(leftHalf.shift());
    }

    else if (rightHalf[0] < leftHalf[0]) {
      result.push(rightHalf.shift());
    }
  }

  return result;
}

console.log(mergeSort([1,6,2,7,22,74,23,943,1090, 5]));
