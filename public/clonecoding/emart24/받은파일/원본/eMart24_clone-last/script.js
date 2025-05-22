const mobGnbDrop = document.querySelectorAll(".gnb-listbox-title");
const mobGnbTitles = document.querySelectorAll(
  ".gnb-listbox-title > .title > h1"
);
const mobGnbLists = document.querySelectorAll(".gnb-list-detail");
const mobGnbDropIcons = document.querySelectorAll(
  ".gnb-listbox-title .dropicon"
);

mobGnbLists.forEach((list) => {
  list.style.height = "0";
  list.style.display = "none";
});
mobGnbTitles.forEach((title) => {
  title.style.color = "rgb(51,51,51)";
});
mobGnbDropIcons.forEach((icon) => {
  icon.style.transform = "rotate(0deg)";
});

mobGnbDrop.forEach((drop, index) => {
  drop.addEventListener("click", () => {
    const currentListHeight = mobGnbLists[index].style.height;
    const currentListDisplay = mobGnbLists[index].style.display;
    const currentTitleColor = mobGnbTitles[index].style.color;
    const currentDropIcon = mobGnbDropIcons[index].style.transform;

    mobGnbLists[index].style.height =
      currentListHeight === "0px" ? "initial" : "0px";
    mobGnbLists[index].style.display =
      currentListDisplay === "none" ? "block" : "none";
    mobGnbTitles[index].style.color =
      currentTitleColor === "rgb(51, 51, 51)"
        ? "rgb(249, 187, 0)"
        : "rgb(51, 51, 51)";
    mobGnbDropIcons[index].style.transform =
      currentDropIcon === "rotate(0deg)" ? "rotate(-180deg)" : "rotate(0deg)";
  });
});

/* Top slide */

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    autoplayTimeLeft(s, time, progress) {
      progressCircle.style.setProperty("--progress", 1 - progress);
      progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    },
  },
});

/* touchtab */
const plusone = () => {
  document
    .querySelector("#contentframe")
    .setAttribute("src", "/product/plusone.html");
  document.querySelector("#plusone").style =
    "background: #f9bb00; color: #fff;";
  document.querySelector("#plustwo").style = "background: none; color: #999;";
  document.querySelector("#plusnew").style = "background: none; color: #999;";
};
const plustwo = () => {
  document
    .querySelector("#contentframe")
    .setAttribute("src", "/product/plustwo.html");
  document.querySelector("#plustwo").style =
    "background: #f9bb00; color: #fff;";
  document.querySelector("#plusone").style = "background: none; color: #999;";
  document.querySelector("#plusnew").style = "background: none; color: #999;";
};
const plusnew = () => {
  document
    .querySelector("#contentframe")
    .setAttribute("src", "/product/plusnew.html");
  document.querySelector("#plusnew").style =
    "background: #f9bb00; color: #fff;";
  document.querySelector("#plusone").style = "background: none; color: #999;";
  document.querySelector("#plustwo").style = "background: none; color: #999;";
};

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
