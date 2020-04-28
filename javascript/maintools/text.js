let keyEnter = false;
let font;

class Text extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;

        // enable user to click twice to enter text
        this.contextDraft.textCount = 0;
    }

    onMouseDown(coord, event) {
        this.contextDraft.textCount += 1;

        // if user clicks second time, it will print the text on the screen
        if (this.contextDraft.textCount % 2 == 0) {
            let outputText = $("#tempoTextbox").val();
            font = $("#lineWidth")[0].value * 10;
            this.contextReal.font = `${font}px arial`;
            this.contextReal.fillStyle = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`
            this.contextReal.fillText(outputText, coord[0], coord[1] + 10);
            cPush();
            $("#tempoTextbox").remove();

            // first click will create an input to store the text data
        } else {
            font = $("#lineWidth")[0].value * 10;
            this.origX = coord[0];
            this.origY = coord[1];

            // creating an input element in html in the empty container of "text-container" in html
            // define the style of the element
            let input = document.createElement('input');
            input.type = "text";
            input.name = "typed";
            input.id = "tempoTextbox"
            input.style.position = "fixed";
            input.style.backgroundColor = "transparent";
            input.style.border = "2px pink dotted";
            input.style.height = 50;
            input.style.width = 300;

            // the font size is set to be according to line width
            input.style.font = `${font}px arial`;
            input.style.left = this.origX + 50 + 'px';
            input.style.top = this.origY + 30 + 'px';
            input.placeholder = "Type here";

            // append the input to the container
            $(".text-container").append(input);

            // make sure it is visible
            input.style.zIndex = 3;
            input.focus();
            cPush();
        }
    }
}