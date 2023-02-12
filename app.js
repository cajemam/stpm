// Create a task object with properties of task name and status
function Task(name, status) {
  this.name = name;
  this.status = status || 'Incomplete';
}
 
// Initialize the list of tasks
var tasks = [];
 
// Function to add a new task
function addTask() {
  var taskName = document.getElementById("task-name").value;
  var task = new Task(taskName);
  tasks.push(task);
  displayTasks();
}
 
// Function to display the list of tasks
function displayTasks() {
  var taskList = document.getElementById("task-list");
  taskList.innerHTML = "";
  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    taskList.innerHTML += "<li class='list-group-item'>" + task.name +
      " <div class='status " + task.status + "'>" + task.status + "</div> <div class='unite-btns'>" + 
      " <button onclick='setStatusComplete(" + i + ")'>Complete</button>" + 
      " <button onclick='setDeleteTask(" + i + ")'>Delete</button>" + 
      " <button onclick='setStatusIncomplete(" + i + ")'>Incomplete</button>" + "</div></li>";
  }
}
 
// Function to set the status of a task to complete
function setStatusComplete(index) {
  tasks[index].status = "Complete";
  displayTasks();
}
 
// Function to set the status of a task to incomplete
function setStatusIncomplete(index) {
  tasks[index].status = "Incomplete";
  displayTasks();
}

function setDeleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
  }
 
// Function to export the list of tasks to local storage
function exportTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
 
// Function to load the list of tasks from local storage
function loadTasks() {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  displayTasks();
}
 
// Add event listeners for the add task button and export tasks button
document.getElementById("add-task").addEventListener("click", addTask);
document.getElementById("export-tasks").addEventListener("click", exportTasks);
 
// Load the list of tasks when the page loads
window.addEventListener("load", loadTasks);
