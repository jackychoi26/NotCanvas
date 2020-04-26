let input = $('.range');

// Default color is grey
let currentColor = [127, 127, 127];


for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", function() {
        let red = Math.round($('#red').val()),
            green = Math.round($('#green').val()),
            blue = Math.round($('#blue').val());

        let display = $('#display');
        display.css('background', `rgb(${red}, ${green}, ${blue})`);

        currentColor = [red, green, blue]
    })
}