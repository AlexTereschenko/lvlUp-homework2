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



// const cards1 = document.getElementById('col-1');
// const cards2 = document.getElementById('col-2');
// const cardAdder = document.getElementById('card_btn');

// cardAdder.addEventListener('click', function (e) {
//         cardAdd()
// });

// function cardAdd() {
//     let col = cards1.childNodes.length <= cards2.childNodes.length ? cards1 : cards2;
//     let template = col.innerHTML;

//     var cardName = String(prompt('Set a name to the new card', 'Name'));
//     var description = String(prompt('Set a description', 'Description'));

//     let newTemplate = ` <li class="card_container">
//                         <div class="card">
//                             <p class="name">
//                                 ${cardName}
//                             </p>
//                             <img src="img/icons/+.svg" alt="" class="plus">
//                             <img src="img/icons/-.svg" alt="" class="minus hide">
//                         </div>
//                         <p class="description hide">
//                             ${description}
//                         </p>
//                     </li>`;

//     col.innerHTML = template + newTemplate;
// }

// cards1.addEventListener('click', e => {
//     e.target.closest(".card_container").childNodes[3].classList.toggle("hide");
//     e.target.closest(".card_container").childNodes[1].childNodes[3].classList.toggle("hide");
//     e.target.closest(".card_container").childNodes[1].childNodes[5].classList.toggle("hide");
// });

// cards2.addEventListener('click', e => {
//     e.target.closest(".card_container").childNodes[3].classList.toggle("hide");
//     e.target.closest(".card_container").childNodes[1].childNodes[3].classList.toggle("hide");
//     e.target.closest(".card_container").childNodes[1].childNodes[5].classList.toggle("hide");
// });





// const arrowB = document.getElementById('backward');
// const arrowF = document.getElementById('forward');
// const comments = document.getElementsByClassName("comment");


// // console.log(previousTooCurrent)
// // console.log(current)
// // console.log(nextTooCurrent)


// function numOfCurrent() {
//     for (var i=0; i<comments.length; i++) {
//         if(comments[i].classList.contains('current')) {
//             return i
//         }
//     }
// }


// arrowF.addEventListener('click', function (e) {
//     const current = document.querySelector(".current");
//     const nextTooCurrent = current.nextElementSibling;

//     if (nextTooCurrent!=null) {
//         current.classList.toggle('current');
//         nextTooCurrent.classList.toggle('current');
//     } else {
//         current.classList.toggle('current');
//         comments[0].classList.toggle('current');
//     }

//     const prev = document.querySelector(".prev");
//     const nextTooPrev = prev.nextElementSibling;
    
//         if (nextTooPrev==null) {
//             prev.classList.toggle('prev');
//             comments[0].classList.toggle('prev');
//         } else {
//             prev.classList.toggle('prev');
//             nextTooPrev.classList.toggle('prev');
//         }
// });

// arrowB.addEventListener('click', function (e) {
//     const current = document.querySelector(".current");
//     const previousTooCurrent = current.previousElementSibling;

//     if (previousTooCurrent!=null) {
//         current.classList.toggle('current');
//         previousTooCurrent.classList.toggle('current'); 
//     } else {
//         current.classList.toggle('current');
//         comments[2].classList.toggle('current');
//     }

//     const prev = document.querySelector(".prev");
//     const previousTooPrev = prev.previousElementSibling;
    
//         if (previousTooPrev==null) {
//             prev.classList.toggle('prev');
//             comments[2].classList.toggle('prev');
//         } else {
//             prev.classList.toggle('prev');
//             previousTooPrev.classList.toggle('prev');
//         }
// });