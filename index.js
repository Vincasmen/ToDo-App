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
        <input id="checkboxid" class="checkbox" type="checkbox">
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

    const checkBtn = document.querySelector("p");
    for (let i = 0; i < checkBtn.length; i++) {
      checkBtn[i].onclick = function () {
        if (target.classList === "p") {
          target.classList.toggle(".line-through");
        } else {
          console.log("clicked");
          console.log(checkBtn);
        }

        // parentNode.add(".-line-through");
      };
    }
  }
});
