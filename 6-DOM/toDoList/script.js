const root = document.getElementById(`root`);

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

let inputArr = [];
let counter = 0;

// ADD TASK FUNCTION
addBtn.addEventListener(`click`, addTask);
function addTask() {
  inputArr[inputArr.length] = input.value;
  counter = inputArr.length - 1;
  // console.log({ counter });

  // TASK GROUP DIV
  const taskGroup = document.createElement(`div`);
  taskGroup.setAttribute(`class`, `taskGroup`);
  taskGroup.setAttribute(`id`, `taskGroup`);
  toDoContainer.appendChild(taskGroup);

  // TODO DIV, TODOTEXT P
  const toDo = document.createElement(`div`);
  toDo.setAttribute(`class`, `toDo`);
  toDo.setAttribute(`id`, `toDo`);
  taskGroup.appendChild(toDo);

  toDo.innerText = inputArr[inputArr.length - 1];

  // DELETE BUTTON
  const dltBtn = document.createElement(`button`);
  dltBtn.setAttribute(`class`, `dltBtn`);
  dltBtn.setAttribute(`id`, `dltBtn`);
  dltBtn.innerText = `Delete`;
  taskGroup.appendChild(dltBtn);

  dltBtn.addEventListener(`click`, deleteTask);

  // DELETE FUNCTION
  function deleteTask() {
    document.getElementById(`taskGroup`);
    taskGroup.remove();
  }

  // EDIT BUTTON
  const editBtn = document.createElement(`button`);
  editBtn.setAttribute(`class`, `editBtn`);
  editBtn.innerText = `Edit`;
  taskGroup.appendChild(editBtn);

  editBtn.addEventListener(`click`, editTask);

  // EDIT FUNCTION
  function editTask() {
    const editToDo = document.createElement(`input`);
    editToDo.setAttribute(`class`, `editToDo`);
    editToDo.setAttribute(`id`, `editToDo`);
    toDo.appendChild(editToDo);
    editToDo.defaultValue = inputArr[counter];
  }
}
