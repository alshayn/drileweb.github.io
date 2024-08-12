// Слайдер
$('.intro').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
});

// Гамбургер меню
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const bar = document.querySelectorAll('.bar');
const menuItems = menu.querySelectorAll('a');

function hamburgerMenu() {
    if (!menu.classList.contains('hamburger-menu')) {
        hamburger.classList.add('open');
        menu.classList.add('animate__fadeInRight');
        menu.classList.add('hamburger-menu');
        setTimeout(function () {
            menu.classList.remove('animate__fadeInRight');
        }, 1000);
    }
    else {
        hamburger.classList.remove('open');
        menu.classList.add('animate__fadeOutRight');
        setTimeout(function () {
            menu.classList.remove('animate__fadeOutRight');
            menu.classList.remove('hamburger-menu');
        }, 500);
    }
};
// Вызов функции по клику 
hamburger.addEventListener('click', hamburgerMenu);

// Вызов функции по клику на любой из пунктов меню
menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        if (menu.classList.contains('hamburger-menu')) {
            hamburgerMenu();
        };
    });
});

// Модальное окно
const openModalButton = document.getElementById('openModalButton');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
const succes = document.getElementById('succes');

// Открытие окна
function openModal() {
    modal.style.display = 'block';
    modal.classList.add('animate__fadeIn');
};
// Закрытие окна
function closeModal() {
    modal.classList.add('animate__fadeOut');
    setTimeout(function () {
        modal.classList.remove('animate__fadeOut');
        modal.style.display = 'none';
    }, 1000);
};
// Отправка формы
const form = document.getElementById('form');
const submitButton = document.getElementById('submitButton');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    succes.classList.add('animate__animated', 'animate__fadeIn');
    succes.style.display = 'block';
    modal.classList.add('animate__fadeOut');
    setTimeout(function () {
        document.getElementById('form').submit();
        form.reset();
        modal.style.display = 'none';
        succes.style.display = 'none';
    }, 1000)
});

// Добавление товаров в корзину
let cartCounter = document.getElementById('cart-counter');
const toCart = document.querySelectorAll('.add-to-cart');
let itemCount = 0;

function addToCart() {
    itemCount++;
    cartCounter.textContent = itemCount;
};

toCart.forEach(function (icon) {
    icon.addEventListener('click', addToCart);
});

