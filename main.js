// console.log(DataServices.getData());

const todos = DataServices.getData();
const manager = new Manager(todos);

// console.log(todosList);

// function render() {
//     const todoContainer = document.getElementById('todo-container'); 

//     todoContainer.innerHTML = '';

//     for (const todo of manager.todoArray) {
//         const div = document.createElement('div');
//         div.classList.add('todo-card');

//         if(todo.isCompleted) {
//             // div.classList.add('todo-completed');
//             div.style.borderColor = 'lime';
//         }

//         const titleStrong = document.createElement('strong');
//         const titleNode = document.createTextNode(todo.title);

//         titleStrong.appendChild(titleNode);
//         div.appendChild(titleStrong);

//         const dateSpan = document.createElement('span');
//         const dateNode = document.createTextNode(todo.creationDate.toISOString());

//         dateSpan.appendChild(dateNode);
//         div.appendChild(dateSpan);
//         todoContainer.appendChild(div);
//     }
// }
// render();

function render2() {
    const todoContainer = document.getElementById('todo-container'); 

    todoContainer.innerHTML = '';

    for (const todo of manager.todoArray) {
        const template = `<div class="todo-card"><strong>${todo.title}</strong><span>${todo.creationDate.toISOString()}</span></div>`;

        todoContainer.innerHTML += template;
    }
}
render2();

function orderByTitle() {
    manager.orderTodosByTitle();
    render2();
}

function orderByDate() {
    manager.orderTodosByDate();
    render2();
}