$(function () {
  $('#main-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });

  $('#hero-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });  

  $('input.form-control, textarea.form-control').floatingLabel();

  $('input.phone-input').inputmask({
    mask: '+7 (999) 999-99-99'
  });
});