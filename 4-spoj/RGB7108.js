function oddMult(a, b, c) {
  let response = 1;
  if (a % 2 != 0) {
    response = response * a;
  }
  if (b % 2 != 0) {
    response = response * b;
  }
  if (c % 2 != 0) {
    response = response * c;
  }
  return response;
}

console.log(oddMult(5, 3, 3));
