let save = document.querySelector('#save');

save.addEventListener('click', function() {
    let img = canvasReal.toDataURL();
    let link = document.createElement('a');
    link.download = 'Canvas.png';
    link.href = img;
    link.click();
})