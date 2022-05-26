//アニメーション
$('.animate-in').waypoint({
    handler: function (direction) {
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeIn');
            this.destroy();
        }
    },
    offset: `60%`,
});
$('.animate-up').waypoint({
    handler: function (direction) {
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeInUp');
            this.destroy();
        }
    },
    offset: `60%`,
});

$('.animate-r').waypoint({
    handler: function (direction) {
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeInRight');
            this.destroy();
        }
    },
    offset: `60%`,
});

$('.animate-l').waypoint({
    handler: function (direction) {
        if (direction === 'down') {
            $(this.element).addClass('animate__fadeInLeft');
            this.destroy();
        }
    },
    offset: `60%`,
});


// ナビゲーション

$('.nav-btn').on("click", function () {
    $(".nav-btn").toggleClass("open"),
        $("nav").toggleClass("open")
});

$('.nav-item__link').on("click", function () {
    $(".nav-btn").removeClass("open"),
        $("nav").removeClass("open")
})


// スライダー

$(function () {
    $('.slider').slick({
        autoplay: false,
        dots: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        adaptiveHeight: true,
        prevArrow: '<img src="assets/img/arrow-l.png" class="slide-arrow prev-arrow">',
        nextArrow: '<img src="assets/img/arrow-r.png" class="slide-arrow next-arrow">',
        responsive: [
            {
                breakpoint: 808,
                settings: {
                    slidesToShow: 1.7,
                },
            },
        ],
    });
});
