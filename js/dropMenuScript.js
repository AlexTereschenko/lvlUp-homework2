let readMore=document.querySelector('.read-more');
let toggledBox=document.querySelector('.toggled-box');

readMore.onclick = function() {
	toggledBox.classList.toggle('toggled')
}


let menuToggle=document.querySelector('.menuToggle');
let folder=document.querySelector('.folderContainer');

menuToggle.onclick = function() {
	folder.classList.toggle('active')
}

let folderBtns = document.querySelectorAll('.folderBtn')

folderBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
		folder.classList.remove('active')
    })
  });



window.addEventListener('resize', function(){
  let wrapper = document.getElementsByClassName('wrapper');
  let wrapperWidth = wrapper[0].offsetWidth;
  let navigationHeader = document.querySelector('.navigation_header');
  let folderContainer = document.querySelector('.folderContainer');

  if (wrapperWidth < 768) {
    navigationHeader.classList.add('menuFolder');
    folderContainer.classList.add('folder');
  } else {
    navigationHeader.classList.remove('menuFolder');
    folderContainer.classList.remove('folder');
  }
}) 

window.onload = function(e){ 
  let wrapper = document.getElementsByClassName('wrapper');
  let wrapperWidth = wrapper[0].offsetWidth;
  let navigationHeader = document.querySelector('.navigation_header');
  let folderContainer = document.querySelector('.folderContainer');

  if (wrapperWidth < 768) {
    navigationHeader.classList.add('menuFolder');
    folderContainer.classList.add('folder');
  } else {
    navigationHeader.classList.remove('menuFolder');
    folderContainer.classList.remove('folder');
  }
}