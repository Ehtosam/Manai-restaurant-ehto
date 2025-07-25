let navbar = document.querySelector('.header .navbar');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
  menuBtn.classList.toggle('fa-xmark');
  menuBtn.classList.toggle('fa-bars');
  navbar.classList.toggle('active');
};

 var swiper = new Swiper(".home-slider", {
   centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,

  grabCursor: true,
 });
 


