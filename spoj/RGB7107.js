function evenSum(a, b, c) {
  let response = 0;
  if (a % 2 == 0) {
    response = response + a;
  }
  if (b % 2 == 0) {
    response = response + b;
  }
  if (c % 2 == 0) {
    response = response + c;
  }
  return response;
}

console.log(evenSum(10, 4, 6));
