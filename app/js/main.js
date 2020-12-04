$(function () {
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

    $(".filter-price__input").ionRangeSlider({
        type: "double",
        prefix: "$",
        step: 0.01,
        onStart: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data) {
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
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