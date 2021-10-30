//hamburger menu

let menuIsOpen = false;

document.querySelector('.hamburger').addEventListener('click', openMenu);

function openMenu() {
    if (!menuIsOpen) {
        document.querySelector('.hamburger').classList.add('open');
        document.querySelector('#nav').classList.remove('hidden');
        document.querySelector('#nav').classList.add('slide-in');

        menuIsOpen = true;
    } else {
        document.querySelector('.hamburger').classList.remove('open');
        document.querySelector('#nav').classList.add('hidden');

        menuIsOpen = false;
    }

}

//menu hover 

document.querySelector('#click-area-web').addEventListener('mouseover', slideDownWeb);

document.querySelector('#click-area-content').addEventListener('mouseover', slideDownContent);

function slideDownWeb() {
    document.querySelector('#web-1').classList.remove('modules-hidden');
    document.querySelector('#web-2').classList.remove('modules-hidden');
    document.querySelector('#web-3').classList.remove('modules-hidden');

    document.querySelector('#web-1').classList.add('fade-in');
    document.querySelector('#web-2').classList.add('fade-in');
    document.querySelector('#web-3').classList.add('fade-in');

    document.querySelector('#click-area-web').addEventListener('mouseout', slideUpWeb);
}

function slideUpWeb() {
    document.querySelector('#web-1').classList.add('modules-hidden');
    document.querySelector('#web-2').classList.add('modules-hidden');
    document.querySelector('#web-3').classList.add('modules-hidden');

    document.querySelector('#web-1').classList.add('fade-in');
    document.querySelector('#web-2').classList.add('fade-in');
    document.querySelector('#web-3').classList.add('fade-in');
}

function slideDownContent() {
    document.querySelector('#content-1').classList.remove('modules-hidden');
    document.querySelector('#content-2').classList.remove('modules-hidden');

    document.querySelector('#content-1').classList.add('fade-in');
    document.querySelector('#content-2').classList.add('fade-in');

    document.querySelector('#click-area-content').addEventListener('mouseout', slideUpContent);
}

function slideUpContent() {
    document.querySelector('#content-1').classList.add('modules-hidden');
    document.querySelector('#content-2').classList.add('modules-hidden');

    document.querySelector('#content-1').classList.add('fade-in');
    document.querySelector('#content-2').classList.add('fade-in');
}

// slides 

const showingSlideIndex = [0, 0];
const slideIds = ["mySlides1", "mySlides2"];
showSlides(0, 0);
showSlides(0, 1);

function plusSlides(changeSlidesBy, slideshowIndex) {
  showSlides(showingSlideIndex[slideshowIndex] += changeSlidesBy, slideshowIndex);
}

function showSlides(newSlideIndex, slideshowIndex) {
  const slides = document.getElementsByClassName(slideIds[slideshowIndex]);
  
  if (newSlideIndex >= slides.length) {
      showingSlideIndex[slideshowIndex] = 0;
  }    
  else if (newSlideIndex < 0) {
      showingSlideIndex[slideshowIndex] = slides.length - 1;
  }
    
  Object.values(slides).forEach(slide => slide.style.display = 'none');
  slides[showingSlideIndex[slideshowIndex]].style.display = "block";
 }