$('.nav__header').click(function(e){
  e.preventDefault();
   $('.nav').toggleClass('show');
 // $(this).find('.dropdown-menu').toggleClass('hidden');

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
});

$(document).ready(function(){
  var owl = $('.js-doc__slider');
  owl.owlCarousel({
    items : 1,
    margin: 5,
    navText : ["",""],
    nav: true,
    dots: false,
    onInitialized  : findHeader, //When the plugin has initialized.
    onTranslated : findHeader
  });

    function findHeader(event) {
        alert('hello');
     var imgHeader = $('.js-doc__slider').find('.owl-item.active').find('img').attr('alt');
     console.log(imgHeader);
    $('.slider_descr-text').html(imgHeader);
  }
});



// yandex map

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [50.257220, 127.524613],
            controls: ['trafficControl'],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search',
            suppressMapOpenBlock: true

        });

      myMap.geoObjects
          .add(new ymaps.Placemark([50.257220, 127.524613], {
            balloonContent: ''
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#1e1a63'
        }))
});


//var simple = $('.js-doc__slider');
//simple.owlCarousel(); // created


//simple.owlCarousel('destroy'); // destroyed

// $(document).ready(function () {
//
//   function mobile() {
//     var checkWidth = $(window).width();
//     var demo = $(".js-doc__slider");
//     if (checkWidth < 599) {
//       demo.data('owlCarousel').destroy();
//       demo.removeClass('owl-carousel');
//     } else if (checkWidth > 599) {
//       demo.owlCarousel({
//         singleItem:true
//       });
//     }
//   }
//
//   $(document).ready(mobile);
//   $(window).resize(mobile);
// });

// $(function() {
//     var $owl = $('.js-slider-1').owlCarousel({
//        items : 1,
//        margin: 0,
//        navText : ["",""],
//        nav: true,
//        dots: true,
//        navContainer: '.owl_nav',
//        dotsContainer: '.owl_dots',      
//  });
//     
//     $(window).resize(function() {
//         var simple = $('.js-slider-1');
//         var screenWidth = window.innerWidth;        
//         
//
//     if (screenWidth > 992) {         
//            $owl.trigger('refresh.owl.carousel');
//     }
//     else simple.owlCarousel('destroy');
//     });
// 
// });
// $(document).ready(function(){
//     $('.slider-2').slick({
//       dots: false,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       prevArrow: $('.js-slider-2-prev'),
//       nextArrow: $('.js-slider-2-next')
//   });
// });
//
//
// $('a.date__item').click(function(e){
//
//   e.preventDefault();
//
//   $('a.date__item').not(this).removeClass('active');
//   $(this).addClass('active');
//   $('.js-programm').addClass('hidden');
//   $('#'+$(this).attr('data-id')).removeClass('hidden');
//
//
// });
//
//
// $(document).ready(function(){
// 	$("#arrow").on("click","a", function (event) {
// 		event.preventDefault();
// 		var id  = $(this).attr('href'),
// 			top = $(id).offset().top - 80;
// 		$('body,html').animate({scrollTop: top}, 1500);
// 	});
// });
