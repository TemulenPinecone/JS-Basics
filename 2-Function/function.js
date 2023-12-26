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

Non-primitive  

 

Let person = { 
FirstName : 'John', 
LastName : 'Doe', 
Age : 12, 
Email : , 
Adress : }; 
 
Console.log(person); 
Console.log(person.firstName); 

 

Let person = { 
FirstName : 'John', 
LastName : 'Doe', 
Age : 12, 
Email : , 
Adress :  
Object: { 
  // variable дотор дахиад variable зарлаж болно. 
District : , 
 }, 
}; 
 
Console.log(person); 
Console.log(person.firstName); 

// array

let array = [ 'car', 'apple', 'pen', 'bowl' ] ; 
// дотор нь 4 зүйл байгаа бол 0,1,2,3 гэж тоолно
console.log(array[0]); // 'car' 
console.log(array[1]); // 'apple'

let array = [ 'car', 'apple', 'pen', 'bowl' , ['orange']] ; 
console.log(array[4][0], array[0]); 


// city gedeg array zarla
// city ni dotroo 8 hotiin ner aguulna
// hot bolgoniig console.log ashiglaad hewlej haruulna.

// USA object uusge
// State-uudeer ni variable
// state bolgonii population number

let city = ['Stockolm', 'Sydney', 'Tokyo', 'Seoul', 'Vienna', 'Jerusalem', 'Rome', 'London'];
// console.log(city[0], city[1],city[2],city[3],city[4],city[5],city[6],city[7]);
console.log(city[0]);

let USA = {
Alabama: {
 Capital : 'Montgomery', Population : 200603},
Alaska : {
  Capital : 'Juneau', Population : 32255}, 
Florida : {
  Capital : 'Tallahassee', Population : 196068},
NewYork : {
  Capital : 'Albany', Population : 99224},
Alabama1: {
 Capital : 'Montgomery', Population : 200603},
Alaska1 : {
  Capital : 'Juneau', Population : 32255}, 
Florida1 : {
  Capital : 'Tallahassee', Population : 196068},
NewYork1 : {
  Capital : 'Albany', Population : 99224}
};

console.log(USA);


// Object : {
//   city[0], USA.California;
// }


// let USA1 = {
//   state: city[0],
//   population: {
//     all: 398080,
//     malePopulation: 18600,
//     femalePopulation: 110000
//   }
// }

// console.log(USA1);


// 80-d huwaagddag toonii niilber

function sum(a,b,c,d) {
  let result = 0; 
  if (a>80) {result=result+a;}
  if (b>80) {result=result+b;}
  if (c>80) {result=result+c;}
  if (d>80) {result=result+d;}
  return result;
}

let lastResult = sum(46,900,764,4);
console.log(lastResult);

// 5-d huwaagddag toonuudiin urjwer

function multiply(a,b,c,d) {
  let result = 1;
  if (a%5==0) {result=result*a}
  if (b%5==0) {result=result*b}
  if (c%5==0) {result=result*c}
  if (d%5==0) {result=result*d}
  return result;
}

// 5-d huwaagddaggui toonuudiin urjwer
if (a%5!=0)

let lastResult = multiply(15,2,10,4);
console.log(lastResult);

// 80-s ih ba tegsh, or 3-t huwaagddag toonuudiin niilber

function sum(a,b,c) {
  let result = 0;
  if (a>80 && a%2==0 || a%3==0) {result=result+a}
  if (b>80 && b%2==0 || b%3==0) {result=result+b}
  if (c>80 && c%2==0 || c%3==0) {result=result+c}
  return result;
}

let lastResult = sum(91,6,120);
console.log(lastResult);





let display = [
  {
    brand : "LG",
    inch : "23",
    price : 200000,
    year : "2022",
  },
  {
    brand : "sony",
    inch : "31",
    price : 400000,
    year : "2021",
  },
];

let iphonePrices = [900,850,800,790];

console.log(display[0].brand);

display[0,1].price = display[0,1].price * 0.9;
console.log(display[0].price, display[1].price);


// LOOP
// for(initialize; condition, update) {body}

for (let i = 0; i < 10; i = i + 1) {
  console.log(i);
}

// loop // 1 - initialize 
        // 2 - condition 
        // 3 - body -> consloge.log
        // 4 - update

