$(function () {


    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });

    //banner_slider

    $('.banner_slider').slick({
        arrows: true,
        nextArrow: '.right_arrow',
        prevArrow: '.left_arrow',
        autoplay: true,
        autoplaySpeed: 3000,
    });
    //banner_sliderend


    //    SmoothScroll

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 600
    });

    //    SmoothScroll end
    //    sticky menu


    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 800) {
            $(".nav_menu").removeClass("sticky");
        } else {
            $(".nav_menu").addClass("sticky");
        }
    });



    //      back-to-top
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });



    //    mixitup
    var mixer = mixitup('.portfolio_items');

    $('.venobox').venobox();


    //==== animate wow js
    new WOW().init();
});
