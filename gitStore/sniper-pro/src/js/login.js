const $ = require('jquery');
require('./public');
const baseURL = require('baseURL');
require('validate');
require('messagesZh');
const layer = require('layer');

$(document).ready(function () {

    // 表单验证
    var options = {
        rules: {
            username: {
                required: true
            },
            password: {
                required: true
            },
            code:{
                required: true
            }
        },
        messages: {
            username: {
                required: '请输入用户名'
            },
            password: {
                required: '请输入密码'
            },
            code: {
                required: '请输入验证码'
            }
        }
    };

    $.validator.setDefaults({
        submitHandler: function submitHandler() {
            login_event();
        }
    });

    function login_event(){
        $.post(baseURL('users/auth/'), {
            username: $('#username').val(),
            password: $('#psw').val(),
            code: $('#code').val()
        }, function (data) {
            if(data.ret === 'success'){
                location.href = '/';
            }
            else {
                layer.msg(data.msg);
            }
        }, 'json');
    }

    $('#loginform').validate(options);

});

