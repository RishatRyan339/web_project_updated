document.addEventListener("DOMContentLoaded", function() {
    const fadeElement = document.querySelector('.fade-in-out');
  
    // Show the element
    fadeElement.style.display = 'block';
  
    // Trigger the fade-in effect after a short delay (e.g., 100ms)
    setTimeout(function() {
      fadeElement.style.opacity = 1;
    }, 100);
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    const progressBarElements = document.querySelectorAll('.progress-bar');
  
    progressBarElements.forEach(function(bar) {
      const value = bar.getAttribute('data-value');
      bar.style.width = value + '%';
    });
  });
  