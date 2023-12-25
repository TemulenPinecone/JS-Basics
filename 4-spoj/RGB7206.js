// OPTION A

let result = 100;
function loop(x) {
  for (let i = 1; i < x; i = i + 1) {
    result = result + 100;
    console.log(result);
  }
}
loop(6);



// OPTION B

let result = 0;
for (let i = 0; i < 6; i = i + 1) {
  result = result + 100;
  console.log(result);
}
