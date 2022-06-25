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
        <p class="todo-paragraph-class" id="todo-paragraph">
        ${submitField.value}
        
        </p>
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
    for (let i = 0; i < resizeBtn.length; i++) {
      resizeBtn[i].onclick = function () {
        checkBoxLabel[i].classList.toggle("check-box-top");
        deleteBtn[i].classList.toggle("delete-top");
        resizeBtn[i].classList.toggle("resize-top");
        paragraph[i].classList.toggle("resize");
      };
    }
  }
});
