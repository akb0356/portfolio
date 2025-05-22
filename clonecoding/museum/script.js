// topgnb
const museumLinkWrap = document.querySelector(".museumLinkWrap");
const languageWrap = document.querySelector(".languageWrap");

function displayOnTopGnb(e) {
  if (e.currentTarget === museumLinkWrap) {
    museumLinkWrap.classList.toggle("clickon");
    const museumLink = document.querySelector(".museumLink");
    museumLink.style.display = museumLinkWrap.classList.contains("clickon")
      ? "block"
      : "none";
  } else if (e.currentTarget === languageWrap) {
    languageWrap.classList.toggle("clickon");
    const language = document.querySelector(".language");
    language.style.display = languageWrap.classList.contains("clickon")
      ? "block"
      : "none";
  }
}

museumLinkWrap.addEventListener("click", displayOnTopGnb);
languageWrap.addEventListener("click", displayOnTopGnb);

//gnb
const gnbMenu = document.querySelectorAll(".gnbWrap > li");
gnbMenu.forEach((gnb) => {
  const gnbSubmenu = gnb.querySelector(".sub-menu");
  let submenuHovered = false;
  if (gnbSubmenu) {
    function gnbmouseOver() {
      submenuHovered = true;
      gnbSubmenu.style.display = "block";
    }

    function gnbmouseOut() {
      submenuHovered = false;
      setTimeout(() => {
        if (!submenuHovered) {
          gnbSubmenu.style.display = "none";
        } else {
          gnbSubmenu.style.display = "block";
        }
      }, 1000);
    }

    gnb.addEventListener("mouseover", gnbmouseOver);
    gnb.addEventListener("mouseout", gnbmouseOut);

    gnbSubmenu.addEventListener("mouseover", () => {
      submenuHovered = true;
    });
    gnbSubmenu.addEventListener("mouseout", () => {
      submenuHovered = false;
    });
  }
});

//searchArea
const pcSearchAreaBtn = document.querySelector(".searchArea-click");
const searchArea = document.querySelector(".searchArea");
const mobSearchBtn = document.querySelector(".mob-searchBtn");
pcSearchAreaBtn.addEventListener("click", () => {
  searchArea.style.display = "block";
  const searchAreaClose = searchArea.querySelector(".search-close");
  searchAreaClose.addEventListener("click", () => {
    searchArea.style.display = "none";
  });
});
mobSearchBtn.addEventListener("click", () => {
  searchArea.style.display = "block";
  const searchAreaClose = searchArea.querySelector(".search-close");
  searchAreaClose.addEventListener("click", () => {
    searchArea.style.display = "none";
  });
});

// footerdisplay
const familySites = document.querySelectorAll(".footerLink-familysite");
familySites.forEach((site) => {
  const familySite = site.querySelector("ul");
  function displayOnFooterLinkWrap(e) {
    e.preventDefault();
    familySites.forEach((otherSite) => {
      if (otherSite !== site) {
        otherSite.classList.remove("clickon");
        familySite.style.display = "none";
      }
    });
    e.currentTarget.classList.toggle("clickon");
    familySite.style.display = e.currentTarget.classList.contains("clickon")
      ? "block"
      : "none";
  }
  site.addEventListener("click", displayOnFooterLinkWrap);
});

// slider
const mainSlider = new Swiper(".mainSlide", {
  wrapperClass: "mainSlide-wrapper",
  slideClass: "main-slide",
  direction: "horizontal", // 슬라이드 진행 방향, 기본값 horizontal(가로)
  // autoplay: true 도 가능하지만 객체 데이터로 할당하면 추가적인 옵션 설정 가능
  autoplay: {
    delay: 5000,
  },
  loop: true, // 반복재생 여부
  slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 0, // 슬라이드 사이 여백
  centeredSlides: false, // 1번 슬라이드가 가운데 보이기

  // 페이저 버튼 사용자 설정
  pagination: {
    el: ".mainSlide-pagination-span",
    clickable: true,
  },

  // nav 화살표 출력 시 추가
  navigation: {
    prevEl: "#mainSlide-prev",
    nextEl: "#mainSlide-next",
  },
});
const mainSliderButton = document.querySelector(
  ".mainSlide-pagination-wrapper > button"
);
mainSliderButton.addEventListener("click", () => {
  const iconElement = mainSliderButton.querySelector("i");
  if (mainSlider.autoplay.running) {
    mainSlider.autoplay.stop();
    iconElement.classList.replace("fa-pause", "fa-play");
  } else {
    mainSlider.autoplay.start();
    iconElement.classList.replace("fa-play", "fa-pause");
  }
});

