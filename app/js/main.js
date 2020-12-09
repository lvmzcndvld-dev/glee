$(function () {
    // $('.header__nav-btn, .menu a').on('click', function () {
    //     $('.header__nav-search, .header__nav-wrapper').toggleClass('header__nav--active');
    //     $('.menu').toggleClass('menu--active');
    // });

    $('.product-details__related-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        appendArrows: $('.product-details__related-title'),
        prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><path class="cls-1" d="M535.3,654.472h16.948l-0.1,2.857a0.292,0.292,0,0,0,0,.41l0.172,0.172a0.28,0.28,0,0,0,.2.086,0.285,0.285,0,0,0,.2-0.084l4.193-4.211A0.292,0.292,0,0,0,557,653.5a0.283,0.283,0,0,0-.084-0.2l-4.193-4.213a0.289,0.289,0,0,0-.407,0l-0.172.173a0.287,0.287,0,0,0-.084.2,0.278,0.278,0,0,0,.084.2l0.113,2.865H535.292a0.3,0.3,0,0,0-.292.295v1.37A0.292,0.292,0,0,0,535.3,654.472Z" transform="translate(-535 -649)"/></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><path class="cls-1" d="M535.3,654.472h16.948l-0.1,2.857a0.292,0.292,0,0,0,0,.41l0.172,0.172a0.28,0.28,0,0,0,.2.086,0.285,0.285,0,0,0,.2-0.084l4.193-4.211A0.292,0.292,0,0,0,557,653.5a0.283,0.283,0,0,0-.084-0.2l-4.193-4.213a0.289,0.289,0,0,0-.407,0l-0.172.173a0.287,0.287,0,0,0-.084.2,0.278,0.278,0,0,0,.084.2l0.113,2.865H535.292a0.3,0.3,0,0,0-.292.295v1.37A0.292,0.292,0,0,0,535.3,654.472Z" transform="translate(-535 -649)"/></svg></button>',
        infinite: false,
    });

    $('.product-tabs__top-item').on('click', function (e) {
        e.preventDefault();
        $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
        $(this).addClass('product-tabs__top-item--active');

        $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
        $($(this).attr('href')).addClass('product-tabs__content-item--active');
    })

    $('.product-details__content-input').styler();

    $('.product-slider__thumb').slick({
        asNavFor: '.product-slider__big',
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
    });
    $('.product-slider__big').slick({
        asNavFor: '.product-slider__thumb',
        draggable: false,
        arrows: false,
        fade: true,
    });

    $('.product-list__filter-btn').on('click', function () {
        $('.product-list__filter-btn').removeClass('product-list__filter-btn--active');
        $(this).addClass('product-list__filter-btn--active');
    })

    $('.button-list').on('click', function () {
        $('.card-product').addClass('card-product--list');
    })

    $('.button-grid').on('click', function () {
        $('.card-product').removeClass('card-product--list');
    })

    $(".filter__price-input").ionRangeSlider({
        type: "double",
        prefix: "$",
        step: 0.01,
        onStart: function (data) {
            $('.filter__price-from').text(data.from);
            $('.filter__price-to').text(data.to);
        },
        onChange: function (data) {
            $('.filter__price-from').text(data.from);
            $('.filter__price-to').text(data.to);
        },
    });

    $('.star').rateYo({
        starWidth: '11px',
        normalFill: '#d6d6d6',
        ratedFill: '#ffcc00',
        readOnly: true,
        starSvg: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">' +
            '<path fill="d6d6d6" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">' +
            '</path>' +
            '</svg>',
        spacing: "8px"
    });

    $('.card-product__rating').rateYo({
        starWidth: '18px',
        normalFill: '#d6d6d6',
        ratedFill: '#ffcc00',
        readOnly: true,
        starSvg: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">' +
            '<path fill="d6d6d6" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">' +
            '</path>' +
            '</svg>',
        spacing: "12px"
    });

    $('.top-slider__items').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpead: 3000,
        fade: true,
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