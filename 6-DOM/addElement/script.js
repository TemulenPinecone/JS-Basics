const root = document.getElementById(`root`);

const btn = document.createElement(`button`);
btn.innerText = `Button`;
btn.setAttribute(`class`, `btn`);
root.appendChild(btn);

const container = document.createElement(`div`);
container.setAttribute(`class`, `container`);
root.appendChild(container);

let count = 1;

btn.addEventListener(`click`, add);
function add() {
  const box = document.createElement(`div`);
  box.setAttribute(`class`, `boxClass`);
  container.appendChild(box);
  box.innerText = count;
  count += 1;
}
