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
    



const btnn = document.querySelector("button");
      const post = document.querySelector(".post");
      const widget = document.querySelector(".star-widget");
      const editBtn = document.querySelector(".edit");
      btn.onclick = ()=>{
        widget.style.display = "none";
        post.style.display = "block";
        editBtn.onclick = ()=>{
          widget.style.display = "block";
          post.style.display = "none";
        }
        return false;
      }




const setScroll=() => {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})


sr.reveal(`.left-about`, { delay: 500 });
sr.reveal(`.right-about`, { delay: 300 });
sr.reveal(`.box`, { delay: 500 });
sr.reveal(`.banner `, { delay: 200 })
sr.reveal(` .contact `, {delay: 900})
sr.reveal(`.social-icons`, {delay: 600})
sr.reveal(` .products-boxes .box, .footer`,{interval: 100})

}
setScroll();


const btns = document.querySelectorAll(".question-btn");
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle("show-text");
  });
});