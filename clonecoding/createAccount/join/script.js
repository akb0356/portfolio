const today = new Date();
const year = today.getFullYear();
const yearBtn = document.querySelector("#userYear");
const monthBtn = document.querySelector("#userMonth");
const dateBtn = document.querySelector("#userDay");

//year
for (let i = 1900; i <= year; i++) {
  let yearOption = document.createElement("option");
  yearOption.setAttribute("value", i);
  yearOption.innerHTML = i;
  yearBtn.appendChild(yearOption);
}
//month
for (let i = 1; i <= 12; i++) {
  let monthOption = document.createElement("option");
  monthOption.setAttribute("value", i);
  monthOption.innerHTML = i;
  monthBtn.appendChild(monthOption);
}
//day
let lastDay = () => {
  const valueYear = yearBtn.value;
  const valueMonth = monthBtn.value;
  if (!valueYear || !valueMonth) return;
  let lastDate = new Date(valueYear, valueMonth, 0).getDate();
  dateBtn.innerHTML = "<option disabled selected>일</option>";
  for (let i = 1; i <= lastDate; i++) {
    let dayOption = document.createElement("option");
    dayOption.setAttribute("value", i);
    dayOption.innerHTML = i;
    dateBtn.appendChild(dayOption);
  }
};
yearBtn.addEventListener("change", lastDay);
monthBtn.addEventListener("change", lastDay);

//gender
const genderLabels = document.querySelectorAll(".userGenderWrap label");
genderLabels.forEach((label) => {
  label.addEventListener("click", () => {
    genderLabels.forEach((lbl) => lbl.classList.remove("clickon"));
    label.classList.add("clickon");
    label.previousElementSibling.checked = true;
  });
});

//info
const idcheck = /^[a-z0-9]{4,12}$/;
const pwcheck =
  /^[A-Za-z\d#?!@$%^&*-](?=.*?[a-z])(?=.*?\d)(?=.*?[#?!@$%^&*-])[A-Za-z\d#?!@$%^&*-]{7,19}$/;
const nameCheck = /^[가-힣]{2,6}$/;
const emailCheck = /^([\w\.-]+)@([\da-z\.-]+)\.([a-z]{2,6})$/;

//id
const userId = document.querySelector(".userId .input input");
const userIderrorText = document.querySelector(".userId .defaultTxt");

userId.addEventListener("keyup", () => {
  if (userId.value == "") {
    userIderrorText.classList.add("error");
    userId.parentNode.classList.remove("checked");
  } else if (!idcheck.test(userId.value)) {
    userIderrorText.classList.add("error");
    userId.parentNode.classList.remove("checked");
  } else {
    userIderrorText.classList.remove("error");
    userId.parentNode.classList.add("checked");
  }
});

//pw
const userPw = document.querySelector(".userPassword .input input");
const userPwdefault = document.querySelector(".userPassword .defaultTxt");
userPw.addEventListener("keyup", () => {
  if (userPw.value == "") {
    userPwdefault.classList.add("error");
    userPw.parentNode.classList.remove("checked");
  } else if (!pwcheck.test(userPw.value)) {
    userPwdefault.classList.add("error");
    userPw.parentNode.classList.remove("checked");
  } else {
    userPwdefault.classList.remove("error");
    userPw.parentNode.classList.add("checked");
  }
});
const userPwRe = document.querySelector(".userPasswordRe .input input");
const userPwReError = document.querySelector(".userPasswordRe .errorTxt");
userPwRe.addEventListener("keyup", () => {
  if (userPwRe.value == "") {
    userPwReError.innerText = "필수 입력 정보입니다.";
    userPwReError.style.display = "block";
    userPwRe.parentNode.classList.remove("checked");
  } else if (userPwRe.value !== userPw.value) {
    userPwReError.innerText = "비밀번호가 일치하지 않습니다.";
    userPwReError.style.display = "block";
    userPwRe.parentNode.classList.remove("checked");
  } else {
    userPwReError.style.display = "none";
    userPwRe.parentNode.classList.add("checked");
  }
});

//name
const userName = document.querySelector(".userName .input input");
const userNameError = document.querySelector(".userName .errorTxt");
userName.addEventListener("keyup", () => {
  if (userName.value == "") {
    userNameError.style.display = "block";
    userName.parentNode.classList.remove("checked");
  } else if (!nameCheck.test(userName.value)) {
    userNameError.style.display = "block";
    userName.parentNode.classList.remove("checked");
  } else {
    userNameError.style.display = "none";
    userName.parentNode.classList.add("checked");
  }
});

//email
const userEmail = document.querySelector(".userEmail .input input");
const userEmailError = document.querySelector(".userEmail .errorTxt");
userEmail.addEventListener("keyup", () => {
  if (userEmail.value == "") {
    userEmailError.style.display = "block";
    userEmail.parentNode.classList.remove("checked");
  } else if (!emailCheck.test(userEmail.value)) {
    userEmailError.style.display = "block";
    userEmail.parentNode.classList.remove("checked");
  } else {
    userEmailError.style.display = "none";
    userEmail.parentNode.classList.add("checked");
  }
});

//button
const agreeJoinButton = document.querySelector(".agreeNextButton");
const AllPass = () => {
  return (
    idcheck.test(userId.value) &&
    pwcheck.test(userPw.value) &&
    pwcheck.test(userPwRe.value) &&
    emailCheck.test(userEmail.value) &&
    nameCheck.test(userName.value)
  );
};
const activeNxtBtn = () => {
  if (AllPass()) {
    agreeJoinButton.classList.add("agree");
    agreeJoinButton.querySelector("a").href = "../login/index.html";
  } else {
    agreeJoinButton.classList.remove("agree");
    agreeJoinButton.querySelector("a").href = "javascript:void(0)";
  }
};

userId.addEventListener("keyup", activeNxtBtn);
userPw.addEventListener("keyup", activeNxtBtn);
userPwRe.addEventListener("keyup", activeNxtBtn);
userEmail.addEventListener("keyup", activeNxtBtn);
userName.addEventListener("keyup", activeNxtBtn);
