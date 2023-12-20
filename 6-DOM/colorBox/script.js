const root = document.getElementById("root");

const startButton3 = document.createElement("button");
startButton3.innerText = "Start : 3 x 3";
root.appendChild(startButton3);

// const startButton4 = document.createElement("button");
// startButton4.innerText = "Start : 4 x 4";
// root.appendChild(startButton4);

// const startButton5 = document.createElement("button");
// startButton5.innerText = "Start : 5 x 5";
// root.appendChild(startButton5);

startButton3.addEventListener("click", startGame);

function startGame() {
  const container3 = document.createElement(`div`);
  container3.setAttribute(`id`, `container3Id`);
  container3.setAttribute(`class`, `box3`);
  container3.appendChild(root);

  for (let i = 0; i < 8; i++) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    //   box.style.backgroundColor = randomColor;
    container3.appendChild(box);
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
