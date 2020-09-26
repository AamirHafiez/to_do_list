var numberOfTasks = 0;
var taskNumber = 1; 
var inc = 'true';

// checking number of tasks present
let noTask = function(){
    if(numberOfTasks == 0){
        document.getElementById('tasks-container').innerHTML = `<h6 style="color: #1badf7">Go on and add some tasks!!</h6>`;
    }else if(numberOfTasks == 1 && inc == 'true'){
        document.getElementById('tasks-container').innerHTML = `<p id="append"></p>`;
        inc = 'false';
    }else if(numberOfTasks == 1 && inc == 'false'){
        inc = 'true';
    }
}
noTask();

// total tasks present
let tasksPresent = function(){
    document.getElementById('tasks-left').innerHTML = numberOfTasks;
}

let userInput = document.getElementById('text-box');
// function to add new task
let addNewTask = function(){
    let text;
    // getting text from textbox
    text = userInput.value;
    if(text === ""){
        return;
    }
    // increase number of tasks
    numberOfTasks += 1;
    // checks if no task is left then shows a statement to add tasks
    noTask();
    // text is cleared from textbox
    userInput.value = "";
    // crating a new task with required values
    let addTask = `<div id="task${taskNumber}" class="task p-2 d-flex justify-content-between">
    <div>
        <input class="check-task" type="checkbox" title="Check if completed!">
        <span>${text}</span>
    </div>
    <div class="delete-icon" style="cursor: pointer;">
        <i id="${taskNumber}" class="delete far fa-times-circle" title="Delete this task!"></i>
    </div>
    </div>`;

    // inserting the new task before p tag in the task-container
    document.getElementById('append').insertAdjacentHTML("beforebegin", addTask);
    
    // increasing number of tasks
    taskNumber += 1;
    // changes the UI of total tasks in the list
    tasksPresent();
}

// add new task on pressing enter
userInput.addEventListener('keypress', function(e){  
    if(e.key === "Enter"){
        addNewTask();
    }
});

// add new task on clicking the add button
document.getElementById('add').addEventListener('click', function(){
    addNewTask();
});

// adding event listener to whole document (event delegation)
document.addEventListener('click',function(e){
    // deleting a task
    if(e.target && e.target.className === 'delete far fa-times-circle'){
        // getting task id
        let taskId = e.target.id;
        // removing the html of that task
        document.getElementById(`task${taskId}`).remove();
        // decreasing total tasks
        numberOfTasks--;
        // checks if no task is left then shows a statement to add tasks
        noTask();
        // changes the UI of total tasks in the list
        tasksPresent();
    }
 });
