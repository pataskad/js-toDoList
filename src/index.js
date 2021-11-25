import { displayRender } from "./modules/displayRender";
import { ToDoItem, myToDoItems, createNewToDo } from "./modules/createToDo";
import { showAddItemModal, removeInputModal } from "./modules/addTodoModal";
import {
  deleteItem,
  showAllTasks,
  showHighPriorityTasks,
  showMediumPriorityTasks,
  showLowPriorityTasks,
  toggleDescription
} from "./modules/toDoManager";

window.addEventListener("load", function () {
  // testing item object
  const test = new ToDoItem("Placeholder Title", "Placeholder Description", "11/25/21", 2);
  myToDoItems.push(test);
  const test2 = new ToDoItem("Placeholder Title", "Placeholder Description", "11/25/21", 3);
  myToDoItems.push(test2);

  // renders basic layout, nav, header, and formatting of initial display elements.
  displayRender();

  // event listener logic to manage application events
  document.addEventListener("click", function (e) {
    if (e.target.matches(".toDo-deleteBtn")) {
      deleteItem(e);
    }
    if (e.target.matches(".expand-todo")) {
      toggleDescription(e);
    }
    if (e.target.matches(".add-item")) {
      showAddItemModal();
    }
    if (e.target.matches(".modal-close-btn")) {
      removeInputModal();
    }
    if (e.target.matches("#modal-submit-btn")) {
      createNewToDo();
    }
    if (e.target === document.querySelector(".modal")) {
      removeInputModal();
    }
    // filter and render different priority tasks
    if (e.target.matches(".tasks-nav")) {
      if (e.target.dataset.attribute === "0") {
        showAllTasks();
      }
      if (e.target.dataset.attribute === "1") {
        showHighPriorityTasks();
      }
      if (e.target.dataset.attribute === "2") {
        showMediumPriorityTasks();
      }
      if (e.target.dataset.attribute === "3") {
        showLowPriorityTasks();
      }
    }
  });
});
