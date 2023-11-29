function min(x) {
  return (x - (x % 60)) / 60;
}

function sec(x) {
  return x % 60;
}

let resultMin = min(350);
let resultSec = sec(350);
console.log(resultMin, resultSec);

// 200
// (200 - 20 ) / 60
// (sec - sec  % 60) / 60
// 3
