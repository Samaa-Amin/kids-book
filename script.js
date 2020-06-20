$(window).ready(function () {
    // preloader
    $(".loader-wrapper").css(
        "opacity","0"
    )
    $(".container").addClass("show-page");
    //open header icons
    function headerButtons(){
        $(".page-containt_choices ,.page-containt_answers").css({"display":"none"})
        $("#overlay").addClass("overlay")
    }
    $("#photo").click(function(){
        $("#overlay").addClass("overlay")
        $(".photo-layer").css({"display":"block"})
    })
    $("#help").click(function(){
        $("#overlay").addClass("overlay")
        $(".help-layer").css({"display":"block"})
    })
    //close header icons
    $(".close-icon").click(function(){
        $("#overlay").removeClass("overlay")
        $(".help-layer, .photo-layer").css({"display":"none"})
    })
    // click on choices
    $('.choice').click(function(){
        if(!$(this).hasClass("disabled")){
        $('.choice').removeClass("active");
        $(this).addClass("active");
        }
    })
    // writing answers
    $(".answer-wrapper").click(function(){
        // case of correct answer
            if($(".active").length && $(".active").hasClass("correct") && $(this).children().css("visibility")=="hidden" ){
            $(this).children("span").text($(".active").text())
            $(this).children(".icon").children().attr("src","./951a617272553f49e75548e212ed947f-curved-check-mark-icon-by-vexels.png")
            $(this).children().css({"visibility":"visible"})
            $(".active").css({"visibility":"hidden"}).removeClass("active")
            document.getElementById("correct-audio").play()

        }
        // case of wrong answer
        if($(".active").length && $(".active").hasClass("incorrect") && $(this).children().css("visibility")=="hidden"){
            $(this).children("span").text($(".active").text())
            $(this).children(".icon").children().attr("src","./388-3887666_wrong-icon-with-png-and-vector-format-for-free-unlimited-wrong-icon.png")
            document.getElementById("wrong-audio").play()

            ////////////==================================================///////
            $(this).children().css({"visibility":"visible"})
            setTimeout(() => {
                $(this).children().css({"visibility":"hidden"})
                }, 300);
            setTimeout(() => {
                $(this).children().css({"visibility":"visible"})
                }, 600);
            setTimeout(() => {
                $(this).children().css({"visibility":"hidden"})
                }, 900);
        }
    })
    // reset function
    $("#reset").click(function(){
        $('#show').removeClass("disabled")
        $(".choice").css({"visibility":"visible"})
        $(".answer-wrapper").children().css({"visibility":"hidden"})
        $(".incorrect").removeClass("disabled")
    })
    // show function
    $("#show").click(function(){
        $('.choice').removeClass("active");
        $(".icon").children().attr("src","./951a617272553f49e75548e212ed947f-curved-check-mark-icon-by-vexels.png")
        $(this).addClass("disabled")
        $(".correct").css({"visibility":"hidden"})
        $(".incorrect").addClass("disabled")
        $(".answer-wrapper").children().css({"visibility":"visible"})
        var answers= document.getElementsByClassName("answer")
        var correct=document.getElementsByClassName("correct")
        for(i=0 ; i<5 ;i++){
            answers[i].innerHTML=correct[i].innerHTML
        }
    })
});
