$(document).ready(function () {

    ////인트로 페이지
    setTimeout(function() {
        $("header").animate({
            opacity: 1
        }, 1000);
    },3000);

    setTimeout(function() {
        $("nav").animate({
            opacity: 1
        }, 1000);
    }, 3000);

    setTimeout(function() {
        $("article.intro .title p").animate({
            opacity: 1
        },1000);
    }, 3000);


    

    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView:"auto",
        loop: true,
        autoplay: { delay: 3000 },
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });

});
