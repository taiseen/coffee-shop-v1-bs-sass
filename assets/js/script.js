// 21 - Jan - 2022 

const loggingBtn = document.getElementById('login-btn');
const closeBtn = document.getElementById('closeBtn');
const formDisplay = document.querySelector('.login-form');
const header = document.querySelector('.header');
const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('.nav');


// Login Form Open
loggingBtn.addEventListener('click', () => {
    formDisplay.classList.add('userClick');
});


// Login Form Close
closeBtn.addEventListener('click', () => {
    formDisplay.classList.remove('userClick');
});


// Menu Btn Toggling 
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    nav.classList.toggle('userClick');
});



window.addEventListener('scroll', () => {
    // formDisplay.classList.remove('userClick');
    menuBtn.classList.remove('fa-times');
    nav.classList.remove('userClick');

    /* By scrolling HEADER background color change */
    if (window.scrollY > 0) {
        header.classList.add('userScroll');
    } else {
        header.classList.remove('userScroll');
    }
});
