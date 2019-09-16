// Declare Variables
const sizePicker = document.getElementById('sizePicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const pixelCanvas = document.getElementById('pixelCanvas');

// Initialize Input variables;
let color = 'black';
let height = 1;
let width = 1;
let grid = document.getElementsByTagName('tr');

// Select color input
colorPicker.addEventListener('input', (event) => color = event.target.value);

// Select size input
inputHeight.addEventListener('input', (event) => height = event.target.value);
inputWidth.addEventListener('input', (event) => width = event.target.value);

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', setSize);

function setSize(event) {
    event.preventDefault();
    makeGrid(height, width);
}

function makeGrid(height, width) {
    for (let h = 1; h <= height; h++) {
        let tr = document.createElement('tr');
        // tr.setAttribute('id', h);
        pixelCanvas.appendChild(tr);
        for (let w = 1; w <= width; w++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
    }
}