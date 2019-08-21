$(function(){
    $(".header").css("position", "relative");
    $("html").animate({ scrollTop: '0px' }, 100);
    $("body").animate({ scrollTop: '0px' }, 100);

    $(window).load(function() {
		$('#status').fadeOut();
		$('#preloader').delay(300).fadeOut('slow');
	});
});
$(document).scroll(function(){
    var $header = $(".header");
    var header = $header[0];
    var rect = header.getBoundingClientRect();
    var top = rect.top;
    var scrollTop = $("body")[0].scrollTop || $("html")[0].scrollTop;
    var height = $(".home-overlay").height();
    if(scrollTop>=height){
        $header.css("position", "fixed").css("top", "0");
    }else{
        $(".header").css("position", "relative");
    }
});