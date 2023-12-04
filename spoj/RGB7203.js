// LOOP
// for(initialize; condition, update) {body}

for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}

// loop // 1 - initialize
// 2 - condition
// 3 - body -> consloge.log
// 4 - update

for (let i = 0; i < 4; i = i + 1) {
  console.log("IOI");
}

for (let i = 0; i < 6; i = i + 1) {
  console.log("HELLO WORLD");
}

function IOI(x) {
  for (let i = 0; i < x; i = i + 1) {
    console.log("IOI");
  }
}
IOI(5);

let num = 0;
for (; num < 4; ) {
  num = num + 1;
  console.log("IOI");
}