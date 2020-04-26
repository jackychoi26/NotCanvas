let keyEnter = false;

class Text extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        this.origX = coord[0];
        this.origY = coord[1];
        let input = document.createElement('input');
        input.type = "text";
        input.name = "typed";
        input.id = "tempoTextbox"
        input.style.position = "fixed";
        input.style.border = "2px pink solid";
        input.style.height = 50;
        input.style.width = 300;
        input.style.font = "bold 50px arial";
        input.style.left = this.origX + 50 + 'px';
        input.style.top = this.origY + 'px';
        input.placeholder = "Type here";
        $(".text-container").append(input);
        input.style.zIndex = 3;
        input.focus();
        document.addEventListener('keydown', function(e) {
            if (e.key == 'Enter') {
                let outputText = $("#tempoTextbox").val();
                contextReal.fillText(outputText, coord[0], coord[1] + 40);
                console.log(coord[0], coord[1]);
                cPush();
                $("#tempoTextbox").remove();
            }
        })
    }
}