// Burger Menu Toggle
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');

    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth Scrolling for Anchor Links
const navItems = document.querySelectorAll('nav ul li a');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(item.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});

// Smooth Scrolling for Explore Music
const exploreMusic = document.getElementById('explore-music');

exploreMusic.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#music').scrollIntoView({
        behavior: 'smooth'
    });
});

// Form Submission Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Handle form submission (e.g., via AJAX or an external service)

    // Display success message
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Thank you for your message!';
    successMessage.style.color = '#28a745';
    successMessage.style.textAlign = 'center';
    successMessage.style.marginTop = '1rem';
    successMessage.style.fontSize = '1.2rem';

    // Insert the success message after the form
    contactForm.parentNode.insertBefore(successMessage, contactForm.nextSibling);

    // Hide the form after submission
    contactForm.style.display = 'none';
});