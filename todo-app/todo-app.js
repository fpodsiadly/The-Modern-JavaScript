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
};

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchTodo.toLowerCase());
  });

  document.querySelector('#todos').innerHTML = '';

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