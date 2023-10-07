$(document).ready(function(){
    const taskTemplate = $("#template").first();
    const taskContainer = $("#container").first();

    const template = Handlebars.compile(taskTemplate.html());

    const taskForm = $("#addTaskForm").first();
    const addTaskIn = $("#addTaskIn").first();
    const addTaskBtn = $("#addTaskBtn").first();

    const tasks = [];

    // Function to render tasks
    function renderTasks() {
        const taskResult = template({ tasks });
        taskContainer.html(taskResult);

        // Attach click event handlers to the "Remove" buttons
        $(".remove-task-button").on("click", function() {
            const contentToRemove = $(this).siblings("label").text();
            const index = tasks.findIndex(task => task.content === contentToRemove);
            if (index !== -1) {
                tasks.splice(index, 1);
                renderTasks(); // Re-render the updated task list
            }
        });
    }

    taskForm.on("submit", (e) => {
        e.preventDefault();
        const content = addTaskIn.val().trim();
  
        if(content != ""){
            if(tasks.indexOf(content) === -1){
                tasks.push({content});
                renderTasks();
                console.log(tasks);
    
                addTaskIn.val("");
            }
            else {
                alert("Task: \"" + content + "\" already exists");
            }
        }
        else {
            alert("Invalid input :(");
        }
    });

    taskContainer.on("click", ".remove-task-button", function() {
        const contentToRemove = $(this).data("content");
        removeTaskByContent(contentToRemove);
        $(this).closest(".task-item").remove(); // Remove the task from the DOM
    });
    
});
