$(function () {
    $('.top-slider__items').slick({
        dots: true,
        arrows: false,
        // autoplay: true,
        // autoplaySpead: 3000
    });

    $('.products__item').hover (
        function () {
            $(this).find('.group-icons').toggleClass('group-icons--hover');
        }
    );

    var mixer = mixitup('.products__content');
});