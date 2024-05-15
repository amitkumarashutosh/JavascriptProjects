const todoInput = document.querySelector(".todo__input");
const addBtn = document.querySelector(".todo__btn");
const todosContainer = document.querySelector(".todos__result");

function addTodo() {
  const todoText = todoInput.value.trim();

  if (!todoText) return;

  if (addBtn.textContent === "Add") {
    const id = generateId();
    const todoItem = createTodoItem(id, todoText);
    todosContainer.appendChild(todoItem);
  } else {
    const id = addBtn.dataset.todoId;
    updateTodoItem(id, todoText);
    addBtn.textContent = "Add";
  }

  todoInput.value = "";
}

function generateId() {
  return Math.floor(Math.random() * 9999);
}

function createTodoItem(id, text) {
  const todoItem = document.createElement("div");
  todoItem.className = "todos__list";
  todoItem.id = id;
  todoItem.innerHTML = `
    <div class="todo__text">${text}</div>
    <div>
        <button class="todo__edit" onclick="editTodo(${id})">Edit</button>
        <button class="todo__delete" onclick="deleteTodo(${id})">X</button>
    </div>
  `;
  return todoItem;
}

function updateTodoItem(id, text) {
  const todoItem = document.getElementById(id);
  const todoText = todoItem.querySelector(".todo__text");
  todoText.textContent = text;
}

function deleteTodo(id) {
  const todoItem = document.getElementById(id);
  todoItem.remove();
}

function editTodo(id) {
  const todoItem = document.getElementById(id);
  const todoText = todoItem.querySelector(".todo__text");
  todoInput.value = todoText.textContent;
  addBtn.textContent = "Save";
  addBtn.dataset.todoId = id;
}

addBtn.addEventListener("click", addTodo);
