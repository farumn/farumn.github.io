$(function(){
    if ($(window).width() >= 992){
        $('body').attr("data-bs-offset","90"); 
    }
    else {
        $('body').attr("data-bs-offset","260"); 
    }
    $('.scrollPage').click(function(e){
        e.preventDefault();
        var section = $(this).attr("href");
        var windowWidth = $(window).width();
        if(windowWidth >= 992){
            $('html,body').animate({
                scrollTop: $(section).offset().top - 70
            }, "easeInOutExpo");
        }
        else {
            $('html,body').animate({
                scrollTop: $(section).offset().top - 240
            }, "easeInOutExpo");  
        }
    });
});