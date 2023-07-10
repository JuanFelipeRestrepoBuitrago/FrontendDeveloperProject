const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop_menu');

navbarEmail.addEventListener('click', toggleElement.bind(this, desktopMenu));

function toggleElement(element) {
    element.classList.toggle('inactive');
}