$(function () {
  //Header Scroll Change
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $(".header-pcwrap").addClass("fixed");
    } else {
      $(".header-pcwrap").removeClass("fixed");
    }
  });

  //headermouseover
  $(".pcheader-gnbwrap").mouseover(function () {
    $(".pcheader-submenu").stop().fadeIn(500);
    $(".pcheader-gnbwrap").addClass("on");
  });
  $(".pcheader-gnbwrap").mouseout(function () {
    $(".pcheader-submenu").stop().fadeOut(500);
    $(".pcheader-gnbwrap").removeClass("on");
  });

  //Trigger
  $(".trigger").click(function () {
    if (!$(this).hasClass("triggerActive")) {
      $(".mobheader-gnbwrap").addClass("gnbwrapActive");
      setTimeout(() => {
        $(".mobheader-center").addClass("centerActive");
        $(".mobheader-dim").addClass("dimActive");
        setTimeout(() => {
          $(".trigger").addClass("triggerActive");
          $(".mainlogo").addClass("logoActive");
        }, 300);
      }, 500);
    } else {
      $(this).removeClass("triggerActive");
      $(".mobheader-gnbwrap").removeClass("active");
      $(".mobheader-center").removeClass("centerActive");
      $(".mobheader-gnbwrap").removeClass("gnbwrapActive");
      $(".mainlogo").removeClass("logoActive");
      $(".mobheader-gnb-list > li").removeClass("mobSubActive");
      $(".mobheader-dim").removeClass("dimActive");
    }
  });
});
