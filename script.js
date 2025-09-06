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

 var swiperFood = new Swiper( ".food-slider", {
  loop: true,
  grabCursor: true,
  centeredSlides: true,
   pagination: {
          el: ".swiper-pagination",
          clickable: true,
  },
  breakpoints: {
          0: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
        },
});
    let previewContainer = document.querySelector('.food-preview-container');
    let previewBox = previewContainer.querySelectorAll('.food-preview');

    document.querySelectorAll('.food .swiper-slide').forEach((food, index) => {
        food.onclick = () => {
          previewContainer.style.display = 'flex';
          let name = food.getAttribute('data-name');
            previewBox.forEach((preview) => {
                let target = preview.getAttribute('data-name');
                if(name == target){ preview.classList.add('active'); }
                
            });
        };
    });
    previewContainer.querySelectorAll('.fa-times').forEach(closeBtn => {
      closeBtn.onclick = () => {
        previewContainer.style.display = 'none';
        previewBox.forEach(close => {
          close.classList.remove('active');
        });
      };
    });
     var swiperMenu = new Swiper( ".menu-slider", {
  loop: true,
  autoHeight: true,
  grabCursor: true,
  centeredSlides: true,
   pagination: {
          el: ".swiper-pagination",
          clickable: true,
  },
  
});

 var swiperBlog = new Swiper( ".blog-slider", {
  loop: true,
  autoHeight: true,
  grabCursor: true,
  centeredSlides: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});
