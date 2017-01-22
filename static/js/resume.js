function topValue() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}
window.onload = function () {
    var $input = $('.topInfo .search input');
    $input.css('transition', '1s');
    var $side = $('.side');
    $side.css('top', topValue() + 100 + 'px');
    window.onscroll = function () {
        $side.css('top', topValue() + 100 + 'px');
    }
};