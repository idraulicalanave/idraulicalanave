document.addEventListener('DOMContentLoaded', () => {
    const navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if (navbarBurgers.length > 0) {
      navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const targetMenu = document.getElementById(target);
          el.classList.toggle('is-active');
          targetMenu.classList.toggle('is-active');
        });
      });
    }

    const fullscreenLogo = document.getElementById('fullscreen-logo');
      document.addEventListener('click', () => {
        fullscreenLogo.classList.add('hidden');
      }, { once: true });
    
    const navbarLinks = document.querySelectorAll('.navbar-item');
    navbarLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
    
    let index = 0;
    function getVisibleImages() {
      if (window.innerWidth <= 768) return 1;
      if (window.innerWidth <= 1024) return 2;
      return 3;
    }

    function moveSlide(direction) {
      const track = document.querySelector('.carousel-track');
      const totalImages = document.querySelectorAll('.carousel-track img').length;
      const visibleImages = getVisibleImages();
      const maxIndex = totalImages - visibleImages;
      
      index += direction;
      if (index < 0) index = maxIndex;
      if (index > maxIndex) index = 0;
      
      track.style.transform = `translateX(${-index * (100 / visibleImages)}%)`;
    }

    setInterval(() => moveSlide(1), 4000);

    const zoomableImg = document.querySelector('.zoomable-img');
    if (zoomableImg) {
      zoomableImg.addEventListener('click', () => {
        zoomableImg.classList.toggle('zoomed');
      });
    }
});


  
