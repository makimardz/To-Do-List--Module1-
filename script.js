document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const inputField = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const clearAllButton = document.getElementById('clear-all-btn');
    const sortButton = document.getElementById('sort-btn');
    const addTasksRecursivelyButton = document.getElementById('add-tasks-recursively-btn'); 


    addButton.addEventListener('click', function() {
        let taskText = inputField.value.trim();
        if(taskText !== "") {
            addTask(taskText);
            inputField.value = ''; // Clear the input field
        }
    });

    // Function to add a task
    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.onclick = function() {
            this.parentElement.remove();
            updateTaskCount(); // Update task count after deleting a task
        };

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        updateTaskCount(); // Update task count after adding a task
    }

    // Function to update task count
    function updateTaskCount() {
        const taskCount = todoList.getElementsByTagName('li').length;
        document.getElementById('task-count').textContent = `Total Tasks: ${taskCount}`;
    }

    // Clear all tasks button event listener
    clearAllButton.addEventListener('click', function() {
        todoList.innerHTML = ''; // Clear all tasks
        updateTaskCount(); // Update task count after clearing all tasks
    });

    // Sort tasks alphabetically button event listener
    sortButton.addEventListener('click', function() {
        sortTasksAlphabetically(); // Sort tasks alphabetically
    });

    // Function to sort tasks alphabetically
    function sortTasksAlphabetically() {
        const tasks = Array.from(todoList.getElementsByTagName('li'));
        const sortedTasks = tasks.sort((a, b) => a.textContent.localeCompare(b.textContent));
        todoList.innerHTML = '';
        sortedTasks.forEach(task => todoList.appendChild(task));
    }

    // Add tasks recursively button event listener
    addTasksRecursivelyButton.addEventListener('click', function() {
        const taskText = inputField.value.trim(); // Get the task text from input
        if (taskText !== "") {
            const recursiveCount = 2; // Change this to the desired recursive count
            addTasksRecursively(taskText, recursiveCount); // Pass task text to the function
        }
    });

    // Function to add tasks recursively
    function addTasksRecursively(taskText, count) {
        if (count > 0) {
            addTask(taskText); // Use the task text provided
            addTasksRecursively(taskText, count - 1); // Recursively call the function
        }
    }
});