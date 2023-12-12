function nSum(x) {
  let a = x;
  let sum = 0;
  let temple = 0;

  while (a > 0) {
    temple = a % 10;
    sum = sum + temple;
    a = (a - (a % 10)) / 10;
  }
  return sum;
  //   console.log(sum);
}
console.log(nSum(234));
