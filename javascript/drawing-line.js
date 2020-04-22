class DrawingLine extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.escape = false;
        this.contextReal.strokeStyle = "#df4b26";
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = 5;
        this.contextDraft.strokeStyle = "#df4b26";
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth = 5;
    }

    onMouseDown(coord, styleGuide, event) {
        this.startX = coord[0];
        this.startY = coord[1];
    }

    onDragging(coord, event) {
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.startX, this.startY);
        this.contextDraft.clearRect(0, 0, 1280, 720);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();
    }

    onMouseMove() {}

    onMouseUp(coord, event) {
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.startX, this.startY);
        this.contextReal.lineTo(coord[0], coord[1]);
        this.contextReal.stroke();
        this.contextDraft.clearRect(0, 0, 1280, 720);
    }

    onMouseLeave() {}

    onMouseEnter() {}

}