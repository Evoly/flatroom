$('.nav__header').click(function(e) {
  e.preventDefault();
  $('.header .nav').toggleClass('show');
});

$(document).ready(function() {

  let slickOptions = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.js-slider-1-prev'),
    nextArrow: $('.js-slider-1-next'),
    appendDots: $('.slick-dots'),
    responsive: [
   {
    breakpoint: 900,
    settings: {
      slidesToShow: 1,
      dots: true
    }
  }, {
    breakpoint: 500,
    settings: "unslick" // destroys slick
  }]
  }
  $('.js-slider-1').slick(slickOptions);

  $(window).resize(function() {
    clearTimeout(window.resizedFinished);
    var elHeight = $('.top-slider_wr').outerHeight();
    window.resizedFinished = setTimeout(function(){
      let screenWidth = window.innerWidth;
      //$('.bg-xs').css('height', '');
      if (screenWidth < 500) {
        $('.bg-xs').css('height', elHeight);
        return
      };
      $('.js-slider-1').slick(slickOptions);
    }, 400);
  });

  svg4everybody();
});


  $('.js-slider-2').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.js-slider-2-prev'),
    nextArrow: $('.js-slider-2-next')
  });

    let arr = {};
    $('.js-filter input:checked').each(function() {
      arr = $.extend(arr, $(this).data());
    });

    $('.js-slider-2').slick('slickUnfilter');
    $('.js-slider-2').slick('slickFilter',
      function(index) {
        return $(this).attr("data-type") === arr.type && $(this).attr("data-slider") === arr.slider;
      });


  $('.js-filter').on('change', function() {
    let arr = {};

    $('.js-filter input:checked').each(function() {
      arr = $.extend(arr, $(this).data());
    });

    $('.js-slider-2').slick('slickUnfilter');
    $('.js-slider-2').slick('slickFilter',
      function(index) {
        return $(this).attr("data-type") === arr.type && $(this).attr("data-slider") === arr.slider;
      });
  });


  $('.js-slider-3').on('init', function(event, slick, currentSlide, nextSlide){
    let imgHeader = $('.js-slider-3').find('.slick-active').find('img').attr('alt');
    $('.slider_descr-text').html(imgHeader);
});
  $('.js-slider-3').slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.js-slider-3-prev'),
    nextArrow: $('.js-slider-3-next')
  });

  $('.js-slider-3').on('afterChange', function(event, slick, currentSlide, nextSlide){
    let imgHeader = $('.js-slider-3').find('.slick-active').find('img').attr('alt');
    $('.slider_descr-text').html(imgHeader);
});

  //   //choose color

  $('.js-color-theme').click(function() {
    var set = ['orange', 'blue', 'red', 'violet', 'green', 'wine'];
    var color = $("input:radio:checked").attr('value');
    //chsnge css link
    var substr = '';
    var newLink = $('link[data-theme]').attr('href');
    for (var i = 0; i < set.length; i++){
      if (~newLink.indexOf(set[i])){
        substr = set[i];
      }
    }

    $('link[data-theme]').attr('href',
      function() { return this.href.replace(substr, color);}
    );
  });
    // data-type
  $('input[name="companyType"]').click(function(e) {
    var valueName = $("input[name='companyType']:radio:checked").data('type');
    $('[data-type]').removeClass('hidden');

    $('[data-type]').each(function() {
      var el = $(this);
      console.log(valueName);
      if (el.data('type') !== valueName) {
        $(this).addClass('hidden');
      }
    });
  });

  $('.color-theme_btn').click(function(e) {
    e.preventDefault();
    $('.js-color-theme').toggleClass('hidden');
    $('.shadow').toggleClass('hidden');

    $(document).mouseup(function (e) {
      var container = $('.js-color-theme');
      if (e.target!=container[0]&&container.has(e.target).length===0){
          container.addClass('hidden');
          $('.shadow').addClass('hidden');
        }
    });
    return false;
  });
  $('.btn_close').click(function(e) {
    e.preventDefault();
    $('.js-color-theme').toggleClass('hidden');
    $('.shadow').toggleClass('hidden');
  });
  $('.js_save').click(function(e) {
    e.preventDefault();
    $('.js-color-theme').toggleClass('hidden');
    $('.shadow').toggleClass('hidden');
  });
  $('.btn_buy').click(function(e) {
    e.preventDefault();
    $('.form__order').toggleClass('hidden');
    $('.shadow').toggleClass('hidden');

    $(document).mouseup(function (e) {
      var container = $('.form__order');
      if (e.target!=container[0]&&container.has(e.target).length===0){
          container.addClass('hidden');
          $('.shadow').addClass('hidden');
        }
    });
    return false;
  });
  $('.btn_order').click(function(e) {
    e.preventDefault();
    $('.form__order').toggleClass('hidden');
    $('.shadow').toggleClass('hidden');
  });
  $('.btn_close-order').click(function(e) {
    e.preventDefault();
    $('.form__order').toggleClass('hidden');
    if(!$('.shadow').hasClass('hidden')) {
      $('.shadow').toggleClass('hidden');
    }
  });


  $(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
      if(!$('.form__order').hasClass('hidden')) {
        $('.form__order').toggleClass('hidden');
      }
      if(!$('.js-color-theme').hasClass('hidden')) {
        $('.js-color-theme').toggleClass('hidden');
      }
      if(!$('.shadow').hasClass('hidden')) {
        $('.shadow').toggleClass('hidden');
      }
    }
});

  //data-set
  $('input[name="iconsSet"]').click(function(e) {

    var valueName = $("input[name='iconsSet']:radio:checked").attr('value');
    $('[data-set]').removeClass('hidden');
    $('[data-set]').each(function() {
      var el = $(this);
      if (el.data('set') !== valueName) {
        $(this).addClass('hidden');
      }
    });
  });

  $(".nav a").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $(".to_submit").on("click", function(event) {
    event.preventDefault();
    var id = $('#submit'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });



//
// // yandex map
//
ymaps.ready(function() {
  var myMap = new ymaps.Map('map', {
    center: [50.257220, 127.524613],
    controls: [],
    zoom: 16
  }, {
    searchControlProvider: 'yandex#search',
    suppressMapOpenBlock: true

  });

  myMap.geoObjects
    .add(new ymaps.Placemark([50.257220, 127.524613], {
      balloonContent: ''
    }, {
      preset: 'islands#circleIcon',
      iconColor: '#4397ea'
    }))
});
