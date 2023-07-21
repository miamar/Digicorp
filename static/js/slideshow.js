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


  var swiper = new Swiper(".partnerSwiper", {
    slidesPerView: 1,
      spaceBetween: 25,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        992: {
          slidesPerView: 2,
          spaceBetween: 25,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 25,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#nav-right",
        prevEl: "#nav-left"
    },
  });

  // Get the Swiper container element
var swiperContainer = document.querySelector('.softwaresSwiper');

// Get the parent column element
var column = swiperContainer.closest('.swiperColumn');

// Calculate the width of the column
var columnWidth = column.offsetWidth;

var swiper = new Swiper('.softwaresSwiper', {
  on: {
    init: function () {
      // Set the width of the Swiper container
      swiperContainer.style.width = columnWidth + 'px';
    },
  },
});



