const slider = document.getElementsByClassName(".slider-banner");
const nextBtn = document.getElementsByClassName(".right");
const prevBtn = document.getElementsByClassName(".left");
const slides = document.getElementsByClassName(".slide");
const slideIcons = document.getElementsByClassName(".slide-icon")
const numberOfSlides = slides.length;
let slideNumber = 0;

// remove
let remove = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slide.classList.remove("next-slide");
  });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
  });
}

// activating slide
let active = () => {
  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
}

// set next slide
let nextSlide = slideNumber++;
slides[nextSlide].classList.add("next-slide");

// change next slide
let next = () => {
  remove();
  
  slideNumber++;
  
  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }
  
  active();
  reset();
}

//image slider next button
nextBtn.addEventListener("click", () => {
  next();
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  remove();

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  active();
  reset();
});

// reset slider interval
let reset = () => {
  clearInterval(playSlider);
  repeater();
}

//image slider autoplay
let playSlider;

let repeater = () => {
  playSlider = setInterval(function(){
    next();
  }, 5000);
}

repeater();