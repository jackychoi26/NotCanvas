let url = document.querySelector('#upload-background');

url.addEventListener('change', function() {
    if (url.value) {
        console.log(url.value)
        document.body.style.backgroundImage = 'url("./images/bill.jpg")';
    } else {
        alert('Please upload a proper image')
    }
})