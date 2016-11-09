const $ = require('jquery');
require('../less/sniper-checkbox.less');

$(function () {
    $('.sniper-checkbox').change(function () {
        alert($(this).prop('checked'));
    });
});
