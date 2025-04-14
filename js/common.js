// menu toggle
$(function () {
    var html = $('html, body'),
        navContainer = $('.nav-container'),
        navToggle = $('.nav-toggle'),
        navDropdownToggle = $('.has-dropdown');
    overlay = $("<div class='overlay'></div> ");
    overlay2 = $("<div class='overlay'></div> ");

    // Nav toggle
    navToggle.on('click', function (e) {
        overlay.toggle();
        var $this = $(this);
        e.preventDefault();
        $this.toggleClass('is-active');
        navContainer.toggleClass('is-visible');
        html.toggleClass('nav-open');
    });


    $("body").prepend(overlay);
    overlay.click(function () {
        navToggle.trigger('click');
        // $(this).toggle();
    })

    $("body").prepend(overlay2);
    overlay2.click(function () {
        $(this).toggle();
    })
    // Nav dropdown toggle
    navDropdownToggle.on('click', function () {
        var $this = $(this);
        $this.toggleClass('is-active').siblings().removeClass('is-active');
        // if(!$(this).children('ul').is(":visible"))
        // {
        //   $(this).children('ul').slideDown();
        // }
        if ($this.children('ul').hasClass('open-nav')) {
            $this.children('ul').removeClass('open-nav');
            $this.children('ul').slideUp(350);
        }
        else {
            $this.parent().parent().find('li .nav-dropdown').removeClass('open-nav');
            $this.parent().parent().find('li .nav-dropdown').slideUp(350);
            $this.children('ul').toggleClass('open-nav');
            $this.children('ul').slideToggle(350);
        }
    });

    // Prevent click events from firing on children of navDropdownToggle
    navDropdownToggle.on('click', '*', function (e) {
        e.stopPropagation();
    });


});
$('.menu-item').click(function () {
    var url = window.location.href;
    $('.menu-item').not(this).removeClass('is-active');
    $(this).addClass('is-active');
});
// style img

// scroll add class
if (window.innerWidth > 768) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sticky-header').addClass('fixed');
        } else {
            $('.sticky-header').removeClass('fixed');
        }
    });
}
if (window.innerWidth > 320) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.sticky-header').addClass('clearfix');
        } else {
            $('.sticky-header').removeClass('clearfix');
        }
    });
}


// btn_search
$(function () {
    // search dropdown button
    $('.btn_search').click(function (e) {
        overlay2.toggle();
        e.preventDefault();
        $(this).parents('.search_drop').find('.form_search').toggleClass('open')
    })
    $(document).click(function (event) {
        // Check if clicked outside target
        if (!($(event.target).closest(".search_drop").length)) {
            // Hide target
            $(".form_search").removeClass('open');

        }

    });
});

// scrollspy ----->


$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });
});

//scroll to top button
// ----------- croll --------------//
(function ($) {
    //Scroll to Top
    function headerStyle() {
        if ($('.header').length) {
            var windowpos = $(window).scrollTop();
            var scrollLink = $('.scroll-top');
            if (windowpos >= 185) {
                scrollLink.addClass('open');
            } else {
                scrollLink.removeClass('open');
            }
        }
    }
    headerStyle();
    // Scroll to Target
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }

    $(window).on('scroll', function () {
        headerStyle();
    });


})(window.jQuery);

