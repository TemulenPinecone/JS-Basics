function sumOfOddDigit(num1) {
  let catchDigit,
    sumOdd = 0;
  for (let i = num1; i >= 1; ) {
    catchDigit = i % 10;
    if (catchDigit % 2 == 1) {
      sumOdd = sumOdd + 1;
    }
    i = (i - (i % 10)) / 10;
  }
  return sumOdd;
}

console.log(sumOfOddDigit(23457));
