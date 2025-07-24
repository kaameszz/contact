let form = document.getElementById("contact");
let nameInput = document.getElementById("name");
let phoneInput = document.getElementById("phone");
let emailInput = document.getElementById("email");
let display = document.getElementById("list");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let newDiv = document.createElement("div");
    newDiv.classList.add("card");
    display.appendChild(newDiv);

    // Name
    let nameField = document.createElement("input");
    nameField.value = nameInput.value;
    nameField.setAttribute("readonly", "readonly");
    newDiv.appendChild(nameField);

    // Phone
    let phoneField = document.createElement("input");
    phoneField.value = phoneInput.value;
    phoneField.setAttribute("readonly", "readonly");
    newDiv.appendChild(phoneField);

    // Email
    let emailField = document.createElement("input");
    emailField.value = emailInput.value;
    emailField.setAttribute("readonly", "readonly");
    newDiv.appendChild(emailField);

    // Editbtn
    let editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    newDiv.appendChild(editBtn);
    editBtn.addEventListener("click", function () {
        nameField.removeAttribute("readonly");
        phoneField.removeAttribute("readonly");
        emailField.removeAttribute("readonly");
    });

    // Savebtn
    let saveBtn = document.createElement("button");
    saveBtn.innerText = "Save";
    newDiv.appendChild(saveBtn);
    saveBtn.addEventListener("click", function () {
        nameField.setAttribute("readonly", "readonly");
        phoneField.setAttribute("readonly", "readonly");
        emailField.setAttribute("readonly", "readonly");
    });

    // Deletebtn
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    newDiv.appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function () {
        display.removeChild(newDiv);
    });

});
