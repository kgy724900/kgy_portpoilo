$(document).ready(function(){


new Swiper('.mySwiper', {
    slidesPerView: 3,
    spaceBetween: 120,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      centeredSlides: true,
    },
  
    breakpoints: {
      0:   { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1200:{ slidesPerView: 3, spaceBetween: 120 }
    }
  });







}); //end