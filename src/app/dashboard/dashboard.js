document.addEventListener('DOMContentLoaded', () => {
    console.log('Dashboard loaded successfully');

    // Function to handle navigation
    const navigationLinks = document.querySelectorAll('.sidebar ul li a');
    const mainContent = document.querySelector('.main-content section');

    navigationLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionName = event.target.textContent;

            // Update main content based on the clicked link
            updateMainContent(sectionName);
        });
    });

    // Function to update the main content area
    function updateMainContent(sectionName) {
        mainContent.innerHTML = `<h2>${sectionName}</h2><p>Content for ${sectionName} section.</p>`;
    }
});
