function exponent(a, b) {
  if (a >= 1 && a <= 10 && b >= 1 && b <= 10) {
    let exponentTemp = a;
    for (let i = 1; i <= b; i++) {
      console.log(a + "^" + i + "=" + exponentTemp);
      exponentTemp = exponentTemp * a;
    }
  } else {
    console.log("Error");
  }
}

exponent(10, 10);
