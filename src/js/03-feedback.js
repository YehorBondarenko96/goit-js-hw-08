const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');


const localStorageObject = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
    input.value = localStorageObject.email || "";
    textarea.value = localStorageObject.message || "";
let dataForm = {
    email: input.value,
    message: textarea.value
};

form.addEventListener('input', throttle(() => {
        dataForm.email = input.value;
        dataForm.message = textarea.value;
    localStorage.setItem("feedback-form-state", JSON.stringify(dataForm));
    }, 500));
    
    form.addEventListener('submit', throttle((event) => {
        event.preventDefault();
        console.log(dataForm);
        localStorage.removeItem("feedback-form-state");
        dataForm = {};
        form.reset();
    }, 500));