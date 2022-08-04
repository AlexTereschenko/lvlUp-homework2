const navs = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.nav-btn');

const start = document.getElementById('top');
const section01 = document.getElementById('section01');
const section02 = document.getElementById('section02');
const section03 = document.getElementById('section03');




window.onscroll = function() {myFunction()};

function myFunction() {
    if (navs[0].innerText == "Start") {
        if(start.classList.contains('_active')) {
            navs[0].classList.add('active-nav')
        } else {
            navs[0].classList.remove('active-nav')
        }
    }

    if (navs[1].innerText == "01") {
        if(section01.classList.contains('_active')) {
            navs[1].classList.add('active-nav')
        } else {
            navs[1].classList.remove('active-nav')
        }
    }

    if (navs[2].innerText == "02") {
        if(section02.classList.contains('_active')) {
            navs[2].classList.add('active-nav')
        } else {
            navs[2].classList.remove('active-nav')
        }
    }

    if (navs[3].innerText == "03") {
        if(section03.classList.contains('_active')) {
            navs[3].classList.add('active-nav')
        } else {
            navs[3].classList.remove('active-nav')
        }
    }
}