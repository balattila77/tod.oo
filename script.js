var button = document.getElementById("addBtn");
var input = document.getElementById("itemInput");
var ul = document.querySelector("ul");
var listItems = document.querySelectorAll("li");
var deleteBtns = document.getElementsByClassName("deleteBtn");

function inputLength() {
    return input.value.length;
}

function toggleDone(item) {
    if (item.target.localName === "i") {
        item.target.parentElement.classList.toggle("done");
        item.target.classList.toggle("fa-circle");
        item.target.classList.toggle("fa-circle-check");
    } else if (item.target.localName === "li") {
        item.target.classList.toggle("done");
        item.target.children[0].classList.toggle("fa-circle");
        item.target.children[0].classList.toggle("fa-circle-check");
    }

}

function createListElement() {
    let li = document.createElement("li");
    let circle = document.createElement("i");
    let deleteBtn = document.createElement("b");
    circle.classList.add("fa-regular", "fa-circle");

    deleteBtn.classList.add("fa-solid", "fa-trash");
    deleteBtn.addEventListener('click', deleteItem);

    li.appendChild(circle);
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(deleteBtn);
    li.addEventListener('click', toggleDone);
    ul.appendChild(li);
    input.value = "";

}

function addNewItemAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addNewItemAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function deleteItem(item) {
    item.target.parentElement.remove();
}

button.addEventListener("click", addNewItemAfterClick);

input.addEventListener("keypress", addNewItemAfterKeypress);