
const canvasDraft = document.getElementById('canvas-draft');
const contextDraft = canvasDraft.getContext('2d');
const canvasReal = document.getElementById('canvas-real');
const contextReal = canvasReal.getContext('2d');
let dragging = false;
// added SIZING :
let sizing = false;
let currentFunction;


// Users press the left click
$('#canvas-draft').mousedown(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX, mouseY], e);
    dragging = true;
    sizing = false;
});

// Users move the cursor
$('#canvas-draft').mousemove(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    if (dragging) {
        currentFunction.onDragging([mouseX, mouseY], e);
    } else if (sizing) {
        currentFunction.onSizing([mouseX, mouseY], e);
    } else {
        currentFunction.onMouseMove([mouseX, mouseY], e);
        sizing = false;
    }
})

// Users release their mousedown
$('#canvas-draft').mouseup(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX, mouseY], e);
    sizing = true;
    dragging = false;
})

// Users move the mouse outside the canvas
$('#canvas-draft').mouseleave(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave();
    dragging = false;
    sizing = false;
})

$('#canvas-draft').mouseenter(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter();
})
// ADDED KEYDOWN:
// Users press any key
$('#canvas-draft').keydown(function (e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onKeyDown([mouseX, mouseY], e);
    dragging = false;
    sizing = false;
});


class PaintFunction {
    constructor() { }
    onMouseDown() { }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
    onKeyDown() { }
    onSizing() { }
}