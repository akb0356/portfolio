const swiper = new Swiper(".magazine-sliderwrap", {
  loop: false,
  parallax: true,
  slidesPerView: 3,
  initialSlide: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  autoplay: false,
  observeParents: true,
  preventClicks: true,
  preventClicksPropagation: false,
  navigation: {
    nextEl: ".magazine-swiper-button-next",
    prevEl: ".magazine-swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 2.5,
      slidesPerGroup: 1,
      spaceBetween: 8,
    },
    640: {
      slidesPerView: 2.5,
      slidesPerGroup: 1,
      spaceBetween: 8,
    },
    744: {
      slidesPerView: 2.5,
      slidesPerGroup: 1,
      spaceBetween: 8,
    },
    968: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
  },
});

// swiper li tag create
const url = "slide.json";
fetch(url)
  .then((slide) => slide.json())
  .then((slide) => {
    const slideData = slide;
    const magazineWrapper = document.querySelector(".swiper-wrapper");
    slideData.forEach((element, i) => {
      const swiperLi = document.createElement("li");
      const swiperImgatag = document.createElement("a");
      const swiperImgimglink = document.createElement("img");
      const swiperTxtatag = document.createElement("a");
      const swiperTxtimglink = document.createElement("img");
      const swiperDiv = document.createElement("div");
      const swiperDivimglink = document.createElement("img");
      const swiperH2 = document.createElement("h2");
      const swiperH3 = document.createElement("h3");

      swiperLi.classList.add("swiper-slide");

      swiperImgatag.classList.add("magazin-slide-imgwrap");
      swiperImgatag.href = element.href;
      swiperImgimglink.src = element.src;
      swiperImgatag.appendChild(swiperImgimglink);

      swiperTxtatag.classList.add("magazin-slide-txtwrap");
      swiperTxtatag.href = element.href;
      swiperTxtimglink.src = element.src;
      swiperH3.classList.add("magazin-slide-title");
      swiperH3.innerText = element.slidetitle;

      swiperDiv.classList.add("magazin-slide-snstitle");
      swiperDivimglink.src = element.snsSrc;
      swiperH2.innerText = element.snstitle;
      
      swiperDiv.appendChild(swiperDivimglink);
      swiperDiv.appendChild(swiperH2);
      swiperTxtatag.appendChild(swiperDiv);
      swiperTxtatag.appendChild(swiperH3);
      swiperLi.appendChild(swiperImgatag);
      swiperLi.appendChild(swiperTxtatag);
      magazineWrapper.appendChild(swiperLi);
    });
  });
