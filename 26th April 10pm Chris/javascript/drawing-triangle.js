class DrawingTriangle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.startX = coord[0];
        this.startY = coord[1];
    }

    onDragging(coord, event) {
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.startX, this.startY);
        this.contextDraft.fillStyle = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]}`;
        if (coord[0] - this.startX >= 0) {
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.lineTo(coord[0] - (coord[0] - this.startX) * 2, coord[1]);
            this.contextDraft.fill();
            this.contextDraft.clearRect(0, 0, 1280, 720);
            this.contextDraft.closePath();
            this.contextDraft.fill();
        } else if (coord[0] - this.startX <= 0) {
            this.contextDraft.lineTo(coord[0], coord[1]);
            this.contextDraft.lineTo((coord[0] + Math.abs(coord[0] - this.startX) * 2), coord[1]);
            this.contextDraft.fill();
            this.contextDraft.clearRect(0, 0, 1280, 720);
            this.contextDraft.closePath();
            this.contextDraft.fill();
        }
    }

    onMouseUp(coord, event) {
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.startX, this.startY);
        this.contextReal.fillStyle = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
        if (coord[0] - this.startX >= 0) {
            this.contextReal.lineTo(coord[0], coord[1]);
            this.contextReal.lineTo(coord[0] - (coord[0] - this.startX) * 2, coord[1]);
            this.contextDraft.clearRect(0, 0, 1280, 720);
            this.contextReal.closePath();
            this.contextReal.fill();
            cPush();
        } else if (coord[0] - this.startX <= 0) {
            this.contextReal.lineTo(coord[0], coord[1]);
            this.contextReal.lineTo((coord[0] + Math.abs(coord[0] - this.startX) * 2), coord[1]);
            this.contextDraft.clearRect(0, 0, 1280, 720);
            this.contextReal.closePath();
            this.contextReal.fill();
            cPush();
        }
    }
}