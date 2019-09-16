// Declare Variables
const sizePicker = document.getElementById('sizePicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const pixelCanvas = document.getElementById('pixelCanvas');
const cell = document.getElementsByClassName('cells');

// Initialize Input variables;
let color = 'black';
let height = 1;
let width = 1;

// Select color input
colorPicker.addEventListener('input', (event) => color = event.target.value);

// Select size input
inputHeight.addEventListener('input', (event) => height = event.target.value);
inputWidth.addEventListener('input', (event) => width = event.target.value);

// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', function (event) {
    event.preventDefault();
    clearGrid();
    makeGrid();
});

function makeGrid() {
    for (let h = 1; h <= height; h++) {
        let tr = document.createElement('tr');
        pixelCanvas.appendChild(tr);
        for (let w = 1; w <= width; w++) {
            let td = document.createElement('td');
            tr.appendChild(td);
        }
    }
}

function clearGrid() {
    while (pixelCanvas.firstChild) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}
// Add color to cell

// cell.addEventListener('click', function addColor(event) {
//     console.log(event.target);
// });


