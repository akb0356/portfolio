const mobGnbLists = document.querySelectorAll(".mobheader-gnb-list > li");
mobGnbLists.forEach((list) => {
  list.addEventListener("click", (e) => {
    list.classList.toggle("mobSubActive");
  });
});

/* Top slide */
const mainslide = new Swiper(".mainslide-swiper", {
  watchOverflow: false,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".numberpage",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span> <span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const playpausebtn = document.querySelector(".swiper-pause-button");
playpausebtn.addEventListener("click", (e) => {
  playpausebtn.classList.toggle("play");
  if (playpausebtn.classList.contains("play")) {
    mainslide.autoplay.stop();
  } else {
    mainslide.autoplay.start();
  }
});

const mainslideprogress = new Swiper(".mainslide-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});
mainslide.controller.control = mainslideprogress;

/* touchtab */
const activeEventTab = (section) => {
  const buttons = ["one", "two", "new"];
  buttons.forEach((button) => {
    const isActive = button === section;
    document
      .querySelector(`#plus${button}`)
      .classList.toggle("clickOn", isActive);
  });
  document
    .querySelector("#contentframe")
    .setAttribute("src", `./product/plus${section}.html`);
};

const plusone = () => activeEventTab("one");
const plustwo = () => activeEventTab("two");
const plusnew = () => activeEventTab("new");

//only slide
const onlyswiper = new Swiper(".only-sliderWrap", {
  wrapperClass: "only-slides",
  slideClass: "only-slide",
  slidesPerView: 4,
  spaceBetween: 20,
  centeredSlides: false,
  breakpoints: {
    400: {
      slidesPerView: 1.5,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    750: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    968: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    1050: {
      slidesPerView: 4,
      slidesPerGroup: 1,
    },
  },
});

// magazine swiper li tag create
const url = "slide.json";
fetch(url)
  .then((slide) => slide.json())
  .then((slide) => {
    const slideData = slide;
    const magazineWrapper = document.querySelector(".magazine-swiper-wrapper");
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

      swiperLi.classList.add("magazine-swiper-slide");

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
  })
  .catch((error) => {
    console.error("Fetch error:", error);
  });

//magazine slide
const magazineswiper = new Swiper(".magazine-sliderwrap", {
  wrapperClass: "magazine-swiper-wrapper",
  slideClass: "magazine-swiper-slide",
  loop: false,
  parallax: true,
  slidesPerView: 3,
  initialSlide: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  autoplay: false,
  observer: true,
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
      spaceBetween: 10,
    },
  },
});
magazineswiper.update();
