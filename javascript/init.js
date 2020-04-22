$('#draw').on('click', function() {
    currentFunction = new Drawing(contextReal);
})

$('#drawRect').on('click', function() {
    currentFunction = new DrawingRectangle(contextReal, contextDraft);
})

$('#drawLine').on('click', function() {
    currentFunction = new DrawingLine(contextReal, contextDraft);
})

$('#drawCircle').on('click', function() {
    currentFunction = new DrawingCircle(contextReal, contextDraft);
})

$('#text').on('click', function() {
    currentFunction = new Text(contextReal, contextDraft);
})

$('#clear').on('click', function() {
    contextDraft.clearRect(0, 0, 1280, 720);
    contextReal.clearRect(0, 0, 1280, 720);
})