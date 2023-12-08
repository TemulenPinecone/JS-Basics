function isPrime(x) {
  let result = 0;
  let primeLoop;
  for (let i = 2; i < x; i++) {
    console.log("i : ",i);
    if (x % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(2));
console.log(isPrime(997));



function findPrime(numMin,numMax) {
  let count = 0 ;
  let findPrimeArray = [];
  for (let i=numMin; i<=numMax; i++) {
    if (isPrime(i)==true) {}
  }
  if (isPrime) 
}
