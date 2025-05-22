//header
const pcHeader = document.querySelector("#pcHeader");
const mobileHeader = document.querySelector("#mobileHeader");
const blackBox = document.querySelector(".blackBox");
const mainContentWrap = document.querySelector(".mainContentWrap");
const scrolleffect = document.querySelector(".scrolleffect");
const gnbWrap = document.querySelector(".gnbWrap");
const trigger = document.querySelector(".trigger");

let scrollNum = 0;
let documentHeight = 0;
const coverHeight = window.innerHeight;

window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  documentHeight = document.body.scrollHeight;
  if (scrollNum >= coverHeight) {
    pcHeader.classList.add("fixed");
    mobileHeader.classList.add("fixed");
    scrolleffect.style.opacity = `${scrollNum / 1000}`;
  } else if (gnbWrap.classList.contains(".menuActive")) {
    trigger.classList.toggle("active");
  } else {
    pcHeader.classList.remove("fixed");
    mobileHeader.classList.remove("fixed");
    blackBox.style.backgroundColor = `rgba(0, 0, 0, ${scrollNum / 1000})`;
    blackBox.style.zIndex = `${scrollNum / 1000}`;
    scrolleffect.style.opacity = `${1 - scrollNum / 1000}`;
  }
});

// swiper
const portfolioSwiper = new Swiper(".portfolio-project-container", {
  wrapperClass: "portfolio-project-wrapper",
  slideClass: "portfolio-project-slide",
  loop: true,
  slidesPerView: 1,
  initialSlide: 0,
  slidesPerGroup: 1,
  spaceBetween: 0,
  autoplay: false,
  navigation: {
    nextEl: "#nextBtn",
    prevEl: "#prevBtn",
  },
});

$(function () {
  $(".trigger").click(function () {
    $(this).toggleClass("active").siblings().toggleClass("menuActive");
  });
});
