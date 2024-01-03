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
    x++;

    let counter = document.createElement(`div`);
    counter.setAttribute(`class`, `counter`);
    counter.innerText = `1`;
    header.appendChild(counter);

    let cards = document.createElement(`div`);
    cards.setAttribute(`class`, `cards`);
    board.appendChild(cards);

    let addBtn = document.createElement(`div`);
    addBtn.setAttribute(`class`, `addBtn`);
    addBtn.innerText = `+ Add card`;
    board.appendChild(addBtn);
  }
}

drawBoard();
