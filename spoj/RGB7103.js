function max(a, b, c) {
  if (a > b && a > c) {
    console.log("Max number : " + a);
  } else if (b > a && b > c) {
    console.log("Max number : " + b);
  } else if (c > a && c > b) {
    console.log("Max number : " + c);
  } else console.log("Other case");
}

max(11, 4, 6);
