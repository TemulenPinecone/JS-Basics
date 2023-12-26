const root = document.getElementById(`root`);

const mainContainer = document.createElement(`div`);
mainContainer.setAttribute(`class`, `mainContainer`);
root.appendChild(mainContainer);

const headerContainer = document.createElement(`div`);
headerContainer.setAttribute(`class`, `headerContainer`);
mainContainer.appendChild(headerContainer);

const toDoContainer = document.createElement(`div`);
toDoContainer.setAttribute(`class`, `toDoContainer`);
toDoContainer.setAttribute(`id`, `toDoContainer`);
mainContainer.appendChild(toDoContainer);

const header = document.createElement(`h1`);
header.setAttribute(`class`, `h1`);
header.innerText = `To-Do List`;
headerContainer.appendChild(header);

const input = document.createElement(`input`);
input.setAttribute(`class`, `input`);
input.setAttribute(`id`, `input`);
input.placeholder = `Enter task here...`;
headerContainer.appendChild(input);

const addBtn = document.createElement(`button`);
addBtn.setAttribute(`id`, `addBtn`);
addBtn.innerText = `Add Task`;
headerContainer.appendChild(addBtn);

addBtn.addEventListener(`click`, addTask);
function addTask() {
  let task = input.value;
  //   console.log(`task :`, task);

  const taskGroup = document.createElement(`div`);
  taskGroup.setAttribute(`class`, `taskGroup`);
  taskGroup.setAttribute(`id`, `taskGroup`);
  toDoContainer.appendChild(taskGroup);

  const toDo = document.createElement(`div`);
  const toDoText = document.createElement(`p`);
  toDoText.setAttribute(`class`, `toDoText`);
  taskGroup.appendChild(toDo);
  toDo.setAttribute(`class`, `toDo`);
  toDo.setAttribute(`id`, `toDo`);
  toDo.appendChild(toDoText);

  toDoText.innerText = task;
  //   console.log(`toDoText :`, toDoText);

  // DELETE BUTTON
  const dltBtn = document.createElement(`button`);
  dltBtn.setAttribute(`class`, `dltBtn`);
  dltBtn.innerText = `Delete`;
  taskGroup.appendChild(dltBtn);

  dltBtn.addEventListener(`click`, deleteTask);
}

function deleteTask() {
  const selDelTask = document.getElementById(`toDo`);
  selDelTask.parentElement.remove();
}
