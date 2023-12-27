function numToString(x) {
  if (x >= 90 && x < 100) {
    console.log("A");
  } else if (x >= 80 && x < 90) {
    console.log("B");
  } else if (x >= 70 && x < 80) {
    console.log("C");
  } else if (x >= 60 && x < 70) {
    console.log("D");
  } else if (x > 0 && x < 60) {
    console.log("F");
  } else {
    console.log("Error");
  }
}

numToString(20);
numToString(61);
numToString(71);
numToString(87);
numToString(98);

numToString(0);
numToString(106);
