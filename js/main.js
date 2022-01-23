/*------------------------------------------------------------------
[Main Script]

Project     : p1-zoeCashHtml
Version     : 1.0
Author      : Md Ekramul Hassan Avi
Author URI  : https://www.tigertemplate.com
-------------------------------------------------------------------*/

// mobile menu call
$('#phn-menu').slicknav({
    prependTo:'#nav-menu'
});

// slider
$('.rodmap-info').owlCarousel({
  loop:true,
  autoplay: false,
  autoplayTimeout:2500,
  smartSpeed:900,
  margin:15,
  nav:true,
  navText: ["<img src='img/prev.png'>","<img src='img/next.png'>"],
  dots:false,
  responsive:{
      0:{
          items:1,
          autoplay: true,
      },
      600:{
          items:3,
          autoplay: true,
      },
      1000:{
          items:3,
          nav:false,
          autoplay: true,
      },
      1200:{
          items:3,
          nav:true,
          autoplay: false,
      },
      1400:{
          items:4
      }
  }
});

$(".copy-box").click(function() { 
  // assumes element with id='button'
  $(this).find('.copy-success').toggleClass('d-none');
  $(this).find('.copy-hover').toggleClass('d-none');
});