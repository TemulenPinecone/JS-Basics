function pyramid(x) {
  let printStar = "*";
  console.log(printStar);
  for (i = 1; i < x; i++) {
    printStar += "*";
    console.log(printStar);
  }
  return printStar;
}
pyramid(8);
