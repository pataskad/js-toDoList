import "./styles.css";
import { displayRender } from "./modules/displayRender";
import { ToDoItem, myToDoItems } from "./modules/createToDo";
import {
  deleteItem,
  showAllTasks,
  showHighPriorityTasks,
  showMediumPriorityTasks,
  showLowPriorityTasks
} from "./modules/toDoManager";

window.addEventListener("load", function () {
  // KEEP SOLID PRINCIPLES IN MIND! REFACTOR WHERE NEEDED, START ROUGH AND REFINE
  // window event listener used to ensure content is loaded properly

  // testing item object
  const test = new ToDoItem("Placeholder Title", "Placeholder Description", "Nov 5th, 5pm", 2);
  myToDoItems.push(test);
  const test2 = new ToDoItem("Placeholder Title", "Placeholder Description", "Nov 5th, 5pm", 3);
  myToDoItems.push(test2);

  // loop for testing high volume tasks
  /*     for (let i = 0; i < 10; i++) {
        let test = new ToDoItem("Placeholder Title", "Placeholder Description", "Nov 5th, 5pm", 2)
        myToDoItems.push(test)
    } */

  displayRender(); // renders basic layout, nav, header, and formatting.

  // event listener logic to manage certain events, REVIEW PLACEMENT OF LOGIC!
  document.addEventListener("click", function (e) {
    if (e.target.matches(".toDo-deleteBtn")) {
      deleteItem(e);
    }
    if (e.target.matches(".tasks-nav")) {
      if (e.target.dataset.attribute == 0) {
        showAllTasks();
      }
      if (e.target.dataset.attribute == 1) {
        showHighPriorityTasks();
      }
      if (e.target.dataset.attribute == 2) {
        showMediumPriorityTasks();
      }
      if (e.target.dataset.attribute == 3) {
        showLowPriorityTasks();
      }
    }
  });
});
