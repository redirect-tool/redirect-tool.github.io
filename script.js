function redirect() {
    var url = document.getElementById('urlbox').value;

    if (url.trim() !== '') {
        window.location.href = url;
    } else {
        alert('Please enter a valid URL.');
    }
}
