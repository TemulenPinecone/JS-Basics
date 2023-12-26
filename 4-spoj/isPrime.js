function isPrime(x) {
  let result = 0;
  let primeLoop;
  if (x == 1 && x < 0) return false;
  for (let i = 2; i < x; i++) {
    // console.log("i : ", i);
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

function findPrime(numMin, numMax) {
  let count = 0;
  let findPrimeArray = [];
  for (let i = numMin; i <= numMax; i++) {
    if (isPrime(i) == true) {
      findPrimeArray[count] = i;
      count = count + 1;
    }
  }
  return findPrimeArray;
}

console.log(findPrime(-2, 150));
