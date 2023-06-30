
 const navToggler = document.querySelector(".nav-toggler");
 navToggler.addEventListener("click", navToggle);

 function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
    	nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
    	nav.removeAttribute("style");
    }
 } 


 document.addEventListener('DOMContentLoaded', function() {
   const carousel = document.querySelector('.carousel');
   const carouselItems = carousel.querySelectorAll('.carousel-item');
   const prevButton = carousel.querySelector('.carousel-control.prev');
   const nextButton = carousel.querySelector('.carousel-control.next');
   let currentIndex = 0;
   let interval;
 
   function showSlide(index) {
     if (index < 0) {
       index = carouselItems.length - 1;
     } else if (index >= carouselItems.length) {
       index = 0;
     }
 
     carouselItems[currentIndex].classList.remove('active');
     carouselItems[index].classList.add('active');
     currentIndex = index;
   }
 
   function nextSlide() {
     const nextIndex = currentIndex + 1;
     showSlide(nextIndex);
   }
 
   function prevSlide() {
     const prevIndex = currentIndex - 1;
     showSlide(prevIndex);
   }
 
   function autoPlay() {
     nextSlide();
   }
 
   // Start autoplay
   function startAutoPlay() {
     interval = setInterval(autoPlay, 4000);
   }
 
   function stopAutoPlay() {
     clearInterval(interval);
   }
 
   prevButton.addEventListener('click', function() {
     prevSlide();
     stopAutoPlay();
     startAutoPlay();
   });
 
   nextButton.addEventListener('click', function() {
     nextSlide();
     stopAutoPlay();
     startAutoPlay();
   });
 
   startAutoPlay();
 
   carousel.addEventListener('mouseenter', function() {
     stopAutoPlay();
   });
 
   carousel.addEventListener('mouseleave', function() {
     startAutoPlay();
   });
 
   carouselItems.forEach(function(item) {
     item.addEventListener('mouseenter', function() {
       stopAutoPlay();
     });
 
     item.addEventListener('mouseleave', function() {
       startAutoPlay();
     });
   });
 
   carousel.addEventListener('mouseleave', function() {
     const hoveredItem = carousel.querySelector('.carousel-item:hover');
     if (!hoveredItem) {
       startAutoPlay();
     }
   });
 });