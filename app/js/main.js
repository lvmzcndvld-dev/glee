$(function () {
    $('.top-slider__items').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpead: 3000
    });

    var mixer = mixitup('.products__content', {
        selectors: {
            control: '.products__filter-btn'
        }
    });

    var mixer = mixitup('.new-design__content', {
        selectors: {
            control: '.new-design__filter-btn'
        }
    });
});