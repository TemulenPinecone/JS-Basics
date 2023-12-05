function nSum(x) {
  let result = 0;
  for (let i = 0; i <= x; i++) {
    // console.log(i);
    if (i <= x) {
      result = result + i;
      //   console.log(result);
    }
  }
  console.log(result);
}

nSum(10);
