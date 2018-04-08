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

//slider symmetric
$('input[name="jsSliderTheme"]').click(function(){
  var valueName = $("input[name='jsSliderTheme']:radio:checked").attr('value');

  var el = $(".jsSliderTheme").removeClass('hidden');

  // var elClassList = el.prop("classList");
    // console.log('.jsSliderTheme.'+valueName);

    // var el = ('.jsSliderTheme.'+valueName);
    // console.log('el', el);

    // $('.jsSliderTheme .'+valueName).addClass('active');
    // $(el).addClass('show');

  el.each(function(){

    if($(this).hasClass(valueName)) {
      console.log('list',   el.prop("classList"));
      console.log('valueName', valueName);
        el.not(this).addClass('hidden');
    }
  });
  //         // $(".owl-carousel[data-type]").addClass('hidden');

});


/* Filter not working */
var owlAnimateFilter = function(even) {
  $(this)
  .addClass('__loading')
  .delay(70 * $(this).parent().index())
  .queue(function() {
    $(this).dequeue().removeClass('__loading')
  })
}
var filter_data = $('.red');
$owl.owlFilter(filter_data, function(_owl) {
$(_owl).find('.services_slider-block').each(owlAnimateFilter);
});


// function owlRefresh($owl) {
//   $owl.trigger('destroy.owl.carousel');
//   $owl.html($owl.find('.owl-stage-outer').html()).removeClass('owl-loaded');
//   $owl.owlCarousel(owlOptions);
// }

//create class name
var el = ('.sliderTheme.' + valueName);
$(el).addClass('show');

/* Filter not working */
function filterSlide(){
  var filterItem = $("input[name='companyType']:radio:checked").attr('value');
  var hide = false;
  $('.js-slider-2').trigger('destroy.owl.carousel');
  $('.js-slider-2').owlCarousel(owlOptions);
  do {
    hide = false;
    $(".js-slider-2 .owl-item > div").each(function(i){
    var $this = $(this);
      if($this.data('type') !== filterItem){
          hide = true;
          $(".js-slider-2").trigger( 'remove.owl.carousel', i);
          return false;
      }
    });
  }while (hide);
  /* remove item empty when clear */
  ('.js-slider-2').owlRemoveItem(0);
  ('.js-slider-2').trigger('refresh.owl.carousel').trigger('to.owl.carousel', [0]);
};
