let mountains = document.getElementById('mountains');
let hill = document.getElementById('hill');



window.addEventListener('scroll', function(){
    let value = window.scrollY;
    let wrapper = document.getElementsByClassName('wrapper');
    let wrapperWidth = wrapper[0].offsetWidth;

    mountains.style.top = 400*wrapperWidth/1920 - value*0.3 +'px';
    hill.style.top = 704*wrapperWidth/1920 - value*0.6 +'px';
})