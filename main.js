// console.log(DataServices.getData());

const todos = DataServices.getData();
const manager = new Manager(todos);

// console.log(todosList);

function render() {
    for (const todo of manager.todoArray) {
        
    }
}