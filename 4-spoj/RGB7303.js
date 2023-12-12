function evenSum(num1) {
    let isEven,evenAdd, temp, firstValue = 0;
    temp = num1;
    firstValue = num1;
    
for (let i = temp; i>=10; ) {
    if (temp%2==0) {
        isEven = firstValue % 10;
        evenAdd = evenAdd + isEven;
    } else {
        temp = (temp-temp%10)/10;
        return temp;
    } console.log("Outside of if : ",temp);
}
console.log("Outside of loop : ",temp);
}

evenSum(34567);

1. Давталт - Сүүлийн орон тэгш үү? 
    - мөн бол хувсагчид сана
    - биш бол сүүлийн оронг хасаад дараагийн орон уруу шилж
2. Хамгийн сүүлийн орон 2-с бага бол давталтыг дуусга

хусьсагчид санасан утгаа хооронд нь нэмээд функц уруу буцаана

console.log(34567); 
console.log("Last digit : ",34567%10); 

console.log("Check digit by even or odd. If even, add somewhere");
console.log("or not catch th next digit");

console.log(34567-7);
console.log((34567-7)/10);


isEven() //return type boolean

sumOfEvenDigit(){
    for(){
        //iterate over every digit
        //cjeck isEven if true collect
        //if(num is even){
        //     sum = sum + num
        // }
    }
}

let number = 12345123;
// ene for loop iig buh digit iig neg negeer hevle

                    // REAL CODE

function sumOfEvenDigit(num1) {
    let catchDigit = 0;
    let evenSum = 0;
    for (let i=num1; i>=1;) {
        catchDigit = i % 10;
        if (catchDigit%2==0) {
            evenSum = evenSum + catchDigit;
        }
        i=(i-i%10)/10;
    }
    return evenSum;
}

console.log(sumOfEvenDigit(34567)); 

                    // FIND SUM OF ODD DIGIT 

function sumOfOddDigit(num1) {
  let catchDigit,
    sumOdd = 0;
  for (let i = num1; i >= 1; ) {
    catchDigit = i % 10;
    if (catchDigit % 2 == 1) {
      sumOdd = sumOdd + catchDigit;
    }
    i = (i - (i % 10)) / 10;
  }
  return sumOdd;
}

console.log(sumOfOddDigit(23457));