const button = document.querySelector(".btn-add-task");
const input = document.querySelector(".input-task");
const completeList = document.querySelector(".list-task");
let itemList = [];

function addNewTask() {
  itemList.push({
    task: input.value,
    completed: false,
  });
  input.value = "";
  showTask();
}
function emptyTask() {
  if (input.value === "") {
    alert("O campo não pode estar vazio. Por favor, preencha-o.");
  } else {
    return addNewTask();
  }
}
function showTask() {
  let newLi = "";
  itemList.forEach((item, index) => {
    newLi =
      newLi +
      ` 
       <li class="task ${item.completed && "done"}">
       <img class="btnTask"src="./img/check-box.png" alt="checked" onclick="checkTask(${index})">
       <p>${item.task}</p>
       <img class="btnTask" src="./img/delete.png" alt="delete" onclick="deleteItem(${index})">
       </li>`;
  });
  completeList.innerHTML = newLi;
  localStorage.setItem("list", JSON.stringify(itemList));
}
function checkTask(index) {
  itemList[index].completed = !itemList[index].completed;
  showTask();
}
function deleteItem(index) {
  itemList.splice(index, 1);
  showTask();
}
function reloadTasks() {
  const localStorageTasks = localStorage.getItem("list");
  if (localStorageTasks) {
    itemList = JSON.parse(localStorageTasks);
  }
  showTask();
}
reloadTasks();
button.addEventListener("click", emptyTask);
