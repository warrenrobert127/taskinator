console.log("JS Loaded")
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler =function(event) {
    event.preventDefault()
    var userEntry = document.getElementById("task-name").value
    var userTask=document.getElementsByName("task-type")[0].value
    console.log(userTask,"Test")
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task." + userEntry + '- ' + userTask;
    tasksToDoEl.appendChild(listItemEl);
};
formEl.addEventListener("submit", createTaskHandler);




