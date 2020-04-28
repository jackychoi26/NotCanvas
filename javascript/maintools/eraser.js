class Eraser extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.startX = coord[0];
        this.startY = coord[1];
        this.contextReal.clearRect(20, 20, 20, 20);
    }

    onDragging(coord, event) {
        this.trackerX = coord[0];
        this.trackerY = coord[1];
        this.contextReal.clearRect(this.trackerX, this.trackerY, $('#lineWidth')[0].value * 10, $('#lineWidth')[0].value * 10);
    }

    onMouseUp(event) {
        cPush();
    }

}