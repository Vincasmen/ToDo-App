"use strict";

const submitBtn = document.getElementById("submit-btn");
const submitField = document.getElementById("submit-field");

submitBtn.addEventListener("click", function () {
  if (submitField.value.length == 0) {
    alert("You must have something to do❗");
  } else {
    submitField.textContent = alert("GJ");
  }
});
