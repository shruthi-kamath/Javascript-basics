const form = document.querySelector("#new-todo-form")
const todoInput = document.querySelector("#todo-input")
const list = document.querySelector("#list")
const template = document.querySelector("#list-item-template")

const LOCAL_STORAGE_PREFIX = "ADVANCED_TODO_LIST-"
const TODOS_STORAGE_KEY = "${LOCAL_STORAGE_PREFIX}-todos"
let todos = loadTodos()
todos.forEach(renderTodo)

list.addEventListener("change", e => {
    if (!e.target.matches("[data-list-item-checkbox]")) return
    //Get the todo that is checked
    const parent = e.target.closest(".list-item")
    const todoID = parent.dataset.todoID
    const todo = todos.find(t => t.id === todoID)
    todo.complete = e.target.checked
    //Toggle the value to checkbox value
    //Save the updated todo
    saveTodos()
})

//Delete Todos
list.addEventListener("click", e => {
    if (!e.target.matches("[data-button-delete]")) return
    const parent = e.target.closest(".list-item")
    const todoID = parent.dataset.todoID
    parent.remove()
    todos = todos.filter(todo => todo.id !== todoID)
    saveTodos()
})

//Add Todos
form.addEventListener("submit", e => {
    e.preventDefault()
    const todoName = todoInput.value
    if (todoName == "") return
    const newTodo = {
        name: todoName,
        complete: false,
        id: new Date().valueOf().toString()
    }
    todos.push(newTodo)

    renderTodo(newTodo)
    saveTodos()
    todoInput.value = ""
})

function renderTodo(todo) {

    const templateClone = template.content.cloneNode(true)
    const listItem = templateClone.querySelector(".list-item")
    // TODO : Add id later
    listItem.dataset.todoID = todo.id
    const textElement = templateClone.querySelector("[data-list-item-text]")
    textElement.innerText = todo.name
    const checkbox = templateClone.querySelector("[data-list-item-checkbox]")
    checkbox.checked = todo.checked
    list.appendChild(templateClone)
}

//Load Todos
function loadTodos() {
    const todoString = localStorage.getItem(TODOS_STORAGE_KEY)
    return JSON.parse(todoString) || []
}

//Save Todos
function saveTodos() {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}




