function divisionBy3(a, b, c, d) {
  let result = 0;
  if (a % 3 == 0) {
    result = result + 1;
  }
  if (b % 3 == 0) {
    result = result + 1;
  }
  if (c % 3 == 0) {
    result = result + 1;
  }
  if (d % 3 == 0) {
    result = result + 1;
  }
  return result;
}

console.log(divisionBy3(3, 12, 8, 9));
