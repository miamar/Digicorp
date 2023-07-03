new Swiper("#swiper-2", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 24,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    lazyLoading: true,
    loop: true,
    keyboard: {
        enabled: true,
    },
    navigation: {
        nextEl: "#nav-right",
        prevEl: "#nav-left"
    },
    breakpoints: {
        800: {
            slidesPerView: 1.5
        },
        1400: {
            slidesPerView: 3
        }
    }
});

var swiper = new Swiper(".softwaresSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    }
  });