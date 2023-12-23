var queueContainer = document.getElementById("queue-container");


document.addEventListener("DOMContentLoaded", function () {

    initializeQueue();
});

function initializeQueue() {
    // You can add initial items here if needed
    // var initialItem1 = createQueueItem("Initial Item 1");
    // var initialItem2 = createQueueItem("Initial Item 2");
    // queueContainer.appendChild(initialItem1);
    // queueContainer.appendChild(initialItem2);
}

function enqueue() {
    var inputElement = document.getElementById("enqueue-input");
    var inputValue = inputElement.value.trim();

    if (inputValue !== "") {
        var newItem = createQueueItem(inputValue);
        queueContainer.appendChild(newItem);
        inputElement.value = "";
    }
}

function dequeue() {
    var firstItem = queueContainer.firstChild;

    if (firstItem) {
        queueContainer.removeChild(firstItem);
    }
}

function front() {
    var firstItem = queueContainer.firstChild;
    var frontValue = firstItem ? firstItem.textContent : "Queue is empty";
    alert("Front item: " + frontValue);
}

function rear() {
    var lastItem = queueContainer.lastChild;
    var rearValue = lastItem ? lastItem.textContent : "Queue is empty";
    alert("Rear item: " + rearValue);
}

function size() {
    var queueSize = queueContainer.children.length;
    alert("Queue size: " + queueSize);
}

function isEmpty() {
    var isEmpty = queueContainer.children.length === 0;
    alert("Is queue empty: " + isEmpty);
}

function createQueueItem(text) {
    var newItem = document.createElement("div");
    newItem.className = "queue-item";
    newItem.textContent = text;
    return newItem;
}