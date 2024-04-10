let tasks = [];

const renderTask = () => {
    const tasklist = document.getElementById('tasklist');
    tasklist.innerHTML = ''

        tasks.forEach((task,index) => {
        const li = document.createElement('li');
        li.textContent = task.name;
        const btn = document.createElement('button');
        btn.innerHTML = '<div>delete</div>';
        btn.className = 'delete-button';

        li.appendChild(btn);
        tasklist.appendChild(li);
     

    })
}

const addTask = () => {
    const name = document.getElementById('taskInput');
    if (name !== '') {
        const task = {
            name: name.value,
            date: new Date()
        }
        tasks.push(task);
        renderTask();
    }
}
 