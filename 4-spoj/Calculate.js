function calculate(num1, num2, operation) {
  let answer;
  if (operation == "+") {
    answer = num1 + num2;
  } else if (operation == "-") {
    answer = num1 - num2;
  } else if (operation == "*") {
    answer = num1 * num2;
  } else if (operation == "/") {
    answer = num1 / num2;
  } else answer = "Error";
  return answer;
}

let result = calculate(4, 4, "/");
console.log("Answer :", result);
