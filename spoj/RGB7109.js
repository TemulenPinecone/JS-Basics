function equal(a, b, c) {
  let equalSum = 0;
  if (a == 5) {
    equalSum = equalSum + 1;
  }
  if (b == 5) {
    equalSum = equalSum + 1;
  }
  if (c == 5) {
    equalSum = equalSum + 1;
  }
  return equalSum;
}

console.log(equal(2, 5, 5));
