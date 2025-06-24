$(document).ready(function () {
    //초기설정
    $(".pager li:first").css ({
        backgroundColor : '#333'
    })

    var auto =setInterval(left, 3000);

    $('.mapbox .view .imgbox').mouseenter(function () {
        //자동실행 멈춤, 인터벌 제거 
        clearInterval(auto);

    }).mouseleave(function () {
        //자동실행 다시 시작!, 인터벌 재가동!
       auto=setInterval(left,3000);
    });


    var width = $(".mapbox .view .imgbox").width();
    var num = $(".mapbox .view .imgbox").length;
    console.log(width, num);


    var page = 0;
    function left() {
        if (page < num - 1) {
            page++
            $(".mapbox .view").animate({
                marginLeft: -width * page
            }, 800);


        } else if (page === num-1) {
            $(".mapbox .view").css({
                marginLeft: 0
            });
            page = 0;
        }

        $('.page li.num'+page).css({
            backgroundColor :"#333"
        }).siblings().css({
            backgroundColor:"transparent"
        });
        if(page===5){
            $('.page li').first().css({
                 backgroundColor :"#333"
            });
        }
       
    
    }

});