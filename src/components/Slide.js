let slidePosition = 0;
let slidePosition1=1;
let slides = document.getElementsByClassName('carousel__item');
let totalSlides = slides.length;
console.log("running");
// console.log(slides);
console.log(slides.length);
document.
  getElementById('carousel__button--next')
  .addEventListener("click", function() {
    console.log("clicked");
    moveToNextSlide();
  });
document.
  getElementById('carousel__button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
  slides[slidePosition1].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  }
  else if(slidePosition1===totalSlides-1){
    slidePosition1=0;
  }

  else {
    slidePosition++;
    slidePosition1++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  }
  else if(slidePosition1 === 0){
    slidePosition1 = totalSlides - 1;
  }
  else {
    slidePosition--;
    slidePosition1--;
  }

  updateSlidePosition();
}