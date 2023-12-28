const root = document.getElementById(`root`);

// const body = document.getElementsByName("body")


// MAIN CONTAINER
const mainContainer = document.createElement(`div`);
mainContainer.setAttribute(`class`, `mainContainer`);
root.appendChild(mainContainer);

// HEADER CONTAINER
const headerContainer = document.createElement(`div`);
headerContainer.setAttribute(`class`, `headerContainer`);
mainContainer.appendChild(headerContainer);

// HEADER CONTAINER - H1
const header = document.createElement(`h1`);
header.setAttribute(`class`, `h1`);
header.innerText = `To-Do List`;
headerContainer.appendChild(header);

// HEADER CONTAINER - INPUT TAG
let inputArr = [];
let counter = 1;

const input = document.createElement(`input`);
input.setAttribute(`class`, `input`);
input.setAttribute(`id`, `input`);
input.placeholder = `Enter task here...`;
headerContainer.appendChild(input);

// HEADER CONTAINER - ADD TASK BUTTON
const addBtn = document.createElement(`button`);
addBtn.setAttribute(`id`, `addBtn`);
addBtn.innerText = `Add Task`;
headerContainer.appendChild(addBtn);

// TODO CONTAINER
const toDoContainer = document.createElement(`div`);
toDoContainer.setAttribute(`class`, `toDoContainer`);
toDoContainer.setAttribute(`id`, `toDoContainer`);
mainContainer.appendChild(toDoContainer);

// taskGroup, dltBtn ID numberator
let x = 1;

// ADD TASK FUNCTION
addBtn.addEventListener(`click`, addTask);

function addTask() {
  // TASK GROUP DIV
  const taskGroup = document.createElement(`div`);
  taskGroup.setAttribute(`class`, `taskGroup`);
  taskGroup.setAttribute(`id`, `taskGroup${x}`);
  toDoContainer.appendChild(taskGroup);

  // TODO DIV, TODOTEXT P
  const toDo = document.createElement(`div`);
  const toDoP = document.createElement(`p`);
  toDo.setAttribute(`class`, `toDo`);
  toDo.setAttribute(`id`, `toDo`);
  toDoP.setAttribute(`id`, `toDoP${x}`);
  taskGroup.appendChild(toDo);
  toDo.appendChild(toDoP);

  // toDoP.innerText = inputArr[inputArr.length - 1];
  toDoP.innerText = input.value;
  inputArr[inputArr.length] = toDoP.innerText;
  // console.log(`inputArr : `, inputArr);
  counter = inputArr.length - 1;
  // console.log(`counter : `, counter);

  // let temp = input.value;
  // inputArr.push = temp;

  // DELETE BUTTON
  const dltBtn = document.createElement(`button`);
  dltBtn.setAttribute(`class`, `dltBtn`);
  dltBtn.setAttribute(`id`, `dltBtn${x}`);
  dltBtn.innerText = `Delete`;
  taskGroup.appendChild(dltBtn);

  // EDIT BUTTON
  const editBtn = document.createElement(`button`);
  editBtn.setAttribute(`class`, `editBtn`);
  editBtn.innerText = `Edit`;
  taskGroup.appendChild(editBtn);

  // let dlt = document.getElementById(`taskGroup${x}`);
  // dltBtn.addEventListener(`click`, removeAttribute(dlt));
  // dltBtn.addEventListener(`click`, removeAttribute(dlt));
  // taskGroup.removeAttribute

  editBtn.addEventListener(`click`, editTask);

  x++;
}

// DELETE FUNCTION
// function deleteTask() {
//   removeAttribute(dlt);
// }
const deleteDiv = () => {
  document.getElementById(`taskGroup ${x}`);
  toDoContainer.removeChild(taskGroup);
  console.log(toDoContainer);
};

// EDIT FUNCTION
function editTask() {
  const editToDo = document.createElement(`input`);
  editToDo.setAttribute(`class`, `editToDo`);
  editToDo.setAttribute(`id`, `editToDo`);
  toDo.appendChild(editToDo);
  editToDo.defaultValue = inputArr[counter];
  console.log(`inputArr[counter] : `, inputArr[counter]);
  console.log(`inputArr : `, inputArr);
  console.log(`counter`, counter);
}
