// Цаг минут секунд

function sec(x) {
  return x % 60;
  console.log(result);
}
function min(x) {
  if (x / 60 == 60*) return 0;
  else return "none";
}
// бутархай нь 

function hour(x) {
  return (x - (x % (60 * 60))) / (60 * 60);
  // return parseInt(x / 3600);
}

let resultSec = sec(3812);
let resultMin = min(3612);
let resultHour = hour(3812);
console.log(resultHour, resultMin, resultSec);

// sec=3612
// h=(sec - sec%3600)/3600
// m=
// s=sec%60

// 3612 =
