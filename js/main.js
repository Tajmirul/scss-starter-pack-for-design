
/* magnificPopup img view */
$('.popup-image').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
    type: 'iframe'
});

//for menu active class
$('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
});

// WOW active
new WOW().init();

$(window).scroll(function () {
    var scrolled = $(window).scrollTop();

    // go to top button
    if (scrolled > 100) {
        $('.go-to-top').addClass('active');

        $('.go-to-top').click(function () {
            $(window).scrollTop(0);
        });
    } else {
        $('.go-to-top').removeClass('active');
    }
    // console.log(scrolled);
})

