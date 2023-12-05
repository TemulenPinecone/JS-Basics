function season(x) {
  if (x >= 2 && x <= 5) {
    console.log("Spring");
  } else if (x >= 6 && x <= 8) {
    console.log("Summer");
  } else if (x >= 9 && x <= 11) {
    console.log("Autumn");
  } else if (x == 12 || x == 1) {
    console.log("Winter");
  } else {
    console.log("Error");
  }
}

season(2);
season(7);
season(10);
season(12);

season(13);
season(0);
