const $ = require('jquery');

// 计算页面高度
const headerHeight = 60;
const navLarge = 158;
const navSmall = 48;
const groupBoxWidth = 240;
let curNavWidth = navLarge;
let $navSide = $('#nav-side');
let isGroup = false;
function initLayout(navSize, group = false) {
    isGroup = group;
    if (isGroup) {
        $('.main-wrap').height($(window).height() - headerHeight);
        $('#main-box').width($(window).width() - groupBoxWidth - navSize);
    } else {
        $('.main-wrap').height($(window).height() - headerHeight);
        $('#main-box').width($(window).width() - navSize);
    }
}

$(window).resize(function () {
    initLayout(curNavWidth, isGroup);
});

// 侧边栏缩进
$('.toggle-nav-btn').click(function () {
    let $arrowIcon = $('.toggle-nav-btn i');
    if ($navSide.hasClass('open')) {
        $navSide.removeClass('open');
        $arrowIcon.addClass('right-arrow');
        curNavWidth = navSmall;
        $('#nav-side span').hide();
    } else {
        $navSide.addClass('open');
        $arrowIcon.removeClass('right-arrow');
        curNavWidth = navLarge;
        $('#nav-side span').show();
    }

    $navSide.width(curNavWidth);
    initLayout(curNavWidth, isGroup);
});

module.exports = initLayout;