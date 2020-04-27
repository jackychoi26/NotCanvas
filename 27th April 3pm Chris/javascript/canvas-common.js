let canvasReal = document.getElementById("canvas-real");
let contextReal = canvasReal.getContext("2d");
let canvasDraft = document.getElementById("canvas-draft");
let contextDraft = canvasDraft.getContext("2d");
let currentFunction;
let dragging = false;
//for making a curve:
let sizing = false;
//hold down mouse button:
var holdStarter = null;
var holdDelay = 150;
var holdActive = false;

contextReal.font = "50px arial"

$("#canvas-draft").mousedown(function(e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseDown([mouseX, mouseY], e);
    sizing = false;
    holdStarter = setTimeout(function () {
        holdStarter = null;
        holdActive = true;
        dragging = true;
        cPush();
        console.log('dragging...');
    }, holdDelay);
});

$("#canvas-draft").mousemove(function(e) {
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
});

$("#canvas-draft").mouseup(function(e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseUp([mouseX, mouseY], e);
    dragging = false;
    if (holdActive){
        sizing = true;
        holdActive = false;
    } else {
        sizing = false;
        holdActive = false;
        clearTimeout(holdStarter);
    }
});

$("#canvas-draft").mouseleave(function(e) {
    dragging = false;
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseLeave([mouseX, mouseY], e);
    dragging = false;
    sizing = false;
});

$("#canvas-draft").mouseenter(function(e) {
    let mouseX = e.offsetX;
    let mouseY = e.offsetY;
    currentFunction.onMouseEnter([mouseX, mouseY], e);
});


class PaintFunction {
    constructor() {}
    onMouseDown() {}
    onDragging() {}
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
    onSizing() { }
    drawImage() { }
}