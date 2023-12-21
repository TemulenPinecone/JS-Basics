const root = document.getElementById("root");

// HEADER CLASS - 3 BUTTON
const header = document.createElement(`div`);
header.setAttribute(`class`, `header`);
root.appendChild(header);

const status = document.createElement(`div`);
status.setAttribute(`class`, `status`);
root.appendChild(status);

const startEasyButton = document.createElement("button");
startEasyButton.setAttribute(`class`, `button`);
startEasyButton.innerText = "Easy : 3 x 3";
header.appendChild(startEasyButton);

const startMediumButton = document.createElement("button");
startMediumButton.setAttribute(`class`, `button`);
startMediumButton.innerText = "Medium : 4 x 4";
header.appendChild(startMediumButton);

const startHardButton = document.createElement("button");
startHardButton.setAttribute(`class`, `button`);
startHardButton.innerText = "Hard : 5 x 5";
header.appendChild(startHardButton);

// CONTAINER
const container = document.createElement(`div`);
container.setAttribute(`class`, `container`);
root.appendChild(container);

// EASY BUTTON -> FUNCTION

startEasyButton.addEventListener("click", () => {
  startGame(8);
});
startMediumButton.addEventListener("click", () => {
  startGame(15);
});
startHardButton.addEventListener("click", () => {
  startGame(24);
});

// START GAME FUNCTION

function startGame(x) {
  const contWidthCalc = Math.sqrt(x + 1) * 100 + 100;
  container.style.width = `${contWidthCalc}px`;
  container.innerHTML = ``;
  const red = Math.floor(Math.random() * 245) + 20;
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const randomColor = `rgb(${red},${green},${blue})`;
  const differentColor = `rgb(${red - 20},${green},${blue})`;

  const randomBoxSet = Math.floor(Math.random() * 8);
  // console.log(randomBoxSet);

  for (let i = 0; i < x; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    container.appendChild(box);
    box.style.backgroundColor = randomColor;
    if (i == randomBoxSet) {
      const diffBox = document.createElement("div");
      const diffBoxP = document.createElement(`p`);
      diffBoxP.innerText = `Different Box`;
      diffBox.appendChild(diffBoxP);
      diffBox.setAttribute("class", "box");
      container.appendChild(diffBox);

      diffBox.style.backgroundColor = differentColor;
      diffBox.addEventListener(`click`, () => {
        alert(`Congratulations~~~!`);
      });
    }
    // box.addEventListener(`click`, () => {
    //   alert(`Wrong color box~~~`);
    //   console.log(box);
    // });

    // box.addEventListener(`click`, (e) => {
    //   console.log(e.target);
    // });
    box.addEventListener(`click`, () => {});
  }
}

// localSTORAGE
// localStorage.setItem("item", "andy");
// console.log(localStorage.getItem("item"));
