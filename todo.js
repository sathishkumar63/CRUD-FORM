// create array
let todoList = [];
// render todo list
renderTodoList();

function onToDoFormSubmit() {
  const formData = getToDoFormData();
  addTodoList(formData);
}

function getToDoFormData() {
  const todoFormData = {};
  // Get the input value
  todoFormData.firstName = document
    .getElementById("inputFirstName")
    .value.trim();
  todoFormData.lastName = document.getElementById("inputLastName").value.trim();
  todoFormData.email = document.getElementById("inputEmail").value.trim();
  todoFormData.address = document.getElementById("inputAddress").value.trim();
  todoFormData.city = document.getElementById("inputCity").value.trim();
  todoFormData.zipCode = document.getElementById("inputZipCode").value.trim();
  return todoFormData;
}

function addTodoList(newTodo) {
  // return if nothing was entered in the input
  if (!newTodo) return;
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
  document.getElementById("inputFirstName").value = "";
  document.getElementById("inputLastName").value = "";
  document.getElementById("inputEmail").value = "";
  document.getElementById("inputAddress").value = "";
  document.getElementById("inputCity").value = "";
  document.getElementById("inputZipCode").value = "";
}

function deleteAllTodoList() {
  if (confirm("Are you sure to delete all this record ?")) {
    localStorage.clear();
    // render the todo list
    renderTodoList();
  }
}
