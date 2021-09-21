// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = "title changed";
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);


// GetElementById
// let headerTitle = document.getElementById('header-title');
// let header = document.getElementById('main-header');
// // headerTitle.textContent = "Hello";
// // headerTitle.innerText = "Goodbye";
// // headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = 'solid 3px #000';


// GetElementByClassName
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }


// GetElementByTagName
// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }


// QuerySelector
// let header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submitBtn = document.querySelector('input[type="submit"]');
// submitBtn.value = 'Send';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// Deliverable
// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// let thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.visibility = 'hidden';


// QuerySelectorAll
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "Hello";

// let odd = document.querySelectorAll("li:nth-child(odd)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
// }

// let even = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i < even.length; i++) {
//   even[i].style.backgroundColor = "#ccc";
// }

// Deliverable
// let second = document.querySelectorAll("li:nth-child(2)");
// second[0].style.color = 'green';

// let oddItems = document.querySelectorAll("li:nth-child(odd)");

// for (let i = 0; i < oddItems.length; i++) {
//   oddItems[i].style.backgroundColor = "green";
// }


// DOM Traversal
// let itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// children
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';

// // firstChild
// console.log(itemList.firstChild);

// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// // lastChild
// console.log(itemList.lastChild);

// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// // nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// Create a new div and add attributes
let newDiv = document.createElement('div');
newDiv.className = 'hello';
newDiv.id = 'test';
// newDiv.title = 'Hello Div';
newDiv.setAttribute('title', 'Hello Div');

// Create a new text node and append into div
let newText = document.createTextNode('Hello World');
newDiv.appendChild(newText);

// Add the created text into the webpage
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '30px';
console.log(newDiv);

// Add a li element to a existing list
let newLi = document.createElement('li');
let itemList = document.querySelector('ul#items');
let firstLi = itemList.firstElementChild;
let newLiText = document.createTextNode('Hello World');
newLi.appendChild(newLiText);
itemList.insertBefore(newLi, firstLi);

console.log(newLi);