let button = document.querySelector(".color")
var image = document.getElementById('changeable-image');
var stylesheet = document.getElementById('theme-stylesheet');
var sun = document.getElementById('invertible-image');
var logo = document.getElementById('logo')

button.addEventListener("click", function () {
    if (stylesheet.getAttribute('href') === 'styles.css') {
        stylesheet.setAttribute('href', 'dark.css');
        image.setAttribute('src', 'Moon_fill.svg');
        sun.style.filter = 'invert(1)';
        logo.setAttribute('src', 'alarado-icon-homepage-dark.svg')
    } else {
        stylesheet.setAttribute('href', 'styles.css');
        image.setAttribute('src', 'Moon_fill_light.svg');
        sun.style.filter = 'none';
        logo.setAttribute('src', 'alarado-icon-homepage.svg')
    }
});