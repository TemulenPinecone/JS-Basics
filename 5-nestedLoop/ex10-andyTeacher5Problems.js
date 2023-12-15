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

function ifEvenInsSym(inputStr) {
  let result = ``;
  for (i = 0; i < inputStr.length; i++) {
    result += inputStr[i];
    if (Number(inputStr[i]) % 2 == 0 && Number(inputStr[i + 1] % 2 == 0)) {
      result += `-`;
    }
  }
  return result;
}

console.log(ifEvenInsSym(`025468`));

// #3 : Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )

var arr = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

// arr.sort((a, b) => a - b);
// console.log(arr);
console.log(`arr[0]`, arr[0]);
console.log(`arr[1]`, arr[1]);
let count = 0,
  char;
for (let i = 0; i < arr.length; i++) {
  for (let j=1; j>arr.length; j++) {
  if (arr[i] === arr[j]) {
    count++;
    char = arr[i];
    console.log(char);
  }
}
}