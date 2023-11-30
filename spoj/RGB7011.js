function min(x) {
  return (x - (x % 60)) / 60;
}

function sec(x) {
  return x % 60;
}

let resultMin = min(200);
let resultSec = sec(200);
console.log(resultMin, resultSec);


// Short write

function minSec(x) {
  let result ((x - (x % 60)) / 60);
}

  return x % 60;

let result = minSec(200);
console.log(result);