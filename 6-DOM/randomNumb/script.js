function randomNumb100() {
  const num1 = document.getElementById(`num1`).value;
  const num2 = document.getElementById(`num2`).value;
  let x = Math.floor(Math.random() * 100 + 1);
  document.getElementById(`result`).innerText = addResult;
  console.log(addResult);
}

let x = Math.floor(Math.random() * 100 + 1);
