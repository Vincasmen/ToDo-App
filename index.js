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
        <p class="todo-paragraph-class" id="todo-paragraph">
        ${submitField.value}
        </p>
        <button class="delete">
        <i id="trash-icon" class="fas fa-trash-alt"></i>
        </button>
        <label cl="checkbox-label">
        <input id="checkboxid" class="checkbox" type="checkbox">
        <span class="check-box-span"></span>
        </label>
          </div>
          </card>`;

    document.body.appendChild(todoCard);

    //! 2 WAY BINDIND !//

    submitField.value = "";

    //! REMOVE BUTTON !//

    const deleteBtn = document.querySelectorAll(".delete");
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].onclick = function () {
        console.log(deleteBtn);
        this.parentNode.remove();
      };
    }
    const checkBtn = document.querySelectorAll(".checkbox");
    const paragraph = document.querySelectorAll(".todo-paragraph-class");

    // for (let o = 0; o < paragraph.length; o++) {
    // paragraph[o]
    for (let i = 0; i < checkBtn.length; i++) {
      checkBtn[i].onclick = function () {
        paragraph[i].classList.toggle("line-through");
      };
    }
  }
});
