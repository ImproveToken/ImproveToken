document.addEventListener('DOMContentLoaded', function () {
    const buttonContainer = document.querySelector('.button-container');

    buttonContainer.addEventListener('wheel', function (event) {
        event.stopPropagation(); // Блокируем A-Frame от перехвата события
    });
});

function toggleMenu() {
    let menu = document.querySelector('.button-container_burger');
    let burger = document.querySelector('.burger');

    if (menu.classList.contains('open')) {
        menu.classList.remove('open');
    } else {
        menu.classList.add('open');
    }
}