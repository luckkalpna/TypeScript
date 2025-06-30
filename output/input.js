"use strict";
function getInfo() {
    const nameInput = document.getElementById("username");
    const name = nameInput.value;
    const emailInput = document.getElementById("email");
    const emial = emailInput.value;
    const ageInput = document.getElementById("age");
    const age = ageInput.value;
    console.log(name, emial, age);
}
