$(document).ready(function () {

    ////인트로 페이지
    setTimeout(function() {
        $("header").animate({
            opacity: 1
        }, 1000);
    }, 3000);

    setTimeout(function() {
        $("nav").animate({
            opacity: 1
        }, 1000);
    }, 3000);

    setTimeout(function() {
        $("article.intro .title p").animate({
            opacity: 1
        }, 1000);
    }, 3000);


    

    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    // 
    $(".content-box a.btn").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    });

    // 초기 상태: concept만 보여주기
    $(".content-box .des-group div.concept").fadeIn().siblings().hide();

    $(".content-box a.concept").click(function (e) {
        e.preventDefault();
        $(".content-box .des-group div.concept").fadeIn().siblings().fadeOut();
    });

    $(".content-box a.color").click(function (e) {
        e.preventDefault();
        $(".content-box .des-group div.color").fadeIn().siblings().fadeOut();
    });

    $(".content-box a.font").click(function (e) {
        e.preventDefault();
        $(".content-box .des-group div.font").fadeIn().siblings().fadeOut();
    });

    $(".content-box a.design-des").click(function (e) {
        e.preventDefault();
        $(".content-box .des-group div.design-des").fadeIn().siblings().fadeOut();
    });

});
