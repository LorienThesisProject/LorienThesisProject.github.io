
/*global $*/
/*global navigator*/
/* Must used after jquery import */
$(document).ready(function() {
    // Dynamically determine slides in photobooth based on platform
    let slidesToShow;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 960) {
        slidesToShow = 1;
    }
    else {
        slidesToShow = 3;
    }

    $('.carousel').slick({
        slidesToShow: slidesToShow,
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        lazyLoad: 'ondemand'
    });
});
