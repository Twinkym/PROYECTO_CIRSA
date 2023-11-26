// importSwiper.js
const Swiper = require('swiper/bundle');


// initialize Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Show and hide descriptive text by clicking "Expand"
const expandButtons = document.querySelectorAll('.expand-button');

expandButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.previousElementSibling;

        // Toggle a class to show or hide the content
        content.classList.toggle('expanded');
    });
});
