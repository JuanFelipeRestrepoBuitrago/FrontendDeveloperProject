const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop_menu');

const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuButton = document.querySelector('.menu-image');

const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart');

const dropdownElements = [desktopMenu,  mobileMenu,   shoppingCart];

function toggleElement(dropdownElement) {
    dropdownElements.forEach(element => {
        if (!element.classList.contains('inactive') && element !== dropdownElement) {
            element.classList.add('inactive');
        }
    });
    dropdownElement.classList.toggle('inactive');
}

navbarEmail.addEventListener('click', toggleElement.bind(this, desktopMenu));

mobileMenuButton.addEventListener('click', toggleElement.bind(this, mobileMenu));

shoppingCartIcon.addEventListener('click', toggleElement.bind(this, shoppingCart));