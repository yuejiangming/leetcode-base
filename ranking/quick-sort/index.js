// 快速排序，算法1
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  let baseValue = arr[0];
  let smallValues = [];
  let largerValues = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= baseValue) smallValues.push(arr[i]);
    if (arr[i] > baseValue) largerValues.push(arr[i]);
  }

  smallValues = quickSort(smallValues);
  largerValues = quickSort(largerValues);

  return [...smallValues, baseValue, ...largerValues];
}

console.log(quickSort([1,6,2,7,22,74,23,943,1090, 5]));
