function maxDigit(num1) {
  let maxDigitArray = [];
  let arrayCount = 0;
  let indexMax = 0;
  let temp = 0;
  for (let i = num1; i >= 1; ) {
    maxDigitArray[arrayCount] = i % 10;
    arrayCount = arrayCount + 1;
    i = (i - (i % 10)) / 10;
    console.log("1st LOOP - Index : ", maxDigitArray);
  }
  for (let i = 0; i < maxDigitArray[arrayCount].length; i++) {
    if (maxDigitArray[i] > maxDigitArray[i + 1]) {
    } else {
      temp = maxDigitArray[i];
      maxDigitArray[i] = maxDigitArray[i + 1];
      maxDigitArray[i + 1] = temp;
    }
    console.log(maxDigitArray);
  }
  indexMax = maxDigitArray[0];
  return maxDigitArray;
}

maxDigit(4632);
// console.log(maxDigit(4632));
