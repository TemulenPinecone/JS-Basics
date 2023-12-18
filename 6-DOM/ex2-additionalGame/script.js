document.getElementById(`random1`).defaultValue = Math.floor(
  Math.random() * 10 + 1
);
document.getElementById(`random2`).defaultValue = Math.floor(
  Math.random() * 10 + 1
);

let input3 = document.getElementById(`resultCheck`).value;

function checkSum() {
  if (
    input3 ==
    document.getElementById(`random1`).value +
      document.getElementById(`random2`)
  ) {
    alert(`Зөв байна`);
  } else {
    alert(`Буруу байна`);
  }
}

function resetInp() {
  document.getElementById(`random1`).value = math.floor(math.random() * 10 + 1);
  document.getElementById(`random2`).value = math.floor(math.random() * 10 + 1);
}
