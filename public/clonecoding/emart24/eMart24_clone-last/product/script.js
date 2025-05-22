const eventswiper = new Swiper(".product-inner", {
  wrapperClass: "event-products",
  slideClass: "event-product",
  spaceBetween: 15,
  slidesPerView: 4,
  slidesPerGroup: 4,
  centeredSlides: false,
  observer: true,
  observeParents: true,
  pagination: {
    el: ".eventswiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
  autoplay: true,
  breakpoints: {
    300: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    750: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    700: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1000: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});
