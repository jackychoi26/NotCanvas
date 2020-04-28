let url = document.querySelector('#upload-background');

url.addEventListener('change', function() {
    if (url.value) {
        console.log(url.files[0].name)
        document.body.style.backgroundImage = `url(./images/${url.files[0].name})`;
    }
})