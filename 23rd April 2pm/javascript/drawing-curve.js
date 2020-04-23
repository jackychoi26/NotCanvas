
class DrawingCurve extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.contextReal.strokeStyle = "#df4b26";
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = 2;
        this.contextDraft.strokeStyle = "#df4b26";
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth = 2;
    }

    onMouseDown(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.startX = coord[0];
        this.startY = coord[1];
    }

    onDragging(coord, event) {
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.moveTo(this.startX, this.startY);
        this.contextDraft.lineTo(coord[0], coord[1]);
        this.contextDraft.stroke();
    }

    onMouseUp(coord, event) {
        this.midX = coord[0];
        this.midY = coord[1];
        this.contextDraft.closePath();
    }

    onMouseMove(coord, event) { 
    }

    onSizing(coord, event) { 
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.trackerX = coord[0];
        this.trackerY = coord[1];
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(this.midX, this.midY);
        this.contextDraft.quadraticCurveTo(this.trackerX, this.trackerY, this.startX, this.startY);
        this.contextDraft.stroke();
        this.contextDraft.closePath();
    }

    onMouseLeave() { 
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }

    onKeyDown(coord,event) {
        console.log("key pressed");
        this.contextReal.beginPath();
        this.contextReal.moveTo(this.midX, this.midY);
        this.contextReal.quadraticCurveTo(this.trackerX, this.trackerY, this.startX, this.startY);
        this.contextReal.stroke();
        this.contextReal.closePath();
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    }
}