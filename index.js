document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Toggle menu icon (assuming you're using boxicons)
        const currentIcon = menuToggle.querySelector('box-icon');
        const iconName = currentIcon.getAttribute('name') === 'menu' ? 'x' : 'menu';
        currentIcon.setAttribute('name', iconName);
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('box-icon').setAttribute('name', 'menu');
        });
    });
});
