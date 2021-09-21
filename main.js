$(function() {
    $('#pointer').on('inview', function(event, isInView){
        let article_element = document.getElementById("deco2");
        let height = document.getElementById('header').clientHeight - document.documentElement.clientHeight - 20;
        if(getComputedStyle(article_element).getPropertyValue("position") == "fixed"){
            $("#deco2").css( { "position":"absolute" });
            $("#deco1").css( { "position":"absolute","top":height+"px" });
        }else{
            $("#deco2").css( { "position":"fixed" });
            $("#deco1").css( { "position":"fixed","top":"0px" });
        }
    });
});