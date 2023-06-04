const todos = [
  {
    text: 'Order cat food',
    completed: false,
  },
  {
    text: 'Clean kitchen',
    completed: true,
  },
  {
    text: 'Buy food',
    completed: true,
  },
  {
    text: 'Do work',
    completed: false,
  },
  {
    text: 'Exercise',
    completed: true,
  },
];

const filters = {
  searchTodo: '',
  hideCompleted: false,
};

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
    p.textContent = todo.text;
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
  renderTodos(todos, filters);
  e.target.elements.text.value = '';
});

document
  .querySelector('#hide-complited')
  .addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
  