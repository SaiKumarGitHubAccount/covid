
// static/js/main.js
document.addEventListener('DOMContentLoaded', function () {
    // Example: Fetch data from backend and log to console
    fetch('/patients')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
});
