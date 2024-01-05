const todos = [
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
// const todos = [];

// CREATE TAG
function createTag(tagName, tagClass, tagId) {
  const tag = document.createElement(`${tagName}`);
  if (tagClass != "" && tagClass != undefined) {
    tag.setAttribute("class", `${tagClass}`);
  }
  if (tagId != "" && tagId != undefined) {
    tag.setAttribute("id", `${tagId}`);
  }
  return tag;
}
// const header = createTag(`attribute`, `className`, `idName`);

// CONTAINER
const container = document.createElement(`div`);
container.setAttribute(`class`, `container`);
root.appendChild(container);

// BOARDS CONTAINER
const boards = document.createElement(`div`);
boards.setAttribute(`class`, `boards`);
container.appendChild(boards);

// MODAL CONTAINER
let modalCont = document.createElement(`div`);
modalCont.setAttribute(`class`, `modalCont`);
root.appendChild(modalCont);

// CREATE MODAL
let modal = document.createElement(`div`);
modal.setAttribute(`class`, `modal`);
modalCont.appendChild(modal);

// const header = createTag(`attribute`, `className`, `idName`);

let modalTitle = document.createElement(`p`);
modalTitle.innerText = `Title`;
let titleInput = document.createElement(`input`);
titleInput.setAttribute(`type`, `text`);
titleInput.setAttribute(`id`, `titleInput`);
modal.appendChild(modalTitle);
modal.appendChild(titleInput);

let modalDesc = document.createElement(`p`);
modalDesc.innerText = `Description`;
let descInput = document.createElement(`input`);
descInput.setAttribute(`type`, `text`);
descInput.setAttribute(`id`, `descInput`);
modal.appendChild(modalDesc);
modal.appendChild(descInput);

let statusTxt = [`To do`, `In progress`, `Stuck`, `Done`];
let modalStatus = document.createElement(`p`);
modalStatus.innerText = `Status`;
let statusSelect = document.createElement(`select`);
statusSelect.setAttribute(`id`, `statusSelect`);
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
prioritySelect.setAttribute(`id`, `prioritySelect`);
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

// CREATE BOARD FUNCTION
function createBoard() {
  let x = 0;
  let headerInnerTxt = [`To do`, `In progress`, `Stuck`, `Done`];
  let addBtnArr = [`ToDo`, `InProgress`, `Stuck`, `Done`];
  let boardName = [`ToDo`, `InProgress`, `Stuck`, `Done`];
  let cardsName = [`ToDo`, `InProgress`, `Stuck`, `Done`];

  for (let i = 0; i < 4; i++) {
    var board = document.createElement(`div`);
    board.setAttribute(`class`, `board`);
    board.setAttribute(`id`, `${boardName[x]}Board`);
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

    var cards = document.createElement(`div`);
    cards.setAttribute(`class`, `cards`);
    cards.setAttribute(`id`, `${cardsName[x]}Cards`);
    board.appendChild(cards);

    var addBtn = document.createElement(`div`);
    addBtn.setAttribute(`class`, `addBtn`);
    addBtn.setAttribute(`id`, `addBtn${addBtnArr[x]}`);
    addBtn.innerText = "+" + ` ` + "Add card";
    board.appendChild(addBtn);
    x++;
  }
}
createBoard();
render();

// CREATE CARD EACH
function createCard(x) {
  const cardDiv = document.createElement(`div`);
  const doneSign = document.createElement(`div`);
  const doneSignI = document.createElement(`div`);
  const detail = document.createElement(`div`);
  const detailH4 = document.createElement(`h4`);
  const detailP = document.createElement(`p`);
  const detailDiv = document.createElement(`div`);
  const actions = document.createElement(`div`);
  const actionsSym1 = document.createElement(`div`);
  const actionsSym2 = document.createElement(`div`);

  doneSignI.innerHTML = `<i class="fa-sharp fa-regular fa-circle-check"></i>`;
  actionsSym1.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;
  actionsSym2.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;

  cardDiv.setAttribute(`class`, `cardDiv`);
  doneSign.setAttribute(`class`, `doneSign`);
  doneSignI.setAttribute(`class`, `doneSignI`);
  doneSignI.setAttribute(`id`, `doneSignI`);
  detail.setAttribute(`class`, `detail`);
  actions.setAttribute(`class`, `actions`);
  detailDiv.setAttribute(`class`, `priority`);
  actionsSym1.setAttribute(`class`, `actionsSym1`);
  actionsSym2.setAttribute(`class`, `actionsSym2`);

  detailH4.innerText = x.title;
  detailP.innerText = x.description;
  detailDiv.innerText = x.priority;

  cardDiv.appendChild(doneSign);
  cardDiv.appendChild(detail);
  cardDiv.appendChild(actions);
  doneSign.appendChild(doneSignI);
  detail.appendChild(detailH4);
  detail.appendChild(detailP);
  detail.appendChild(detailDiv);
  actions.appendChild(actionsSym1);
  actions.appendChild(actionsSym2);

  return cardDiv;
}
function render() {
  const cardsToDo = document.getElementById(`ToDoCards`);
  const cardsInProg = document.getElementById(`InProgressCards`);
  const cardsStuck = document.getElementById(`StuckCards`);
  const cardsDone = document.getElementById(`DoneCards`);
  cardsToDo.innerHTML = "";
  cardsInProg.innerHTML = "";
  cardsStuck.innerHTML = "";
  cardsDone.innerHTML = "";

  todos.map((a) => {
    if (a.status == `To do`) {
      cardsToDo.appendChild(createCard(a));
      // debugger;
    } else if (a.status == `In progress`) {
      cardsInProg.appendChild(createCard(a));
      // debugger;
    } else if (a.status == `Stuck`) {
      cardsStuck.appendChild(createCard(a));
      // debugger;
    } else if (a.status == `Done`) {
      cardsDone.appendChild(createCard(a));
    }
  });
}

submitBtn.onclick = function modalValue() {
  let modalTitle = document.getElementById(`titleInput`).value;
  let modalDesc = document.getElementById(`descInput`).value;
  let modalStatus = document.getElementById(`statusSelect`).value;
  let modalPriority = document.getElementById(`prioritySelect`).value;
  todos.push({
    title: modalTitle,
    description: modalDesc,
    status: modalStatus,
    priority: modalPriority,
  });
  // console.log(todos);
  render();
};

// ADD CARD BUTTON SHOW  OR NOT SHOW
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

// input/typecheckbox
// node package manager - npm
