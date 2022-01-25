import { routeAlbum } from '../main.js';
import './slider-item.js';

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
                : host {
                    position: relative;
                    top: 50;
                    align-self: center;
                }   

                .carousel {
                    width: 100%;
                    height: 650px;
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
                    font-size: 70px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: rgba(255, 255, 255, 0.7);
                    cursor: pointer;
                    border-radius: .25rem;
                }
                
                .carousel > button:hover,
                .carousel-button:active {
                    color: white;
                }
                
                .prev {
                    left: 40px;
                }
                
                .next {
                    right: 40px;
                }

                /* shadow */
                .shadow {
                    z-index: 2;
                    position: absolute;
                    height: 650px;
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
                    top: 530px;
                    left: 100px;
                }

                .slide-icon {
                    width: 8px;
                    height: 8px;
                    margin-right: 5px;
                    background: rgba(255, 255, 255, .3);
                    transition: 500ms;
                    transition-delay: 500ms;
                }

                .slide-icon.active {
                    width: 12px;
                    background: rgba(255, 255, 255, 1);
                    transition: 500ms;
                    transition-delay: 300ms;
                }

                .featured-button {
                    z-index: 5;
                    position: absolute;
                    display: flex;
                    top: 420px;
                    left: 85px;
                }

                .round {
                    width: 55px;
                    height: 55px;
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

                .play img {
                    width: 50%;
                    object-fit: cover;
                    padding: 10% 0 0 12%;
                }

                .plus img {
                    width: 70%;
                    object-fit: cover;
                }

                @media (min-width: 768px) and (max-width: 1024px) {
                    .nav-icon {
                        top: 550px;
                        left: initial;
                        right: 30px;
                    }

                    .prev, .next {
                        display: none;
                    }

                    .featured-button {
                        top: 480px;
                        left: initial;
                        right: 30px;
                    }

                    .round {
                        width: 40px;
                        height: 40px;
                        margin: 0 0 0 5px;
                    }
                }

                @media (min-width: 320px) and (max-width: 767px) {
                    .carousel {
                        height: 550px;
                    }

                    .nav-icon {
                        top: 510px;
                        left: initial;
                        right: 10px;
                    }

                    .slide-icon {
                        width: 5px;
                        height: 5px;
                    }

                    .slide-icon.active {
                        width: 8px;
                    }

                    .prev, .next {
                        display: none;
                    }

                    .featured-button {
                        top: 420px;
                        left: initial;
                        right: 10px;
                        flex-direction: column;
                    }

                    .round {
                        width: 30px;
                        height: 30px;
                        margin: 5px 0;
                    }
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
                
                <div class="featured-button">
                    <a class="play-url">
                        <button class="round play">
                            <img src="./src/img/icon/play.png" alt="play">
                        </button>
                    </a>
                    <a href="#">
                        <button class="round plus">
                            <img src="./src/img/icon/collection_1.png" alt="play">
                        </button>            
                    </a>
                </div>
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

        let linkAlbum;
        // slider change function
        let changeSlide = offset => {
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

            // link album
            linkAlbum = this._albums[arraySlider.indexOf(activeData)];
        }

        // loop slider
        let playSlider;
        let repeater = () => {
            playSlider = setInterval(function () {
                
                changeSlide(1);
            }, 5000)
        }
        repeater();
        
        // next and prev button function
        const buttons = this.shadowDOM.querySelectorAll("button");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                clearInterval(playSlider);
                const offset = button.className === "next" ? 1 : -1;

                changeSlide(offset);
                
                repeater();
            })
        })

        // play url
        const playUrl = this.shadowDOM.querySelector(".play-url");
        playUrl.addEventListener("click", () => {
            routeAlbum(linkAlbum);
            changeSlide(10);
        })

        
    };

}

customElements.define("slider-album", SliderAlbum);