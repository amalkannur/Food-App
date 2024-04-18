const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 10,
    direction: 'vertical',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 20000,
      },
  });




  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    slidesPerView: 4,
    spaceBetween: 10,
    direction: 'horizontal',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

    autoplay: {
        delay: 20000,
      },
  });