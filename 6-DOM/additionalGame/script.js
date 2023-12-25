const num1 = (document.getElementById(`random1`).defaultValue = Math.floor(
  Math.random() * 10 + 1
));
const num2 = (document.getElementById(`random2`).defaultValue = Math.floor(
  Math.random() * 10 + 1
));
document.getElementById(`random1`).disabled = true;
document.getElementById(`random2`).disabled = true;

let input3 = document.getElementById(`resultCheck`).value;

function checkSum() {
  let result = Number(num1) + Number(num2);
  // if (Number(result) == Number(input3)) {
    document.getElementById(`random1`) 
    alert(`Зөв байна`);
  } else {
    alert(`Буруу байна`);
  }
}

function resetInp() {
  num1 = math.floor(math.random() * 10 + 1);
  num2 = math.floor(math.random() * 10 + 1);
}
