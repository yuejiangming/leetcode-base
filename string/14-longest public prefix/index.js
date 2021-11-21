function logestPublicPrefix(strArr) {
  let vertifiedPrefix = '';
  
  let index = 0;
  while(true) {
    for (let p = 0; p < strArr.length - 1; p++) {
      if (!strArr[p][index] || !strArr[p + 1][index] || strArr[p][index] !== strArr[p + 1][index]) {
        return vertifiedPrefix;
      }
    }
    vertifiedPrefix += strArr[0][index];
    index++;
  }
}

console.log(logestPublicPrefix([
  'abcde',
  'abc',
  'abcd',
]));
