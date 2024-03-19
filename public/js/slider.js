// $(document).ready(function () {
//   $('.portfolio-slider').slick({
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrows: false,
//     infinite: false
//   });
//   const left = document.getElementById('left');
//   const right = document.getElementById('right');

//   left?.addEventListener('click', (e) => {
//     $('.portfolio-slider').slick('slickPrev');
//   });
//   right?.addEventListener('click', (e) => {
//     $('.portfolio-slider').slick('slickNext');
//   });
// });

$(document).ready(function(){
  $('.portfolio-section').each(function(index, element) {
  var $slider = $(element).find('.portfolio-slider');
  

  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
  });


  $(element).find('.portfolio-prev').click(function(){
    $slider.slick('slickPrev');
  });


  $(element).find('.portfolio-next').click(function(){
    $slider.slick('slickNext');
  });
});
});
