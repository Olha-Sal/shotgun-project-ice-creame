new Swiper('.swiper-container', {
    spaceBetween: 100,
    effect: 'fade',
    slidesPerView: 'auto',
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
});