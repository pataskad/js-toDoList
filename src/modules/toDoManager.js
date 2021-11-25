import _ from "lodash";
import "../styles.css";
import { myToDoItems } from "./createToDo";
import { toDoItemRender, clearOldItems } from "./displayRender";

/* this module will contain functions to manage toDo items on the display,
starting with the logic/function to delete and refresh toDo item array */

// track which priority is 'active' to prevent unwanted changing of active tabs when deleting tasks
let allProjectsClicked = true;
let highPriorityClicked = false;
let mediumPriorityClicked = false;
let lowPriorityClicked = false;

function deleteItem (e) {
  clearOldItems();

  const itemIndex = e.target.dataset.attribute;
  myToDoItems.splice(itemIndex, 1);

  if (allProjectsClicked) {
    showAllTasks();
  } else if (highPriorityClicked) {
    showHighPriorityTasks();
  } else if (mediumPriorityClicked) {
    showMediumPriorityTasks();
  } else if (lowPriorityClicked) {
    showLowPriorityTasks();
  }
}
function toggleDescription (e) {
  const elementIndex = e.target.dataset.attribute;
  const descElement = document.querySelectorAll(".description");
  const descElementsArray = [...descElement];

  if (descElementsArray[elementIndex].classList.contains("task-description-hidden")) {
    descElementsArray[elementIndex].classList.remove("task-description-hidden");
    descElementsArray[elementIndex].classList.add("task-description-visible");
  } else {
    descElementsArray[elementIndex].classList.remove("task-description-visible");
    descElementsArray[elementIndex].classList.add("task-description-hidden");
  }
}
function showAllTasks () {
  clearOldItems();

  allProjectsClicked = true;
  highPriorityClicked = false;
  mediumPriorityClicked = false;
  lowPriorityClicked = false;

  if (myToDoItems.length === 0) {
    const toDoWrapper = document.createElement("div");
    toDoWrapper.classList.add("toDo-wrapper");
    const noItems = document.createElement("div");
    noItems.classList.add("toDo-div-noItems");
    noItems.innerHTML = "No Task Items Created Yet...";
    toDoWrapper.appendChild(noItems);
    document.body.appendChild(toDoWrapper);
  } else {
    toDoItemRender();
  }
}
function showHighPriorityTasks () {
  clearOldItems();

  highPriorityClicked = true;
  mediumPriorityClicked = false;
  lowPriorityClicked = false;
  allProjectsClicked = false;

  // filtered original array via lodash
  const highPriorityItems = _.filter(myToDoItems, ["priority", 3]);

  const toDoWrapper = document.createElement("div");
  toDoWrapper.classList.add("toDo-wrapper");

  if (highPriorityItems.length === 0) {
    const noItems = document.createElement("div");
    noItems.classList.add("toDo-div-noItems");
    noItems.innerHTML = "No Level 3 Items Here Yet...";
    toDoWrapper.appendChild(noItems);
    document.body.appendChild(toDoWrapper);
  } else {
    for (let i = 0; i < highPriorityItems.length; i++) {
      const toDoDiv = document.createElement("div");
      toDoDiv.classList.add("toDo-div");

      toDoDiv.style.backgroundColor = "rgba(219, 9, 9, 0.48)";

      const title = document.createElement("p");
      title.classList.add("toDo-title");
      title.innerHTML = `${highPriorityItems[i].title}`;

      const expandBtn = document.createElement("span");
      expandBtn.innerHTML = "&#43;";
      expandBtn.dataset.attribute = `${myToDoItems.indexOf(myToDoItems[i])}`;
      expandBtn.classList.add("expand-todo");

      const toDoDeleteBtn = document.createElement("span");
      toDoDeleteBtn.dataset.attribute = `${myToDoItems.indexOf(highPriorityItems[i])}`;
      toDoDeleteBtn.innerHTML = "&#10003;";
      toDoDeleteBtn.classList.add("toDo-deleteBtn");

      const dueDate = document.createElement("p");
      dueDate.innerHTML = `Due By: ${myToDoItems[i].dueDate}`;
      dueDate.classList.add("due-date");

      const description = document.createElement("p");
      description.classList.add("task-description-hidden");
      description.classList.add("description");
      description.innerHTML = `${highPriorityItems[i].description}`;

      toDoDiv.appendChild(title);
      toDoDiv.appendChild(toDoDeleteBtn);
      toDoDiv.appendChild(expandBtn);
      toDoDiv.appendChild(dueDate);
      toDoDiv.appendChild(description);
      toDoWrapper.appendChild(toDoDiv);
      document.body.appendChild(toDoWrapper);
    }
  }
}
function showMediumPriorityTasks () {
  clearOldItems();

  highPriorityClicked = false;
  mediumPriorityClicked = true;
  lowPriorityClicked = false;
  allProjectsClicked = false;

  // filtered original array via lodash
  const mediumPriorityItems = _.filter(myToDoItems, ["priority", 2]);

  const toDoWrapper = document.createElement("div");
  toDoWrapper.classList.add("toDo-wrapper");

  if (mediumPriorityItems.length === 0) {
    const noItems = document.createElement("div");
    noItems.classList.add("toDo-div-noItems");
    noItems.innerHTML = "No Level 2 Items Here Yet...";
    toDoWrapper.appendChild(noItems);
    document.body.appendChild(toDoWrapper);
  } else {
    for (let i = 0; i < mediumPriorityItems.length; i++) {
      const toDoDiv = document.createElement("div");
      toDoDiv.classList.add("toDo-div");

      toDoDiv.style.backgroundColor = "rgba(231, 182, 0, .66)";

      const title = document.createElement("p");
      title.classList.add("toDo-title");
      title.innerHTML = `${mediumPriorityItems[i].title}`;

      const expandBtn = document.createElement("span");
      expandBtn.innerHTML = "&#43;";
      expandBtn.dataset.attribute = `${myToDoItems.indexOf(myToDoItems[i])}`;
      expandBtn.classList.add("expand-todo");

      const toDoDeleteBtn = document.createElement("span");
      toDoDeleteBtn.dataset.attribute = `${myToDoItems.indexOf(mediumPriorityItems[i])}`;
      toDoDeleteBtn.innerHTML = "&#10003;";
      toDoDeleteBtn.classList.add("toDo-deleteBtn");

      const dueDate = document.createElement("p");
      dueDate.innerHTML = `Due By: ${myToDoItems[i].dueDate}`;
      dueDate.classList.add("due-date");

      const description = document.createElement("p");
      description.classList.add("task-description-hidden");
      description.classList.add("description");
      description.innerHTML = `${mediumPriorityItems[i].description}`;

      toDoDiv.appendChild(title);
      toDoDiv.appendChild(toDoDeleteBtn);
      toDoDiv.appendChild(expandBtn);
      toDoDiv.appendChild(dueDate);
      toDoDiv.appendChild(description);
      toDoWrapper.appendChild(toDoDiv);
      document.body.appendChild(toDoWrapper);
    }
  }
}
function showLowPriorityTasks () {
  clearOldItems();

  highPriorityClicked = false;
  mediumPriorityClicked = false;
  lowPriorityClicked = true;
  allProjectsClicked = false;

  // filtered array via lodash
  const lowPriorityItems = _.filter(myToDoItems, ["priority", 1]);

  const toDoWrapper = document.createElement("div");
  toDoWrapper.classList.add("toDo-wrapper");

  if (lowPriorityItems.length === 0) {
    const noItems = document.createElement("div");
    noItems.classList.add("toDo-div-noItems");
    noItems.innerHTML = "No Level 1 Items Here Yet...";
    toDoWrapper.appendChild(noItems);
    document.body.appendChild(toDoWrapper);
  } else {
    for (let i = 0; i < lowPriorityItems.length; i++) {
      const toDoDiv = document.createElement("div");
      toDoDiv.classList.add("toDo-div");

      toDoDiv.style.backgroundColor = "rgba(0, 183, 0, 0.7)";

      const title = document.createElement("p");
      title.classList.add("toDo-title");
      title.innerHTML = `${lowPriorityItems[i].title}`;

      const expandBtn = document.createElement("span");
      expandBtn.innerHTML = "&#43;";
      expandBtn.dataset.attribute = `${myToDoItems.indexOf(myToDoItems[i])}`;
      expandBtn.classList.add("expand-todo");

      const toDoDeleteBtn = document.createElement("span");
      toDoDeleteBtn.dataset.attribute = `${myToDoItems.indexOf(lowPriorityItems[i])}`;
      toDoDeleteBtn.innerHTML = "&#10003;";
      toDoDeleteBtn.classList.add("toDo-deleteBtn");

      const dueDate = document.createElement("p");
      dueDate.innerHTML = `Due By: ${myToDoItems[i].dueDate}`;
      dueDate.classList.add("due-date");

      const description = document.createElement("p");
      description.classList.add("task-description-hidden");
      description.classList.add("description");
      description.innerHTML = `${lowPriorityItems[i].description}`;

      toDoDiv.appendChild(title);
      toDoDiv.appendChild(toDoDeleteBtn);
      toDoDiv.appendChild(expandBtn);
      toDoDiv.appendChild(dueDate);
      toDoDiv.appendChild(description);
      toDoWrapper.appendChild(toDoDiv);
      document.body.appendChild(toDoWrapper);
    }
  }
}

export {
  deleteItem,
  showAllTasks,
  showHighPriorityTasks,
  showMediumPriorityTasks,
  showLowPriorityTasks,
  toggleDescription
};
