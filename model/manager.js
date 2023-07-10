class Manager {
    constructor(todoArray = []) {
        this.todoArray = todoArray;
    }

    addToDo(todo) {
        this.todoArray.push(todo);
    }
}