let form = document.getElementById("addForm");
let itemList = document.getElementById("items");

// form submit event handler
form.addEventListener("submit", addItem);

// delete event handler
itemList.addEventListener("click", removeItem);

// Add item function
function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById("item");

  let item = document.createElement("li");
  item.className = "list-group-item";
  item.appendChild(document.createTextNode(newItem.value));

  // Create and append the delete button for new item
  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));

  // Create and append the edit button for new item
  let editBtn = document.createElement("button");
  editBtn.className = "btn btn-success btn-sm float-right edit";
  editBtn.appendChild(document.createTextNode("edit"));

  item.appendChild(editBtn);
  item.appendChild(deleteBtn);
  itemList.appendChild(item);
  console.log(item);
}

// Remove item function
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure?")) {
      let itemToRemove = e.target.parentElement;
      itemList.removeChild(itemToRemove);
    }
  }
}
