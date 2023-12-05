function exam(x) {
  if (x > 3 && x < 5) {
    console.log("Pass");
  } else if (x <= 3 && x >= 2) {
    console.log("Fail");
  } else console.log("Error");
}

exam(2);
