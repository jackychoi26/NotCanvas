const canvasDraft = document.getElementById('canvas-draft');
const contextDraft = canvasDraft.getContext('2d');
const canvasReal = document.getElementById('canvas-real');
const contextReal = canvasReal.getContext('2d');
let dragging = false;
let currentFunction;


// Users press the left click
$('#canvas-draft').mousedown(function(e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX, mouseY], e);
    dragging = true;
});

// Users move the cursor
$('#canvas-draft').mousemove(function(e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if (dragging) {
        currentFunction.onDragging([mouseX, mouseY], e);
    }
    currentFunction.onMouseMove([mouseX, mouseY], e);
})

// Users release their mousedown
$('#canvas-draft').mouseup(function(e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX, mouseY], e);
})


$('#canvas-draft').mouseleave(function(e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX, mouseY], e);
})

$('#canvas-draft').mouseenter(function(e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter();
})

class PaintFunction {
    constructor() {}
    onMouseDown() {}
    onDragging() {}
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
}