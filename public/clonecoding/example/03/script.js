$(".color span").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  if ($(this).is(":last-child")) {
    $(".item img").attr(
      "src",
      "https://image.msscdn.net/thumbnails/images/goods_img/20250217/4793690/4793690_17398591741999_big.jpg?w=1200"
    );
  } else {
    $(".item img").attr(
      "src",
      "https://image.msscdn.net/thumbnails/images/goods_img/20250207/4767374/4767374_17405511510275_big.jpg?w=1200"
    );
  }
});

$(".like").click(function () {
  $(this).toggleClass("active");
});

$(".size span").click(function () {
  $(".size span").removeClass("choice");
  $(this).toggleClass("choice");
});
