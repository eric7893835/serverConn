const $ = require('jquery');
require('./public');
const baseURL = require('baseURL');
const initLayout = require('./init-layout');
require('./sniper-checkbox');

$(document).ready(function () {
    
    // 页面初始化
    initLayout(158, true);

    // 分组展开收起
    $('.group-list >li >a').click(function () {
        var $group = $(this).parent();
        if($group.hasClass('open')){
            $group.removeClass('open');
            $group.children('.host-list').addClass('hide');
        }else {
            $group.addClass('open');
            $group.children('.host-list').removeClass('hide');
        }
    });

    // tab切换
    $("#nav-details li").click(function () {

        $(this).addClass('active').siblings().removeClass('active');

        var curIndex = $(this).index();
        $(this).parent().nextAll('.iframe-content').each(function (index, el) {
            if (curIndex == index) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    });


    // 筛选主机
    $('.filter-btn').click(function () {

    });

});
