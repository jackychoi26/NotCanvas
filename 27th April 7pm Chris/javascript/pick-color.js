class PickColor extends PaintFunction {
    constructor(contextReal) {
        super();
        this.contextReal = contextReal;
    }
    onMouseDown(coord) {
        let colorData, colorPicked, rCode, gCode, bCode;
        colorData = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);
        colorPicked = (coord[1] * canvasReal.width + coord[0]) * 4;
        rCode = colorData.data[colorPicked];
        gCode = colorData.data[colorPicked + 1];
        bCode = colorData.data[colorPicked + 2];
        // currentColor[0] = rCode;
        // currentColor[1] = gCode;
        // currentColor[2] = bCode;
        // $('#red')[0].value = rCode;
        // $('#green')[0].value = gCode;
        // $('#blue')[0].value = bCode;
        // $('#display').css('background-color', `rgb(${rCode}, ${gCode}, ${bCode})`);
        newColor(rCode, gCode, bCode);
    }

}