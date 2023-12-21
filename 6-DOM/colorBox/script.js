const root = document.getElementById("root");

const header = document.createElement(`div`);
header.setAttribute(`class`, `header`);
root.appendChild(header);

const startEasyButton = document.createElement("button");
startEasyButton.setAttribute(`class`, `button`);
startEasyButton.innerText = "Easy : 3 x 3";
header.appendChild(startEasyButton);

const startMediumbutton = document.createElement("button");
startMediumbutton.setAttribute(`class`, `button`);
startMediumbutton.innerText = "Medium : 4 x 4";
header.appendChild(startMediumbutton);

const startHardButton = document.createElement("button");
startHardButton.setAttribute(`class`, `button`);
startHardButton.innerText = "Hard : 5 x 5";
header.appendChild(startHardButton);

startEasyButton.addEventListener("click", startGameEasy);

function startGameEasy() {
  const containerEasy = document.createElement(`div`);
  containerEasy.setAttribute(`class`, `containerEasy`);
  containerEasy.appendChild(root);

  for (let i = 0; i < 8; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    containerEasy.appendChild(box);
    //   box.style.backgroundColor = randomColor;
  }

  //   const diffBox = document.createElement("div");
  //   const diffBoxP = document.createElement(`p`);
  //   diffBoxP.innerText = `Different Box`;
  //   diffBox.appendChild(diffBoxP);

  //   diffBox.setAttribute("class", "box");

  //   const red = Math.floor(Math.random() * 245) + 10;
  //   const green = Math.floor(Math.random() * 255);
  //   const blue = Math.floor(Math.random() * 255);

  //   const randomColor = `rgb(${red},${green},${blue})`;
  //   const differentColor = `rgb(${red - 10},${green},${blue})`;

  //   diffBox.style.backgroundColor = differentColor;

  //   root.appendChild(diffBox);
}

// exercise function startGame() {
//   const box = document.createElement("div");
//   const diffBox = document.createElement("div");
//   const red = Math.floor(Math.random() * 245) + 10;
//   const green = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);
//   const randomColor = `rgb(${red},${green},${blue})`;
//   const differentColor = `rgb(${red - 10},${green},${blue})`;

//   box.setAttribute("class", "box");
//   diffBox.setAttribute("class", "box");
//   box.style.backgroundColor = randomColor;
//   diffBox.style.backgroundColor = differentColor;
//   root.appendChild(box);
//   root.appendChild(diffBox);
// }

// localSTORAGE
localStorage.setItem("item", "andy");
console.log(localStorage.getItem("item"));
