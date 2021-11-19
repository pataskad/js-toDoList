import _ from "lodash";
import "../styles.css";
import { myToDoItems } from "./createToDo";
import { toDoItemRender, clearOldItems } from "./displayRender";

/* this module will contain functions to manage toDo items,
starting with the logic/function to delete and refresh toDo item array */

// track which priority is 'active' to prevent unwanted changing of active tabs
let allProjectsClicked = true;
let highPriorityClicked = false;
let mediumPriorityClicked = false;
let lowPriorityClicked = false;

function deleteItem (e) {
  clearOldItems();
  const itemIndex = e.target.dataset.attribute;
  myToDoItems.splice(itemIndex, 1);

  if (allProjectsClicked) {
    toDoItemRender();
  } else if (highPriorityClicked) {
    showHighPriorityTasks();
  } else if (mediumPriorityClicked) {
    showMediumPriorityTasks();
  } else if (lowPriorityClicked) {
    showLowPriorityTasks();
  }
}
function showAllTasks () {
  clearOldItems();

  allProjectsClicked = true;
  highPriorityClicked = false;
  mediumPriorityClicked = false;
  lowPriorityClicked = false;

  toDoItemRender();
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
  for (let i = 0; i < highPriorityItems.length; i++) {
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDo-div");

    toDoDiv.style.backgroundColor = "rgba(204, 54, 54, 0.342)";

    const title = document.createElement("p");
    title.classList.add("toDo-title");
    title.innerHTML = `${highPriorityItems[i].title}`;
    const toDoDeleteBtn = document.createElement("span");
    toDoDeleteBtn.innerHTML = "&times;";
    toDoDeleteBtn.dataset.attribute = `${highPriorityItems.indexOf(highPriorityItems[i])}`;
    toDoDeleteBtn.classList.add("toDo-deleteBtn");
    const description = document.createElement("p");
    description.innerHTML = `${highPriorityItems[i].description}`;

    toDoDiv.appendChild(title);
    toDoDiv.appendChild(toDoDeleteBtn);
    toDoDiv.appendChild(description);
    toDoWrapper.appendChild(toDoDiv);
    document.body.appendChild(toDoWrapper);
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
  for (let i = 0; i < mediumPriorityItems.length; i++) {
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDo-div");

    toDoDiv.style.backgroundColor = "rgba(143, 117, 21, .342)";

    const title = document.createElement("p");
    title.classList.add("toDo-title");
    title.innerHTML = `${mediumPriorityItems[i].title}`;
    const toDoDeleteBtn = document.createElement("span");
    toDoDeleteBtn.innerHTML = "&times;";
    toDoDeleteBtn.dataset.attribute = `${mediumPriorityItems.indexOf(mediumPriorityItems[i])}`;
    toDoDeleteBtn.classList.add("toDo-deleteBtn");
    const description = document.createElement("p");
    description.innerHTML = `${mediumPriorityItems[i].description}`;

    toDoDiv.appendChild(title);
    toDoDiv.appendChild(toDoDeleteBtn);
    toDoDiv.appendChild(description);
    toDoWrapper.appendChild(toDoDiv);
    document.body.appendChild(toDoWrapper);
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
  for (let i = 0; i < lowPriorityItems.length; i++) {
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDo-div");

    toDoDiv.style.backgroundColor = "rgba(34, 138, 34, 0.342)";

    const title = document.createElement("p");
    title.classList.add("toDo-title");
    title.innerHTML = `${lowPriorityItems[i].title}`;
    const toDoDeleteBtn = document.createElement("span");
    toDoDeleteBtn.innerHTML = "&times;";
    toDoDeleteBtn.dataset.attribute = `${lowPriorityItems.indexOf(lowPriorityItems[i])}`;
    toDoDeleteBtn.classList.add("toDo-deleteBtn");
    const description = document.createElement("p");
    description.innerHTML = `${lowPriorityItems[i].description}`;

    toDoDiv.appendChild(title);
    toDoDiv.appendChild(toDoDeleteBtn);
    toDoDiv.appendChild(description);
    toDoWrapper.appendChild(toDoDiv);
    document.body.appendChild(toDoWrapper);
  }
}

export {
  deleteItem,
  showAllTasks,
  showHighPriorityTasks,
  showMediumPriorityTasks,
  showLowPriorityTasks
};
