﻿
$(document).ready(function () {
    var stickyOffset = $('.navbar').offset().top;
    $(window).scroll(function () {
        var sticky = $('.navbar'),
            scroll = $(window).scrollTop();
        if (scroll >= stickyOffset) sticky.addClass('navbar-fixed-top');
        else sticky.removeClass('navbar-fixed-top');
    });

    if ($(window).width() < 767) {
        $("#navbar .nav li").click(function () {
            //$(this).children(".subMenu").slideToggle();
            //$("#navbar .nav li .fa").toggleClass("fa-angle-down fa-angle-up");
        });
    }

    $('#mediaSlider').carousel({
        interval: false
    });

    var clickEvent = false;
    $('#mediaSlider').on('click', '.nav a', function () {
        clickEvent = true;
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
    }).on('slid.bs.carousel', function (e) {
        if (!clickEvent) {
            var count = $('.nav').children().length - 1;
            var current = $('.nav li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if (count == id) {
                $('.nav li').first().addClass('active');
            }
        }
        clickEvent = false;
    });

    //right side fixed form will move -->
    var windw = this;
    $.fn.followTo = function (elem) {
        var bumperPos = "";
        var thisHeight = "";
        var $this = this,
            $window = $(windw),
            $bumper = $(elem)
            if ($bumper.length) {
                bumperPos = $bumper.offset().top,
                    thisHeight = $this.outerHeight();

            }
            setPosition = function () {
            if ($window.scrollTop() > (bumperPos - thisHeight)) {
                $this.css({
                    position: 'absolute',
                    top: (bumperPos - thisHeight)
                });
            } else {
                $this.css({
                    position: 'fixed',
                    top: 0
                });
            }
            };
        $window.resize(function () {
            bumperPos = pos.offset().top;
            thisHeight = $this.outerHeight();
            setPosition();
        });
        $window.scroll(setPosition);
        setPosition();
    };
    $('#one').followTo('#two');
});