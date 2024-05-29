const bar = document.getElementById('mob');
const menu = document.getElementById('navlist');

if (bar) {
    bar.addEventListener('click', () => {
        menu.classList.add('active');
    })
}