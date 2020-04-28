class Drawing extends PaintFunction {
    constructor(contextReal) {
        super();
        this.context = contextReal;
    }

    onMouseDown(coord, event) {
        this.context.strokeStyle = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
        this.context.lineJoin = "round";
        this.context.lineWidth = $('#lineWidth')[0].value;
        this.context.beginPath();
        this.context.moveTo(coord[0], coord[1]);
        this.draw(coord[0], coord[1]);
    }

    onMouseMove() {}
    onMouseLeave() {}
    onMouseEnter() {}

    onMouseUp(event) {
        cPush();
    }

    onDragging(coord, event) {
        this.draw(coord[0], coord[1]);
    }

    draw(x, y) {
        this.context.lineTo(x, y);
        this.context.moveTo(x, y);
        this.context.closePath();
        this.context.stroke();
    }
}