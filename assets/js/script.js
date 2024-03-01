$(document).ready(function () {
  function mainSlider() {
    var BasicSlider = $(".slider-active");

    BasicSlider.on("init", function (e, slick) {
      var $firstAnimatingElements = $(".single-slider:first-child").find(
        "[data-animation]"
      );

      doAnimations($firstAnimatingElements);
    });

    BasicSlider.on(
      "beforeChange",
      function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $(
          '.single-slider[data-slick-index="' + nextSlide + '"]'
        ).find("[data-animation]");

        doAnimations($animatingElements);
      }
    );

    BasicSlider.slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      fade: true,
      arrows: true,
      prevArrow:
        "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
      nextArrow:
        "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
      responsive: [
        {
          breakpoint: 767,
          settings: {
            dots: false,
            arrows: false,
          },
        },
      ],
    });

    function doAnimations(elements) {
      var animationEndEvents =
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

      elements.each(function () {
        var $this = $(this);

        var $animationDelay = $this.data("delay");

        var $animationType = "animated " + $this.data("animation");

        $this.css({
          "animation-delay": $animationDelay,
          "-webkit-animation-delay": $animationDelay,
        });

        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType);
        });
      });
    }
  }
  mainSlider();
});
