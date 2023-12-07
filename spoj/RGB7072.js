function oddSumN(x) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 1; i <= x; i = i + 2) {
    console.log("Loop:", i);
    sum1 = i;
    sum2 = sum2 + sum1;
  }
  console.log(sum2);
}

oddSumN(9);

