import "../styles.css";
import { myToDoItems } from "./createToDo";
import "../assets/images/GitHub-Mark-32px.png";

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

  const highPriority = document.createElement("p");
  highPriority.dataset.attribute = 1;
  highPriority.classList.add("tasks-nav");
  highPriority.textContent = "High Priority";
  highPriority.style.color = "rgba(250, 54, 54, 0.822)";

  const mediumPriority = document.createElement("p");
  mediumPriority.dataset.attribute = 2;
  mediumPriority.classList.add("tasks-nav");
  mediumPriority.textContent = "Medium Priority";
  mediumPriority.style.color = "rgba(143, 117, 21)";

  const lowPriority = document.createElement("p");
  lowPriority.dataset.attribute = 3;
  lowPriority.classList.add("tasks-nav");
  lowPriority.textContent = "Low Priority";
  lowPriority.style.color = "rgba( 52, 137, 52)";

  const signature = document.createElement("small");
  signature.classList.add("signature");
  signature.innerHTML = "Made By: <a href=\"https://www.linkedin.com/in/dallas-pataska/\">Dallas Pataska</a><br><a href=\"https://github.com/pataskad/js-toDoList\"><img src=\"0035c307a36c17babb8d.png\"></a>";

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
  for (let i = 0; i < myToDoItems.length; i++) {
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add("toDo-div");

    if (myToDoItems[i].priority === 1) {
      toDoDiv.style.backgroundColor = "rgba(34, 138, 34, 0.342)";
    }
    if (myToDoItems[i].priority === 2) {
      toDoDiv.style.backgroundColor = "rgba(143, 117, 21, .342)";
    }
    if (myToDoItems[i].priority === 3) {
      toDoDiv.style.backgroundColor = "rgba(204, 54, 54, 0.342)";
    }

    const title = document.createElement("p");
    title.classList.add("toDo-title");
    title.innerHTML = `${myToDoItems[i].title}`;
    const toDoDeleteBtn = document.createElement("span");
    toDoDeleteBtn.innerHTML = "&times;";
    toDoDeleteBtn.dataset.attribute = `${myToDoItems.indexOf(myToDoItems[i])}`;
    toDoDeleteBtn.classList.add("toDo-deleteBtn");
    const description = document.createElement("p");
    description.innerHTML = `${myToDoItems[i].description}`;

    toDoDiv.appendChild(title);
    toDoDiv.appendChild(toDoDeleteBtn);
    toDoDiv.appendChild(description);
    toDoWrapper.appendChild(toDoDiv);
    document.body.appendChild(toDoWrapper);
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
