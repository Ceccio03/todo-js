// console.log(DataServices.getData());

const todos = DataServices.getData();
const manager = new Manager(todos);

// console.log(todosList);

function render() {
    const todoContainer = document.getElementById('todo-container');

    for (const todo of manager.todoArray) {
        const div = document.createElement('div');

        div.classList.add('todo-card');

        const titleStrong = document.createElement('strong');
        const titleNode = document.createTextNode(todo.title);

        titleStrong.appendChild(titleNode);
        div.appendChild(titleStrong);

        const dateSpan = document.createElement('span');
        const dateNode = document.createTextNode(todo.creationDate.toISOString());

        dateSpan.appendChild(dateNode);
        div.appendChild(dateSpan);
        todoContainer.appendChild(div);
    }
}
render();