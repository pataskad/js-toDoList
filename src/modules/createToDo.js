import moment from "moment";
import { removeInputModal } from "./addTodoModal";
import { showAllTasks } from "./toDoManager";

/* priorities (Low - 1, Med - 2, High - 3)
module includes localStorage configuration for storing tasks across sessions
local to each users computer, meaning user must use save device in order to access saved tasks
*/

let myToDoItems = [
  {
    title: "Delete Me, Placeholder!",
    description: "Delete Me",
    dueDate: "Decemeber 27th, 2021",
    priority: 1
  }
];

// localStorage Configuration
function saveToLocalStorage () {
  if (!myToDoItems) {
    myToDoItems = [];
    localStorage.setItem("toDoItems", JSON.stringify(myToDoItems));
  } else {
    localStorage.setItem("toDoItems", JSON.stringify(myToDoItems));
  }
}
function retrieveFromLocalStorage () {
  const retrievedTasks = localStorage.getItem("toDoItems");
  myToDoItems = JSON.parse(retrievedTasks);
  return myToDoItems;
}

class ToDoItem {
  constructor (title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = moment(dueDate).format("MMMM Do, YYYY");
    this.priority = priority;
  }
}

function createNewToDo (title, description, dueDate, priority) {
  const newToDoTitle = document.querySelector("#todo-title");
  const newToDoDescription = document.querySelector("#todo-description");
  const newToDoDueDate = document.querySelector("#todo-due-date");
  const newToDoPriority = document.querySelector("#todo-priority");
  const errorOutput = document.querySelector("#form-error");

  function validateNewToDo () {
    if (newToDoTitle.value === "" && newToDoDescription.value === "") {
      errorOutput.classList.remove("modal-error-output-hidden");
      errorOutput.classList.add("modal-error-output-visible");
      newToDoTitle.classList.add("modal-form-controls-bad-input");
      newToDoDescription.classList.add("modal-form-controls-bad-input");
      newToDoTitle.focus();

      return false;
    } else if (newToDoTitle.value !== "" && newToDoDescription.value === "") {
      errorOutput.classList.remove("modal-error-output-hidden");
      errorOutput.classList.add("modal-error-output-visible");
      newToDoTitle.classList.remove("modal-form-controls-bad-input");
      newToDoDescription.classList.add("modal-form-controls-bad-input");
      newToDoDescription.focus();

      return false;
    } else if (newToDoTitle.value === "" && newToDoDescription.value !== "") {
      errorOutput.classList.remove("modal-error-output-hidden");
      errorOutput.classList.add("modal-error-output-visible");
      newToDoTitle.classList.add("modal-form-controls-bad-input");
      newToDoDescription.classList.remove("modal-form-controls-bad-input");

      return false;
    }
    return true;
  }

  if (validateNewToDo() === true) {
    title = newToDoTitle.value;
    description = newToDoDescription.value;
    dueDate = newToDoDueDate.value;
    priority = +(newToDoPriority.value);

    const task = new ToDoItem(title, description, dueDate, priority);
    myToDoItems.push(task);

    removeInputModal();
    saveToLocalStorage();
    showAllTasks();
    return task;
  }
}

export {
  ToDoItem,
  createNewToDo,
  saveToLocalStorage,
  retrieveFromLocalStorage,
  myToDoItems
};
