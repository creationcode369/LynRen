document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('popupSection').style.display = 'block';
    }, 9000); // 3000 milliseconds = 3 seconds

    // Add event listener to close button
    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('popupSection').style.display = 'none';
    });
});