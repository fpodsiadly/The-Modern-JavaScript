const todo = {
  id: 'ashjdkahsd',
  text: 'Pay bills',
  completed: false,
}

const printTodo = ({ text, completed }) => console.log(text, completed)

printTodo(todo)

const {
  text: todoText,
  completed,
  details: info = 'no details provided',
  ...others
} = todo

console.log(info)
console.log(others)

const age = [65, 0, 13, 21]

const [a, b, c, d] = age

console.log(a, b, c, d)
