// console.log(DataServices.getData());

const todos = DataServices.getData();
const manager = new Manager(todos);

// console.log(todosList);

function render() {
    const todoContainer = document.getElementById('todo-container'); 

    todoContainer.innerHTML = '';

    for (const todo of manager.todoArray) {
        const div = document.createElement('div');
        div.classList.add('todo-card');

        if(todo.isCompleted) {
            // div.classList.add('todo-completed');
            div.style.borderColor = 'lime';
        }

        const titleStrong = document.createElement('strong');
        const titleNode = document.createTextNode(todo.title);

        titleStrong.appendChild(titleNode);
        div.appendChild(titleStrong);

        const dateSpan = document.createElement('span');
        const dateNode = document.createTextNode(todo.creationDate.toISOString());

        dateSpan.appendChild(dateNode);
        div.appendChild(dateSpan);

        const completeBtn = document.createElement('button');
        const completeNode = document.createTextNode('completato');

        completeBtn.addEventListener('click', () => {todo.isCompleted = true; render();});
        completeBtn.appendChild(completeNode);
        div.appendChild(completeNode);
        todoContainer.appendChild(div);
    }
}
render();

function render2() {
    const todoContainer = document.getElementById('todo-container'); 

    todoContainer.innerHTML = '';

    for (let i = 0; i < manager.todoArray.length; i++) {
        const todo = manager.todoArray[i];
        let additionalClass = '';
        
        if (todo.isCompleted) {
            additionalClass = 'todo-completed';
        }

        const template = `<div class="todo-card ${additionalClass}"><strong>${todo.title}</strong><span>${todo.creationDate.toISOString()}</span><button id="complete-btn"${i}>completato</button></div>`;
    

//     const template = `<div class="todo-card ${todo.isCompleted ? 'todo-completed' : ''}"><strong>${todo.title}</strong><span>${todo.creationDate.toISOString()}</span></div>`;

    todoContainer.innerHTML += template;
    }

    for (let i = 0; i < manager.todoArray.length; i++) {
        const element = array[i];
        
    }
}
render2();

function orderByTitle() {
    manager.orderTodosByTitle();
    render();
}

function orderByDate() {
    manager.orderTodosByDate();
    render();
}