// 1. li 요소에 들어있는 i.checkBox에 가상클래스 on이 붙으면 같은 아이디값? 배열i값? 가지고 있는 input의 checkbox 태그도 checked가 되어야한다.
// 2. li 요소에 i check를 클릭하면 on이라는 가상클래스가 붙어야한다.
// 3. checkall이 붙은 요소는 선택되면 하위의 모든 li 안 i class에 on이 붙어야하며 input 요소도 check로 되어야한다. 다시 클릭하면 remove가 되어야하니 toggle을 쓰는것이 좋을 듯.
// 4. nextbutton을 눌렀을 때 (필수)가 붙은 요소의 input태그가 체크가 안되어있으면 각 요소를 확인하여 가장 먼저 체크가 안된 것을 알려주며 필수 체크를 안하면 회원가입이 안된다 일러줘야한다. 조건이 3개가 들어가야함.

// 1. i.checkbox를 클릭하면 on이라는 가상클래스가 붙어야한다.
// 2. on이라는 가상클래스가 붙으면 같이 형제요소로 있는 input 태그도 checked 속성을 가지게 되어야한다.
// 3. on이 사라지면 input 태그도 같이 checked속성이 사라져야한다.

// 각 선택자를 click하면 on을 부여하고 형제요소 input태그에도 체크를한다.
// 1번을 제외하고 class on을 붙이고 input도 체크함
const visualCheckbox = document.querySelectorAll(".visualCheckbox");
const checkAll = document.querySelector(".check-All .visualCheckbox");


console.log(visualCheckbox);

//전체선택 전체해제
checkAll.addEventListener("click", () => {
  checkAll.classList.toggle("on");
  visualCheckbox.forEach((checkBox) => {
    if (checkAll.classList.contains("on")) {
      checkBox.classList.add("on");
    } else {
      checkBox.classList.remove("on");
    }
  });
});



// 전체선택 전체 해제

// visualCheckbox.forEach((element, index) => {
//   const siblingInput = element
//     .closest(".checkbox")
//     .querySelectorAll('input[type="checkbox"]');
//   element.addEventListener("click", (e) => {
//     if (index !== 0) {
//       element.classList.toggle("on");
//       siblingInput.forEach(
//         (checkInput) => (checkInput.checked = !checkInput.checked)
//       );
//     }
//   });
// });

//checkall을 누르면 전체가 눌리고
