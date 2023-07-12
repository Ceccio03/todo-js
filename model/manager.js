class Manager {
    constructor(todoArray) {
        if (todoArray) {
            const todoArray = StorageService.loadTodos();

            if (todoArray) {
                this.todoArray = todoArray;
            } else {
                this.todoArray = [];
            }
        } else {
            this.todoArray = todoArray;
        }
    }

    addToDo(todo) {
        this.todoArray.push(todo);
    }

    orderTodosByTitle() {
        this.todoArray.sort((todo1, todo2) => todo1.compareByTitle(todo2));
    }

    orderTodosByDate() {
        this.todoArray.sort((todo1, todo2) => todo1.compareByDate(todo2));
    }

    changeCompleteStatus() {
        const todo = this.todoArray[index];

        todo.isCompleted = !todo.isCompleted;

        StorageService.saveData(this.todoArray);
    }

    deleteTodo(index) {
        this.todoArray.splice(index, 1);

        StorageService.saveData(this.todoArray);
    }

    addTodoWithTitle(title) {
        const newTodo = new Todo(title);
        
        this.addToDo(newTodo);

        StorageService.saveData(this.todoArray);
    }
}