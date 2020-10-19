$(function () {
  $('#main-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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

  $('.mobile-btn').click(function () {
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });

  $('form#order-form').validate({
    rules: {
      name: 'required',
      phone: {
        required: true,
        phoneValidator: true
      },
      policy: 'required'
    },
    errorPlacement: function (error, element) { },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $('form#service-form').validate({
    rules: {
      name: 'required',
      phone: {
        required: true,
        phoneValidator: true
      },
      policy: 'required'
    },
    errorPlacement: function (error, element) { },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $('form#order-product-form').validate({
    rules: {
      name: 'required',
      phone: {
        required: true,
        phoneValidator: true
      },
      policy: 'required'
    },
    errorPlacement: function (error, element) { },
    submitHandler: function (form) {
      form.submit();
    }
  });

  $("button[data-type=order]").click(function () {
    let target = $(this).data('target');

    $([document.documentElement, document.body]).animate({
      scrollTop: $(`#${target}`).offset().top
    }, 1000);
  });

  $('.product__sample').click(function() {
    $(this).toggleClass('active');
    let check = $('#sample-checkbox');
    check.prop('checked', !check.prop('checked'));
  });
});