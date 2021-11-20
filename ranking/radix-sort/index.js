function radixSort(arr) {
  let radix = 1
  let curArr = arr;
  let radixObj = {};

  while(!radixObj[0] || radixObj[0].length < arr.length) {
    radixObj = {};
    for (let i = 0; i < curArr.length; i++) {
      const radixNum = getRadixNum(curArr[i], radix);

      if (radixObj[radixNum] == null) {
        radixObj[radixNum] = [curArr[i]];
      } else {
        radixObj[radixNum].push(curArr[i]);
      }
    }

    curArr = [];
    for (let i = 0; i <= 9; i++) {
      if (radixObj[i]) curArr = curArr.concat(radixObj[i]);
    }

    radix++;
  }

  return curArr;
}

function getRadixNum(number, radix) {
  let numStr = `${number}`;
  if (numStr[numStr.length - radix] != null) return +numStr[numStr.length - radix];
  else return 0
}

console.log(radixSort([1,6,2,7,22,74,23,943,1090, 5]));
