
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

// Change opacity button
const changeTransparent = () => {
        $('#canvas-real').css('opacity', '0.7');
};
const changeOpaque = () => {
        $('#canvas-real').css('opacity', '1.0');
};

// Change the color in the 9 predefined color boxes
const changeColor = (red, green, blue) => {
    newColor(red, green, blue);
}

// Replace current color with new color
const newColor = (r, g, b) => {
    currentColor[0] = r;
    currentColor[1] = g;
    currentColor[2] = b;
    $('#red')[0].value = r;
    $('#green')[0].value = g;
    $('#blue')[0].value = b;
    $('#display').css('background-color', `rgb(${r}, ${g}, ${b})`);
}