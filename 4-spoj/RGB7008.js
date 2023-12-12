function lastNum10(x) {
  return ((x % 100) - (x % 10)) / 10;
}

let result = lastNum10(489);
console.log(result);

