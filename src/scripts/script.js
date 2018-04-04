$('.nav__header').click(function(e) {
  e.preventDefault();
  $('.nav').toggleClass('show');
});

$(document).ready(function() {
  $('.js-slider-1').owlCarousel({
    items: 1,
    margin: 0,
    loop: true,
    navText: ["", ""],
    nav: true,
    dots: true,
    navContainer: '.owl_nav',
    dotsContainer: '.owl_dots'
  });

    var owlOptions = {
      items: 1,
      margin: 5,
      navText: ["", ""],
      nav: true,
      dots: false,
      loop: true,
      slideSpeed: 300,

  };
  $('.js-slider-2').owlCarousel(owlOptions);
  $('.js-slider-3').owlCarousel(owlOptions);
  $('.js-slider-4').owlCarousel(owlOptions);
  $('.js-slider-5').owlCarousel(owlOptions);

  var symetircSlider = $('.js-slider-2').owlCarousel({

  });
  // $('input[name="companyType"]').click(function(e) {
  //
  // })

  $('.js-doc__slider').owlCarousel({
    items: 1,
    margin: 5,
    navText: ["", ""],
    nav: true,
    dots: true,
    loop: true,
    onInitialized: findHeader, //When the plugin has initialized.
    onTranslated: findHeader
  });

  function findHeader(event) {
    var imgHeader = $('.js-doc__slider').find('.owl-item.active').find('img').attr('alt');
    $('.slider_descr-text').html(imgHeader);
  }

  //   //choose color

  $('.js-color-theme').click(function() {

    var set = ['orange', 'blue', 'red', 'violet', 'green', 'wine'];
    var el = $('.js-color')
    var elClass = el.prop("classList");


    for (var i = 0; i < set.length; i++) {
      for (var k = 0; k < elClass.length; k++) {
        if (set[i] === elClass[k]) {
          el.removeClass(elClass[k]);
        }
      }
    }

    var color = $("input:radio:checked").attr('value');
    $('.js-color').addClass(color);


  });

  $('.color-theme_btn').click(function(e) {
    e.preventDefault();
    $('.js-color-theme').toggleClass('hidden');
    $('.shadow').toggleClass('hidden');
  });
  $('.btn_close').click(function(e) {
    e.preventDefault();
    $('.js-color-theme').toggleClass('hidden');
    $('.shadow').toggleClass('hidden');
  })

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
  // data-type-company
  $('input[name="companyType"]').click(function(e) {
    var valueName = $("input[name='companyType']:radio:checked").attr('value');
    $('[data-type-company]').removeClass('hidden');

    $('[data-type-company]').each(function() {
      var el = $(this);
      console.log('el', el);
      if (el.data('type-company') !== valueName) {
        console.log(el.data('type-company'));
        $(this).addClass('hidden');
      }
    });

    });

  //slider symmetric
  $('input[name="sliderTheme"]').click(function(e) {
    var valueName = $("input[name='sliderTheme']:radio:checked").attr('value');

    $('[data-type]').removeClass('hidden');
    $('[data-type]').each(function() {
      var el = $(this);
      if (el.data('type') !== valueName) {
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
});
//
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
