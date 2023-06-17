console.log("From Content.js");

const form = document.querySelector("#checklistForm");

// Setting the checkbox list according the Storage options
chrome.storage.sync.get(null).then((result) => {
    for (let [key, value] of Object.entries(result)) {
        document.querySelector(`input[name=${key}]`).checked = value;
    }
});

function setOptionsToStorage(options) {
    /* 
    Function that sets the options given to the user's Storage
    */
    chrome.storage.sync.set(options).then(() => {
        console.log("Storage options were set.");
    });
} 

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const saveButton = document.getElementById("save_button");
    const options = {};

    saveButton.disabled = true;

    saveButton.innerText = "Saving...";

    const checkboxes = form.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach(function (checkbox) {
        options[checkbox.name] = checkbox.checked;
    });

    setOptionsToStorage(options);

    setTimeout(() => {
        saveButton.innerText = "Saved ✔";
        saveButton.disabled = false;
        setTimeout(() => {
            saveButton.innerText = "Save";
        }, 1100);
    }, 1300);

});