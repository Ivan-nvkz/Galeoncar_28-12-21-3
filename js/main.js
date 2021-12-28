'use strict';

document.addEventListener('DOMContentLoaded', () => {

   const swiper = new Swiper('.swiper', {

      // Optional parameters

      // direction: 'vertical',
      // direction: 'horizontal',
      loop: true,
      speed: 800,

      // If we need pagination
      // pagination: {
      //    el: '.swiper-pagination',
      //    type: "progressbar",
      // },

      // Navigation arrows
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      // scrollbar: {
      //    el: '.swiper-scrollbar',

      // },
      // Количество слайдов для показа
      // slidesPerView: 3,

      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
      },
      // pagination: {
      //    el: ".swiper-pagination",
      //    type: "progressbar",
      // },


      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         480: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
      },

   });

   const typesRentSlider = new Swiper('.types-rent__slider', {

      // Optional parameters

      // direction: 'vertical',
      // direction: 'horizontal',
      loop: true,
      speed: 2000,

      // If we need pagination
      // pagination: {
      //    el: '.swiper-pagination',
      //    type: "progressbar",
      // },

      // Navigation arrows
      // navigation: {
      //    nextEl: '.swiper-button-next',
      //    prevEl: '.swiper-button-prev',
      // },

      // And if we need scrollbar
      // scrollbar: {
      //    el: '.swiper-scrollbar',

      // },
      // Количество слайдов для показа
      //  slidesPerView: 3,
      autoplay: {
         delay: 2500,
         disableOnInteraction: false,
      },


      effect: "",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      // coverflowEffect: {
      //    rotate: 50,
      //    stretch: 0,
      //    depth: 100,
      //    modifier: 1,
      //    slideShadows: true,
      // },
      // pagination: {
      //    el: ".swiper-pagination",
      //    type: "progressbar",
      // },


      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         480: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
      },

   });

   const carFleetSlider = new Swiper('.car-fleet__slider', {

      // Optional parameters

      // direction: 'vertical',
      // direction: 'horizontal',
      loop: true,
      speed: 800,

      // If we need pagination
      pagination: {
         el: '.swiper-pagination',
         type: "progressbar",
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
      // Количество слайдов для показа
      //  slidesPerView: 3,
      // autoplay: {
      //    delay: 2500,
      //    disableOnInteraction: false,
      // },


      // effect: "",
      // grabCursor: true,
      // centeredSlides: true,
      // slidesPerView: "auto",
      // coverflowEffect: {
      //    rotate: 50,
      //    stretch: 0,
      //    depth: 100,
      //    modifier: 1,
      //    slideShadows: true,
      // },
      // pagination: {
      //    el: ".swiper-pagination",
      //    type: "progressbar",
      // },


      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         480: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
      },

   });

   let btns = document.querySelectorAll('.accordeon-btn');

   btns.forEach(elem => {
      elem.addEventListener('click', function () {
         this.classList.toggle("active");
         let panel = this.nextElementSibling;
         if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
         } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
         }

      });

   });



   var mySwiperSmol = new Swiper(".myswiper-smol", {
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
      speed: 1000,
      loop: true,


      breakpoints: {
         320: {
            slidesPerView: 1,
         },
         480: {
            slidesPerView: 2,
         },
         992: {
            slidesPerView: 3,
         },
      },
   });
   var swiper2 = new Swiper(".myswiper2", {
      speed: 1000,
      loop: true,
      spaceBetween: 10,
      navigation: {
         nextEl: ".swiper-button-prev-duo",
         prevEl: ".swiper-button-next-duo",
      },
      thumbs: {
         swiper: mySwiperSmol,
      },


      // breakpoints: {
      //    320: {
      //       slidesPerView: 1,
      //    },
      //    480: {
      //       slidesPerView: 2,
      //    },
      //    992: {
      //       slidesPerView: 3,
      //    },
      // },
   });


   // Меню бургер 
   const burgerBtn = document.querySelector('.burger__btn');
   const menuList = document.querySelector('.menu__list');


   burgerBtn.addEventListener('click', function (e) {
      e.preventDefault();
      this.classList.toggle('burger__btn-line--active');
      menuList.classList.toggle('menu__list--active');
   });




   // Hover на кнопки  доделать позже с креатэлемент
   // const sliderLinks = document.querySelectorAll('.slider-box');

   // sliderLinks.forEach(sliderLink => {

   //    sliderLink.addEventListener('mouseover', function () {

   //       // sliderLink.classList.remove('slider-link');
   //       sliderLink.style.display = 'none';
   //       let newText = document.createElement('div');
   //       div.textContent = 'grsgesg';

   //    });

   //    sliderLink.addEventListener('mouseout', function () {

   //       sliderLink.style.display = 'block';

   //    });

   // });


   // Плавный скролл Start ---------------------------------

   let menu = document.querySelector('.menu__list');
   let links = document.querySelectorAll('.menu__link');

   if (window.location.hash != '') {
      scrollToId(window.location.hash);
   }

   menu.addEventListener('click', function (e) {
      if (e.target.classList.contains('menu__link')) {
         e.preventDefault();

         let link = e.target;
         scrollToId(link.hash);
      }
   });

   let btnUp = document.querySelector('.btnUp');

   btnUp.addEventListener('click', function (e) {
      scrollToY(0);
   });

   let scrolls = 0;
   let scrollTimeout;
   let delay = 100;

   // bad
   window.addEventListener('scroll', function (e) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
         onScroll(e);
      }, delay);
   });

   function onScroll(e) {
      // console.log(++scrolls);
      let pos = window.pageYOffset;

      if (pos > window.innerHeight) {
         btnUp.classList.add('btnUp-open');
      }
      else {
         btnUp.classList.remove('btnUp-open');
      }

      for (let i = links.length - 1; i >= 0; i--) {
         let link = links[i];
         let header = document.querySelector(link.hash);

         if (pos > (elemOffsetTop(header) - window.innerHeight / 2)) {
            menu.querySelector('.menu__link-active').classList.remove('menu__link-active');
            link.classList.add('menu__link-active');
            break;
         }
      }
   }

   function scrollToId(id) {
      let target = document.querySelector(id);
      let styles = window.getComputedStyle(target);

      if (target !== null) {
         let pos = elemOffsetTop(target) - menu.clientHeight - parseFloat(styles.marginTop);
         scrollToY(pos);
      }
   }




});

// Плавный скролл  ---------------------------------

function scrollToY(pos) {
   window.scrollTo({
      top: pos,
      behavior: "smooth"
   });
}

function elemOffsetTop(node) {
   let coords = node.getBoundingClientRect();
   return coords.top + window.pageYOffset;
}
// Плавный скролл  End---------------------------------