// Declare Variables
const sizePicker = document.getElementById('sizePicker');
const inputHeight = document.getElementById('inputHeight');
const inputWidth = document.getElementById('inputWidth');
const colorPicker = document.getElementById('colorPicker');
const pixelCanvas = document.getElementById('pixelCanvas');

// Initialize Input variables;
let color = "black";
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

// Show the drawing grid on the page;
function makeGrid() {
    for (let h = 1; h <= height; h++) {
        const tr = document.createElement('tr');
        pixelCanvas.appendChild(tr);
        for (let w = 1; w <= width; w++) {
            const td = document.createElement('td');
            tr.appendChild(td);
            td.addEventListener('click', function setColor() {
                this.style.backgroundColor = color;              
            });
        }
    }  
}

// Clear the previous grid 
function clearGrid() {
    while (pixelCanvas.firstChild) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}