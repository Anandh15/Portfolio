document.getElementById('mobile-menu-toggle').addEventListener('click', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
});

// Optional: Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Hide the mobile menu after selecting an item
        document.getElementById('mobile-menu').classList.remove('active');
    });
});


