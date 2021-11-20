function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    
    let minValue = arr[i]
    let minValueIndex = i;

    for (let k = i; k < arr.length; k++) {
      if (arr[k] < minValue) {
        minValue = arr[k];
        minValueIndex = k;
      }
    }

    if (minValueIndex !== i) {
      let swap = arr[i];
      arr[i] = arr[minValueIndex];
      arr[minValueIndex] = swap;
    }
  }

  return arr;
}

console.log(selectionSort([1,6,2,7,22,74,23,943,1090,5,523]));
