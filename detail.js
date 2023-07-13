const dataString = sessionStorage.getItem('selectedTodo');
const detailContainer = document.getElementById('detail-container');

if (dataString) {
    const data = JSON.parse(dataString);
    const todo = new Todo(data.title, data.isCompleted, new Date(data.creationDate));

    detailContainer.innerHTML = `<h2>${todo.title}</h2><span>${todo.isCompleted ? '' : 'non'} sono completato</span><span>${todo.creationDate.toISOString()}</span>`;
} else {
    detailContainer.innerHTML = '<strong>scemo chi legge</strong>';
}