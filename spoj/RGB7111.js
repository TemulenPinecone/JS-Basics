function divisionByNot11(a, b, c, d) {
  let result = 0;
  if (a % 11 != 0) {
    result = result + a;
  }
  if (b % 11 != 0) {
    result = result + b;
  }
  if (c % 11 != 0) {
    result = result + c;
  }
  if (d % 11 != 0) {
    result = result + d;
  }
  return result;
}

console.log(divisionByNot11(7, 22, 13, 30));
