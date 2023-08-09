var swiper = new Swiper(".review-swipper", {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    // when window width is >= 480px
    620: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    928: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
