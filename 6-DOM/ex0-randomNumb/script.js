let randomNumb = Math.floor(Math.random() * 10 + 1);

function checkNumb() {
  console.log(document.getElementById("result").innerText);
  const num1 = document.getElementById(`num1`).value;
  if (num1 > randomNumb) {
    document.getElementById(`result`).innerText = `Too high`;
  } else if (num1 < randomNumb) {
    document.getElementById(`result`).innerText = `Too low`;
  } else {
    document.getElementById(`result`).innerText = `Congratulations!~~~`;
  }
}

function resetRandom() {
  // randomNumb;
  randomNumb = Math.floor(Math.random() * 10 + 1);
  document.getElementById(`num1`).value = ``;
  document.getElementById(`result`).innerText = ``;
}
