const save = () => {
    let img = canvasReal.toDataURL('image/jpeg');
    console.log(img);
    let w = window.open('https://www.google.com', 'Your picture');
}
