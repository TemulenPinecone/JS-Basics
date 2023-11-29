let name = "Tem";
let myAge = 23;

// "let" - program-н комманд - declare a variable
// "=" - assign a value - "Assignment mean суулгаж өгөх"

console.log(name);
console.log(myAge);

// "console.log(...); - Output дээр үр дүнг хэвлэх комманд"
// " -> quotation mark
// ; -> semi colon, statement, end of line

let num1 = 10;
let num2 = 20;

let sum = num1 + num2;
let substraction = num1 - num2;
let product = num1 * num2;
let division = num1 / num2;

console.log(sum);
console.log(substraction);
console.log(product);
console.log(division);

let x = 5;
let answer = x * x + 2 * x + 1;
console.log(answer);

// declare a variable called "number1" and "number2" and assign a value
// and print out sum of the two variable

let number1 = 10;
let number2 = 20;
let sum = number1 + number2;
console.log(sum);

// syntax error - дүрмийн алдаа, кодийн үндсэн дүрмийн алдаа.
// refference error - adress-н алдаа (C++ Pointer дээр үндсэн хаягт ханддаг агуулгыг авч үздэг)

// "=" -> right hand operator
// "+ - * /" left hand operator

let x = 15;
let y = 20;
if (x > y) {
  console.log("x is bigger");
} else {
  console.log("y is bigger");
}

let clientAge = 21;
if (clientAge >= 21) {
  console.log("You can enter this club");
} else {
  console.log("You can't enter this club");
}

let birthYear = 1990;
let birthMonth = 12;
let birthDate = 29;
let age = 2023 - birthYear;
if (11 < birthMonth) {
  age = age - 1;
} else if (11 == birthMonth) {
  if (27 < birthDate) {
    age = age - 1;
  }
}

// console.log("My age =", age);

// if (age >= 21) {
//   console.log("You're adult");
// } else {
//   console.log("You're child");
// }

//  >, >=, <, <=, ==, !=

// DATA TYPES
let myNumber = 15; //-> number type
let myString = "15"; //-> string type - зөвхөн нэмж болно, текстэн утга учраас мат үйлдэл хийгдэх боломжгүй.
let myBool = false; // boolean type (can contain only "true" or "false")

console.log("myNumber =", myNumber);
console.log("myString =", myString);

let = myAge = 15;

if (myAge < 10) {
  console.log("U're a child");
} else if (myAge < 18) {
  console.log("U're a teenage");
} else if (myage < 60) {
  console.log("U're an adult");
} else {
  console.log("U're an elder");
}

// let day = 8;
// if (day == 1) {
//   console.log("Today is Monday");
// } else if (day == 2) {
//   console.log("Today is Tuesday");
// } else if (day == 3) {
//   console.log("Today is Wednesday");
// } else if (day == 4) {
//   console.log("Today is Thursday");
// } else if (day == 5) {
//   console.log("Today is Friday");
// } else if (day == 6) {
//   console.log("Today is Saturday");
// } else if (day == 7) {
//   console.log("Today is Sunday");
// } else {
//   console.log("ERROR");
// }

// Homework #1

let day = 360;
if (day <= 31) {
  console.log("January");
} else if (day <= 59) {
  console.log("February");
} else if (day <= 90) {
  console.log("March");
} else if (day <= 120) {
  console.log("April");
} else if (day <= 151) {
  console.log("May");
} else if (day <= 181) {
  console.log("June");
} else if (day <= 112) {
  console.log("July");
} else if (day <= 143) {
  console.log("August");
} else if (day <= 173) {
  console.log("September");
} else if (day <= 204) {
  console.log("October");
} else if (day <= 234) {
  console.log("November");
} else if (day <= 265) {
  console.log("December");
} else {
  console.log("Error");
}

// Homework #2

let midTerm1 = 66;
let midTerm2 = 60;
let final = 68;
let score = (midTerm1 + midTerm2 + final) / 3;

if (score < 60) {
  console.log("Score = ", score, "(F)");
} else if (score <= 70) {
  console.log("Score = ", score, "(D)");
} else if (score <= 80) {
  console.log("Score = ", score, "(C)");
} else if (score <= 90) {
  console.log("Score = ", score, "(B)");
} else if (score <= 100) {
  console.log("Score = ", score, "(A)");
} else {
  console.log("Error");
}

// Homework #EXTRA

let midTerm1 = 40;
let midTerm2 = 40;
let final = 100;

let score = midTerm1 * 0.25 + midTerm2 * 0.25 + final * 0.5;

if (score <= 59) {
  console.log("Score = ", score, "(F)");
} else if (score <= 69) {
  console.log("Score = ", score, "(D)");
} else if (score <= 79) {
  console.log("Score = ", score, "(C)");
} else if (score <= 89) {
  console.log("Score = ", score, "(B)");
} else if (score <= 100) {
  console.log("Score = ", score, "(A)");
} else {
  console.log("Error");
}
