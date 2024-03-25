jQuery(document).ready(() => {
  jQuery('.portfolio-section').each((index, element) => {
    const $slider = jQuery(element).find('.portfolio-slider');

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

    jQuery(element)
      .find('.portfolio-prev')
      .click(() => {
        $slider.slick('slickPrev');
      });

    jQuery(element)
      .find('.portfolio-next')
      .click(() => {
        $slider.slick('slickNext');
      });
  });
});
jQuery(window).on('resize', () => {
  jQuery('.portfolio-slider').slick('setPosition');
});
