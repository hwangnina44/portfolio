$(document).ready(function () {

    // [슬라이드 설정]
    var width = $(".mapbox .view .img-box").width();
    console.log("슬라이드 이미지 너비:", width);

    $(".mapbox .view").prepend($(".view .img-box").last()).css({
        marginLeft: -width
    });

    $('.mapbox .prev-btn').click(function () {
        $(".mapbox .view").animate({
            marginLeft: 0
        }, 800, function () {
            $(".mapbox .view").prepend($(".view .img-box").last()).css({
                marginLeft: -width
            });
        });
    });

    $('.mapbox .next-btn').click(function () {
        $(".mapbox .view").animate({
            marginLeft: -width
        }, 800, function () {
            $(".mapbox .view").append($(".view .img-box").first()).css({
                marginLeft: 0
            });
        });
    });

    // ✅ [디자인 시안 탭 버튼]
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
