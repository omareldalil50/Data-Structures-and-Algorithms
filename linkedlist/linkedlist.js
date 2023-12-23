
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    addToEnd(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    addToStart(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    countNodes() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }

    removeFromEnd() {
        if (!this.head) {
            return null;
        }
        let current = this.head;
        let previous = null;
        while (current.next) {
            previous = current;
            current = current.next;
        }
        if (previous) {
            previous.next = null;
        } else {
            this.head = null;
        }
        return current.value;
    }

    traverse() {
        let current = this.head;
        let output = '';
        while (current) {
            output += `<div class="node">${current.value}</div>`;
            current = current.next;
        }
        return output;
    }

    toArray() {
        const array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        return array;
    }
}

// Create a linked list instance
const linkedList = new LinkedList();

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addToLinkedList();
    }
}

function addToLinkedList() {
    const nodeValue = document.getElementById('nodeValue').value;
    linkedList.addToEnd(nodeValue);
    traverseLinkedList(); // تحديث العرض بعد إضافة عنصر
}

function removeFromLinkedList() {
    linkedList.removeFromEnd();
    traverseLinkedList(); // تحديث العرض بعد حذف عنصر
}

function traverseLinkedList() {
    const traversalOutput = linkedList.traverse();
    displayOutput('LinkedList: ' + traversalOutput);
}

function countNodes() {
    const nodesCount = linkedList.countNodes();
    displayOutput('Number of Nodes: ' + nodesCount);
}

function addFirst() {
    const nodeValue = document.getElementById('nodeValue').value;
    linkedList.addToStart(nodeValue);
    traverseLinkedList(); // تحديث العرض بعد إضافة عنصر في بداية LinkedList
}

function addLast() {
    const nodeValue = document.getElementById('nodeValue').value;
    linkedList.addToEnd(nodeValue);
    traverseLinkedList(); // تحديث العرض بعد إضافة عنصر في نهاية LinkedList
}

function convertToArray() {
    const array = linkedList.toArray();
    displayOutput('Array: ' + JSON.stringify(array));
}

function displayOutput(message) {
    document.getElementById('output').innerHTML = message;
}