import "../styles.css";

/* show modal that includes form to add new Todo item
add date package for choosing due date
validate form to ensure everything filled out as expected
additionally, add class styling to view/and not view modal
Validate date to make sure it isn't in the past */

function showAddItemModal () {
  blurBackground();

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalCloseBtn = document.createElement("span");
  modalCloseBtn.classList.add("modal-close-btn");
  modalCloseBtn.innerHTML = "&times;";

  const modalTitle = document.createElement("h3");
  modalTitle.textContent = "Create New Todo";

  // form block - submit button added outside this block
  const modalForm = document.createElement("form");
  modalForm.id = "modal-form";
  const modalTitleLabel = document.createElement("label");
  modalTitleLabel.classList.add("modal-form-labels");
  modalTitleLabel.for = "todo-title";
  modalTitleLabel.textContent = "Title:";
  const modalTitleInput = document.createElement("input");
  modalTitleInput.classList.add("modal-form-controls");
  modalTitleInput.type = "text";
  modalTitleInput.name = "todo-title";
  modalTitleInput.id = "todo-title";
  modalTitleInput.placeholder = "Enter a title for your task...";

  const modalDueDateLabel = document.createElement("label");
  modalDueDateLabel.classList.add("modal-form-labels");
  modalDueDateLabel.for = "todo-due-date";
  modalDueDateLabel.textContent = "Due Date:";
  const modalDueDateInput = document.createElement("input");
  modalDueDateInput.classList.add("modal-form-controls");
  modalDueDateInput.type = "date";
  modalDueDateInput.name = "todo-due-date";
  modalDueDateInput.id = "todo-due-date";
  modalDueDateInput.min = new Date().toLocaleDateString();

  const modalDescriptionLabel = document.createElement("label");
  modalDescriptionLabel.classList.add("modal-form-labels");
  modalDescriptionLabel.for = "todo-description";
  modalDescriptionLabel.textContent = "Description:";
  const modalDescriptionInput = document.createElement("textarea");
  modalDescriptionInput.classList.add("modal-form-controls");
  modalDescriptionInput.rows = "4";
  modalDescriptionInput.cols = "50";
  modalDescriptionInput.maxLength = "750";
  modalDescriptionInput.id = "todo-description";
  modalDescriptionInput.placeholder = "Enter a description (750 char. limit)...";

  const modalPriorityLabel = document.createElement("label");
  modalPriorityLabel.id = "todo-priority-label";
  modalPriorityLabel.classList.add("modal-form-labels");
  modalPriorityLabel.for = "todo-priority";
  modalPriorityLabel.textContent = "Priority Level:";
  const modalPriorityInput = document.createElement("input");
  modalPriorityInput.classList.add("modal-form-controls");
  modalPriorityInput.id = "todo-priority";
  modalPriorityInput.type = "number";
  modalPriorityInput.max = 3;
  modalPriorityInput.min = 1;
  modalPriorityInput.value = 1;

  const modalSubmitBtn = document.createElement("input");
  modalSubmitBtn.id = "modal-submit-btn";
  modalSubmitBtn.value = "Create Todo";
  modalSubmitBtn.type = "submit";

  // append child elements to form block
  modalForm.appendChild(modalTitleLabel);
  modalForm.appendChild(modalTitleInput);
  modalForm.appendChild(modalDueDateLabel);
  modalForm.appendChild(modalDueDateInput);
  modalForm.appendChild(modalDescriptionLabel);
  modalForm.appendChild(modalDescriptionInput);
  modalForm.appendChild(modalPriorityLabel);
  modalForm.appendChild(modalPriorityInput);

  // append child elements to modal content block
  modalContent.appendChild(modalCloseBtn);
  modalContent.appendChild(modalTitle);
  modalContent.appendChild(modalForm);
  modalContent.appendChild(modalSubmitBtn);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
}

// helper functions for adding blur, as well as removing blur, modal, and clearing form inputs
function blurBackground () {
  // adds blur to background elements
  const aside = document.querySelector(".aside-nav");
  const header = document.querySelector(".page-header");
  const content = document.querySelectorAll(".toDo-div");
  const contentArr = [...content];

  aside.classList.add("blur-background");
  header.classList.add("blur-background");
  contentArr.forEach(todo => todo.classList.add("blur-background"));
}
function cancelInputModal () {
  // clear form inputs
  const titleInput = document.querySelector("#todo-title");
  titleInput.value = "";
  const dueDateInput = document.querySelector("#todo-due-date");
  dueDateInput.value = "";
  const descriptionInput = document.querySelector("#todo-description");
  descriptionInput.value = "";

  // clear blur from background elements
  const aside = document.querySelector(".aside-nav");
  const header = document.querySelector(".page-header");
  const content = document.querySelectorAll(".toDo-div");
  const contentArr = [...content];

  aside.classList.remove("blur-background");
  header.classList.remove("blur-background");
  contentArr.forEach(todo => todo.classList.remove("blur-background"));

  // removes modal element to prevent unwanted duplication causing UI errors
  const modal = document.querySelector(".modal");
  modal.remove();
}

export {
  showAddItemModal,
  cancelInputModal
};
