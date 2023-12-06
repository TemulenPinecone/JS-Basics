function nSum(x) {
  let result = 0;
  for (let i = 1; i <= x; i++) {
    console.log("Loop number : ", i);
    if (i <= x) {
      result = result + i;
      console.log(result);
      console.log(" ");
    }
  }
  // console.log(result);
}

nSum(10);
