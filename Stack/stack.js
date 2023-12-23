var stackContainer = document.getElementById("stack-container");


document.addEventListener("DOMContentLoaded", function () {

    initializeStack();
});

function initializeStack() {
    // You can add initial items here if needed
    // var initialItem1 = createStackItem("Initial Item 1");
    // var initialItem2 = createStackItem("Initial Item 2");
    // stackContainer.appendChild(initialItem1);
    // stackContainer.appendChild(initialItem2);
}

function push() {
    var inputElement = document.getElementById("push-input");
    var inputValue = inputElement.value.trim();

    if (inputValue !== "") {
        var newItem = createStackItem(inputValue);
        stackContainer.appendChild(newItem);
        inputElement.value = "";
    }
}

function pop() {
    var lastItem = stackContainer.lastChild;

    if (lastItem) {
        stackContainer.removeChild(lastItem);
    }
}

function topItem() {
    var lastItem = stackContainer.lastChild;
    var topValue = lastItem ? lastItem.textContent : "Stack is empty";
    alert("Top item: " + topValue);
}

function size() {
    var stackSize = stackContainer.children.length;
    alert("Stack size: " + stackSize);
}

function isEmpty() {
    var isEmpty = stackContainer.children.length === 0;
    alert("Is stack empty: " + isEmpty);
}

function createStackItem(text) {
    var newItem = document.createElement("div");
    newItem.className = "stack-item";
    newItem.textContent = text;
    return newItem;
}