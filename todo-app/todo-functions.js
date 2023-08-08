// Fetch existing todos from localStorage
const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos');
  return todosJSON !== null ? JSON.parse(todosJSON) : [];
};

// Save todos to localStorage
const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

// Remove a todo from the list of
const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Update a todo list
const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id);

  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};

// Render aplication todos based on filters
const renderTodos = (todos, filters) => {
  const filteredTodos = todos.filter((todo) => {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchTodo.toLowerCase());
    const hideComplteredMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideComplteredMatch;
  });

  const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

  document.querySelector('#todos').innerHTML = '';

  document
    .querySelector('#todos')
    .appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach((todo) => {
    document.querySelector('#todos').appendChild(generateTodoDOM(todo));
  });
};

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
  const todoEl = document.createElement('div');
  const checkbox = document.createElement('input');
  const todoText = document.createElement('span');
  const removeButton = document.createElement('button');

  //Setup todo checkbox
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = todo.completed;
  todoEl.appendChild(checkbox);
  checkbox.addEventListener('change', () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  // Setup the todo text
  todoText.textContent = todo.text;
  todoEl.appendChild(todoText);

  // Setup the remove button
  removeButton.textContent = 'X';
  todoEl.appendChild(removeButton);
  removeButton.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

// Get the DOM elements for list sumarry
const generateSummaryDOM = (incompleteTodos) => {
  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
