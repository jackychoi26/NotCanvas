$('#draw').on('click', function() {
    currentFunction = new Drawing(contextReal);
})

$('#drawRect').on('click', function() {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
})

$('#drawLine').on('click', function() {
    currentFunction = new DrawingLine(contextReal, contextDraft);
})

$('#drawCurve').on('click', function() {
    currentFunction = new DrawingCurve(contextReal, contextDraft);
})

$('#drawCircle').on('click', function() {
    currentFunction = new DrawingCircle(contextReal, contextDraft);
})

$('#drawTriangle').on('click', function() {
    currentFunction = new DrawingTriangle(contextReal, contextDraft)
})

$('#text').on('click', function() {
    currentFunction = new Text(contextReal, contextDraft);
})

$('#fill').on('click', function() {
    currentFunction = new Fill(contextReal, contextDraft)
})

$('#clear').on('click', function() {
    contextDraft.clearRect(0, 0, 1280, 720);
    drawImage();
    cPush();
})

$('#eraser').on('click', function() {
    currentFunction = new Eraser(contextReal, contextDraft);
})

$('#undo').on('click', function() {
    cUndo();
})

$('#redo').on('click', function() {
    cRedo();
})

$('#upload').on('click', function() {
    console.log("upload button pressed");
})

$('#opacity').on('click', function() {
    console.log("opacity button pressed");
})

$('#save').on('click', function() {
    console.log("save button pressed");
})