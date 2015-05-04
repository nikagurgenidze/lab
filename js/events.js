$( document ).ready(function() { // A page can't be manipulated safely until the document is "ready." jQuery detects this state of readiness for you.

    $("#menu").click(function() {
    $(this).toggleClass("rotate");
    $('.down').toggleClass('rotate-up');
    $('.up').toggleClass('rotate-down');
    $('.bitt').toggleClass('z');
    });
    


});

$(document).ready(function(){
    $("#menu").click(function(){
        $(".nav1").toggle();
    });


   
});


