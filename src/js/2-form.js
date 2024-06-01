const form = document.querySelector('.feedback-form');

const formData = {
    email: "",
    message: "",
};

form.addEventListener('input', formOnInput);

function formOnInput(e) {
    e.preventDefault();
    formData.email = form.elements.email.value.trim();
    formData.message = form.elements.message.value.trim();
    saveToLs("feedback-form-state", formData);
};

// ================================
window.addEventListener('DOMContentLoaded', pageOnLoad);

function pageOnLoad(e) {
    const formDataLoad  = loadFromLs("feedback-form-state");
    if(formDataLoad) {
        form.elements.email.value = formDataLoad.email;
        form.elements.message.value = formDataLoad.message;
        formData.email = formDataLoad.email;
        formData.message = formDataLoad.message;
    };
};

form.addEventListener('submit', formOnSubmit);

function formOnSubmit(e) {
    e.preventDefault();
    if(form.elements.email.value && form.elements.message.value) {
        let savedData = formData;
        console.log(savedData);
        form.reset();
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
    } else {
        alert("Fill please all fields");
    };
};

// ====================LOCALSTORAGE FUNCTIONS=================================


function saveToLs(key, value) {
    const jsonData = JSON.stringify(value)
    localStorage.setItem(key, jsonData)
};

function loadFromLs(key) {
    const json = localStorage.getItem(key);
    try {
        const data = JSON.parse(json);
        return data;
    } catch {
        return json;
    }
};