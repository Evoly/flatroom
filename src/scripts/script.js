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

  $('.js-doc__slider').owlCarousel({
    items: 1,
    margin: 5,
    navText: ["", ""],
    nav: true,
    dots: true,
    loop: true,
    onInitialized: findHeader,
    onTranslated: findHeader
  });

  function findHeader(event) {
    var imgHeader = $('.js-doc__slider').find('.owl-item.active').find('img').attr('alt');
    $('.slider_descr-text').html(imgHeader);
  }

  //   //choose color

  $('.js-color-theme').click(function() {
    var set = ['orange', 'blue', 'red', 'violet', 'green', 'wine'];
    var color = $("input:radio:checked").attr('value');
    $('.js-color').addClass(color);
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
  });
  $('.btn_close').click(function(e) {
    e.preventDefault();
    $('.js-color-theme').toggleClass('hidden');
    $('.shadow').toggleClass('hidden');
  });
  $('.btn_submit').click(function(e) {
    e.preventDefault();
    $('.js-color-theme').toggleClass('hidden');
    $('.shadow').toggleClass('hidden');
  });
  $('.btn_buy').click(function(e) {
    e.preventDefault();
    $('.form__order').toggleClass('hidden');
    $('.shadow').toggleClass('hidden');
  });
  $('.btn_order').click(function(e) {
    e.preventDefault();
    $('.form__order').toggleClass('hidden');
    $('.shadow').toggleClass('hidden');
  });
  $('.btn_close-order').click(function(e) {
    e.preventDefault();
    $('.form__order').toggleClass('hidden');
    $('.shadow').toggleClass('hidden');
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
  // data-type-company
  $('input[name="companyType"]').click(function(e) {
    var valueName = $("input[name='companyType']:radio:checked").attr('value');
    $('[data-type-company]').removeClass('hidden');

    $('[data-type-company]').each(function() {
      var el = $(this);
      if (el.data('type-company') !== valueName) {
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

  $(".to_submit").on("click", function(event) {
    event.preventDefault();
    var id = $('#submit'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

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
