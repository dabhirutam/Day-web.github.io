// loder-js
$(window).on('load', function () {
    $('.lodder-wapper').delay(2000).fadeOut(1000);
});

$(document).ready(function () {
    // owl-carosel js
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 6,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            1200: {
                items: 6,
            },
            992: {
                items: 4,
            },
            768: {
                items: 3,
            },
            576: {
                items: 2,
            },
            100: {
                items: 2,
            },
        },
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000]);
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay');
    })

    // section-hover-js
    var section = $('section')
        , nav = $('nav')
        , nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        section.each(function () {
            var top = $(this).offset().top - nav_height,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active-menu');

                $(this).addClass('');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active-menu');
            }
        })
    })
});