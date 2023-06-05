let todos = [];

const filters = {
  searchTodo: '',
  hideCompleted: false,
};

const todosJSON = localStorage.getItem('todos');
if (todosJSON !== null) {
  todos = JSON.parse(todosJSON);
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchTodo.toLowerCase());
    const hideComplteredMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideComplteredMatch;
  });

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector('#todos').innerHTML = '';

  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector('#todos').appendChild(summary);

  filteredTodos.forEach(function (todo) {
    const p = document.createElement('p');
    if (todo.text.length > 0) {
      p.textContent = todo.text;
    } else {
      p.textContent = 'Unnamed todo';
    }
    document.querySelector('#todos').appendChild(p);
  });
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
    text: e.target.elements.text.value,
    complited: false,
  });
  localStorage.setItem('todos', JSON.stringify(todos));
  renderTodos(todos, filters);
  e.target.elements.text.value = '';
});

document
  .querySelector('#hide-complited')
  .addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
