/* Header Menu */
const mobileButton = document.querySelector('#mobile-button');
mobileButton.addEventListener('click', changeMenuClass)

function changeMenuClass() {
  const menu = document.getElementsByTagName('nav')[0];
  menu.classList.toggle('toggle')
}


/* Links Page Scroll */

const links = document.querySelectorAll('.links')
const linkButton = document.querySelector('#link-button')

links.forEach(item => {
  item.addEventListener('click', goToSection)
  item.addEventListener('click', changeMenuClass)
});

linkButton.addEventListener('click', goToSection)

function goToSection(event) {
  event.preventDefault();
  const element = event.target;
  const id = element.getAttribute('href');
  const pos = document.querySelector(id).offsetTop;

  window.scroll({
    top: pos - 120,
    behavior: "smooth"
  })
}

/* Carousel */
$(document).ready(function () {
  $('.carousel').slick({
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: '<div class="backbutton"></div>',
    nextArrow: '<div class="nextbutton"></div>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '10px',
          slidesToShow: 1
        }
      }
    ]
  });
});
