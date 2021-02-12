const extendedMenu = document.getElementById('extendedMenu');
const mobileMenu = document.getElementById('mobileMenu');
const closeButton = document.getElementById('closeButton');

mobileMenu.addEventListener ('click', function() {
    extendedMenu.classList.remove('hidden');
});

closeButton.addEventListener ('click', function() {
    extendedMenu.classList.add('hidden');
});