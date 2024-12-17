document.getElementById('add-task-button').addEventListener('click', addTask);
document.getElementById('new-task').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});

function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('task-list');
        const newTask = document.createElement('li');

        newTask.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete-task-button">Complete</button>
                <button class="delete-task-button">Delete</button>
            </div>
        `;

        taskList.appendChild(newTask);
        taskInput.value = '';

        newTask.querySelector('.complete-task-button').addEventListener('click', function() {
            newTask.classList.toggle('completed');
        });

        newTask.querySelector('.delete-task-button').addEventListener('click', function() {
            taskList.removeChild(newTask);
        });
    }
}
