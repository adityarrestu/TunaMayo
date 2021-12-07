const slider = document.getElementsByClassName(".slider-banner");
const nextBtn = document.getElementsByClassName(".right");
const prevBtn = document.getElementsByClassName(".left");
const slides = document.getElementsByClassName(".slide");
const slideIcons = document.getElementsByClassName(".slide-icon")
const numberOfSlides = slides.length;
let slideNumber = 0;

// image slider next button
nextBtn.addEventListener("click", () => {
    slides.forEach((slides) => {
        slides.classList.remove("active");
    });

    slides.forEach((slideIcons) => {
        slideIcons.classList.remove("active");
    });

    slideNumber++;
    
    // reset
    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }
    
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
})

// image slider previous button
nextBtn.addEventListener("click", () => {
    slides.forEach((slides) => {
        slides.classList.remove("active");
    });

    slides.forEach((slideIcons) => {
        slideIcons.classList.remove("active");
    });

    slideNumber--;
    
    // reset
    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }
    
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
})

// image slider autoplay
let pkaySlider;

let repeater = () => {
    playSlider = setInterval(function() {
        slides.forEach((slides) => {
            slides.classList.remove("active");
        });
        slideIcons.forEach((slideIcons) => {
            slideIcons.classList.remove("active");
        })

        slideNumber++;

        // reset
        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
    }

        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 4000);
}

repeater();