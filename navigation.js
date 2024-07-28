// navigation.js

// Function to redirect to schedule.html when "Schedule a Tour" button is clicked
document.addEventListener("DOMContentLoaded", function() {
    const scheduleButton = document.querySelector('.cta-button');
    if (scheduleButton) {
        scheduleButton.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            window.location.href = 'schedule.html'; // Redirect to schedule page
        });
    }
});
