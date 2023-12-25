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
  const btn = document.createElement(`button`);
  btn.setAttribute(`class`, `btn`);
  i == 16 ? btn.setAttribute(`class`, `longBtn`) : null;
  btn.innerText = buttons[i];
  container.appendChild(btn);
  (i >= 0 && i <= 2) || i == 17
    ? (btn.style.backgroundColor = `#6c6b69`) // Dark grey button
    : i == 3 || i == 7 || i == 11 || i == 15 || i == 18
    ? (btn.style.backgroundColor = `#f1a23d`) // Orange button
    : (btn.style.backgroundColor = `#838381`); //Light grey button
}

btn.addEventListener(
  `click`, () => {
    const temp = btn.
  }
);
