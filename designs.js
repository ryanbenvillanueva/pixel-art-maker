// Declare Variables
const sizePicker = document.getElementById('sizePicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const pixelCanvas = document.getElementById('pixelCanvas');

// Select color input
colorPicker.addEventListener('input', setColor);

function setColor(event) {
    const color = event.target.value;
}

// Select size input
inputHeight.addEventListener('input', setHeight);

function setHeight(event) {
    const height = event.target.value;
    return height;
}

inputWidth.addEventListener('input', setWidth);

function setWidth(event) {
    const width = event.target.value;
    return width;
}

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', setSize);

function setSize(event) {
    event.preventDefault();
    makeGrid();
}

function makeGrid() {

// Your code goes here!
console.log("this function is called.");

}
