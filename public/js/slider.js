$(document).ready(function () {
  $('.portfolio-section').each(function (index, element) {
    var $slider = $(element).find('.portfolio-slider');

    $slider.slick({
      slidesToScroll: 1,
      infinite: false,
      arrows: false,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });

    $(element)
      .find('.portfolio-prev')
      .click(function () {
        $slider.slick('slickPrev');
      });

    $(element)
      .find('.portfolio-next')
      .click(function () {
        $slider.slick('slickNext');
      });
  });
});
$(window).on('resize', function () {
  $('.portfolio-slider').slick('setPosition');
});
