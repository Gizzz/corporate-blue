/// <reference path="vendor/jquery-1.11.2.min.js" />

$(function () {
    $(".slider .nav-bar li").click(function () {
        $(".slider .nav-bar li").removeClass("active");
        $(this).addClass("active");

        var slideNumber = parseInt($("span", $(this)).text());
        $(".slider .slides .slide").css("display", "none");
        $(".slider .slides .slide:nth-child(" + slideNumber + ")").css("display", "block");
        
    });
});