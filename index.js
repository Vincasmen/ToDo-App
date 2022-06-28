"use strict";
const submitBtn = document.getElementById("submit-btn");
const submitField = document.getElementById("submit-field");
const submitedToDo = document.getElementById("todo-paragraph");

submitBtn.addEventListener("click", function () {
  //! ALERT WHEN INPUT STAY EMPTY !//

  if (submitField.value.length == 0) {
    alert("You must have something to do❗");

    //! CREATING HTML ELEMENT FOR TODO !//
  } else {
    const todoCard = document.createElement("card");

    todoCard.innerHTML = `
    <card id="todo-card">
    <div id="todo-div">
    <div class="paragraph-div">
    <textarea class="todo-paragraph-class" id="todo-paragraph" rows="1" wrap="hard"  readonly>${submitField.value}</textarea>
    </div>
    <div class="edit-save-btns">
    <button class="editBtn">
    <i id="edit-icon" class="fas fa-pen"></i>
    </button>
    <button class="saveBtn save-hidden">
    <i id="save-icon" class="far fa-save"></i>
    </button>
    </div>
    <button class="resizeBtn">
    <i id="resize-icon" class="fas fa-expand-arrows-alt"></i>
    </button>
    <button class="delete">
    <i id="trash-icon" class="fas fa-trash-alt"></i>
    </button>
    <label class="form-control">
    <input class="checkbox" type="checkbox" name="checkbox-checked" />
    </div>
    </card>`;

    // saveBtn.classList.add("save-hidden");
    document.body.appendChild(todoCard);

    //! 2 WAY BINDIND !//

    submitField.value = "";

    //! REMOVE BUTTON !//

    const deleteBtn = document.querySelectorAll(".delete");
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    //! CHECK BOX !//

    const checkBtn = document.querySelectorAll(".checkbox");
    const paragraph = document.querySelectorAll(".todo-paragraph-class");

    for (let i = 0; i < checkBtn.length; i++) {
      checkBtn[i].onclick = function () {
        paragraph[i].classList.toggle("line-through");
      };
    }
    //! Resize Button !//
    const checkBoxLabel = document.querySelectorAll(".form-control");
    const resizeBtn = document.querySelectorAll(".resizeBtn");
    const editBtn = document.querySelectorAll(".editBtn");
    const saveBtn = document.querySelectorAll(".saveBtn");

    for (let i = 0; i < resizeBtn.length; i++) {
      resizeBtn[i].onclick = function () {
        checkBoxLabel[i].classList.toggle("check-box-top");
        deleteBtn[i].classList.toggle("delete-top");
        resizeBtn[i].classList.toggle("resize-top");
        editBtn[i].classList.toggle("edit-top");
        saveBtn[i].classList.toggle("save-top");
        paragraph[i].classList.toggle("resize");
      };
    }

    //! Edit Button !//

    // TODO add save icon when enter edit mode

    for (let i = 0; i < editBtn.length; i++) {
      editBtn[i].onclick = function () {
        paragraph[i].toggleAttribute("readonly");
        paragraph[i].focus();
        paragraph[i].classList.toggle("edit-focus");
        editBtn[i].classList.toggle("edit-hidden");
        saveBtn[i].classList.toggle("save-hidden");
      };
    }
    for (let i = 0; i < saveBtn.length; i++) {
      saveBtn[i].onclick = function () {
        paragraph[i].toggleAttribute("readonly");
        paragraph[i].focus();
        paragraph[i].classList.toggle("edit-focus");
        editBtn[i].classList.toggle("edit-hidden");
        saveBtn[i].classList.toggle("save-hidden");
      };
    }
  }
});
