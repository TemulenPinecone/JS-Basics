// FIND ODD DIGIT BY LOOP

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

// FIND ODD DIGIT BY IF

function oddSumN(x) {
  let sum1 = 0;
  for (let i = 0; i <= x; i = i + 1) {
    if (i % 2 != 0) {
      sum1 = sum1 + i;
    }
  }
  return sum1;
}

console.log(oddSumN(9));
