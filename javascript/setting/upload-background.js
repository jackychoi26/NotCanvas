let url = document.querySelector('#upload-background');

url.addEventListener('change', function() {
    if (url.value) {
        console.log(url.files[0].name)

        // due to some browser security policy, direct upload is blocked by server.
        // so we bypass the policy by predefine the path and let the file name being set dynamically
        // visitors need to put the image to the image folder before uploading it.
        document.body.style.backgroundImage = `url(./images/${url.files[0].name})`;
    }
})