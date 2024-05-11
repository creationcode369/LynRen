document.addEventListener("DOMContentLoaded", function() {
    var dropInText = document.getElementById('drop-in-text');

    // When the dropText animation ends
    dropInText.addEventListener('animationend', function() {
        // Hide the welcome text
        dropInText.style.display = 'none';

        // Show the main content with fade-in effect
        var mainContent = document.querySelector('.main-content');
        mainContent.style.opacity = 1;
        mainContent.style.transition = 'opacity 0.5s ease';
    });
});
