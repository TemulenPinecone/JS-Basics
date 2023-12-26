const root = document.getElementById(`root`);

// DISPLAY
const display = document.createElement(`div`);
display.setAttribute(`class`, `display`);
root.appendChild(display);

// BUTTON CONTAINER - DIV
const buttonContainer = document.createElement(`div`);
buttonContainer.setAttribute(`class`, `buttonContainer`);
root.appendChild(buttonContainer);

// BUTTONS BOX
// BUTTONS TEXT
const buttons = [
  `C`,
  `+/-`,
  `%`,
  `/`,
  `7`,
  `8`,
  `9`,
  `x`,
  `4`,
  `5`,
  `6`,
  `-`,
  `1`,
  `2`,
  `3`,
  `+`,
  `0`,
  `.`,
  `=`,
];

for (let i = 0; i < 19; i++) {
  const btn = document.createElement(`div`);
  btn.setAttribute(`class`, `btn`);
  buttonContainer.appendChild(btn);

  (i >= 0 && i <= 2) || i == 17
    ? (btn.style.backgroundColor = `#585859`)
    : (i >= 4 && i <= 6) ||
      (i >= 8 && i <= 10) ||
      (i >= 12 && i <= 14) ||
      (i >= 16 && i <= 17)
    ? (btn.style.backgroundColor = `#777677`)
    : (btn.style.backgroundColor = `#FF9F0A`);

  i == 16 ? btn.setAttribute(`class`, `lgBtn`) : null;

  i == 18 ? btn.setAttribute(`id`, `rightBottomBtn`) : null;

  btn.innerText = buttons[i];
}
// document.getElementsByClassName(
//   `btn`
// ).style.fontFamily = `Arial, Helvetica, sans-serif`;
