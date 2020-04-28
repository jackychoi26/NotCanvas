class DrawingCircle extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.startX = coord[0];
        this.startY = coord[1];
        console.log(currentColor[0], currentColor[1], currentColor[2]);
    }

    onDragging(coord, event) {
        this.contextDraft.beginPath();
        this.contextDraft.clearRect(0, 0, 1280, 720);
        this.contextDraft.fillStyle = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;

        // radius is determined dynamically, depending on whether x or y is larger
        this.contextDraft.arc(this.startX, this.startY, Math.abs(coord[1] - this.startY) >= Math.abs(coord[0] - this.startX) ? Math.abs(coord[1] - this.startY) : Math.abs(coord[0] - this.startX), 0, 2 * Math.PI, false);
        this.contextDraft.lineWidth = 5;
        this.contextDraft.fill();
        this.contextDraft.closePath();
    }

    onMouseMove() {}

    onMouseUp(coord) {
        this.contextReal.beginPath();
        this.contextReal.arc(this.startX, this.startY, Math.abs(coord[1] - this.startY) >= Math.abs(coord[0] - this.startX) ? Math.abs(coord[1] - this.startY) : Math.abs(coord[0] - this.startX), 0, 2 * Math.PI, false);
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        balls.push(new Circle(this.startX, this.startY, Math.abs(coord[1] - this.startY) >= Math.abs(coord[0] - this.startX) ? Math.abs(coord[1] - this.startY) : Math.abs(coord[0] - this.startX), `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`));
        this.contextReal.fillStyle = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
        this.contextReal.fill();
        cPush();
    }

    onMouseLeave() {}

    onMouseEnter() {}
}