$(function(){

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

});
