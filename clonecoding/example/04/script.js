$(".trigger").click(function () {
  $(this).toggleClass("active");
  $(".modal-gnb").fadeToggle();
});

$(".btn li").click(function () {
  $(this).addClass("active");
  $(this).siblings().removeClass("active");
  let result = $(this).attr("data-alt");
  $(".tabs div").removeClass("active")
  $("#" + result).addClass("active")
});
