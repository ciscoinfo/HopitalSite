$(function() {

    console.log("ready! chiffres");


    var $window = $(window);
    let $elemConsult = $("#chiffres-consult");
    let nbConsult = 28;
    let $elemAvis = $("#chiffres-avis");
    let nbAvis = 927;

    function isScrolledIntoView($elem, $window) {
        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }



    $(document).on("scroll", function () {
        if (isScrolledIntoView($elemConsult, $window)) {
            // $elem.addClass("animate")
            animatedNumber($elemConsult, nbConsult);
        }
        if (isScrolledIntoView($elemAvis, $window)) {
            animatedNumber($elemAvis, nbAvis);
        }

    });

    function animatedNumber($elem, $goalNumber) {
        if(!$elem.animated) {
            console.log("animation lancée");
            $elem.prop('Counter',0).animate({
                Counter: $goalNumber
            }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
                complete:function(){
                    $elem.animated = true;
                }
            });
        }
        else {
            console.log("déjà animé");
        }
    }
});
