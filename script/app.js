const mobileNavbarButton = document.querySelector('.hamburger-menu');
const mobileNavbarDropdown = document.querySelector('.mobile-dropdown');

mobileNavbarButton.addEventListener('click', () => {
    mobileNavbarDropdown.classList.toggle('show')
})