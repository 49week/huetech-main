$(document).ready(function(){

    var controller = new ScrollMagic.Controller();

    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#intro",
        duration: 4000,
        triggerHook: 0,
        offset: 0
    })
    .setPin("#pin1")
    .addIndicators({name: "1 (duration: 700)"}) 
    .addTo(controller);

    var tween = TweenMax.to('#title01', 100, {
        opacity: 0,
    });

    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#intro",
        duration: 500,
        triggerHook: 0,
        offset: 0,
    })
    .setTween(tween)
    .setClassToggle(".indi01", "active")
    .addTo(controller)
    .addIndicators({name: "2 (duration: 700)"});

    var tween2 = TweenMax.fromTo('#title02', 100, {
    delay: 700,
    opacity: 0,
    }, {
    opacity: 1,
    repeat: 1,
    yoyo: true
    });

    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#intro",
        duration: 1000, 
        triggerHook: 0,
        offset: 500,
    })
    .setTween(tween2)
    .setClassToggle(".indi02", "active")
    .addTo(controller)
    .addIndicators({name: "3 (duration: 700)"});

    var tween3 = TweenMax.fromTo('#title03', 100, {
        opacity: 0,
    }, {
    opacity: 1,
    repeat: 1,
    yoyo: true
    });

    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#intro",
        duration: 1000, 
        triggerHook: 0,
        offset: 1500,
    })
    .setTween(tween3)
    .setClassToggle(".indi03", "active")
    .addTo(controller)
    .addIndicators({name: "3 (duration: 700)"});
    
    var tween4 = TweenMax.fromTo('#title04', 100, {
    opacity: 0,
    }, {
    opacity: 1,
    repeat: 1,
    yoyo: true
    });

    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#intro",
        duration: 1000, 
        triggerHook: 0,
        offset: 2500,
    })
    .setTween(tween4)
    .setClassToggle(".indi04", "active")
    .addTo(controller)
    .addIndicators({name: "3 (duration: 700)"});
    
    var tween5 = TweenMax.to('#title05', 100, {
    opacity: 1,
    });

    var scene6 = new ScrollMagic.Scene({
        triggerElement: "#intro",
        duration: 500, 
        triggerHook: 0,
        offset: 3500,
        })
        .setTween(tween5)
        .setClassToggle(".indi05", "active")
        .addTo(controller)
        .addIndicators({name: "3 (duration: 700)"});

    function effectHandler(ele){
        $(ele).each(function (i) {
            var bottom_of_element = $(this).offset().top + 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).addClass('effect');
                }else{
                    $(this).removeClass('effect');
                }
            });
        }

    effectHandler(".fade-effect");
    effectHandler(".bottom-to-top");
    effectHandler(".top-to-bottom");
    effectHandler(".left-to-right");
    effectHandler(".right-to-left");
});