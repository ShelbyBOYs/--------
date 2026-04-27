const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

console.log(taskInput, addTaskButton, taskList);

addTaskButton.addEventListener("click", function () {
    console.log("Кнопка була натиснута");

    const taskText = taskInput.value;

    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI"){
        event.target.remove();

    }});