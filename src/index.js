import todo from "./data/index.js";
import PrintTaskList from "./modules/printTaskList/index.js";

const $addForm = document.querySelector('.add-wrapper')
const $taskField = document.querySelector('.task-field')

$addForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const taskName = $taskField.value
  todo.create({ name: taskName })
  const todoList = todo.read()

  PrintTaskList({ parent: '.task-list', taskList: todoList })

  $taskField.value = ''
})
// console.log(newTask)
