function multipleNum(x) {
  return ((x - (x % 10)) / 10) * (x % 10);
}

let result = multipleNum(54);
console.log("Result : ", result);
