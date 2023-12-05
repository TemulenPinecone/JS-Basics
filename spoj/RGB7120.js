function triangle(a, b, c) {
  if (a + b >= c && b + c >= a && c + a >= b) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

triangle(3, 4, 5);
triangle(3, 2, 5);
triangle(4, 2, 1);
