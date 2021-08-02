function init() {

    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            duration: 436
        }
    });

    var tween1 = TweenMax.fromTo('#human01', 0.6, {
        scale: 1,
    },{
        scale: 1.6,
        repeat: 1,
        yoyo: true
    });

    var tween2 = TweenMax.fromTo('#human02', 0.6, {
        scale: 1,
    },{
        scale: 1.6,
        repeat: 1,
        yoyo: true
    });

    var tween3 = TweenMax.fromTo('#human03', 0.6, {
        scale: 1,
    },{
        scale: 1.6,
        repeat: 1,
        yoyo: true
    });

    var tween4 = TweenMax.to('#section-hidden01', 0.42, {
        opacity: 0,
    });

    var tween5 = TweenMax.fromTo('#section-hidden02', 0.52, {
        opacity: 0,
    },{
        opacity: 1,
        repeat: 1,
        yoyo: true
    });

    var tween6 = TweenMax.fromTo('#section-hidden03', 0.52, {
        opacity: 0,
    },{
        opacity: 1,
        repeat: 1,
        yoyo: true
    });
    var tween7 = TweenMax.fromTo('#section-hidden04', 1.52, {
        opacity: 0,
    },{
        opacity: 1,
        repeat: 1,
        yoyo: true
    });

    var tween8 = TweenMax.to('#big-circle', 0.52, {
        scale: 0.4,
        rotation: 360
    });
    var tween9 = TweenMax.to('#section-hidden05', 2.52, {
        opacity: 1,
    });

    var tween10 = TweenMax.to('#big-circle2', 0.52, {
        rotation: 360
    });

    var tween11 = TweenMax.fromTo('#mid-text', 0.52, {
        opacity:0,
    },{
        opacity: 1,
        repeat: 1,
        yoyo: true
    });

    var tween12 = TweenMax.to('#section-hidden06', 0.52, {
        opacity: 1
    });
    var tween13 = TweenMax.to('#finished', 0.52, {
        y: "-200vh",
    });


    var scene1 = new ScrollMagic.Scene({
        triggerElement: "#trigger1"

    }).setClassToggle('.big1', 'active')
        .setTween(tween1)
        .addTo(controller)
        .addIndicators({
            name: "1"
        });


    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger2"
    }).setClassToggle('.big2', 'active')
        .setTween(tween2)
        .addTo(controller)
        .addIndicators({
            name: "2"
        });

    var scene3 = new ScrollMagic.Scene({
        triggerElement: "#trigger3"
    }).setClassToggle('.big3', 'active')
        .setTween(tween3)
        .addTo(controller)
        .addIndicators({
            name: "3"
        });

    var scene4 = new ScrollMagic.Scene({
        triggerElement: "#trigger4"
    })
        .setTween(tween4)
        .addTo(controller)
        .addIndicators({
            name: "4"
        });

    var scene5 = new ScrollMagic.Scene({
        triggerElement: "#trigger5"
    })
        .setTween(tween5)
        .addTo(controller)
        .addIndicators({
            name: "5"
        });
    var scene6 = new ScrollMagic.Scene({
        triggerElement: "#trigger6"
    })
        .setTween(tween6)
        .addTo(controller)
        .addIndicators({
            name: "6"
        });
    var scene7 = new ScrollMagic.Scene({
        triggerElement: "#trigger7"
    })
        .setTween(tween7)
        .addTo(controller)
        .addIndicators({
            name: "7"
        });
    var scene8 = new ScrollMagic.Scene({
        triggerElement: "#trigger8"
    })
        .setTween(tween8)
        .addTo(controller)
        .addIndicators({
            name: "8"
        });
    var scene9 = new ScrollMagic.Scene({
        triggerElement: "#trigger9",
        offset: -50,
        duration: 1200
    })
        .setTween(tween9)
        .addTo(controller)
        .addIndicators({
            name: "9"
        });

    var scene10 = new ScrollMagic.Scene({
        triggerElement: "#trigger10",
        offset: -50,
        duration: 1200
    })
        .setTween(tween10)
        .addTo(controller)
        .addIndicators({
            name: "10"
        });

    var scene11 = new ScrollMagic.Scene({
        triggerElement: "#trigger11",
        duration: 300
    })
        .setTween(tween11)
        .addTo(controller)
        .addIndicators({
            name: "11"
        });

    var scene12 = new ScrollMagic.Scene({
        triggerElement: "#trigger12",
        offset: 500,
        duration: 300
    })
        .setTween(tween12)
        .addTo(controller)
        .addIndicators({
            name: "12"
        });
    var scene14 = new ScrollMagic.Scene({
        triggerElement: "#trigger13",
        offset: 500,
    })
        .setTween(tween13)
        .addTo(controller)
        .addIndicators({
            name: "13"
        });
}
var human01 = document.getElementById("human01"),
    human02 = document.getElementById("human02"),
    human03 = document.getElementById("human03");

function toggleImg() {
    if(human01.classList.contains("active")){
         human01.src = "img/human01_c.png";
    }

    if(human02.classList.contains("active")){
        human02.src = "img/human02_c.png";
        human01.src = "img/human01.png";
    } else {
        human02.src = "img/human02.png";
    }

    if(human03.classList.contains("active")){
        human03.src = "img/human03_c.png";
        human02.src = "img/human02.png";
    } else {
        human03.src = "img/human03.png";
    }
}

window.addEventListener("scroll", toggleImg);
init()