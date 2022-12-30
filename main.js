let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
    contactInfo.classList.add('active');
}

// document.querySelector('#close-contact-info').onclick = () => {
//     contact-Info.classList.remove('active');
// }
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}

      

//swiper
var swiper = new Swiper(".home", {
       loop: true,
     grabCursor: true,
       autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
       pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
});
    