$(document).ready(function () {
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        nav: false,
      },
      750: {
        nav: true,
      },
    },
  });
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 450) {
    $("#menu").css("background-color", "#ffffff");
  } else {
    $("#menu").css("background-color", "#ffffffe6");
  }
});

$(window).scroll(function () {
  if ($(document).scrollTop() > 450) {
    $("#topbar").css("background-color", "#1c7d8d");
  } else {
    $("#topbar").css("background-color", "#1b7c8bcc");
  }
});
