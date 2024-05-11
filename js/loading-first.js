document.addEventListener('DOMContentLoaded', function() {
    // Hide the loading screen when the page is fully loaded
    const loadingScreen = document.getElementById('loading-screen');
    window.addEventListener('load', function() {
        loadingScreen.style.display = 'none';
    });
});
