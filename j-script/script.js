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