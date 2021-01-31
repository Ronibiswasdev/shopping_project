(function($) {
    "use strict";

    jQuery(document).ready(function($) {

        //dropdown menu

        $("body").click(
            function(e) {
                // console.log(e.target.parentElement.className);
                if (e.target.parentElement.className !== "drop_link") {
                    $(".dropdown_menu").hide();
                } else {
                    $('.dropdown_menu').toggle();
                }
            }
        );

        $('.dropdown_menu li a').on('click', function() {
            $('.dropdown_menu').fadeOut();
        });



        //$('.owl-carousel').owlCarousel();
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 1
                }
            }
        })





    });

    jQuery(window).load(function() {

    });
}(jQuery));