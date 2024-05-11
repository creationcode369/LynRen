document.addEventListener('DOMContentLoaded', function() {
    // Function to check if an element is in viewport
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    // Function to handle scrolling and apply animation
    function handleScroll() {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(element => {
        if (isInViewport(element)) {
          element.classList.add('active');
        }
      });
    }
  
    // Initial trigger on page load
    handleScroll();
  
    // Trigger animation on scroll
    window.addEventListener('scroll', handleScroll);
  });
  