$(document).ready(function() {
    // $('#fullpage').fullpage({
    //   autoScrolling: false,
		// fitToSection: false,
    //   navigation: true,
    // });
    
    //methods


    var controller = new ScrollMagic.Controller();
 
    var scene1 = new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      duration: 4000,
      triggerHook: 0,
      offset: 0
    })
    .setPin("#pin1")
    .addTo(controller);

    var tween = TweenMax.to('#title01', 100, {
        opacity: 0,
    });

    var scene2 = new ScrollMagic.Scene({
        triggerElement: "#trigger1",
        duration: 500,
        triggerHook: 0,
        offset: 0,
    })
    .setTween(tween)
    .setClassToggle(".indi01", "active")
    .addTo(controller)

    var tween2 = TweenMax.fromTo('#title02', 100, {
      delay: 700,
      opacity: 0,
  }, {
    opacity: 1,
    repeat: 1,
    yoyo: true
  });

  

    var scene3 = new ScrollMagic.Scene({
      triggerElement: "#trigger1",
      duration: 1000, 
      triggerHook: 0,
      offset: 500,
  })
  .setTween(tween2)
  .setClassToggle(".indi02", "active")
  .addTo(controller)

  var tween3 = TweenMax.fromTo('#title03', 100, {
      opacity: 0,
  }, {
    opacity: 1,
    repeat: 1,
    yoyo: true
  });

  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: 1000, 
    triggerHook: 0,
    offset: 1500,
})
.setTween(tween3)
  .setClassToggle(".indi03", "active")
  .addTo(controller)



var tween4 = TweenMax.fromTo('#title04', 100, {
  opacity: 0,
}, {
opacity: 1,
repeat: 1,
yoyo: true
});

var scene5 = new ScrollMagic.Scene({
triggerElement: "#trigger1",
duration: 1000, 
triggerHook: 0,
offset: 2500,
})
.setTween(tween4)
  .setClassToggle(".indi04", "active")
  .addTo(controller)



var tween5 = TweenMax.to('#title05', 100, {
  opacity: 1,
});

