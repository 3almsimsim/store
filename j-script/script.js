const bar = document.getElementById('mob');
const menu = document.getElementById('navlist');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        menu.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        menu.classList.remove('active');
    })
}

// cart

const cart_icon = document.getElementById('cart');
const cart_menu = document.querySelector('.cart_main');
const cart_close = document.getElementsByClassName('close_cart');

if (cart_icon) {
    cart_icon.addEventListener('click', () => {
        cart_menu.classList.add('active');
        
    })
}

if (cart_close) {
    close_cart.addEventListener('click', () => {
        cart_menu.classList.remove('active');
    })
}



