function add() {
  const num1 = document.getElementById(`num1`).value;
  const num2 = document.getElementById(`num2`).value;
  let addResult = Number(num1) + Number(num2);
  document.getElementById(`result`).innerText = addResult;
  console.log(addResult);
}
function substract() {
  const num1 = document.getElementById(`num1`).value;
  const num2 = document.getElementById(`num2`).value;
  let substractResult = Number(num1) - Number(num2);
  document.getElementById(`result`).innerText = substractResult;
  console.log(substractResult);
}
function multiply() {
  const num1 = document.getElementById(`num1`).value;
  const num2 = document.getElementById(`num2`).value;
  let multiplyResult = Number(num1) * Number(num2);
  document.getElementById(`result`).innerText = multiplyResult;
  console.log(multiplyResult);
}
function divide() {
  const num1 = document.getElementById(`num1`).value;
  const num2 = document.getElementById(`num2`).value;
  let divideResult = Number(num1) / Number(num2);
  document.getElementById(`result`).innerText = divideResult;
  console.log(divideResult);
}
