class DrawingLine extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.escape = false;
    }

    onMouseDown(coord, styleGuide, event) {
        this.startX = coord[0];
        this.startY = coord[1];
    }

    onDragging(coord, event) {
        this.contextDraft.strokeStyle = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.startX, this.startY);
        this.contextDraft.clearRect(0, 0, 1280, 720);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();
    }

    onMouseMove() {}

    onMouseUp(coord, event) {
        this.contextReal.strokeStyle = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.startX, this.startY);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.stroke();
        cPush();
        this.contextDraft.clearRect(0, 0, 1280, 720);
    }

    onMouseLeave() {}

    onMouseEnter() {}

}