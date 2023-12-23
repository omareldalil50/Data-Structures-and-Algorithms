
let myArray = [];

function createArray() {
    const input = document.getElementById('arrayInput').value;
    myArray = input.split(',').map(item => Number(item.trim()));
    displayOutput('Array created: ' + myArray);
}

function getArrayLength() {
    const arrayLength = myArray.length;
    displayOutput('Array length: ' + arrayLength);
}

function accessArrayElement() {
    const index = prompt('Enter the index to access:');
    const element = myArray[index];
    displayOutput('Element at index ' + index + ': ' + element);
}

function modifyArray() {
    const index = prompt('Enter the index to modify:');
    const newValue = prompt('Enter the new value:');
    myArray[index] = newValue;
    displayOutput('Array modified: ' + myArray);
}

function loopThroughArray() {
    let outputText = 'Array elements: ';
    for (let i = 0; i < myArray.length; i++) {
        outputText += myArray[i] + ' ';
    }
    displayOutput(outputText);
}

function calculateArraySum() {
    const arraySum = myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    displayOutput('Sum of array elements: ' + arraySum);
}

function addToArray() {
    const newValue = prompt('Enter the value to add:');
    myArray.push(Number(newValue));
    displayOutput('Array after adding a new value: ' + myArray);
}

function removeFromArray() {
    const indexToRemove = prompt('Enter the index to remove:');
    myArray.splice(indexToRemove, 1);
    displayOutput('Array after removing element: ' + myArray);
}

function searchInArray() {
    const searchValue = prompt('Enter the value to search:');
    const foundIndex = myArray.indexOf(Number(searchValue));
    if (foundIndex !== -1) {
        displayOutput('Value found at index: ' + foundIndex);
    } else {
        displayOutput('Value not found in the array');
    }
}

function displayOutput(message) {
    document.getElementById('output').innerHTML = message;
}