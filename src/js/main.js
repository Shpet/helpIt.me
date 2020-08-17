$(document).ready(function () {

    $('.section__service-slider').slick({
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        swipe: false,
        variableWidth: false,
        arrows: true,
        responsive:[
            {
            breakpoints: 1680,
            settings:{
                slidesToShow: 5,
            }
        }
    ]
    });

    $('.news_slider').slick({
        centerMode: true,
        centerPadding: '280px',
        slidesToShow: 3,
        arrows: false
        });

    $('.slider__box-content').slick({
        dotsClass: 'slick-dots',
        dots: true,
        arrows: false
    });


});

$('.row-graph--item').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
});



$(document).on('click', '.collapse-block .collapse-block--title', function () {
    $(this).next('.items-collapse').toggleClass('open');
    $(this).toggleClass('open');
});
$(document).on('click', '.ready__case--general .btn-add-content', function (e) {
    e.preventDefault();
    $(".ready__case--general .hide--block").toggle();
    $(this).hide();
});

$(document).on('click', '.btn-add-content', function (e) {
    e.preventDefault();
    $(".listen-block .hide--block").toggle();
    $(this).hide();
});

$('.grid-modal--col').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
});
$('.row-graph--item').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
});