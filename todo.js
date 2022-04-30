// create array
let todoList = [];

const firstName = document.getElementById("inputFirstName");
const lastName = document.getElementById("inputLastName");
const email = document.getElementById("inputEmail");
const address = document.getElementById("inputAddress");
const city = document.getElementById("inputCity");
const zipCode = document.getElementById("inputZipCode");

const firstNameError = document.getElementById("firstName-error");
const lastNameError = document.getElementById("lastName-error");
const emailError = document.getElementById("email-error");
const addressError = document.getElementById("address-error");
const cityError = document.getElementById("city-error");
const zipCodeError = document.getElementById("zipCode-error");

// render todo list
renderTodoList();

function validateTodoForm() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const addressValue = address.value.trim();
  const cityValue = city.value.trim();
  const zipCodeValue = zipCode.value.trim();

  // validate First Name
  if (firstNameValue === null || firstNameValue === "") {
    firstName.classList.add("border-danger");
    firstName.focus();
    firstNameError.innerText = "First Name must be filled out";
    return false;
  } else {
    firstName.classList.remove("border-danger");
    firstNameError.innerText = "";
  }
  // validate Last Name
  if (lastNameValue === null || lastNameValue === "") {
    lastName.classList.add("border-danger");
    lastNameError.innerText = "Last Name must be filled out";
    lastName.focus();
    return false;
  } else {
    lastName.classList.remove("border-danger");
    lastNameError.innerText = "";
  }
  // validate Email
  if (emailValue === null || emailValue === "") {
    email.classList.add("border-danger");
    emailError.innerText = "Email must be filled out";
    email.focus();
    return false;
  } else {
    email.classList.remove("border-danger");
    emailError.innerText = "";
  }
  // validate Address
  if (addressValue === null || addressValue === "") {
    address.classList.add("border-danger");
    addressError.innerText = "Address must be filled out";
    address.focus();
    return false;
  } else {
    address.classList.remove("border-danger");
    addressError.innerText = "";
  }
  // validate city
  if (cityValue === null || cityValue === "") {
    city.classList.add("border-danger");
    cityError.innerText = "City must be filled out";
    city.focus();
    return false;
  } else {
    city.classList.remove("border-danger");
    cityError.innerText = "";
  }
  // validate zipCode
  if (zipCodeValue === null || zipCodeValue === "") {
    zipCode.classList.add("border-danger");
    zipCodeError.innerText = "ZipCode must be filled out";
    zipCode.focus();
    return false;
  } else {
    zipCode.classList.remove("border-danger");
    zipCodeError.innerText = "";
  }
  return true;
}

function onToDoFormSubmit() {
  if (validateTodoForm()) {
    const formData = getToDoFormData();
    addTodoList(formData);
  }
}

function getToDoFormData() {
  const todoFormData = {};
  // Get the input value
  todoFormData.firstName = firstName.value;
  todoFormData.lastName = lastName.value;
  todoFormData.email = email.value;
  todoFormData.address = address.value;
  todoFormData.city = city.value;
  todoFormData.zipCode = zipCode.value;
  return todoFormData;
}

function addTodoList(newTodo) {
  // add the new task to todo list
  todoList.push(newTodo);
  // add the todo list to localstorage
  localStorage.setItem("todos", JSON.stringify(todoList));
  // render the todo list
  renderTodoList();
  // Reset all the input value
  resetToDoForm();
}

function renderTodoList() {
  const tableBody = document.getElementById("todoBody");
  // clear the table
  tableBody.innerHTML = null;
  // get the todo list from localstorage
  const todos = localStorage.getItem("todos");
  todoList = JSON.parse(todos) || [];

  for (let i = 0; i < todoList.length; i++) {
    // create table row (tr)
    const tableRow = document.createElement("tr");
    // create Si:No td
    const numberTD = document.createElement("td");
    numberTD.innerText = i + 1;
    // create First Name td
    const firstNameTD = document.createElement("td");
    firstNameTD.innerText = todoList[i].firstName;
    // create Last Name td
    const lastNameTD = document.createElement("td");
    lastNameTD.innerText = todoList[i].lastName;
    // create Email td
    const emailTD = document.createElement("td");
    emailTD.innerText = todoList[i].email;
    // create Address td
    const addressTD = document.createElement("td");
    addressTD.innerText = todoList[i].address;
    // create City td
    const cityTD = document.createElement("td");
    cityTD.innerText = todoList[i].city;
    // create Zip Code td
    const zipCodeTD = document.createElement("td");
    zipCodeTD.innerText = todoList[i].zipCode;
    // create Actions td
    const actionsTD = document.createElement("td");
    // create delete button
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.setAttribute("class", "btn btn-outline-danger");
    button.addEventListener("click", function () {
      deleteTodoList(i);
    });
    actionsTD.appendChild(button);

    tableRow.appendChild(numberTD);
    tableRow.appendChild(firstNameTD);
    tableRow.appendChild(lastNameTD);
    tableRow.appendChild(emailTD);
    tableRow.appendChild(addressTD);
    tableRow.appendChild(cityTD);
    tableRow.appendChild(zipCodeTD);
    tableRow.appendChild(actionsTD);

    tableBody.appendChild(tableRow);
  }
}

function deleteTodoList(item) {
  if (confirm("Are you sure to delete this record ?")) {
    // Delete the current row
    todoList.splice(item, 1);
    localStorage.setItem("todos", JSON.stringify(todoList));
    renderTodoList();
  }
}

function resetToDoForm() {
  // Reset all the input value
  firstName.value = "";
  lastName.value = "";
  email.value = "";
  address.value = "";
  city.value = "";
  zipCode.value = "";
}

function deleteAllTodoList() {
  if (confirm("Are you sure to delete all this record ?")) {
    localStorage.clear();
    // render the todo list
    renderTodoList();
  }
}
