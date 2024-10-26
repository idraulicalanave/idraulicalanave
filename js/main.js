window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav-links');
    const logoHeight = document.querySelector('.logo').offsetHeight;

    if (window.scrollY > logoHeight) {
        nav.classList.add('sticky-nav');
    } else {
        nav.classList.remove('sticky-nav');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.nav-links');
    const navHeight = nav.offsetHeight;

    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            const scrollToPosition = targetElement.offsetTop - (nav.classList.contains('sticky-nav') ? navHeight : 0);

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth'
            });
        });
    });
});





const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});






const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

function showNextImage() {
    images[currentIndex].classList.remove('active');
    
    currentIndex = (currentIndex + 1) % images.length;
    
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 4000);




const image = document.querySelector('.zoomable-img');

image.addEventListener('click', () => {
    image.classList.toggle('zoomed'); 
});
