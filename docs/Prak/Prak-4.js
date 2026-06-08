const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const dell = document.getElementById("dell");

console.log(taskInput, addTaskButton, taskList,dell);

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

dell.addEventListener("click", function(event){
    let  h1 = document.getElementsByName("H1")

    console.log("Заголовок був видалений!");


})

taskList.addEventListener("click", function (event) {
    if (event.target.tagName === "LI"){
        event.target.remove();

    }});