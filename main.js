const menuToggle = document.querySelector(".toggle"),
    links = document.querySelector('.links');

menuToggle.addEventListener('click', () => {
    links.classList.toggle('show-links')
});