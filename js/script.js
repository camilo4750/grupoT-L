$(document).ready(function () {
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    items: 1,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        nav: false,
      },
      750: {
        nav: true,
      },
    },
  });

  $(".ir-arriba").click(function () {
    $("body, html").animate(
      {
        scrollTop: "0px",
      },
      300
    );
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(300);
    } else {
      $(".ir-arriba").slideUp(300);
    }
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
      $("#grupotyl-asociados-menu").css("background-color", "#ffffff");
    } else {
      $("#grupotyl-asociados-menu").css("background-color", "#ffffffe6");
    }
  });

  $(window).scroll(function () {
    if ($(document).scrollTop() > 300) {
      $("#topbar").css("background-color", "#1c7d8d");
    } else {
      $("#topbar").css("background-color", "#1b7c8bcc");
    }
  });
});

