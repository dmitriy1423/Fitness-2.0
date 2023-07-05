// Swiper 7.4.1
import './vendor/focus-visible-polyfill';
import swiper from './vendor/swiper';

function initSliders() {
  swiper();

  const trainersSlider = new Swiper('.trainers__items', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: 35,
    loop: true,
    navigation: {
      nextEl: '.trainers__slider-btn-next',
      prevEl: '.trainers__slider-btn-prev',
    },
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 3,
      },
      1300: {
        slidesPerView: 4,
      },
    },
  });

  const trainers = document.querySelectorAll('.trainer');

  trainers.forEach((trainer) => {
    trainer.addEventListener('click', () => {
      if (trainer.classList.contains('trainer__info-wrapper--open')) {
        trainer.classList.remove('trainer__info-wrapper--open');
        return;
      }
      trainer.classList.add('trainer__info-wrapper--open');
    });
  });

  const reviewsSlider = new Swiper('.reviews__items', {
    direction: 'horizontal',
    navigation: {
      nextEl: '.reviews__slider-btn-next',
      prevEl: '.reviews__slider-btn-prev',
    },
    grabCursor: true,
  });
}

export default initSliders;
