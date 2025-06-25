$(document).ready(function () {
    //초기설정
    $(".pager li:first").css({
        backgroundColor: '#3A98B9'
    })

    var auto = setInterval(left, 3000);

    $('.mapbox .view .imgbox').mouseenter(function () {
        //자동실행 멈춤, 인터벌 제거 
        clearInterval(auto);

    }).mouseleave(function () {
        //자동실행 다시 시작!, 인터벌 재가동!
        auto = setInterval(left, 3000);
    });


    var width = $(".mapbox .view .imgbox").width();
    var num = $(".mapbox .view .imgbox").length;
    console.log(width, num);


    var page = 0;


    function left() {
        page++;

        $(".mapbox .view").animate({
            marginLeft: -width * page
        }, 800, function () {

            if (page === num - 1) {
                $(".mapbox .view").css({
                    marginLeft: 0
                });
                page = 0;
            }

            $(".pager li").eq(page).css({
                backgroundColor: "#3A98B9"
            }).siblings().css({
                backgroundColor: "transparent"
            });
        });
    }

});


$(document).ready(function () {

    // 버튼 on 클래스 토글
    $(".content-box a.btn").click(function () {
        $(this).addClass('on').siblings().removeClass('on');
    });

    // 초기 설정: concept 보이기, 나머지는 fadeOut
    $(".content-box .des-group div.concept").fadeIn().siblings().hide();

    // 컨셉 버튼 클릭
    $(".content-box a.concept").click(function (e) {
        e.preventDefault();
        $(".content-box .des-group div.concept").fadeIn().siblings().fadeOut();
    });

    // 컬러 버튼 클릭
    $(".content-box a.color").click(function (e) {
        e.preventDefault();
        $(".content-box .des-group div.color").fadeIn().siblings().fadeOut();
    });
    
    // 폰트 버튼 클릭
    $(".content-box a.font").click(function (e) {
        e.preventDefault();
        $(".content-box .des-group div.font").fadeIn().siblings().fadeOut();
    });

    // 디자인 시안 버튼 클릭
    $(".content-box a.design-des").click(function (e) {
        e.preventDefault();
        $(".content-box .des-group div.design-des").fadeIn().siblings().fadeOut();
    });

});
