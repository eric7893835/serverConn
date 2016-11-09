const $ = require('jquery');
require('./public.js');
$(document).ready(function () {
    //计算teb-content宽度
    let windowWidth = $(window).width();
    function initDetailsWidth() {
        $('.tab-content').width(windowWidth - 120);
    }
    initDetailsWidth();
    $(window).resize(function () {
        initDetailsWidth();
    });
});
