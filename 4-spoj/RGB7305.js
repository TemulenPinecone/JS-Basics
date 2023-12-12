function reiterationOfDigit(num1, num2) {
  let lastDigit,
    digitCounter = 0;

  for (let i = num1; i >= 9; ) {
    lastDigit = i % 10;
    if (lastDigit === num2) {
      digitCounter = digitCounter + 1;
      i = (i - (i % 10)) / 10;
    } else {
      i = (i - (i % 10)) / 10;
    }
  }
  return digitCounter;
}

console.log(reiterationOfDigit(2345344, 4));
