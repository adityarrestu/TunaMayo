import './slider-item.js'

class SliderAlbum extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM =  this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    set albums(albums) {
        this._albums = albums;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                *, *::before, *::after {
                    box-sizing: border-box;
                }
                
                .carousel {
                    top: 60px;
                    width: 100vw;
                    height: 91vh;
                    position: relative;
                    overflow: hidden;
                }
                
                .carousel .slider {
                    margin: 0;
                    padding: 0;
                }
                
                .carousel > button {
                    position: absolute;
                    z-index: 4;
                    background: none;
                    border: none;
                    font-size: 5rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    border-radius: .25rem;
                    padding: 0 .5rem;
                }
                
                .carousel > button:hover,
                .carousel-button:active {
                    color: white;
                }
                
                .prev {
                    left: 1rem;
                }
                
                .next {
                    right: 1rem;
                }

                /* shadow */
                .shadow {
                    z-index: 2;
                    position: absolute;
                    height: 91vh;
                    top: 60px;
                    right: 0px;
                    left: 0px;
                }

                .shadow-left {
                    z-index: 2;
                    position: absolute;
                    width: 60%;
                    height: 100%;
                    background: linear-gradient(270deg, rgba(17, 19, 25, 0) 54%, #111319 112%);
                }
                
                .shadow-bottom {
                    z-index: 3;
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(180deg, rgba(17, 19, 25, 0) 60%, #111319 120%);
                }

                .nav-icon {
                    z-index: 5;
                    position: absolute;
                    display: flex;
                    top: 90%;
                    left: 8%;
                }

                .slide-icon {
                    width: 10px;
                    height: 10px;
                    margin-right: 5px;
                    background: rgba(255, 255, 255, .3);
                    transition: 500ms;
                    transition-delay: 500ms;
                }

                .slide-icon.active {
                    width: 14px;
                    background: rgba(255, 255, 255, 1);
                    transition: 500ms;
                    transition-delay: 300ms;
                }

                .featured-button {
                    z-index: 5;
                    position: absolute;
                    display: flex;
                    top: 73%;
                    left: 7%;
                }

                .round {
                    width: 60px;
                    height: 60px;
                    margin: 10px;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                }

                .play {
                    background: #3E96DB;
                }

                .plus {
                    background: #ffffff;
                }
            </style>

            <div class="shadow">
                <div class="shadow-left"></div>
                <div class="shadow-bottom"></div>
            </div>
                
            <div class="carousel">
                <button class="prev">&#8249;</button>
                <button class="next">&#8250;</button>
                <div class="slider"></div>            
                <div class="nav-icon"></div>
            </div>
            
            <div class="featured-button">
                <a class="play-url">
                    <button class="round play"></button>
                </a>
                <a href="">
                    <button class="round plus"></button>            
                </a>
            </div>
        `;

        // create slide
        const slider = this.shadowDOM.querySelector(".slider");
        this._albums.forEach(album => {
            const sliderItem = document.createElement("slider-item");
            sliderItem.album = album;
            slider.appendChild(sliderItem);
            sliderItem.classList.add("slide");
        })

        // album url handler
        const albumsHandle = this._albums;
        const linkAlbum = this.shadowDOM.querySelector(".play-url");
        linkAlbum.setAttribute("href", albumsHandle[0].urlAlbum);

        // give active class to slide
        const sliderItem = slider.querySelectorAll("slider-item");
        const arraySlider = [...sliderItem];
        sliderItem[0].classList.add("data-active");

        // create slide icon
        const navIcon = this.shadowDOM.querySelector(".nav-icon");
        for (let i = 0; i < arraySlider.length; i++) {
            const slideIcon = document.createElement("div");
            slideIcon.classList.add("slide-icon");
            navIcon.appendChild(slideIcon);
        }
        const sliderIcon = navIcon.querySelectorAll(".slide-icon");
        const arrayIcon = [...sliderIcon]; 
        arrayIcon[0].classList.add("active");       

        // loop slider
        let playSlider;
        let repeater = () => {
            playSlider = setInterval(function () {
                const activeData = slider.querySelector("slider-item.data-active");
                let newIndex = arraySlider.indexOf(activeData) + 1;
                if (newIndex >= arraySlider.length) newIndex = 0;
                
                // add class active data and remove
                arraySlider[newIndex].classList.add("data-active");
                activeData.classList.remove("data-active");

                // nav icon active change
                const actveIcon = navIcon.querySelector(".slide-icon.active");     
                arrayIcon[newIndex].classList.add("active");
                actveIcon.classList.remove("active");

                linkAlbum.setAttribute("href", albumsHandle[newIndex].urlAlbum);
            }, 5000)
        }
        repeater();
        
        // next and prev button function
        const buttons = this.shadowDOM.querySelectorAll("button");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                clearInterval(playSlider);
                const offset = button.className === "next" ? 1 : -1;

                const activeData = slider.querySelector("slider-item.data-active");
                let newIndex = arraySlider.indexOf(activeData) + offset;
                if (newIndex >= arraySlider.length) newIndex = 0;
                if (newIndex < 0) newIndex = arraySlider.length - 1;

                // add class active data and remove
                arraySlider[newIndex].classList.add("data-active");
                activeData.classList.remove("data-active");
                
                // nav icon active change
                const actveIcon = navIcon.querySelector(".slide-icon.active");     
                arrayIcon[newIndex].classList.add("active");
                actveIcon.classList.remove("active");

                repeater();
            })
        })
                
    };

}

customElements.define("slider-album", SliderAlbum);