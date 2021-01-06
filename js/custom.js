$(function () {
    $('.brand').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        responsive: [
            {
                breakpoint: 590,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    fade: true,
                    speed: 1000,
                }
    }
  ]
    });
});
