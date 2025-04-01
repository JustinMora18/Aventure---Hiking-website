const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})


window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".nav-bar");

    if (window.scrollY > 1000) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    if (window.scrollY > 2000) {
        navbar.classList.add("scrolled2");
    } else {
        navbar.classList.remove("scrolled2");
    }
});



