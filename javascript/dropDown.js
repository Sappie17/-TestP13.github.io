document.addEventListener('DOMContentLoaded', function () {
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const nav = document.querySelector('nav');

    hamburgerIcon.addEventListener('click', function () {
    nav.classList.toggle('active');
    });
    });