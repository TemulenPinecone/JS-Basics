function sum(x) {
  return x / 100 - (x % 100) * 0.01 + ((x % 100) - (x % 10)) / 10 + (x % 10);
  console.log(123);
}

let result = sum(923);
console.log(result);
