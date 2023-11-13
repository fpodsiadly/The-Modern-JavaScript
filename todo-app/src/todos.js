let todos = []

const loadTodos = () => {
  const todosJSON = localStorage.getItem('todos')

  try {
    todos = todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    todos = []
  }
}

const saveTodos = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos

const createTodos = (text) => {
  todos.push({
    id: uuidv4(),
    text,
    completed: false,
  })
  saveTodos()
}

const removeTodo = (id) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id)

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1)
    saveTodos()
  }
}

const toggleTodo = (id) => {
  const todo = todos.find((todo) => todo.id === id)

  if (todo) {
    todo.completed = !todo.completed
    saveTodos()
  }
}

todos = loadTodos()
export { saveTodos, getTodos, createTodos, removeTodo, toggleTodo, loadTodos }