const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-links')
let menuBtnSmallScreens = document.querySelector(".menu-btn");


menuBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})


window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".nav-bar");

    if (window.scrollY > 860) {
        navbar.classList.add("scrolled");
        menuBtnSmallScreens.src = "assets/menu-btn-orange.png";
    } else {
        navbar.classList.remove("scrolled");
        menuBtnSmallScreens.src = "assets/menu-btn.png";
    }

    if (window.scrollY > 2130) {
        navbar.classList.add("scrolled2");
        menuBtnSmallScreens.src = "assets/menu-btn.png";
    } else {
        navbar.classList.remove("scrolled2");
    }
});



