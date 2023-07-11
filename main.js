const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop_menu');

const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuButton = document.querySelector('.menu-image');

const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.shopping-cart');

const cardsContainer = document.querySelector('.cards-container');
const products = [{
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    name: 'Screen',
    price: 220,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    name: 'Computer',
    price: 645.07,
    image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400"
}, {
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    name: 'Screen',
    price: 220,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    name: 'Computer',
    price: 645.07,
    image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400"
}, {
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    name: 'Screen',
    price: 220,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}, {
    name: 'Computer',
    price: 645.07,
    image: "https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=400"
}];

const productDetails = document.querySelector('.product-detail');
const closeProductDetailsButton = document.querySelector('.close-product-detail');

const dropdownElements = [desktopMenu,  mobileMenu,   shoppingCart, productDetails];

function openProductDetails() {
    dropdownElements.forEach(element => {
        if (!element.classList.contains('inactive') && element !== productDetails) {
            element.classList.add('inactive');
        }
    });
    productDetails.classList.remove('inactive');
}

function closeProductDetails() {
    productDetails.classList.add('inactive');
}

function addProductsToDOM(array) {
    for (product of array) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.classList.add('card-image');
        productImage.addEventListener('click', openProductDetails);

        const productContainer = document.createElement('div');
        productContainer.classList.add('product');

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const value = document.createElement('p');
        value.classList.add('value');
        value.innerText = `$ ` + String(product.price.toFixed(2)).replace('.', ',');

        const name = document.createElement('p');
        name.classList.add('name');
        name.innerText = product.name;

        const figure = document.createElement('figure');
        const addToCart = document.createElement('img');
        addToCart.src = "https://raw.githubusercontent.com/platzi/curso-frontend-developer-practico/main/icons/bt_add_to_cart.svg";
        addToCart.alt = "Add to cart";

        figure.appendChild(addToCart);
        productInfo.append(value, name);
        productContainer.append(productInfo, figure);
        productCard.append(productImage, productContainer);

        cardsContainer.appendChild(productCard);
    }
}

function toggleElement(dropdownElement) {
    dropdownElements.forEach(element => {
        if (!element.classList.contains('inactive') && element !== dropdownElement  ) {
            element.classList.add('inactive');
        }
    });
    dropdownElement.classList.toggle('inactive');
}

navbarEmail.addEventListener('click', toggleElement.bind(this, desktopMenu));
mobileMenuButton.addEventListener('click', toggleElement.bind(this, mobileMenu));
shoppingCartIcon.addEventListener('click', toggleElement.bind(this, shoppingCart));

closeProductDetailsButton.addEventListener('click', closeProductDetails);

addProductsToDOM(products);