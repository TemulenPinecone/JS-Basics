const root = document.getElementById(`root`);

// DISPLAY
const display = document.createElement(`div`);
const displayText = document.createElement(`p`);
display.setAttribute(`class`, `display`);
displayText.setAttribute(`id`, `dispText`);
display.appendChild(displayText);
root.appendChild(display);

// CONTAINER
const container = document.createElement(`div`);
container.setAttribute(`class`, `container`);
root.appendChild(container);

const buttons = [
  `C`, //0
  `+/-`,
  `%`,
  `/`, //3
  `7`,
  `8`,
  `9`,
  `x`, //7
  `4`,
  `5`,
  `6`,
  `-`, //10
  `1`,
  `2`,
  `3`,
  `+`, //14
  `0`,
  `.`,
  `=`, //17
];

for (let i = 0; i < 19; i++) {
  const btn = document.createElement(`button`);
  btn.setAttribute(`class`, `btn`);
  i == 16 ? btn.setAttribute(`class`, `longBtn`) : null;
  btn.innerText = buttons[i];
  btn.addEventListener(`click`, (e) => {
    let temp = 0;
    let input = e.target.innerText;
    if (i == 0) {
      displayText.innerText = ``;
    } else if (i == 1) {
      displayText.innerText = Number(displayText.innerText) * -1;
    } else if (i == 3) {
      temp = Number(displayText.innerText);
    } else if () {
    } else displayText.innerText += input;
  });
  container.appendChild(btn);
  (i >= 0 && i <= 2) || i == 17
    ? (btn.style.backgroundColor = `#6c6b69`) // Dark grey button
    : i == 3 || i == 7 || i == 11 || i == 15 || i == 18
    ? (btn.style.backgroundColor = `#f1a23d`) // Orange button
    : (btn.style.backgroundColor = `#838381`); //Light grey button
}

// document.querySelector(`#`)