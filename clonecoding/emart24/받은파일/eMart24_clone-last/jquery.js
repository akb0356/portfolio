$(function () {
  //Header Scroll Change
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  //Trigger;
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".mobheader-gnbwrap").toggleClass("active");
  });
  $(".mobheader-gnbwrap a").click(function () {
    $(".mobheader-gnbwrap, .trigger").removeClass("active");
  });
});
