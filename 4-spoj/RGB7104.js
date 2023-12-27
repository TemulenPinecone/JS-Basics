function min(a, b, c, d) {
  if (a < b && a < c && a < d) {
    console.log(a);
  } else if (b < a && b < c && b < d) {
    console.log(b);
  } else if (c < a && c < b && c < d) {
    console.log(c);
  } else d < a && d < b && d < c;
  console.log(d);
}

min(4, 5, 7, 1);
