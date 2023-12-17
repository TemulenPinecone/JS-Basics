// 1. Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];Expected Output :"Red,Green,White,Black""Red,Green,White,Black""Red+Green+White+Black"

// const myColor = ["Red", "Green", "White", "Black"];

// function joinElement(inputArray) {
//   let joinedElement =
//     inputArray.join() + `\n` + inputArray.join() + `\n` + inputArray.join(`+`);
//   return joinedElement;
// }

// console.log(joinElement(myColor));

// 2.  Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

// function ifEvenInsSym(inputStr) {
//   let result = ``;
//   for (i = 0; i < inputStr.length; i++) {
//     result += inputStr[i];
//     if (Number(inputStr[i]) % 2 == 0 && Number(inputStr[i + 1] % 2 == 0)) {
//       result += `-`;
//     }
//   }
//   return result;
// }

// console.log(ifEvenInsSym(`025468`));

// #3 : Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

function frequentItemInArray(inputArray) {
let max = 1;
let result = 0, temp; 
for (let i = 0; i < inputArray.length; i++) {
  console.log(`i loop : `, i, `temp : `, temp);
  for (let j=1; j<inputArray.length; j++) {
    console.log(`     j loop :`, j );
  if (inputArray[i] === inputArray[j]) {
    max++;
    temp=+inputArray[i]; console.log(`                          1st if : ` + temp + `   ( ` + max +` times )`);
    }
    if (max>result) {
      result=max; console.log(`                             2nd if  frequent result number : `, result);
    } 
  }
}
console.log(`result mean frequent item : `, result, `max mean times: `, max);
return;
}

console.log(`function : `,frequentItemInArray(arr));
