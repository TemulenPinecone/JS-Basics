// Цаг минут секунд

function sec(x) {
  return x % 60;
}
function min(x) {
  return (x % 3600) / 60 - (((x % 3600) / 60) % 1);
}
// let minute = (x % 3600) / 60 - (((x % 3600) / 60) % 1);

function hour(x) {
  return (x - (x % (60 * 60))) / (60 * 60);
  // return parseInt(x / 3600);
}

let resultSec = sec(3612);
let resultMin = min(3612);
let resultHour = hour(3612);
console.log(resultHour, resultMin, resultSec);
