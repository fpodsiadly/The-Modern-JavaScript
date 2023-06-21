let todos = getSavedTodos();

const filters = {
  searchTodo: '',
  hideCompleted: false,
};

renderTodos(todos, filters);

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed;
});

//listen for todo input
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchTodo = e.target.value;
  renderTodos(todos, filters);
});

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault();
  todos.push({
    id: uuidv4(),
    text: e.target.elements.text.value,
    complited: false,
  });
  saveTodos(todos);
  renderTodos(todos, filters);
  e.target.elements.text.value = '';
});

document
  .querySelector('#hide-complited')
  .addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
