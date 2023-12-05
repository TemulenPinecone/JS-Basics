function oddSumN(x) {
  let sum1 = 0;
  let sum2 = 0;
  if (x % 2 != 0 || x <= 1) {
    for (let i = 1; i <= x; i++) {
      sum1 = i;
      sum2 = sum2 + sum1;
    }
    console.log(sum2);
  } else {
    console.log("Tegsh too baina!");
  }
}

oddSumN(9);
