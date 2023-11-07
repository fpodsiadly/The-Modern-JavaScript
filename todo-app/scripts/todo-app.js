"use strict"

let todos = getSavedTodos()

const filters = {
  searchTodo: "",
  hideCompleted: false,
}

renderTodos(todos, filters)

// const incompleteTodos = todos.filter(function (todo) {
//   return !todo.completed;
// });

//listen for todo input
document.querySelector("#search-text").addEventListener("input", (e) => {
  filters.searchTodo = e.target.value
  renderTodos(todos, filters)
})

document.querySelector("#new-todo").addEventListener("submit", (e) => {
  const text = e.target.elements.text.value.trim()
  e.preventDefault()

  if (text.lenght > 0) {
    todos.push({
      id: uuidv4(),
      text,
      completed: false,
    })
    saveTodos(todos)
    renderTodos(todos, filters)
    e.target.elements.text.value = ""
  }
})

document.querySelector("#hide-complited").addEventListener("change", (e) => {
  filters.hideCompleted = e.target.checked
  renderTodos(todos, filters)
})
