$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 4,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    // centerMode: true,
    centerPadding: "30px",
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// Slick version 1.5.8

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(".navbar-toggler").click(function () {
  var $nav = $(".navbar");

  if ($(document).scrollTop() == 0 || $(document).scrollTop() < 40) {
    if (!$nav.hasClass("scrolled")) $nav.addClass("scrolled");
    else {
      $nav.removeClass("scrolled");
    }
  }
});
