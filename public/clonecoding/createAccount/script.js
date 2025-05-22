const visualCheckbox = document.querySelectorAll(".visualCheckbox");
const checkAll = document.querySelector(
  ".check-All > label >  .visualCheckbox"
);
const ageAgree = document.querySelector("#ageAgree");
const ruleAgree = document.querySelector("#ruleAgree");
const infoAgree = document.querySelector("#infoAgree");
const infoAgreeselect = document.querySelector("#infoAgreeselect");
const emailAgree = document.querySelector("#emailAgree");
const visualInputList = document.querySelectorAll(".visual-inputList > li");
const agreeBtn = document.querySelector(".agreeNextButton");

let agreements = {
  ageAgree: false,
  ruleAgree: false,
  infoAgree: false,
  infoAgreeselect: false,
  emailAgree: false,
};

//agreebtn
const allTrue = () => {
  return agreements.ageAgree && agreements.ruleAgree && agreements.infoAgree;
};
const activeBtn = () => {
  if (allTrue()) {
    agreeBtn.classList.add("agree");
    agreeBtn.querySelector("a").href = "./join/index.html";
  } else {
    agreeBtn.classList.remove("agree");
    agreeBtn.querySelector("a").href = "javascript:void(0)";
  }
};

//visualcheckBox(not:nth(1))
let onlyCheck = [...visualCheckbox].slice(1);
onlyCheck.forEach((box) => {
  box.addEventListener("click", () => {
    let input = box.previousElementSibling;
    let key = input.id;
    if (!box.classList.contains("on")) {
      box.classList.add("on");
      input.checked = true;
      agreements[key] = true;
    } else {
      box.classList.remove("on");
      input.checked = false;
      agreements[key] = false;
    }
    if (Object.values(agreements).every((value) => value)) {
      checkAll.classList.add("on");
      checkAll.previousElementSibling.checked = true;
    } else {
      checkAll.classList.remove("on");
      checkAll.previousElementSibling.checked = false;
    }
    activeBtn();
  });
});

//allcheck
checkAll.addEventListener("click", () => {
  const isAllChecked = checkAll.classList.contains("on");
  if (isAllChecked) {
    checkAll.classList.remove("on");
    checkAll.previousElementSibling.checked = false;
    onlyCheck.forEach((check) => {
      let input = check.previousElementSibling;
      let key = input.id;
      check.classList.remove("on");
      input.checked = false;
      agreements[key] = false;
    });
  } else {
    checkAll.classList.add("on");
    checkAll.previousElementSibling.checked = true;
    onlyCheck.forEach((check) => {
      let input = check.previousElementSibling;
      let key = input.id;
      check.classList.add("on");
      input.checked = true;
      agreements[key] = true;
    });
  }
  activeBtn();
});
