//////////////////////////////////////////////////////  //
//    EVENTS ON DOCUMENT READY                          //
//////////////////////////////////////////////////////  //

$(document).ready(function () {
    'use strict';

    // Prevent Cache
    //window.location.reload(true) 

    //// PRELOADER TRIGGER
    $(window).on('load', function () {
        $('.loading').animate(
            {
                top: '-100%'
            },
            700,
            function () {
                $(this).remove();
            }
        );
    });

    // Show Color Option Div When Click On The Gear

    $('.gear-check').click(function () {
        $('.color-option').fadeToggle();
    });

    // Change Theme Color On Click

    var colorLi = $('.color-option li');

    colorLi.click(function () {
        $("link[href*='color']").attr('href', $(this).attr('data-value'));
    });

    // Typed JS TRIGGER
    $('.home-page .middle-c h3 span').typed({
        strings: [
            'Programmer 😁',
            'Creative Doer 🤔',
            'Software Engineer 😎 ',
            'Full Stack Developer 😍',
            'ASP.NET Developer 🤩',
            'Angular Developer 🤗',
            'Mobile Application Developer 😤',
            'Little Bit Crazy 🤡',
        ],
        loop: true,
        startDelay: 1e3,
        backDelay: 3e3
    });

    // Typed JS TRIGGER
    $('.home-page .middle-c h1 span').typed({
        strings: [
            'CODE',
        ],
        loop: true,
        startDelay: 1e3,
        backDelay: 4e3
    });

    // CUSTOM SCROLLBAR JS TRIGGER
    $(window).on('load', function () {
        $('.page-content').mCustomScrollbar({
            theme: 'dark',
            scrollInertia: 8
        });
    });

    // TABS JS TRIGGER
    $('#navbar a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // OWL CAROUSEL TRIGGER
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 0,
        dots: true
    });

    // FILTRED PORTFOLIO
    $('.filter li a').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this)
            .parent()
            .siblings()
            .find('a')
            .removeClass('active');
        var filters = $(this).attr('data-filter');
        $(this)
            .closest('.works')
            .find('.portfolio-caption')
            .removeClass('disable');
        if (filters !== 'all') {
            var selected = $(this)
                .closest('.works')
                .find('.portfolio-caption');
            for (var i = 0; i < selected.length; i++) {
                if (!selected.eq(i).hasClass(filters)) {
                    selected.eq(i).addClass('disable');
                }
            }
        }
    });

    // MAGNIFIC POPUP TRIGGER
    $('.modal-image').magnificPopup({
        type: 'inline',
        midClick: true
    });

    //// PARSLEY TRIGGER
    $('.contact-forum').parsley();

    //// NAVBAR COLLAPSE
    var rNav = $('.right-nav'),
        hInfo = $('.home .info'),
        home = $('.home'),
        navBtn = $('.slide-nav-btn'),
        navBtnActive = 'slide-nav-btn-active',
        nav = $('.sidebar'),
        navActive = 'sidebar-active',
        rNavSpan = $('.right-nav ul li i'),
        up = $('.up i'),
        body = $('html, body');
    rNav.css('top', (home.height() - rNav.height()) / 2);
    hInfo.css('top', (home.height() - hInfo.height()) / 2);
    navBtn.on('click', function () {
        $(this).toggleClass(navBtnActive);
        nav.toggleClass(navActive);
    });


    //Visitors IP
    $.ajaxSetup({
        beforeSend: function (xhr) {
            if (xhr.overrideMimeType) {
                xhr.overrideMimeType("application/json");
            }
        }
    });
    //$.ajax({
    //    url: "https://ipapi.co/json/",
    //    method: "get",
    //    success: function (ipInfo) {
    //        ipInfo.last_visit = new Date();
    //        console.log(ipInfo);

    //        $.getJSON("data/ip.json", function (ipJson) {

    //            ipJson.total_visits++;

    //            var found = false;

    //            for (var i = 0; i < ipJson.ip.length; i++) {
    //                if (ipJson.ip[i].ip === ipInfo.ip) {
    //                    found = true;
    //                    ipJson.ip[i].last_visit = new Date();
    //                    ipJson.ip[i].visit_count ++;
    //                }
    //            }

    //            if (!found) {
    //            }

    //            console.log(ipJson);
    //        });

    //    }
    //});

    // Ip count
    
});
