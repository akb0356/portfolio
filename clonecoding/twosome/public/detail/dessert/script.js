// let prv = document.querySelector("#prv");
// let next = document.querySelector("#next");

// document.querySelector("#prv").addEventListener("click", () => {
//   document.querySelector(".slideimg").style.transform = "translate(-1120px)";

// });
// document.querySelector("#next").addEventListener("click", () => {
//   document.querySelector(".slideimg").style.transform = "translate(0)";

// });

// var slide = new Swiper('.swiper', {
//   slidesPerView: '5', // 한 슬라이드에 보여줄 갯수
//   spaceBetween: 5, // 슬라이드 사이 여백
//   loop: false, // 슬라이드 반복 여부
//   pagination: true, // pager 여부
//   // autoplay: { // 자동 슬라이드 설정
//   //     delay: 2000, // 시간 설정
//   //     disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
//   // },
//   navigation: { // 버튼 사용자 지정
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//   },

// })

// if (window.innerWidth > 480 ) {
//   var slide = new Swiper(".swiper", {
//     slidesPerView: "5",
//     spaceBetween: 5,
//     loop: false,
//     pagination: true,
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//           autoplay: {
//       delay: 2000,
//       disableOnInteraction: false,
//     },
//     },

//   });
// } else {

//   slide.destroy();
//   slide = undefined;
// }

/*header*/
const trigger = document.querySelector(".trigger");
const dropmenu = document.querySelector(".dropmenu");
const white = document.querySelector(".logo > a > .white");
const black = document.querySelector(".logo > a > .black");
const body = document.querySelector("body");
const header = document.querySelector("header");

trigger.addEventListener("click", (e) => {
  trigger.classList.toggle("active");
  dropmenu.classList.toggle("drop");

  if (dropmenu.classList.contains("drop")) {
    body.style.overflow = "hidden";
    setTimeout(() => {
      white.style.display = "block";
      black.style.display = "none";
    }, 300);
  } else {
    white.style.display = "none";
    black.style.display = "block";
    body.style.removeProperty("overflow");
  }
});

/*sticky*/

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 0);

  if (header.classList.contains("sticky")) {
    white.style.display = "block";
    black.style.display = "none";
  } else {
    white.style.display = "none";
    black.style.display = "block";
  }
});

//슬라이드

let slide;

function initializeSwiper() {
  if (!slide) {
    slide = new Swiper(".swiper", {
      slidesPerView: "5",
      spaceBetween: 5,
      loop: false,
      pagination: true,
      autoplay: {
        // 자동 슬라이드 설정
        delay: 2000, // 시간 설정
        disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}

function destroySwiper() {
  if (slide) {
    slide.destroy();
    slide = undefined;
  }
}

// 초기화
initializeSwiper();

// 창 크기 변경 감지
window.addEventListener("resize", function () {
  if (window.innerWidth > 900) {
    initializeSwiper();
  } else {
    destroySwiper();
  }
});

let modalpic = document.querySelector(".modalpic");
let modalwordtop = document.querySelector(".modalword_top > h1");
let modalsubtitle = document.querySelector(".modalword_top > span");
let modaldesc = document.querySelector(".modalword_top > p");
let modalallergy = document.querySelector(".modalword_top > h4");
let tsd = document.querySelectorAll("#tsd4");
let modal = document.querySelector(".modal");
let closemodal = document.querySelector(".closemodal");

let table = document.querySelectorAll(".table");
const url = "menu_info.json";
fetch(url)
  .then((info) => info.json())
  .then((info) => {
    const infoData = info;

    tsd.forEach((img, i) => {
      img.addEventListener("click", () => {
        modal.style.display = "block";

        const infoDataI = infoData[i];
        const nutrition = infoData[i].nutrition;

        for (let a = 0; a < table.length; a++) {
          table[a].innerHTML = nutrition[a];
        }

        modalwordtop.innerHTML = infoData[i].name;
        modalsubtitle.innerHTML = infoData[i].engname;
        modaldesc.innerHTML = infoData[i].description;
        modalallergy.innerHTML = infoData[i].allergy;

        modalpic.innerHTML = "";

        const imgElement = document.createElement("img");
        imgElement.src = infoData[i].image;
        modalpic.appendChild(imgElement);
      });
    });
  })
  .catch((err) => {
    console.log(err);
  });

//xbtn에 on 클래스 빼기
closemodal.addEventListener("click", () => {
  modal.style.display = "none";
});
