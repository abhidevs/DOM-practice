let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// form submit event
form.addEventListener("submit", addItem);

// delete event
itemList.addEventListener("click", removeItem);

// filter event
filter.addEventListener("keyup", filterItems);

// Add item functionality
function addItem(e) {
  e.preventDefault();
  let newItem = document.getElementById("item");
  let newDesc = document.getElementById("itemDesc");

  let item = document.createElement("li");
  item.className = "list-group-item";
  item.appendChild(document.createTextNode(newItem.value));

  let lineBreak = document.createElement("br");
  item.appendChild(lineBreak);
  let itemDesc = document.createElement("small");
  itemDesc.appendChild(document.createTextNode(newDesc.value));
  item.appendChild(itemDesc);

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

// Remove item functionality
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you Sure?")) {
      let itemToRemove = e.target.parentElement;
      itemList.removeChild(itemToRemove);
    }
  }
}

// Filter item functionality
function filterItems(e) {
  let searchQuery = e.target.value.toLowerCase();
  let items = itemList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    let itemDesc = item.querySelector('small').textContent;

    if (itemName.toLowerCase().indexOf(searchQuery) !== -1 || itemDesc.toLowerCase().indexOf(searchQuery) !== -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