// end scroll-------------//
// count number
$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// menu-fix ----->
if (window.innerWidth > 320) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 50) {
            $('.menu_fix').addClass('fixed_bn');
        }
        else {
            $('.menu_fix').removeClass('fixed_bn');
        }
    });
}
//  click one page
$('a[href*="#"]:not([href="#"]):not([href="#show"]):not([href="#hide"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

// sticky header
window.addEventListener('scroll', function() {
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

$(function () {
    $(".slider-reason").owlCarousel({
        items: 2,
        responsive: { 
            991: { items: 2, },
            768: { items: 2, },
            480: { items: 2, },
            0: { items: 2, }
        },
        rewind: false,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000, //slide speed smooth
        dots: false,
        dotsEach: false,
        loop: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left arrow-slider"></i>', '<i class="fa fa-angle-right arrow-slider"></i>'],
        margin: 20,
        //animateOut: ['fadeOutUp', 'zoomOut', 'fadeOutLeft'], // default: false
        //animateIn: ['fadeInDown', 'zoomIn', 'fadeInLeft'], // default: false
        center: false,
    });  
});

$(function () {
    $(".slider-license").owlCarousel({
        items: 2,
        responsive: { 
            991: { items: 2, },
            768: { items: 2, },
            480: { items: 2, },
            0: { items: 2, }
        },
        rewind: false,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000, //slide speed smooth
        dots: false,
        dotsEach: false,
        loop: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left arrow-slider"></i>', '<i class="fa fa-angle-right arrow-slider"></i>'],
        margin: 10,
        //animateOut: ['fadeOutUp', 'zoomOut', 'fadeOutLeft'], // default: false
        //animateIn: ['fadeInDown', 'zoomIn', 'fadeInLeft'], // default: false
        center: false,
    });  
});

$(function () {
    $(".slider-docter").owlCarousel({
        items: 4,
        responsive: { 
            991: { items: 4, margin:25},
            768: { items: 2, margin:10,},
            480: { items: 2, margin:10,},
            0: { items: 2, margin:10,}
        },
        rewind: false,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000, //slide speed smooth
        dots: true,
        dotsEach: false,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left arrow-slider"></i>', '<i class="fa fa-angle-right arrow-slider"></i>'],
        
        //animateOut: ['fadeOutUp', 'zoomOut', 'fadeOutLeft'], // default: false
        //animateIn: ['fadeInDown', 'zoomIn', 'fadeInLeft'], // default: false
        center: false,
    });  
});

$(function () {
    $(".slider-facilities").owlCarousel({
        items: 1,
        responsive: { 
            991: { items: 1,},
            768: { items: 1, },
            480: { items: 1,},
            0: { items: 1,}
        },
        rewind: false,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000, //slide speed smooth
        dots: true,
        dotsEach: false,
        loop: true,
        nav: false,
        navText: ['<i class="fa fa-angle-left arrow-slider"></i>', '<i class="fa fa-angle-right arrow-slider"></i>'],
        
        //animateOut: ['fadeOutUp', 'zoomOut', 'fadeOutLeft'], // default: false
        //animateIn: ['fadeInDown', 'zoomIn', 'fadeInLeft'], // default: false
        center: false,
    });  
});

$(function () {
    $(".img-videos").owlCarousel({
        items: 1,
        responsive: { 
            991: { items: 1,},
            768: { items: 1, },
            480: { items: 1,},
            0: { items: 1,}
        },
        rewind: false,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 2000, //slide speed smooth
        dots: true,
        dotsEach: false,
        loop: false,
        nav: false,
        navText: ['<i class="fa fa-angle-left arrow-slider"></i>', '<i class="fa fa-angle-right arrow-slider"></i>'],
        
        //animateOut: ['fadeOutUp', 'zoomOut', 'fadeOutLeft'], // default: false
        //animateIn: ['fadeInDown', 'zoomIn', 'fadeInLeft'], // default: false
        center: false,
    });  
});

$(function () {
    $(".slider-news").owlCarousel({
        items: 2,
        responsive: { 
            991: { items: 2,},
            768: { items: 2,margin:10, },
            480: { items: 2, margin:10,},
            0: { items: 2,margin:10,}
        },
        rewind: false,
        autoplay: false,
        autoplayHoverPause: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000, //slide speed smooth
        dots: true,
        dotsEach: false,
        loop: true,
        nav: true,
        margin:20,
        navText: ['<i class="fa fa-angle-left arrow-slider"></i>', '<i class="fa fa-angle-right arrow-slider"></i>'],
        
        //animateOut: ['fadeOutUp', 'zoomOut', 'fadeOutLeft'], // default: false
        //animateIn: ['fadeInDown', 'zoomIn', 'fadeInLeft'], // default: false
        center: false,
    });  
});

