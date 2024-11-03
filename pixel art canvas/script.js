const colorpicker = document.getElementById("colorpicker"); 
const eraseButton = document.getElementById("eraseButton");
const drawButton = document.getElementById("drawButton");
const canvas = document.getElementById("board");
const saveBtn = document.getElementById("saveButton");
const ctx = canvas.getContext('2d');

const tempCanvas = document.createElement("canvas");
const tempCtx = tempCanvas.getContext('2d');

let CANVAS_WIDTH = 32;  // Реальний розмір 32x32
let CANVAS_HEIGHT = 32; // Реальний розмір 32x32

let scale = 10;  // Масштабування до 320x320
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;
canvas.style.width = `${CANVAS_WIDTH * scale}px`;  // Візуальний розмір 320px
canvas.style.height = `${CANVAS_HEIGHT * scale}px`; // Візуальний розмір 320px

ctx.mozImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;

let color = colorpicker.value;

ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

let isPressed = false;
let currentX = 0;
let currentY = 0;
let isErasing = false;

window.onmousedown = function() {
    isPressed = true;
}

window.onmouseup = function() {
    isPressed = false;
}

colorpicker.oninput = function() {
    color = this.value;
}

eraseButton.onclick = function() {
    isErasing = true;
}

drawButton.onclick = function() {
    isErasing = false;
    color = colorpicker.value;
}

saveBtn.addEventListener('click', function (event) {
    tempCanvas.width = CANVAS_WIDTH * scale;
    tempCanvas.height = CANVAS_HEIGHT * scale;
    tempCtx.mozImageSmoothingEnabled = false;
    tempCtx.imageSmoothingEnabled = false;
    tempCtx.webkitImageSmoothingEnabled = false;
    tempCtx.msImageSmoothingEnabled = false;

    tempCtx.drawImage(canvas, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0, CANVAS_WIDTH * scale, CANVAS_HEIGHT * scale);

    let download = document.getElementById("downloadLink");
    let image = tempCanvas.toDataURL("image/png").replace("image/png", "image/octet-stream");

    download.setAttribute("href", image);
})

function getMousePos(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    currentX = Math.floor((event.clientX - rect.left) / (scale)) * scale; 
    currentY = Math.floor((event.clientY - rect.top) / (scale)) * scale;
}

function draw(event) {
    if (isPressed) {
        ctx.beginPath();
        ctx.fillStyle = isErasing ? '#ffffff' : color;
        ctx.fillRect(currentX / scale, currentY / scale, 1, 1);
        ctx.fill();
    }

    window.requestAnimationFrame(draw);
}

window.onmousemove = function (event) {
    getMousePos(canvas, event);
}

draw();
