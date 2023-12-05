function timesTable(x) {
  if (x >= 1 && x <= 10) {
    for (let i = 1; i <= 10; i++) {
      console.log(x + "*" + i + "=" + x * i);
    }
  } else {
    console.log("Error");
  }
}

timesTable(10);
