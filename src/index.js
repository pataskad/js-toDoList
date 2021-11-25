import "./styles.css";
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
  // window event listener used to ensure content is loaded properly in correct order

  // testing item object
  const test = new ToDoItem("Placeholder Title", "Placeholder Description", "11/25/21", 2);
  myToDoItems.push(test);
  const test2 = new ToDoItem("Placeholder Title", "Placeholder Description", "11/25/21", 3);
  myToDoItems.push(test2);

  // loop for testing high volume tasks
  /*       for (let i = 0; i < 10; i++) {
        let test = new ToDoItem("Placeholder Title", "Placeholder Description", "Nov 5th, 5pm", 2)
        myToDoItems.push(test)
    } */

  displayRender(); // renders basic layout, nav, header, and formatting.

  // event listener logic to manage certain events, REVIEW PLACEMENT OF LOGIC!
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
      // submit form button
      // run validation (Must have Title, dueDate, and description.  Priority defaults to level 1, lowest.)
      // if validation fails, focus first line with error and output error message to user
      // render items again to show new task
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
