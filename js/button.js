$(document).ready(function() {

    $(".theButton").click(function() {
        $(".container").siblings().fadeTo('1000', '.1');
    });

    $(".superButton").click(function() {
        $(".container").siblings().fadeTo('1000', '1');
    });
/*
    $(".theButton").mouseenter(function() {
        $(this).addClass("bg-black");
    })

    $(".theButton").mouseleave(function() {
        $(this).removeClass("bg-black");
    })
*/    
    $(".theButton").click(function() {
        var color = $(this).css("background-color");
        
        $(".superButton").text(color);
    })
});
