// function declaration
function doSomething(input) {
  return input * input;
}

// function calling
let result = doSomething(15);

console.log(result);

// #1

function printHello() {
  console.log("Hello World");
}

printHello();

// #2

function getSomething(input) {
  console.log("Input : ", input);
}

getSomething("Input Text");

// #3

function returnSomething() {
  return "Hello World";
}

// #4

function getMultiInput(num1, num2) {
  console.log("num1 = ", num1);
  console.log("num2 = ", num2);
  let sum = num1 + num2;
  return sum;
}

let Result = getMultiInput(30, 40);
console.log("Result = ", Result);

// #5 Find Date

function findDate() {
  let date = 1;
  if (date == 1) {
    return "Monday";
  } else if (date == 2) {
    return "Tuesday";
  } else if (date == 3) {
    return "Wednesday";
  } else if (date == 4) {
    return "Thursday";
  } else if (date == 5) {
    return "Friday";
  } else if (date == 6) {
    return "Saturday";
  } else if (date == 7) {
    return "Sunday";
  } else return "Error";
}

console.log(findDate());
// let d = findDate(2);
// console.log(d);

// console.log(findDate(1));

// function printDate(date) {
//   console.log(date);
// }

// #6 Find Month

function findMonth(day) {
if (day <= 31) {
  return("January");
} else if (day <= 59) {
  return("February");
} else if (day <= 90) {
  return("March");
} else if (day <= 120) {
  return("April");
} else if (day <= 151) {
  return("May");
} else if (day <= 181) {
  return("June");
} else if (day <= 112) {
  return("July");
} else if (day <= 143) {
  return("August");
} else if (day <= 173) {
  return("September");
} else if (day <= 204) {
  return("October");
} else if (day <= 234) {
  return("November");
} else if (day <= 265) {
  return("December");
} else {
  return("Error");
}
}

let result = findMonth(75);
console.log("That month is : ", result);




// logic operator
// &&	and 
// ||	or
// !	not