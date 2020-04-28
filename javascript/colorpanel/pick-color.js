class PickColor extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
    }

    onMouseDown(coord) {
        let colorData, colorPicked, rCode, gCode, bCode;

        // reassigning the current color according to the clickpoint color
        colorData = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);
        colorPicked = (coord[1] * canvasReal.width + coord[0]) * 4;
        rCode = colorData.data[colorPicked];
        gCode = colorData.data[colorPicked + 1];
        bCode = colorData.data[colorPicked + 2];
        newColor(rCode, gCode, bCode);
    }

}