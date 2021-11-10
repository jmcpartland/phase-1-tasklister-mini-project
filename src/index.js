document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm = document.getElementById("create-task-form");
  taskForm.addEventListener('submit', newTask);

});

function newTask(event) {
  event.preventDefault()
  const taskDescription = document.getElementById("new-task-description");
  const li = document.createElement('li')
  li.innerText = taskDescription.value;
  
  addNewTask(li)
  event.target.reset();
};

function addNewTask(task) {
  document.getElementById("tasks").appendChild(task);
};