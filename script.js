// JavaScript for FAQ accordion functionality
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// JavaScript for hamburger menu functionality
const menuIcon = document.getElementById('menuIcon');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');

menuIcon.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

function toggleMenu() {
    navMenu.classList.toggle('active');
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
    menuIcon.querySelector('i').classList.toggle('fa-bars');
    menuIcon.querySelector('i').classList.toggle('fa-times');
}

// Close menu when clicking on a nav link
const navLinks = document.querySelectorAll('.nav-menu ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});