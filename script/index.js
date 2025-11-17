$(document).ready(function () {

    ////인트로 페이지
    setTimeout(function () {
        $("header").animate({
            opacity: 1
        }, 1000);
    }, 3000);

    setTimeout(function () {
        $("nav").animate({
            opacity: 1
        }, 1000);
    }, 3000);

    setTimeout(function () {
        $("article.intro .title p").animate({
            opacity: 1
        }, 1000);
    }, 3000);




    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
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

$(function () {
    const scrollBox = document.querySelector('.scroll_img');
    let hasScrolled = false; // 한 번만 실행

    function scrollDownOnce() {
        if (hasScrolled) return;
        hasScrolled = true;

        let scrollPos = 0;

        function autoScroll() {
            scrollPos += 3; // 속도 조절
            scrollBox.scrollTop = scrollPos;

            // 스크롤 끝에서 멈춤
            if (scrollPos >= scrollBox.scrollHeight - scrollBox.clientHeight) {
                scrollBox.scrollTop = 0;
                return;
            }

            requestAnimationFrame(autoScroll);
        }

        autoScroll();
    }

    //트리거를 project_preview로 변경
    const previewTarget = document.querySelector('.project_preview');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                scrollDownOnce();
            }
        });
    }, {
        threshold: 0.8 // 20% 정도 보이면 실행 (자연스럽게)
    });
    observer.observe(previewTarget);
});