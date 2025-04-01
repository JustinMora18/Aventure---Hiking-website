const menuBtn = document.querySelector('.menu-btn')
const navLinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu')
})


window.addEventListener('scroll', function() {
    const section2 = document.querySelector('.events');
    const section3 = document.querySelector('.explore');
    const navBar = document.querySelector('.nav-bar');

    if (window.scrollY >= section2.offsetTop - 100) { 
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }

    if (window.scrollY >= section3.offsetTop - 200) { 
        navBar.classList.add('scrolled2');
    } else {
        navBar.classList.remove('scrolled2');
    }
});


