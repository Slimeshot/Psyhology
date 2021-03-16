const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    
    loop: true,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      980: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      // when window width is >= 640px
      
    }

  });


const menuIcon = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');


menuIcon.addEventListener('click', () => {
  menu.classList.toggle('change');
  menuIcon.classList.toggle('btn-active');
  
})