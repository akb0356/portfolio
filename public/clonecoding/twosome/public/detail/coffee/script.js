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
  } else if (
    header.classList.contains("sticky") &&
    !header.classList.contains("drop")
  ) {
    white.style.display = "block";
    black.style.display = "none";
    body.style.removeProperty("overflow");
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

/*modal coffee*/

const blackground = document.querySelector("#blackground");
const aroma_note = document.querySelector("#aromanote");
const decaf = document.querySelector("#decaf");
const modal01 = document.querySelector("#modal_1");
const modal02 = document.querySelector("#modal_2");
const modal03 = document.querySelector("#modal_3");
const Xicon01 = document.querySelector("#blackground_icon");
const Xicon02 = document.querySelector("#aromanote_icon");
const Xicon03 = document.querySelector("#decaf_icon");

blackground.onclick = () => {
  modal01.classList.add("block");
};

aroma_note.onclick = () => {
  modal02.classList.add("block");
};

decaf.onclick = () => {
  modal03.classList.add("block");
};

Xicon01.onclick = () => {
  modal01.classList.remove("block");
};

Xicon02.onclick = () => {
  modal02.classList.remove("block");
};

Xicon03.onclick = () => {
  modal03.classList.remove("block");
};

/*modal drink*/

const spanish = document.querySelector("#spanish");
const longBlack = document.querySelector("#longBlack");
const lemonTea = document.querySelector("#lemonTea");
const strawberry = document.querySelector("#strawberry");
const modal04 = document.querySelector("#modal_4");
const modal05 = document.querySelector("#modal_5");
const modal06 = document.querySelector("#modal_6");
const modal07 = document.querySelector("#modal_7");
const Xicon04 = document.querySelector("#spanish_icon");
const Xicon05 = document.querySelector("#longblack_icon");
const Xicon06 = document.querySelector("#lemonTea_icon");
const Xicon07 = document.querySelector("#strawberry_icon");

spanish.onclick = () => {
  modal04.classList.add("block");
};

longBlack.onclick = () => {
  modal05.classList.add("block");
};

lemonTea.onclick = () => {
  modal06.classList.add("block");
};

strawberry.onclick = () => {
  modal07.classList.add("block");
};

Xicon04.onclick = () => {
  modal04.classList.remove("block");
};

Xicon05.onclick = () => {
  modal05.classList.remove("block");
};

Xicon06.onclick = () => {
  modal06.classList.remove("block");
};

Xicon07.onclick = () => {
  modal07.classList.remove("block");
};
