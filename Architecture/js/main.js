const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

const swiper = new Swiper('.project__slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.project__arrow-next',
    prevEl: '.project__arrow-prev',
  },

});