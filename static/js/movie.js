var movie = function () {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,//可选选项，自动滑动
        speed: 1000,
        autoplayDisableOnInteraction : false,
        pagination : '.swiper-pagination',
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
        loop: true
    });
};
window.onload = function () {
    movie();
    var $input = $('.topInfo .search input');
    $input.css('transition', '1s');
};