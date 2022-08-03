(() => {
    'use strict'

    document.querySelector('#navbarSideCollapse').addEventListener('click', () => {
        document.querySelector('.offcanvas-collapse').classList.toggle('open')
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    // phone slider
    $('.phone-slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: $('.phone-prev'),
        nextArrow: $('.phone-next')
      });

    // phone slider
    $('.client-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
       
      });

    //   banner
    
    $('.companies-slider-main').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });

    //   gallery
    
    $('.gallery-main').slick({
      dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        centerMode: true,
        centerPadding: false,
        prevArrow: $('.gallery-icon-left'),
        nextArrow: $('.gallery-icon-right'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
      });


    //navbar
    var navbar = $('.navbar');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
        navbar.addClass('bg-nav');
        } else {
        navbar.removeClass('bg-nav');
        }
    });
})()