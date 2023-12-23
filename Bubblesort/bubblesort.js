const MAIN = document.querySelector("main");
const BTN = document.querySelector("button");
const INPUT = document.getElementById("inputArray");

let arrayToSort = [, , , , , , , , ];
let n = arrayToSort.length - 1;
let i = 0;
let swaps = 0;
let left = null;
let right = null;
let tickRate = 750;
let nextTick = -1;

arrayToSort.forEach((a, i) => {
    const d = document.createElement("div");
    d.appendChild(document.createTextNode(a));
    d.className = "array-element";
    d.style.order = i;
    d.dataset.val = a;
    MAIN.appendChild(d);
});

function bubbleSort(clock) {
    if (i >= n) {
        if (swaps === 0) {
            if (left !== null) left.classList.toggle("current");
            if (right !== null) right.classList.toggle("swap-target");
            return;
        }
        i = 0;
        swaps = 0;
    }

    if (clock >= nextTick) {
        if (left !== null) left.classList.toggle("current");
        if (right !== null) right.classList.toggle("swap-target");
        if (left !== null) left.classList.remove("swap");
        if (right !== null) right.classList.remove("swap");
        nextTick = clock + tickRate;
        const intLeft = arrayToSort[i];
        const intRight = arrayToSort[i + 1];
        left = document.querySelector(`[data-val="${intLeft}"]`);
        right = document.querySelector(`[data-val="${intRight}"]`);

        left.classList.toggle("current");
        right.classList.toggle("swap-target");

        if (intLeft > intRight) {
            left.classList.add("swap");
            right.classList.add("swap");
            swaps++;
            arrayToSort[i] = intRight;
            arrayToSort[i + 1] = intLeft;
            left.style.order++;
            right.style.order--;
        }
        i++;
    }
    window.requestAnimationFrame(bubbleSort);
}

BTN.addEventListener("click", () => {
    resetPage();

    const userInput = INPUT.value;
    const newArray = userInput.split(',').map(Number);
    if (validateInput(newArray)) {
        arrayToSort = newArray;
        initializePage();
        window.requestAnimationFrame(bubbleSort);
    } else {
        alert("Please enter a valid list of numbers separated by commas.");
    }
});

function validateInput(inputArray) {
    return Array.isArray(inputArray) && inputArray.length > 1;
}

function resetPage() {
    MAIN.innerHTML = '';
}

function initializePage() {
    arrayToSort.forEach((a, i) => {
        const d = document.createElement("div");
        d.appendChild(document.createTextNode(a));
        d.className = "array-element";
        d.style.order = i;
        d.dataset.val = a;
        MAIN.appendChild(d);
    });

    n = arrayToSort.length - 1;
    i = 0;
    swaps = 0;
    left = null;
    right = null;
    nextTick = -1;
}
