const coversSection = document.querySelector('.covers-section');

const animateElements = document.querySelectorAll('.marquee__line');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const inViewVertical = rect.top <= windowHeight && rect.top + rect.height >= 0;
    return inViewVertical;
  }

function animateOnScroll() {
    window.addEventListener('scroll', function () {
      if (isInViewport(coversSection)) {
        animateElements.forEach(element => addClass(element, 'marquee_animation'));
      } else {
        animateElements.forEach(element => removeClass(element, 'marquee_animation'));
      }
    });
  }
  
  function addClass(element, className) {
    element.classList.add(className);
  }
  
  function removeClass(element, className) {
    element.classList.remove(className);
  }
  
  document.addEventListener('DOMContentLoaded', animateOnScroll);