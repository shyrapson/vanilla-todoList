//Selectors
const inputValue = document.querySelector(".input-value");
const submitBtn = document.querySelector(".submit-btn");
const todoList = document.querySelector(".todo-list");
const filterItem = document.querySelector(".fiter-Item");

const addTodo = (e) => {
  e.preventDefault();
  // create todo div
  const tododiv = document.createElement("div");
  tododiv.classList.add("todo-div");

  // create new todo list
  const newTodo = document.createElement("li");
  newTodo.innerText = inputValue.value;
  newTodo.classList.add("todo-item");
  tododiv.appendChild(newTodo);

  // create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class = "fas fa-trash" >delete</i>';
  deleteBtn.classList.add("delete-btn");
  tododiv.appendChild(deleteBtn);

  // create check button
  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = '<i class = "fas fa-check" >check</i>';
  checkBtn.classList.add("complete-btn");
  tododiv.appendChild(checkBtn);

  // inserting the created tododiv and its element indo todo list element
  todoList.appendChild(tododiv);

  // clear input field after submiting
  inputValue.value = "";
};

const deleteCheck = (e) => {
  const item = e.target;
  
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
};

const filterdItem = (e) => {
  e.preventDefault();
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
};

//event listeners
submitBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterItem.addEventListener("click", filterdItem);
