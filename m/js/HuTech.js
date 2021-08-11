$(function(){
    $('#fullpage').fullpage({
        css3 : true,
        easingcss3 : 'ease-out',
        loopTop : false,
        loopBottom : false,
        scrollBar : false,
        onLeave: function(origin, destination, direction){
            var leavingSection = this;  
            if(origin.index == 0 && direction =="down"){
                section2_ani();
                }
            else if(origin.index == 1 && direction == "down"){
                section3_ani();
                }
            else if(origin.index == 2 && direction == "down"){
                section4_ani();
                }
            else if(origin.index == 3 && direction == "down"){
                section5_ani();
                }
            else if(origin.index == 4 && direction == "down"){
                section6_ani();
                }
            else if(origin.index == 5 && direction == "down"){
                section7_ani();
                }
            else if(origin.index == 6 && direction == "down"){
                section8_ani();
                }
            else if(origin.index == 7 && direction == "down"){
                section9_ani();
                }
            else if(origin.index == 8 && direction == "down"){
                section10_ani();
                }
            else if(origin.index == 9 && direction == "down"){
                section11_ani();
                }
            else if(origin.index == 10 && direction == "down"){
                section12_ani();
                }
            }
    });
    $(".pop-action").click(function(){
        $(this).toggleClass("on");
        $(".link-wrap").fadeToggle("on");
    })
    
    $(".pop-top").click(function(){
    $.fn.fullpage.moveTo(1, 1);
    })

    function section2_ani(){
        $('#section2 h1').delay(500).animate({'top':'0'},1000,'easeOutExpo');
        $('#section2 p:nth-child(2)').delay(1000).animate({'top':'0'},1000,'easeOutExpo');
        $('#section2 p:nth-child(3)').delay(1500).animate({'top':'0'},1000,'easeOutExpo');
        $('#section2 p:nth-child(4)').delay(2000).animate({'top':'0'},1000,'easeOutExpo');
    }

    function section3_ani(){
        $('#section3 .titbox p').delay(500).animate({'top':'0'},1000);
        $('#section3 .titbox h1').delay(1000).animate({'top':'0'},1000,'easeOutExpo');
        $('#section3 .txtbox p').delay(1500).animate({'top':'0'},1000,'easeOutExpo');
        $('#section3 .drawingBox .drawing span:nth-child(8)').delay(1000).animate({'width':'29vw'},2000,'easeOutExpo');
        $('#section3 .drawingBox .drawing span:nth-child(9)').delay(1000).animate({'width':'29vw'},2000,'easeOutExpo');
        $('#section3 .drawingBox .drawing span').not('.drawing span:nth-child(8),.drawing span:nth-child(9)').delay(1000).animate({'width':'51.5vw'},2000,'easeOutExpo');
    }

    function section4_ani(){
        $('#section4 .contentboxs>p').delay(500).animate({'top':'0'},1000);
        $('#section4 .contentboxs .contentbox .cont1 h1,#section4 .contentboxs .contentbox .cont1 p').delay(1000).animate({'top':'0'},1000,'easeOutExpo');
        $('#section4 .contentboxs .contentbox .cont2 h1,#section4 .contentboxs .contentbox .cont2 p').delay(1500).animate({'top':'0'},1000,'easeOutExpo');
        $('#section4 .contentboxs .contentbox .cont3 h1,#section4 .contentboxs .contentbox .cont3 p').delay(2000).animate({'top':'0'},1000,'easeOutExpo');
    }

    function section5_ani(){
        $('#section5 .txtbox p').delay(500).animate({'top':'0'},1000,'easeOutExpo');
        $('#section5 .txtbox h1').delay(1000).animate({'top':'0'},1000,'easeOutExpo');
    }

    function section6_ani(){
        $('#section6 .sub-label,#section6 .sub-op-title').delay(500).animate({'top':'0'},1000,'easeOutExpo');
        $('#section6 .sub-op-des').delay(1000).animate({'top':'0'},1000,'easeOutExpo');
    }

    function section7_ani(){
        $('#section7 .txtbox h1,#section7 .txtbox p:nth-child(1)').delay(500).animate({'top':'0'},1000,'easeOutExpo');
        $('#section7 .txtbox p:nth-child(3)').delay(1000).animate({'top':'0'},1000,'easeOutExpo');
        $('#section7 .contentbox1').delay(1500).animate({'top':'0'},1000,'easeOutExpo');
        $('#section7 .contentbox2').delay(2000).animate({'top':'0'},1000,'easeOutExpo');
        $('#section7 .contentbox3').delay(2500).animate({'top':'0'},1000,'easeOutExpo');
        $('#section7 .contentbox4').delay(3000).animate({'top':'0'},1000,'easeOutExpo');
    }

    function section8_ani(){
        $('#section8 .txtbox1 p:nth-child(1),#section8 .txtbox1 h1').delay(500).animate({'top':'0'},1000,'easeOutExpo');
        $('#section8 .txtbox1 div,#section8 .txtbox1 p:nth-child(4)').delay(1000).animate({'top':'0'},1000,'easeOutExpo');
    }

    function section9_ani(){
        $('#section9 .txtbox2 div,#section9 .txtbox2 p').delay(500).animate({'top':'0'},1000,'easeOutExpo');
    }

    function section10_ani(){
        $('#section10 .txtbox p:nth-child(1),#section10 .txtbox h1').delay(500).animate({'top':'0'},1000,'easeOutExpo');
        $('#section10 .txtbox p:nth-child(3)').delay(1000).animate({'top':'0'},1000,'easeOutExpo');
    }

    function section11_ani(){
        $('#section11 .txtbox p:nth-child(1),#section11 .txtbox h1').delay(500).animate({'top':'0'},1000,'easeOutExpo');
        $('#section11 .txtbox p:nth-child(3)').delay(1000).animate({'top':'0'},1000,'easeOutExpo');
    }

    function section12_ani(){
        $('#section12 .sub-label,#section12 .sub-op-title').delay(500).animate({'top':'0'},1000,'easeOutExpo');
        $('#section12 .sub-op-des').delay(1000).animate({'top':'-10px'},1000,'easeOutExpo');
    }

    const swiper4 = new Swiper(".mySwiper4", {
        loop: true,
        autoplay: {
        delay: 1,
        disableOnInteraction: false
        },
        slidesPerView: 5,
        speed: 2000,
        grabCursor: true,
        mousewheelControl: true,
        keyboardControl: true
        });

    const swiper = new Swiper("#section5 .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerGroup: 1,
        loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
            el: "#section5 .swiper-pagination",
            clickable: true,
        }
    });

    let bgCount = 0;
    let count = 0;
    const prevButton = document.querySelector("#section6 .swiper-button-prev-02");
    const nextButton = document.querySelector("#section6 .swiper-button-next-02");
    const slideAll = document.querySelectorAll("#section6 .mySwiper02 .swiper-slide");

    const subTitle = document.querySelectorAll("#section6 .sub-op-title");
    const subDes = document.querySelectorAll("#section6 .sub-op-des");
    
    const mainBG = document.querySelector("#section6");
    
    const swiper2 = new Swiper("#section6 .amin-05-slide .mySwiper02", {
        loop: true,
        navigation: {
        nextEl: "#section6 .amin-05-slide .swiper-button-next-02",
        prevEl: "#section6 .amin-05-slide .swiper-button-prev-02",
        },
        pagination: {
            el: "#section6 .swiper-pagination",
            clickable: true,
        }
    });

    mainBG.style.backgroundRepeat = "no-repeat";
    mainBG.style.backgroundImage = "url('../image/sub-bg-0.png')";
    mainBG.style.backgroundSize = "cover";

    subTitle[0].classList.add("activate");
    subDes[0].classList.add("activate");
    
    prevButton.addEventListener("click", function(){
        count--;
        bgCount = ((count % slideAll.length) + slideAll.length) % slideAll.length;

        if(bgCount < 0){
            bgCount = 1;
        }
        mainBG.style.backgroundImage = `url('../image/sub-bg-${bgCount}.png')`;

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
        mainBG.style.backgroundImage = `url('../image/sub-bg-${bgCount}.png')`;

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

    const swiper8 = new Swiper("#section8 .mySwiper", {
        slidesPerView: 1,
        spaceBetween: -65,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: "#section8 .swiper-pagination",
            clickable: true,
        }
    });

    const swiper9 = new Swiper("#section9 .mySwiper", {
        slidesPerView: 1,
        spaceBetween: -65,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: "#section9 .swiper-pagination",
            clickable: true,
        }
    });

    const swiper10 = new Swiper("#section10 .mySwiper", {
        slidesPerView: 1,
        spaceBetween: 40,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: "#section10 .swiper-pagination",
            clickable: true,
        }
    });

    let bgCount1 = 0;
    let count1 = 0;
    const prevButton1 = document.querySelector("#section12 .swiper-button-prev-02");
    const nextButton1 = document.querySelector("#section12 .swiper-button-next-02");
    const slideAll1 = document.querySelectorAll("#section12 .mySwiper02 .swiper-slide");

    const subTitle1 = document.querySelectorAll("#section12 .sub-op-title");
    const subDes1 = document.querySelectorAll("#section12 .sub-op-des");
    
    const mainBG1 = document.querySelector("#section12");
    
    const swiper12 = new Swiper("#section12 .amin-05-slide .mySwiper02", {
        loop: true,
        navigation: {
        nextEl: "#section12 .amin-05-slide .swiper-button-next-02",
        prevEl: "#section12 .amin-05-slide .swiper-button-prev-02",
        },
        pagination: {
            el: "#section12 .swiper-pagination",
            clickable: true,
        }
    });

    mainBG1.style.backgroundRepeat = "no-repeat";
    mainBG1.style.backgroundImage = "url('../image/sub10-bg-0.png')";
    mainBG1.style.backgroundSize = "cover";

    subTitle1[0].classList.add("activate");
    subDes1[0].classList.add("activate");
    
    prevButton1.addEventListener("click", function(){
        count--;
        bgCount1 = ((count % slideAll1.length) + slideAll1.length) % slideAll1.length;

        if(bgCount1 < 0){
            bgCount1 = 1;
        }
        mainBG1.style.backgroundImage = `url('../image/sub10-bg-${bgCount1}.png')`;

        for(let i = 0; i < subDes1.length; i++){
            if(i == bgCount1){
                subDes1[i].classList.add("activate");
                subTitle1[i].classList.add("activate");
            } else {
                subDes1[i].classList.remove("activate");
                subTitle1[i].classList.remove("activate");
            }
        }
    });
    nextButton1.addEventListener("click", function(){
        count++;
        bgCount1 = count % slideAll1.length;
        mainBG1.style.backgroundImage = `url('../image/sub10-bg-${bgCount1}.png')`;

        for(let i = 0; i < subDes1.length; i++){
            if(i == bgCount1){
                subDes1[i].classList.add("activate");
                subTitle1[i].classList.add("activate");
            } else {
                subDes1[i].classList.remove("activate");
                subTitle1[i].classList.remove("activate");
            }
        }
    
    });

});