function mult(a, b, c, d) {
  let response = 1;
  if (a < 5) {
    response = response * a;
  }
  if (b < 5) {
    response = response * b;
  }
  if (c < 5) {
    response = response * c;
  }
  if (d < 5) {
    response = response * d;
  }
  return response;
}

console.log(mult(3, 6, 2, 4));
