const $ = require('jquery');
require('tooltipster');
require('../lib/tooltipster/tooltipster.bundle.css');
const moment = require('moment');

$(document).ready(function () {

    // tooltip
    $('.tooltip').tooltipster({
        side: 'right',
        delay: 200,
        theme: ['tooltipster-noir', 'tooltipster-noir-customized']
    });

    // 二级菜单收起展开   
    function openList($self) {
        if (!$self.hasClass('open')) {
            $self.addClass('open');
            $self.next('.nav-side-sec').show();
        } else {
            $self.removeClass('open');
            $self.next('.nav-side-sec').hide();
        }
    }

    $('.nav-side-list >li .summary').click(function () {
        openList($(this));
    });

    // 头部时间获取
    moment.locale('zh-cn');
    setInterval(function () {
        $('#current-time').text(moment().format('LLL'));
    }, 1000);

    // tab切换
    $(".sort-tab li").click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        var curIndex = $(this).index();
        $(this).parent().nextAll('.tab-content').each(function (index, el) {
            if (curIndex == index) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    });
    
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
