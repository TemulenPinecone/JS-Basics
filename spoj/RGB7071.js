function quadraticUntilN(x) {
  let result = x;
  let resultSum = 0;
  for (let i = 1; i <= x; i++) {
    if (x >= i) {
      result = i * i;
      resultSum = resultSum + result;
    }
  }
  console.log(resultSum);
}

quadraticUntilN(5);


