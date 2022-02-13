/* Header Menu */
const mobileButton = document.querySelector('#mobile-button');
mobileButton.addEventListener('click', () => {
    const menu = document.getElementsByTagName('nav')[0];
    menu.classList.toggle('toggle')
})


/* Links Page Scroll */

const links = document.querySelectorAll('.links')
const linkButton = document.querySelector('#link-button')

links.forEach(item => {
    item.addEventListener('click', goToSection)
});

linkButton.addEventListener('click', goToSection)

function goToSection(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const pos = document.querySelector(id).offsetTop;
    const menu = document.getElementsByTagName('nav')[0];
    menu.classList.toggle('toggle')

    window.scroll({
        top: pos - 120,
        behavior: "smooth"
    })
}

/* Carousel */