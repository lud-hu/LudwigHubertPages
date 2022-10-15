//------------------------------------------
//---------------- Scrolling ---------------
//------------------------------------------

$(function () {

    //check if it is an anchor
    $('a[href*=\\#]').stop().click(function () {

        //check if referral is me or someone else
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

            //get string
            var lh_hash = this.hash;
            //get html object
            var lh_target = $(this.hash);

            //if it exists
            if (lh_target.length) {
                //calc distance
                var lh_distanceToTop = lh_target.offset().top;
            }

            //scroll to target
            $('html,body').animate({scrollTop: lh_distanceToTop}, 1000, function () {
                window.location.hash = lh_hash;
            });

            //close mobileMenu if it was open
            document.getElementById("lh_header").classList.remove('mobileMenuOpen');

            //done, exit.
            return false;
        }
    })
});

//------------------------------------------
//-------- Highlight Nav Icon --------------
//------------------------------------------

$(document).ready(function () {
    var className = 'lh_menuItem_active';
    var navItemPath = 'header #lh_main_menu a.lh_navItem';

    var lh_menu_elements = $(navItemPath);

    var lh_current = 0;
    var lh_object_top;

    var lh_object = $(lh_menu_elements[0]);
    lh_object.addClass(className);

    $(window).scroll(function () {
        for (var i = 0; i < lh_menu_elements.length; i++) {
            var lh_link = $(lh_menu_elements[i].hash);

            if ($(lh_link).length) {
                //create array with offsets of all containers to top
                lh_object_top = $(lh_link).offset().top;
            }

            //current offset of window to top
            var lh_scroll_top = $(window).scrollTop();

            //diffs from window to containers
            var lh_diff = Math.abs(lh_scroll_top - lh_object_top);

            //check which container is the closest:
            if (i === 0) {
                lh_current = lh_diff;
                lh_object = $(lh_menu_elements[i]);
                $(navItemPath).removeClass(className);
                lh_object.addClass(className);
            } else {
                if (lh_diff < lh_current || lh_diff === lh_current) {
                    lh_current = lh_diff;
                    lh_object = $(lh_menu_elements[i]);
                    $(navItemPath).removeClass(className);
                    lh_object.addClass(className);
                }
            }
        }
    });
});

//floating sidebar nav
jQuery(document).ready(function () {

    if (window.location.pathname.endsWith("/") || window.location.pathname.endsWith("index.html")) {
        if ($(window).width() > 1024) {

            var lh_viewport_height = $(window).height();
            var lh_header_height = $('header').height();

            $('header').css('top', lh_viewport_height - (lh_header_height / 2));

            $(window).scroll(function () {

                //get heights of viewport and header
                var lh_viewport_height = $(window).height();
                var lh_header_height = $('header').height();

                //current scrolled height
                var lh_scroll_top = $(window).scrollTop();

                if (lh_scroll_top < (lh_viewport_height / 2) - (lh_header_height / 2)) {
                    $('header').css('top', (lh_viewport_height - (lh_header_height / 2)) - lh_scroll_top);
                } else {
                    $('header').css('top', '50%');
                }
            });
        }
    }
});

//initiate gallery:
jQuery(document).ready(function(){

    if (window.location.pathname.endsWith("/") || window.location.pathname.endsWith("index.html")
        || window.location.pathname.endsWith("people.html")
        || window.location.pathname.endsWith("business.html")
        || window.location.pathname.endsWith("world.html")) {
        jQuery("#gallery").unitegallery({
            gallery_theme: "tiles",
            tiles_type: "justified",
            tiles_justified_row_height: 200,
            lightbox_overlay_opacity: 0.8,
            lightbox_show_numbers: false,
            lightbox_show_textpanel: false
        });
    }

});

//background-image top slider

jQuery(document).ready(function() {

    if (window.location.pathname.endsWith("/") || window.location.pathname.endsWith("index.html")) {
        var sliderImageCount = 4;
        var currentImage = 0;

        var windowHeight = $(window).height();
        var windowWidth = $(window).width();
        var appendix = '';

        //make sure that image with best resolution is used every time:
        if (windowHeight <= 1260 && windowWidth <= 1890){
            appendix = '-l';

            if (windowHeight <= 1024 && windowWidth <= 1536){
                appendix = '-m';

                if (windowHeight <= 768 && windowWidth <= 1152) {
                    appendix = '-s';
                }
            }
        }

        setInterval(function () {
            var nextImage = ((currentImage + 1) % sliderImageCount);
            currentImage = nextImage;
            nextImage++;

            //preload images for smooth transition:
            var img_tag = new Image();
            img_tag.onload = function () {
                $('#home').css('background-image', 'url(images/homeBackgroundSlider/homeSlider' + nextImage + appendix + '.jpg)');
            }
            img_tag.src = 'images/homeBackgroundSlider/homeSlider' + nextImage + appendix + '.jpg';

        }, 8000);
    }
});