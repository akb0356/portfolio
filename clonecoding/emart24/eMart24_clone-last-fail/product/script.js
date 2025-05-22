const eventswiper = new Swiper(".product-inner", {
  wrapperClass: "event-products",
  slideClass: "event-product",
  loop: true,
  slidesPerView: 4,
  slidesPerGroup: 4,
  centeredSlides: false,
  spaceBetween: 40,
  pagination: {
    el: ".eventswiper-pagination",
    bulletActiveClass: "on",
    clickable: true,
  },
  autoplay: true,
  breakpoints: {
    300: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    490: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,
    },
    715: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,
    },
    850: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
  },
});

eventswiper.update();
