//////my.puzzle.js////
var pageCount = 0; //현재 페이지 번호! (첫 페이지 0 = 초깃값)
var total; 
var stat = 0; //스크롤 상태변경 (0-실행전/허용, 1-실행중/잠금)
/////////////////////////////////////////////////////////////////

$(document).ready(function(){

    //총 페이지 갯수 읽어오기!
    total = $('.page').length;
    console.log('총 페이지 갯수: ' + total);


    $(document).on('mousewheel DOMMouseScroll', function(){
      
        if (stat === 1) return false;
        stat = 1;

        var evt = window.event;
        console.log(evt);


        var delta = evt.wheelDelta ? evt.wheelDelta : evt.detail;
        console.log('마우스휠 델타값: ' + delta);


        if (/Firefox/i.test(navigator.userAgent)) {
            delta = -evt.detail;
            console.log('파이어폭스 detail: '+ delta);
        }

        if (delta < 0) {
            //음수, 아랫방향, 다음 페이지
            pageCount++;
            if (pageCount === total) pageCount = total-1;

        } else {
            //양수, 윗 방향, 이전 페이지
            pageCount--;
            if (pageCount === -1) pageCount = 0;
        }

        console.log('현재 페이지번호: ' + pageCount);
        var pageTop = $('.page').eq(pageCount).offset().top;
      

        //페이지 이동!
        $('html, body').animate({
            scrollTop: pageTop + 'px'
        }, 800, function(){
            stat = 0; //스크롤 허용 상태로 변경!
        });

        //메뉴변경 - 함수호출!
        //menuChg();

        var currentSection = $('.page').eq(pageCount);
        var sectionId = currentSection.attr('id');


        if (sectionId) {
            window.location.hash = '#' + sectionId;
        }
        //메뉴랑 일치 시키기 

    });
});

function menuChg (){

}