var scene6 = new ScrollMagic.Scene({
triggerElement: "#trigger1",
duration: 500, 
triggerHook: 0,
offset: 3500,
})
.setTween(tween5)
  .setClassToggle(".indi05", "active")
  
  .addTo(controller)

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

    $(window).scroll(function () {
        
        effectHandler(".fade-effect");
        effectHandler(".bottom-to-top");
        effectHandler(".top-to-bottom");
        effectHandler(".left-to-right");
        effectHandler(".right-to-left");
    //
  });


  $(".pop-action").click(function(){
      $(this).toggleClass("on");
      $(".link-wrap").toggleClass("on");
  })


  $("#interview-01").click(function(){
    const offset = $("#interview-01-target").offset();
    $("html, body").animate({
      scrollTop: offset.top,
    }, 500)
  })


  $(".open-pop-01").click(function(e){
    e.preventDefault();
    $(".popup05").addClass("on-flex");
  })
  
  $(".open-pop-02").click(function(e){
    e.preventDefault();
    $(".popup06").addClass("on-flex");
  })
  
  $(".open-pop-03").click(function(e){
    e.preventDefault();
    $(".popup01").addClass("on-flex");
  })
  
  $(".open-pop-04").click(function(e){
    e.preventDefault();
    $(".popup02").addClass("on-flex");
  })
  
  $(".open-pop-05").click(function(e){
    e.preventDefault();
    $(".popup03").addClass("on-flex");
  })

  $(".open-pop-06").click(function(e){
    e.preventDefault();
    $(".popup04").addClass("on-flex");
  })
  
  
  

  $("#interview-02").click(function(){
    const offset = $("#interview-02-target").offset();
    $("html, body").animate({
      scrollTop: offset.top,
    }, 500)
  })

  $(".pop-top").click(function(){
    $('html, body').animate({
      scrollTop : 0
  }, 400);

return false;
  })
  // $(".to-inter01").click(function(){
  //     $('#fullpage').fullpage.moveTo(9);
  // })
  // $(".to-inter02").click(function(){
  //     $('#fullpage').fullpage.moveTo(10);
  // })



  const swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });



    let bgCount = 0;
    let bgCount2 = 0;
    let count = 0;
    let count2 = 0;
    const prevButton = document.querySelector(".swiper-button-prev-02");
    const nextButton = document.querySelector(".swiper-button-next-02");

    const prevButton02 = document.querySelector(".swiper-button-prev-03");
    const nextButton02 = document.querySelector(".swiper-button-next-03");
    
    const slideAll = document.querySelectorAll(".mySwiper02 .swiper-slide");
    const slideAll02 = document.querySelectorAll(".mySwiper03 .swiper-slide");


    const subTitle = document.querySelectorAll(".sub-op-title");
    const subDes = document.querySelectorAll(".sub-op-des");
    
    
    const mainBG = document.querySelector(".main-05");
    const mainBG02 = document.querySelector(".main-11");

    const tabButton = document.querySelectorAll(".tab-btns");
    const tabItems = document.querySelectorAll(".tab-item");
    
    const swiper2 = new Swiper(".mySwiper02", {
        loop: true,
      navigation: {
        nextEl: ".swiper-button-next-02",
        prevEl: ".swiper-button-prev-02",
      },
      
    });

    const swiper3 = new Swiper(".mySwiper03", {
      loop: true,
    navigation: {
      nextEl: ".swiper-button-next-03",
      prevEl: ".swiper-button-prev-03",
    },
    
  });



  const swiper4 = new Swiper(".mySwiper4", {
    loop: true,
  autoplay: {
    delay: 1,
    disableOnInteraction: false
  },
  slidesPerView: 8,
  speed: 2000,
  grabCursor: true,
  mousewheelControl: true,
  keyboardControl: true,

  });
  
  
  
  
    
    mainBG.style.backgroundRepeat = "no-repeat";
    mainBG.style.backgroundImage = "url('./img/sub-bg-0.png')";
    mainBG.style.backgroundSize = "cover";

    
    mainBG02.style.backgroundRepeat = "no-repeat";
    mainBG02.style.backgroundImage = "url('./img/slide-bg-0.png')";
    mainBG02.style.backgroundSize = "cover";

    subTitle[0].classList.add("activate");
    subDes[0].classList.add("activate");
    
    prevButton.addEventListener("click", function(){
      count--;
      bgCount = ((count % slideAll.length) + slideAll.length) % slideAll.length;

      if(bgCount < 0){
          bgCount = 1;
      }
      mainBG.style.backgroundImage = `url('./img/sub-bg-${bgCount}.png')`;

      for(let i = 0; i < subDes.length; i++){
          if(i == bgCount){
              subDes[i].classList.add("activate");
              subTitle[i].classList.add("activate");
          } else {
              subDes[i].classList.remove("activate");
              subTitle[i].classList.remove("activate");
          }
      }
      
      
    });

    nextButton.addEventListener("click", function(){
      count++;
      bgCount = count % slideAll.length;
      mainBG.style.backgroundImage = `url('./img/sub-bg-${bgCount}.png')`;

      for(let i = 0; i < subDes.length; i++){
          if(i == bgCount){
              subDes[i].classList.add("activate");
              subTitle[i].classList.add("activate");
          } else {
              subDes[i].classList.remove("activate");
              subTitle[i].classList.remove("activate");
          }
      }
      
    });




    prevButton02.addEventListener("click", function(){
      count2--;
      bgCount2 = ((count2 % slideAll.length) + slideAll.length) % slideAll.length;

      if(bgCount2 < 0){
          bgCount2 = 1;
      }
      mainBG02.style.backgroundImage = `url('./img/slide-bg-${bgCount2}.png')`;

      
    });

    nextButton02.addEventListener("click", function(){
      count2++;
      bgCount2 = count2 % slideAll.length;
      mainBG02.style.backgroundImage = `url('./img/slide-bg-${bgCount2}.png')`;

  
    });

    


    for(let i = 0; i < tabButton.length; i++){
     
      tabButton[i].addEventListener('click', function(e){
          
          let curIndex = Array.from(tabButton).indexOf(e.currentTarget);
          const curButton = document.querySelector(".tab-btns.active");
          const curItem = document.querySelector(".tab-item.active");
          curButton.classList.remove("active");
          curItem.classList.remove("active");
          e.currentTarget.classList.add("active");
          tabItems[curIndex].classList.add("active");

      })
    }
    







});