const exhibitionSlider = new Swiper(".exhibition-slide-container", {
  wrapperClass: "exhibition-slide-wrapper",
  slideClass: "exhibition-slide",
  slidesPerView: "auto",
  centeredSlides: false,
  autoplayDisableOnInteraction: false,
  loop: true,
  autoplay: true,
  speed: 800,
  keyboardControl: true,
  navigation: {
    prevEl: ".exhibition-pagination-left",
    nextEl: ".exhibition-pagination-right",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    990: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
  },
});
const exhibitionSliderButton = document.querySelector(
  ".exhibition-pagination-pause"
);
exhibitionSliderButton.addEventListener("click", () => {
  const iconElement = exhibitionSliderButton.querySelector("i");
  if (exhibitionSlider.autoplay.running) {
    exhibitionSlider.autoplay.stop();
    iconElement.classList.replace("fa-pause", "fa-play");
  } else {
    exhibitionSlider.autoplay.start();
    iconElement.classList.replace("fa-play", "fa-pause");
  }
});

const noticeSlider = new Swiper(".notice-banner-container", {
  wrapperClass: "notice-banner-wrapper",
  slideClass: "notice-banner-slide",
  // direction: "horizontal", // 슬라이드 진행 방향, 기본값 horizontal(가로)
  autoplay: {
    delay: 5000,
  },
  loop: true, // 반복재생 여부
  slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 0, // 슬라이드 사이 여백
  centeredSlides: false, // 1번 슬라이드가 가운데 보이기

  // 페이저 버튼 사용자 설정
  pagination: {
    el: ".notice-pagination-span",
    clickable: true,
  },

  // // nav 화살표 출력 시 추가
  // navigation: {
  //   prevEl: "#mainSlide-prev",
  //   nextEl: "#mainSlide-next",
  // },
});
const noticeSliderButton = document.querySelector(
  ".notice-pagination-wrapper > button"
);
noticeSliderButton.addEventListener("click", () => {
  const iconElement = noticeSliderButton.querySelector("i");
  if (noticeSlider.autoplay.running) {
    noticeSlider.autoplay.stop();
    iconElement.classList.replace("fa-pause", "fa-play");
  } else {
    noticeSlider.autoplay.start();
    iconElement.classList.replace("fa-play", "fa-pause");
  }
});

const etcInfoSlider = new Swiper(".etcInfo-event-slide-container", {
  wrapperClass: "etcInfo-event-slide-wrapper",
  slideClass: "etcInfo-event-slide",
  loop: true, // 반복재생 여부
  pagination: {
    el: ".etcInfo-event-pagination-number",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        "<span>/</span>" +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  navigation: {
    prevEl: ".etcInfo-event-pagination-prev",
    nextEl: ".etcInfo-event-pagination-next",
  },
});
const etcInfoOnlineSlider = new Swiper(".etcInfo-online-slide-container", {
  wrapperClass: "etcInfo-online-slide-wrapper",
  slideClass: "etcInfo-online-slide",
  loop: true, // 반복재생 여부
  pagination: {
    el: ".etcInfo-online-pagination-number",
    type: "fraction",
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        "<span>/</span>" +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  navigation: {
    prevEl: ".etcInfo-online-pagination-prev",
    nextEl: ".etcInfo-online-pagination-next",
  },
});

//noticeCLick
const setActiveNotice = (section) => {
  const buttons = ["alert", "announce", "employ", "news"];
  buttons.forEach((button) => {
    const isActive = button === section;
    document
      .querySelector(`#${button}Btn`)
      .classList.toggle("notice-btn-active", isActive);
  });
  document
    .querySelector("#contentFrame")
    .setAttribute("src", `./notice/notice-${section}.html`);
};

const noticeAlert = () => setActiveNotice("alert");
const noticeAnnounce = () => setActiveNotice("announce");
const noticeEmploy = () => setActiveNotice("employ");
const noticeNews = () => setActiveNotice("news");

//mobile gnb
const mobileHeaderBtn = document.querySelector(".mob-headerBtn");
const mobileHeaderDim = document.querySelector(".mobileHeaderDim");
const mobileSideMenu = document.querySelector(".mobileHeader-sideMenuWrapper");
const mobileSideMenuClose = document.querySelector(
  ".mobileHeader-sideMenuClose"
);
const toggleDisplay = (click) => {
  mobileSideMenu.style.display = click ? "block" : "none";
  mobileHeaderDim.style.display = click ? "block" : "none";
};
mobileHeaderBtn.addEventListener("click", () => toggleDisplay(true));
mobileSideMenuClose.addEventListener("click", () => toggleDisplay(false));

const mobileLanguage = document.querySelector(".mobileHeader-language");
const mobileLanguageWrap = mobileLanguage.querySelector("ul");
mobileLanguage.addEventListener("click", () => {
  mobileLanguage.classList.toggle("clickon");
});

const mobileHeaderSlideMenu = document.querySelectorAll(
  ".mobileHeader-slide-gnbWrap > li"
);
mobileHeaderSlideMenu.forEach((menu) => {
  const subMenu = menu.querySelector(".mobileHeader-slide-sub-menu");
  function displayOnMobileSubmenuWrap(e) {
    e.preventDefault();
    e.currentTarget.classList.toggle("clickon");
    subMenu.style.display = e.currentTarget.classList.contains("clickon")
      ? "block"
      : "none";
  }
  menu.addEventListener("click", displayOnMobileSubmenuWrap);
});
