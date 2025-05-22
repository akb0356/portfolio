const loginId = document.querySelector("#inputId");
const loginPw = document.querySelector("#inputPw");
const loginError = document.querySelector(".orangeSpan");
const loginCheck = document.querySelectorAll(".login-check label");

const checkLoginInputs = () => {
  if (loginId.value == "" || loginPw.value == "") {
    loginError.style.display = "block";
  } else {
    loginError.style.display = "none";
  }
};
loginId.addEventListener("keyup", checkLoginInputs);
loginPw.addEventListener("keyup", checkLoginInputs);

loginCheck.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    const input = checkbox.querySelector("input");
    input.checked = !input.checked;
    checkbox
      .querySelector(".visualCheckbox")
      .classList.toggle("check", input.checked);

    if (checkbox.id === "ruleAgree") {
      const loginCheckAlert = document.querySelector(".login-check .alerttxt");

      if (input.checked) {
        loginCheckAlert.style.display = "block";
      } else {
        loginCheckAlert.style.display = "none";
      }
    }
  });
});

const ruleAgreeInput = document.querySelector("#ruleAgree input");
const loginCheckAlert = document.querySelector(
  ".login form.login-check .alerttxt"
);
