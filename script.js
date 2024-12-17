  // Get the button and the lines div
    const hideButton = document.getElementById('hide');
    const lines = document.getElementById('lines');

    // Add an event listener to the button to toggle visibility
    hideButton.addEventListener('click', function() {
        // Toggle the 'hidden' class on the #lines div
        lines.classList.toggle('hidden');
        
        // Change the button icon based on visibility
        const icon = hideButton.querySelector('i');
        if (lines.classList.contains('hidden')) {
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        } else {
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        }
    });