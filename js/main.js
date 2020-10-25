$(function () {
  $('#main-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3500,
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
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
  });

  $('input.form-control, textarea.form-control').floatingLabel();

  $('.mobile-btn').click(function () {
    $(this).toggleClass('active');
    $('.mobile-menu').toggleClass('active');
    $('body').toggleClass('no-scroll');
  });

  $('form#order-form').validate({
    rules: {
      name: 'required',
      phone: {
        required: true
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
        required: true
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
        required: true
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
    const element = document.querySelector(`#${target}`);
    element.scrollIntoView({ block: "start", behavior: "smooth" });
  });

  
  $('.product__order').click(function () {
    let check = $('#order-checkbox');
    check.prop('checked', true);
  });

  $('.product__sample').click(function () {
    let check = $('#sample-checkbox');
    check.prop('checked', true);
  });

  $('#sample-checkbox').change(function () {
    $('.product__sample').toggleClass('active')
  });

  function phone_mask() {
    $('input.phone-input').inputmask({
      mask: '+7 (999) 999-99-99'
    });

    $("input.phone-input").intlTelInput({
      autoHideDialCode: false,
      autoPlaceholder: "aggressive",
      placeholderNumberType: "MOBILE",
      preferredCountries: ['ru'],
      separateDialCode: true,
      utilsScript: "js/utils.js",
      customPlaceholder: function (selectedCountryPlaceholder, selectedCountryData) {
        return '+' + selectedCountryData.dialCode + ' ' + selectedCountryPlaceholder.replace(/[0-9]/g, '_');
      },
    });
    $("input.phone-input").on("countrychange", function (e, countryData) {
      $(this).val('');
      $(this).inputmask($(this).attr('placeholder').replace(/[_]/g, '9'));
    });
  }

  phone_mask();
});