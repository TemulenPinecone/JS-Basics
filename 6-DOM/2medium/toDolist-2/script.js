let todos = [
  {
    title: `JavaScript`,
    description: `Learn Javascript master`,
    status: `To do`,
    priority: `Low`,
  },
  {
    title: `TypeScript`,
    description: `Learn Typescript master`,
    status: `Done`,
    priority: `Low`,
  },
  {
    title: `Java`,
    description: `Learn Java master`,
    status: `Stuck`,
    priority: `Medium`,
  },
  {
    title: `Python`,
    description: `Learn Python master`,
    status: `In progress`,
    priority: `Medium`,
  },
  {
    title: `MySQL`,
    description: `Learn MySQL master`,
    status: `In progress`,
    priority: `High`,
  },
  {
    title: `HTML CSS master level`,
    description: `Learn HTML CSS master level`,
    status: `doIn progressne`,
    priority: `Medium`,
  },
  {
    title: `React`,
    description: `Learn React master`,
    status: `In progress`,
    priority: `Medium`,
  },
  {
    title: `English language`,
    description: `Learn English language master level`,
    status: `To do`,
    priority: `High`,
  },
  {
    title: `VueJS`,
    description: `Learn VueJS`,
    status: `In progress`,
    priority: `High`,
  },
  {
    title: `Git`,
    description: `Learn Git master`,
    status: `In progress`,
    priority: `Medium`,
  },
];

const root = document.getElementById(`root`);

const container = document.createElement(`div`);
container.setAttribute(`class`, `container`);
root.appendChild(container);

const boards = document.createElement(`div`);
boards.setAttribute(`class`, `boards`);
container.appendChild(boards);

// DRAW BOARD FUNCTION
function drawBoard() {
  let x = 0;
  let headerInnerTxt = [`To do`, `In progress`, `Stuck`, `Done`];
  let addBtnArr = [`ToDo`, `InProgress`, `Stuck`, `Done`];

  for (let i = 0; i < 4; i++) {
    let board = document.createElement(`div`);
    board.setAttribute(`class`, `board`);
    boards.appendChild(board);

    let header = document.createElement(`div`);
    header.setAttribute(`class`, `header`);
    board.appendChild(header);

    let headerTitle = document.createElement(`div`);
    headerTitle.setAttribute(`class`, `headerTitle`);
    header.appendChild(headerTitle);
    headerTitle.innerText = headerInnerTxt[x];

    let counter = document.createElement(`div`);
    counter.setAttribute(`class`, `counter`);
    counter.innerText = `1`;
    header.appendChild(counter);

    let cards = document.createElement(`div`);
    cards.setAttribute(`class`, `cards`);
    board.appendChild(cards);

    var addBtn = document.createElement(`div`);
    addBtn.setAttribute(`class`, `addBtn`);
    addBtn.setAttribute(`id`, `addBtn${addBtnArr[x]}`);
    // addBtn.setAttribute(`id`, `addBtn`);
    addBtn.innerText = `+ Add card`;
    board.appendChild(addBtn);
    x++;
  }
}
drawBoard();

// MODAL CONTAINER
let modalCont = document.createElement(`div`);
modalCont.setAttribute(`class`, `modalCont`);
root.appendChild(modalCont);

// MODAL
let modal = document.createElement(`div`);
modal.setAttribute(`class`, `modal`);
modalCont.appendChild(modal);

let modalTitle = document.createElement(`p`);
modalTitle.innerText = `Title`;
let titleInput = document.createElement(`input`);
titleInput.setAttribute(`type`, `text`);
modal.appendChild(modalTitle);
modal.appendChild(titleInput);

let modalDesc = document.createElement(`p`);
modalDesc.innerText = `Description`;
let descInput = document.createElement(`input`);
descInput.setAttribute(`type`, `text`);
modal.appendChild(modalDesc);
modal.appendChild(descInput);

let statusTxt = [`To do`, `In progress`, `Stuck`, `Done`];
let modalStatus = document.createElement(`p`);
modalStatus.innerText = `Status`;
let statusSelect = document.createElement(`select`);
modal.appendChild(modalStatus);
modal.appendChild(statusSelect);
for (let i = 0; i < statusTxt.length; i++) {
  let option = document.createElement(`option`);
  option.setAttribute(`value`, statusTxt[i]);
  option.innerText = statusTxt[i];
  statusSelect.appendChild(option);
}

let priorityTxt = [`Low`, `Medium`, `High`];
let modalPriority = document.createElement(`p`);
modalPriority.innerText = `Priority`;
let prioritySelect = document.createElement(`select`);
modal.appendChild(modalPriority);
modal.appendChild(prioritySelect);
for (let i = 0; i < priorityTxt.length; i++) {
  let option = document.createElement(`option`);
  option.setAttribute(`value`, priorityTxt[i]);
  option.innerText = priorityTxt[i];
  prioritySelect.appendChild(option);
}

let submitBtn = document.createElement(`button`);
submitBtn.setAttribute(`class`, `submitBtn`);
submitBtn.innerText = `Submit`;
modal.appendChild(submitBtn);

let addBtnToDo = document.getElementById(`addBtnToDo`);
let addBtnInProgress = document.getElementById(`addBtnInProgress`);
let addBtnStuck = document.getElementById(`addBtnStuck`);
let addBtnDone = document.getElementById(`addBtnDone`);

addBtnToDo.onclick = function addCard() {
  modalCont.style.display = `block`;
};
addBtnInProgress.onclick = function addCard() {
  modalCont.style.display = `block`;
};
addBtnStuck.onclick = function addCard() {
  modalCont.style.display = `block`;
};
addBtnDone.onclick = function addCard() {
  modalCont.style.display = `block`;
};

window.onclick = function (event) {
  if (event.target == modalCont) {
    modalCont.style.display = "none";
  }
};
