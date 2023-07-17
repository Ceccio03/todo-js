class DBService {
    static getAllTodos() {
        const url = 'https://64b512c7f3dbab5a95c6a4e4.mockapi.io/todos';

        return fetch(url).then(resp => resp.json()).then(result => this.convertToTodoArray(result)).catch(error => console.log(error.message));
    }

    static convertToTodoArray(genericArray) {
        const tempArray = [];

        for (const obj of genericArray) {
            const newTodo = new Todo(obj.title, obj.isCompleted, new Date(obj.creationDate), obj.id);

            tempArray.push(newTodo);
        }
        return tempArray;
    }
}