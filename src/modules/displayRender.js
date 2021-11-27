import "../styles.css";
import { myToDoItems } from "./createToDo";
import "../assets/images/GitHub-Mark-64px.png";

function displayRender () {
  /* separate functions used to for creating each section of the page before nesting
    functions within displayRender to be exported to index.js.
    (Creating bite sized bits of code for modularity) */
  headerRender();
  asideRender();
  toDoItemRender();
}
// helper functions
function headerRender () {
  const header = document.createElement("div");
  header.classList.add("page-header");

  const h1 = document.createElement("h1");
  h1.textContent = "My ToDo Items";

  const addItem = document.createElement("button");
  addItem.textContent = "+";
  addItem.classList.add("add-item");

  header.appendChild(h1);
  header.appendChild(addItem);
  document.body.appendChild(header);
}
function asideRender () {
  const asideNav = document.createElement("aside");
  asideNav.classList.add("aside-nav");

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-div");
  const tasks = document.createElement("strong");
  tasks.classList.add("task-header");
  tasks.textContent = "Tasks";
  taskDiv.appendChild(tasks);

  const allProjects = document.createElement("p");
  allProjects.dataset.attribute = 0;
  allProjects.classList.add("tasks-nav");
  allProjects.textContent = "All Projects";
  allProjects.style.fontSize = "x-large";
  allProjects.style.fontWeight = "bold";

  const highPriority = document.createElement("p");
  highPriority.dataset.attribute = 1;
  highPriority.classList.add("tasks-nav");
  highPriority.textContent = "High Priority";

  const mediumPriority = document.createElement("p");
  mediumPriority.dataset.attribute = 2;
  mediumPriority.classList.add("tasks-nav");
  mediumPriority.textContent = "Medium Priority";

  const lowPriority = document.createElement("p");
  lowPriority.dataset.attribute = 3;
  lowPriority.classList.add("tasks-nav");
  lowPriority.textContent = "Low Priority";

  const signature = document.createElement("small");
  signature.classList.add("signature");
  signature.innerHTML = "Made By: <a href=\"https://www.linkedin.com/in/dallas-pataska/\">Dallas Pataska</a><br><a href=\"https://www.github.com/pataskad/js-toDoList\"><img src=\"b039b2d83982c8256af3.png\"/></a>";

  asideNav.appendChild(taskDiv);
  asideNav.appendChild(allProjects);
  asideNav.appendChild(highPriority);
  asideNav.appendChild(mediumPriority);
  asideNav.appendChild(lowPriority);
  asideNav.appendChild(signature);
  document.body.appendChild(asideNav);
}
function toDoItemRender () {
  myToDoItems.sort(function (a, b) {
    // sort function places highest priority toDo items first
    return b.priority - a.priority;
  });

  const toDoWrapper = document.createElement("div");
  toDoWrapper.classList.add("toDo-wrapper");

  if (myToDoItems.length === 0) {
    const noItems = document.createElement("div");
    noItems.classList.add("toDo-div-noItems");
    noItems.innerHTML = "No Task Items Created Yet...";
    toDoWrapper.appendChild(noItems);
    document.body.appendChild(toDoWrapper);
  } else {
    for (let i = 0; i < myToDoItems.length; i++) {
      const toDoDiv = document.createElement("div");
      toDoDiv.classList.add("toDo-div");

      if (myToDoItems[i].priority === 1) {
        toDoDiv.style.backgroundColor = "rgba(0, 183, 0, 0.700)";
      }
      if (myToDoItems[i].priority === 2) {
        toDoDiv.style.backgroundColor = "rgba(231, 182, 0, .66)";
      }
      if (myToDoItems[i].priority === 3) {
        toDoDiv.style.backgroundColor = "rgba(219, 9, 9, 0.48)";
      }

      const title = document.createElement("p");
      title.classList.add("toDo-title");
      title.innerHTML = `${myToDoItems[i].title}`;

      const expandBtn = document.createElement("span");
      expandBtn.innerHTML = "&#43;";
      expandBtn.dataset.attribute = `${myToDoItems.indexOf(myToDoItems[i])}`;
      expandBtn.classList.add("expand-todo");

      const toDoDeleteBtn = document.createElement("span");
      toDoDeleteBtn.innerHTML = "&#10003;";
      toDoDeleteBtn.dataset.attribute = `${myToDoItems.indexOf(myToDoItems[i])}`;
      toDoDeleteBtn.classList.add("toDo-deleteBtn");

      const dueDate = document.createElement("p");
      dueDate.innerHTML = `Due By: ${myToDoItems[i].dueDate}`;
      dueDate.classList.add("due-date");

      const description = document.createElement("p");
      description.classList.add("task-description-hidden");
      description.classList.add("description");
      description.innerHTML = `${myToDoItems[i].description}`;

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
function clearOldItems () {
  const toDoWrapper = document.querySelector(".toDo-wrapper");
  // wrapped in boolean to only run when element is present
  if (toDoWrapper) {
    toDoWrapper.remove();
  }
}

export {
  displayRender,
  toDoItemRender,
  clearOldItems
};
