$('.nav__header').click(function(e){
  e.preventDefault();
   $('.nav').toggleClass('show');
});

$(document).ready(function(){
    $('.js-slider-1').owlCarousel({
    items : 1,
    margin: 0,
    navText : ["",""],
    nav: true,
    dots: true,
    navContainer: '.owl_nav',
    dotsContainer: '.owl_dots'
  });

   $('.js-services').owlCarousel({
    items : 1,
    margin: 5,
    navText : ["",""],
    nav: true,
    dots: false
  });

  $('.js-goods').owlCarousel({
   items : 1,
   margin: 5,
   navText : ["",""],
   nav: true,
   dots: false
 });

});

$(document).ready(function(){
  var owl = $('.js-doc__slider');
  owl.owlCarousel({
    items : 1,
    margin: 5,
    navText : ["",""],
    nav: true,
    dots: true,
    onInitialized  : findHeader, //When the plugin has initialized.
    onTranslated : findHeader
  });

    function findHeader(event) {
      var imgHeader = $('.js-doc__slider').find('.owl-item.active').find('img').attr('alt');
    $('.slider_descr-text').html(imgHeader);
  }

  //choose color

  $('.js-color-theme').click(function(){

  var set = ['orange', 'blue', 'red', 'violet', 'green', 'wine'];
  var el = $('.js-color')
  var elClass = el.prop("classList");


   for (var i = 0; i < set.length; i++) {
      for (var k = 0; k < elClass.length; k++) {
        if(set[i] === elClass[k]){
          el.removeClass(elClass[k]);
        }
      }
  }

  var color = $("input:radio:checked").attr('value');
  $('.js-color').addClass(color);
  });

  $('.color-theme_btn').click(function(e){
    e.preventDefault();
     $('.js-color-theme').toggleClass('hidden');
     $('.shadow').toggleClass('hidden');
  });

  $(".nav a").on("click",function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });
});


// yandex map

ymaps.ready(function () {
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
