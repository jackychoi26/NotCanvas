
class Eraser extends PaintFunction {
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
        this.startX = coord[0];
        this.startY = coord[1];
        this.contextReal.clearRect(20, 20, 20, 20);
    }

    onDragging(coord, event) {
        this.trackerX = coord[0];
        this.trackerY = coord[1];
        this.contextReal.clearRect(this.trackerX, this.trackerY, 40, 40);
    }

    // onMouseUp() {
     // }

    // onMouseMove() { 
    // }

    // onSizing() { 
    // }

    // onMouseLeave() { 
    // }

    // onKeyDown(coord,event) {
    // }
}