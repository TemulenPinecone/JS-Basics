const root = document.getElementById(`root`);

// CONTAINER
const container = document.createElement(`class`);
container.setAttribute(`class`, `container`);
root.appendChild(container);

// INPUT TAG
const rndNum1 = document.createElement(`input`);
rndNum1.setAttribute("id", `rndNum1`);
rndNum1.setAttribute(`type`, `number`);
rndNum1.disabled = true;
rndNum1.defaultValue = Math.floor(Math.random() * 100 + 1);
container.appendChild(rndNum1);

const rndNum2 = document.createElement(`input`);
rndNum2.setAttribute("id", `rndNum2`);
rndNum2.setAttribute(`type`, `number`);
rndNum2.defaultValue = Math.floor(Math.random() * 100 + 1);
rndNum2.disabled = true;
container.appendChild(rndNum2);

const checkNum = document.createElement(`input`);
checkNum.setAttribute("id", `checkNum`);
checkNum.setAttribute(`type`, `number`);
container.appendChild(checkNum);

// BUTTON TAG
const checkBtn = document.createElement(`button`);
checkBtn.setAttribute(`id`, `checkBtn`);
container.appendChild(checkBtn);
checkBtn.innerText = `Шалгах`;

const resetBtn = document.createElement(`button`);
resetBtn.setAttribute(`id`, `resetBtn`);
container.appendChild(resetBtn);
resetBtn.innerText = `Шинэчлэх`;

checkBtn.addEventListener(`click`, checkSum);
function checkSum() {
  let result = Number(rndNum1.value) + Number(rndNum2.value);
  if (checkNum.value == result) {
    alert(`Зөв байна`);
  } else {
    alert(`Буруу байна`);
  }
}

resetBtn.addEventListener(`click`, reset);
function reset() {
  (rndNum1.defaultValue = Math.floor(Math.random() * 100 + 1)),
    (rndNum2.defaultValue = Math.floor(Math.random() * 100 + 1));
}
