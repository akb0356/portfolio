const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const deg = 60;

let i = 0;
for (let el of lists) {
  let front = el.querySelector(".front");
  let frontImg = front.querySelector("img");
  el.style.transform = `rotate(${deg * i}deg) translateY(-100vh)`;
  frontImg.src = `./contents/card${i + 1}.jpg`;
  i++;

  el.addEventListener("click", (e) => {
    const card = el.querySelector(".card");
    card.classList.toggle("clickOn");
  });
}

const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

let active = 0;
let num = 0;
let len = lists.length - 1;

let activation = (index, lists) => {
  for (let el of lists) {
    el.classList.remove("on");
  }
  lists[index].classList.add("on");
};

let cardActive = (lists) => {
  for (let el of lists) {
    let card = el.querySelector(".card");
    if (!el.classList.contains("on")) {
      card.classList.remove("clickOn");
    }
  }
};
prev.addEventListener("click", () => {
  num++;
  frame.style.transform = `rotate(${deg * num}deg)`;
  active == 0 ? (active = len) : active--;
  activation(active, lists);
  cardActive(lists);
});

next.addEventListener("click", () => {
  num--;
  frame.style.transform = `rotate(${deg * num}deg)`;
  active == len ? (active = 0) : active++;
  activation(active, lists);
  cardActive(lists);
});
